#!/usr/bin/env python3
"""Convert the public CHNragdoll 2027 RedBook APKG into static, searchable JSON chunks.

The APKG is treated as a read-only source. No Anki collection is imported or modified.
"""
from __future__ import annotations

import argparse
import hashlib
import html
import io
import json
import re
import sqlite3
import zipfile
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path

EXPECTED_SHA256 = "fb1756f2c37dc332b1a5bf7f015d969297be2976db6d3aca8869091e8f91ee58"
SOURCE_NAME = "CHNragdoll/anki-pipeline · 2027 红宝书完整真题例句版"
CHUNK_SIZE = 300


class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if tag in ("script", "style", "svg", "noscript"):
            self.skip += 1
        if self.skip:
            return
        if tag in ("br", "p", "div", "li", "tr", "td", "th", "section", "article", "h1", "h2", "h3"):
            self.parts.append("\n")
        if tag == "img":
            alt = dict(attrs).get("alt")
            if alt:
                self.parts.append(alt)

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag in ("script", "style", "svg", "noscript") and self.skip:
            self.skip -= 1
        if not self.skip and tag in ("p", "div", "li", "tr", "section", "article"):
            self.parts.append("\n")

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def plain(value: str) -> str:
    parser = TextExtractor()
    try:
        parser.feed(value or "")
        text = "".join(parser.parts)
    except Exception:
        text = re.sub(r"<[^>]*>", " ", value or "")
    text = html.unescape(text)
    text = re.sub(r"\[sound:[^\]]+\]", "", text, flags=re.I)
    text = re.sub(r"\s+", " ", text).strip()
    return text



class ExampleIndexParser(HTMLParser):
    """Extract only example counts and source labels; never republish sentence text."""
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.current = None
        self.root_depth = None
        self.count = 0
        self.sources = []

    def handle_starttag(self, tag, attrs):
        classes = set(dict(attrs).get("class", "").split())
        if tag.lower() == "li" and "example-card" in classes and self.current is None:
            self.current = []
            self.root_depth = len(self.stack)
            self.count += 1
        self.stack.append({"tag": tag.lower(), "source": "example-source" in classes})

    def handle_data(self, data):
        if self.current is not None and any(item["source"] for item in self.stack):
            self.current.append(data)

    def handle_endtag(self, tag):
        if not self.stack:
            return
        match = None
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index]["tag"] == tag.lower():
                match = index
                break
        if match is None:
            return
        del self.stack[match:]
        if tag.lower() == "li" and self.current is not None and len(self.stack) == self.root_depth:
            source = re.sub(r"\\s+", " ", "".join(self.current)).strip()
            if source and source not in self.sources:
                self.sources.append(source)
            self.current = None
            self.root_depth = None

def field_key(name: str) -> str:
    return re.sub(r"[^a-z0-9\u4e00-\u9fff]+", "", (name or "").lower())


def first_match(fields, patterns):
    for field in fields:
        name = field["name"].lower()
        if any(re.search(pattern, name, re.I) for pattern in patterns) and field["text"]:
            return field["text"]
    return ""


def looks_like_headword(text: str) -> bool:
    text = re.sub(r"\s+", " ", text.strip())
    if not text or len(text) > 90:
        return False
    if re.search(r"[\u4e00-\u9fff]", text):
        return False
    if not re.search(r"[A-Za-z]", text):
        return False
    if len(text.split()) > 5:
        return False
    return bool(re.fullmatch(r"[A-Za-z][A-Za-z0-9'’./() -]*", text))


