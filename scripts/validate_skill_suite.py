#!/usr/bin/env python3
from __future__ import annotations
import hashlib
import json
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / 'skills' / 'SKILL_SUITE_MANIFEST.json'


def parse_version(text: str) -> str:
    match = re.search(r'^Version:\s*([^\s]+)\s*$', text, re.MULTILINE)
    if not match:
        raise ValueError('missing Version line')
    return match.group(1)


def parse_skill_name(text: str) -> str:
    match = re.search(r'^name:\s*[\"\']?([^\"\'\n]+)[\"\']?\s*$', text, re.MULTILINE)
    if not match:
        raise ValueError('missing name frontmatter')
    return match.group(1).strip()


def main() -> int:
    data = json.loads(MANIFEST.read_text(encoding='utf-8'))
    failures: list[str] = []
    for name, meta in sorted(data['skills'].items()):
        archive = ROOT / meta['source_archive_path']
        if not archive.is_file():
            failures.append(f"{name}: source archive missing: {meta['source_archive_path']}")
            continue
        actual_hash = hashlib.sha256(archive.read_bytes()).hexdigest()
        if actual_hash != meta['package_sha256']:
            failures.append(f"{name}: package sha256 {actual_hash} != manifest {meta['package_sha256']}")
            continue
        try:
            with zipfile.ZipFile(archive) as zf:
                top = name + '/'
                required = [top + 'SKILL.md', top + 'agents/openai.yaml', top + 'references/version.md']
                names = set(zf.namelist())
                for item in required:
                    if item not in names:
                        failures.append(f'{name}: archive missing {item}')
                if top + 'SKILL.md' not in names or top + 'references/version.md' not in names:
                    continue
                skill_text = zf.read(top + 'SKILL.md').decode('utf-8')
                version_text = zf.read(top + 'references/version.md').decode('utf-8')
                actual_name = parse_skill_name(skill_text)
                actual_version = parse_version(version_text)
                if actual_name != name:
                    failures.append(f'{name}: SKILL.md name={actual_name}')
                if actual_version != meta['version']:
                    failures.append(f"{name}: version {actual_version} != manifest {meta['version']}")
        except (zipfile.BadZipFile, UnicodeDecodeError, ValueError) as exc:
            failures.append(f'{name}: invalid archive: {exc}')
    if failures:
        print('FAIL')
        for failure in failures:
            print(f'- {failure}')
        return 1
    print(f"PASS: {len(data['skills'])} canonical Skill release archives match manifest")
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
