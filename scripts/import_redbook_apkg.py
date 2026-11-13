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
            payload = zf.read(entry.filename)
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
            temp = apkg.parent / (apkg.stem + "-" + re.sub(r"[^a-zA-Z0-9]+","_",entry.filename) + ".sqlite")
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
        for index, value in enumerate(values):
            definition = definitions[index] if index < len(definitions) else {}
            name = definition.get("name") or f"字段 {index + 1}"
            text = plain(value)
            if text:
                fields.append({"name": name, "text": text})
        if not fields:
            skipped += 1
            continue

        word = first_match(fields, [r"\bword\b", r"headword", r"单词", r"词头", r"目标词", r"词目"])
        if not looks_like_headword(word):
            word = next((f["text"] for f in fields if looks_like_headword(f["text"])), "")
        if not word:
            skipped += 1
            continue

        phonetic = first_match(fields, [r"phonetic", r"pronunciation", r"\bipa\b", r"音标", r"发音"])
        pos = first_match(fields, [r"part.?of.?speech", r"\bpos\b", r"词性"])
        meaning = first_match(fields, [r"meaning", r"definition", r"释义", r"中文释义", r"词义"])
        if not meaning:
            meaning = next((f["text"] for f in fields if f["text"] != word and re.search(r"[\u4e00-\u9fff]", f["text"])), "")
        collocations = first_match(fields, [r"collocation", r"phrase", r"搭配", r"短语"])
        family = first_match(fields, [r"etymology", r"root", r"word.?family", r"词根", r"词源", r"派生", r"词形"])
        example = first_match(fields, [r"example", r"sentence", r"真题", r"例句", r"语境", r"原文"])
        translation = first_match(fields, [r"translation", r"译文", r"翻译"])
        source = first_match(fields, [r"source", r"出处", r"年份", r"考试"])
        note_id = str(row["id"])
        record = {
            "id": f"redbook-2027-{note_id}",
            "word": word,
            "phonetic": phonetic,
            "pos": pos,
            "meaning": meaning,
            "collocations": collocations,
            "family": family,
            "example": example,
            "translation": translation,
            "source": SOURCE_NAME + ((" · " + source) if source else ""),
            "deck": sorted(set(x for x in cards_by_note.get(note_id, []) if x)),
            "tags": (row["tags"] or "").strip().split(),
            "model": model.get("name", ""),
            "fields": fields,
            "searchText": " ".join([word, phonetic, pos, meaning, collocations, family, example, translation] + [f["text"] for f in fields]).lower(),
        }
        records.append(record)

    conn.close()
    db_path.unlink(missing_ok=True)
    records.sort(key=lambda x: x["id"])
    out_dir.mkdir(parents=True, exist_ok=True)
    chunks = []
    for start in range(0, len(records), CHUNK_SIZE):
        batch = records[start:start + CHUNK_SIZE]
        name = f"words-{start // CHUNK_SIZE + 1:02d}.json"
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
        "skippedNonWordNotes": skipped,
        "chunkSize": CHUNK_SIZE,
        "chunks": chunks,
        "generatedAt": __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat(),
        "notice": "词条字段来自公开 Anki 发布包；原始 HTML 已转为纯文本，音频附件不随静态 JSON 发布。请以每条卡片的来源字段为准。",
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