def load_collection(apkg: Path):
    db_path = apkg.parent / (apkg.stem + ".sqlite")
    with zipfile.ZipFile(apkg) as zf:
        entries = zf.infolist()
        candidates = [e for e in entries if e.filename in ("collection.anki21", "collection.anki2", "collection.anki21b")]
        print("APKG members:", json.dumps([{"name":e.filename,"size":e.file_size} for e in entries[:30]], ensure_ascii=False))
        if not candidates:
            raise RuntimeError("APKG 中未找到 collection.anki21 / collection.anki2 / collection.anki21b")
        inspected = []
        for entry in candidates:
            head = zf.read(entry.filename)[:16]
            inspected.append({"name":entry.filename,"magic":head.hex(),"size":entry.file_size})
        print("Collection candidates:", json.dumps(inspected, ensure_ascii=False))
        # Modern Anki may use a zstd-compressed .anki21b database. Prefer the
        # candidate that actually contains the most notes, not a compatibility
        # shell database that can be present alongside it.
        databases = []
        for entry in candidates:
            temp = apkg.parent / (apkg.stem + "-" + re.sub(r"[^a-zA-Z0-9]+","_",entry.filename) + ".sqlite")
            payload = zf.read(entry.filename)
            db_bytes = None
            if payload.startswith(b"SQLite format 3"):
                db_bytes = payload
            elif payload.startswith(bytes.fromhex("28b52ffd")):
                try:
                    import zstandard
                except ImportError as exc:
                    raise RuntimeError("发现 zstd 压缩的 collection.anki21b，请安装 zstandard") from exc
                reader = zstandard.ZstdDecompressor().stream_reader(io.BytesIO(payload))
                with temp.open("wb") as dst:
                    while True:
                        block = reader.read(8 * 1024 * 1024)
                        if not block:
                            break
                        dst.write(block)
                reader.close()
                db_bytes = None
            else:
                print("Skipping unsupported collection member:", entry.filename)
                continue
            if db_bytes is not None:
                temp.write_bytes(db_bytes)
            probe = sqlite3.connect(f"file:{temp}?mode=ro", uri=True)
            tables = {row[0] for row in probe.execute("SELECT name FROM sqlite_master WHERE type='table'")}
            count = probe.execute("SELECT COUNT(*) FROM notes").fetchone()[0] if "notes" in tables else 0
            print("Collection database:", entry.filename, "tables=", sorted(tables), "notes=", count)
            probe.close()
            databases.append((count, temp))
        if not databases:
            raise RuntimeError("APKG 中没有可识别的 SQLite collection 数据库")
        _, selected = max(databases, key=lambda item:item[0])
        if db_path.exists():
            db_path.unlink()
        selected.replace(db_path)
        for _, other in databases:
            if other.exists() and other != db_path:
                other.unlink()
    conn = sqlite3.connect(f"file:{db_path}?mode=ro", uri=True)
    conn.create_collation("unicase", lambda a, b: (a.casefold() > b.casefold()) - (a.casefold() < b.casefold()))
    conn.row_factory = sqlite3.Row
    integrity = conn.execute("PRAGMA quick_check").fetchone()[0]
    if integrity != "ok":
        conn.close()
        raise RuntimeError(f"SQLite integrity_check failed: {integrity}")
    col = conn.execute("SELECT * FROM col LIMIT 1").fetchone()
    col_columns = set(col.keys())
    models = {}
    decks = {}
    # Legacy schema (v11) stores models/decks as JSON blobs in col.
    if "models" in col_columns and col["models"]:
        models = json.loads(col["models"])
    if "decks" in col_columns and col["decks"]:
        decks = json.loads(col["decks"])
    # Current schema (v18) normalizes these into notetypes/fields/decks tables.
    tables = {row[0] for row in conn.execute("SELECT name FROM sqlite_master WHERE type='table'")}
    if not models and {"notetypes", "fields"} <= tables:
        for nt in conn.execute("SELECT id, name FROM notetypes ORDER BY id"):
            flds = conn.execute("SELECT name, ord FROM fields WHERE ntid=? ORDER BY ord", (nt["id"],)).fetchall()
            models[str(nt["id"])] = {
                "name": nt["name"],
                "flds": [{"name": field["name"], "ord": field["ord"]} for field in flds],
            }
    if not decks and "decks" in tables:
        for deck in conn.execute("SELECT id, name FROM decks ORDER BY id"):
            decks[str(deck["id"])] = {"name": (deck["name"] or "").replace(chr(31), "::")}
    print("Selected collection model names:", [m.get("name","") for m in models.values()])
    print("Selected collection model field counts:", {m.get("name",""):len(m.get("flds",[])) for m in models.values()})

    return conn, models, decks, db_path

