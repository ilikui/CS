#!/usr/bin/env python3
"""Validate LaTeX delimiters and environments in Markdown study notes."""

from __future__ import annotations
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCAN_ROOTS = ("Project/Artificial Intelligence", "docs")
FENCE_RE = re.compile(r"^\s{0,3}(\x60{3,}|~{3,})")
INLINE_CODE_RE = re.compile(r"(?<!\x60)\x60+[^ \x60]*?\x60+(?!\x60)")
LEGACY_RE = re.compile(r"(?<!\\)\\(?:\(|\)|\[|\])")
ENV_RE = re.compile(r"\\(begin|end)\{([^}]+)\}")
DOLLAR_RE = re.compile(r"(?<!\\)\$")

def check_file(path: Path) -> list[str]:
    errors = []
    in_fence = False
    fence_char = ""
    fence_len = 0
    in_math = False
    math_start = 0
    env_stack = []
    try:
        lines = path.read_text(encoding="utf-8").splitlines()
    except UnicodeDecodeError as exc:
        return [f"{path}: cannot decode UTF-8: {exc}"]

    for number, raw in enumerate(lines, 1):
        fence = FENCE_RE.match(raw)
        if fence:
            marker = fence.group(1)
            if not in_fence:
                in_fence, fence_char, fence_len = True, marker[0], len(marker)
            elif marker[0] == fence_char and len(marker) >= fence_len:
                in_fence = False
            continue
        if in_fence:
            continue

        line = INLINE_CODE_RE.sub("", raw)
        if line.strip() == "$$":
            if in_math:
                in_math = False
            else:
                in_math, math_start = True, number
            continue

        if not in_math:
            if LEGACY_RE.search(line):
                errors.append(f"{path}:{number}: use $...$ or $$...$$, not legacy math delimiters")
            if line.strip() == "$":
                errors.append(f"{path}:{number}: standalone single '$' is not a valid display delimiter")
            inline_line = line.replace("$$", "")
            if len(DOLLAR_RE.findall(inline_line)) % 2:
                errors.append(f"{path}:{number}: unmatched inline '$' delimiter")

        for match in ENV_RE.finditer(line):
            action, name = match.groups()
            if action == "begin":
                env_stack.append((name, number))
            elif not env_stack:
                errors.append(f"{path}:{number}: end{{{name}}} has no matching begin")
            else:
                expected, start = env_stack.pop()
                if expected != name:
                    errors.append(f"{path}:{number}: end{{{name}}} mismatches begin{{{expected}}} at line {start}")

    if in_fence:
        errors.append(f"{path}: unclosed Markdown code fence")
    if in_math:
        errors.append(f"{path}:{math_start}: unclosed $$ display math block")
    for name, start in env_stack:
        errors.append(f"{path}:{start}: unclosed begin{{{name}}}")
    return errors

def main() -> int:
    files = []
    for root_name in SCAN_ROOTS:
        root = ROOT / root_name
        if root.exists():
            files.extend(root.rglob("*.md"))
    files = sorted(set(files))
    if not files:
        print("No Markdown files found in configured scan roots.")
        return 1
    errors = []
    for path in files:
        errors.extend(check_file(path))
    print(f"Scanned {len(files)} Markdown files.")
    if errors:
        print(f"Found {len(errors)} formula/document-structure issue(s):")
        print("\\n".join(f"- {error}" for error in errors))
        return 1
    print("All formula delimiter and LaTeX environment checks passed.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