def convert(apkg: Path, out_dir: Path):
    hasher = hashlib.sha256()
    with apkg.open("rb") as source_file:
        for block in iter(lambda: source_file.read(8 * 1024 * 1024), b""):
            hasher.update(block)
    digest = hasher.hexdigest()
    if digest != EXPECTED_SHA256:
        raise RuntimeError(f"APKG SHA-256 mismatch: {digest}")
    conn, models, decks, db_path = load_collection(apkg)
    deck_names = {str(k): v.get("name", "") for k, v in decks.items()}
    cards_by_note = defaultdict(list)
    for row in conn.execute("SELECT nid, did FROM cards ORDER BY nid, ord"):
        cards_by_note[str(row["nid"])].append(deck_names.get(str(row["did"]), ""))

    records = []
    skipped = 0
    for row in conn.execute("SELECT id, mid, tags, flds FROM notes ORDER BY id"):
        model = models.get(str(row["mid"]), {})
        definitions = sorted(model.get("flds", []), key=lambda x: x.get("ord", 0))
        values = (row["flds"] or "").split("\x1f")
        fields = []
        examples_html = ""
        for index, value in enumerate(values):
            definition = definitions[index] if index < len(definitions) else {}
            name = definition.get("name") or f"字段 {index + 1}"
            if name.lower() == "examples":
                examples_html = value
                continue
            if name.lower() == "audio":
                continue
            text = plain(value)
            if text:
                fields.append({"name": name, "text": text})
        if not fields:
            skipped += 1
            continue

        word = first_match(fields, [r"\\bword\\b", r"headword", r"单词", r"词头", r"目标词", r"词目"])
        if not looks_like_headword(word):
            word = next((f["text"] for f in fields if looks_like_headword(f["text"])), "")
        if not word:
            skipped += 1
            continue

        phonetic = first_match(fields, [r"phonetic", r"pronunciation", r"\\bipa\\b", r"音标", r"发音"])
        level = first_match(fields, [r"\\blevel\\b", r"等级", r"考频", r"频率"])
        word_forms = first_match(fields, [r"word.?forms", r"\\bforms\\b", r"词形", r"派生"])
        meta = first_match(fields, [r"\\bmeta\\b", r"来源", r"出处", r"年份", r"考试"])
        example_parser = ExampleIndexParser()
        if examples_html:
            example_parser.feed(examples_html)
        note_id = str(row["id"])
        small_fields = [f for f in fields if f["name"].lower() in ("level", "wordforms", "meta") and len(f["text"]) <= 12000]
        record = {
            "id": f"redbook-2027-{note_id}",
            "word": word,
            "phonetic": phonetic,
            "pos": "",
            "meaning": "",
            "collocations": "",
            "family": word_forms,
            "example": "",
            "translation": "",
            "level": level,
            "source": SOURCE_NAME + ((" · " + meta) if meta else ""),
            "deck": sorted(set(x for x in cards_by_note.get(note_id, []) if x)),
            "tags": (row["tags"] or "").strip().split(),
            "model": model.get("name", ""),
            "fields": small_fields,
            "exampleCount": example_parser.count,
            "exampleSources": example_parser.sources[:50],
            "hasLazyExamples": "as-manifest" in examples_html or "data-study-script-transport" in examples_html,
            "searchText": " ".join([word, phonetic, word_forms, level, meta, " ".join((row["tags"] or "").split())]).lower(),
        }
        records.append(record)

    conn.close()
    db_path.unlink(missing_ok=True)
    records.sort(key=lambda x: x["id"])
    out_dir.mkdir(parents=True, exist_ok=True)
    chunks = []
    batch = []
    batch_bytes = 2
    chunk_number = 0
    for record in records:
        encoded = json.dumps(record, ensure_ascii=False, separators=(",", ":"))
        encoded_bytes = len(encoded.encode("utf-8"))
        if batch and (len(batch) >= CHUNK_SIZE or batch_bytes + encoded_bytes + 1 > 4 * 1024 * 1024):
            chunk_number += 1
            name = f"words-{chunk_number:03d}.json"
            payload = json.dumps(batch, ensure_ascii=False, separators=(",", ":"))
            (out_dir / name).write_text(payload, encoding="utf-8")
            chunks.append({"file": name, "count": len(batch), "bytes": len(payload.encode("utf-8"))})
            batch = []
            batch_bytes = 2
        batch.append(record)
        batch_bytes += encoded_bytes + 1
    if batch:
        chunk_number += 1
        name = f"words-{chunk_number:03d}.json"
        payload = json.dumps(batch, ensure_ascii=False, separators=(",", ":"))
        (out_dir / name).write_text(payload, encoding="utf-8")
        chunks.append({"file": name, "count": len(batch), "bytes": len(payload.encode("utf-8"))})
    manifest = {
        "schemaVersion": 1,
        "source": SOURCE_NAME,
        "sourceRepository": "https://github.com/CHNragdoll/anki-pipeline",
        "release": "redbook-2027.10.06",
        "asset": apkg.name,
        "sha256": digest,
        "total": len(records),
        "sentenceTotal": sum(record["exampleCount"] for record in records),
        "publicContentScope": "Word headwords, IPA, level, word forms, and source/count index only. Copyrighted definitions, example sentences, translations, and audio are not redistributed.",
        "skippedNonWordNotes": skipped,
        "chunkSize": CHUNK_SIZE,
        "chunks": chunks,
        "generatedAt": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
        "notice": "公开网页仅发布单词索引、音标、等级、词形和真题出处/数量索引；不转载红宝书释义、真题例句全文、译文或音频。请通过正版 Anki 卡包查阅完整原卡片。",
    }
    (out_dir / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({"total": len(records), "skipped": skipped, "chunks": len(chunks), "sha256": digest}, ensure_ascii=False))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--apkg", required=True, type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    args = parser.parse_args()
    convert(args.apkg, args.output_dir)


if __name__ == "__main__":
    main()
