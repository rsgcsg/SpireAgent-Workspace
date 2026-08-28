#!/usr/bin/env python3
from __future__ import annotations
import hashlib, json, re, sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
MANIFEST=ROOT/'skills'/'SKILL_SUITE_MANIFEST.json'
HEX64=re.compile(r'^[0-9a-f]{64}$')
def tree_hash(files:dict[str,str])->str:
    h=hashlib.sha256()
    for rel,content in sorted(files.items()):
        h.update(rel.encode()); h.update(b'\0'); h.update(content.encode()); h.update(b'\0')
    return h.hexdigest()
def main()->int:
    data=json.loads(MANIFEST.read_text(encoding='utf-8')); errors=[]
    for name,entry in sorted(data.get('skills',{}).items()):
        path=ROOT/entry.get('source_path','')
        if not path.is_file(): errors.append(f'{name}: missing source snapshot {path.relative_to(ROOT)}'); continue
        try: snap=json.loads(path.read_text(encoding='utf-8'))
        except Exception as exc: errors.append(f'{name}: invalid snapshot JSON: {exc}'); continue
        if snap.get('schema')!='spireagent-workspace/skill-source-snapshot-1': errors.append(f'{name}: wrong snapshot schema')
        if snap.get('skill')!=name: errors.append(f'{name}: snapshot skill mismatch')
        files=snap.get('files') or {}
        for required in ('SKILL.md','agents/openai.yaml','references/version.md'):
            if required not in files: errors.append(f'{name}: missing {required} in snapshot')
        first=(files.get('references/version.md') or '').splitlines()
        version=first[0].replace('Version: ','').strip() if first else ''
        if version!=entry.get('version') or snap.get('version')!=entry.get('version'): errors.append(f'{name}: version mismatch snapshot={snap.get("version")} file={version} manifest={entry.get("version")}')
        digest=tree_hash(files)
        if digest!=entry.get('source_tree_sha256'): errors.append(f'{name}: source_tree_sha256 mismatch {digest}')
        if not HEX64.fullmatch(entry.get('package_sha256','')): errors.append(f'{name}: invalid package_sha256')
    if errors:
        print('Skill manifest validation FAILED',file=sys.stderr)
        for e in errors: print(f'- {e}',file=sys.stderr)
        return 1
    print(f'Skill manifest validation PASS: {len(data.get("skills",{}))} skills')
    return 0
if __name__=='__main__': raise SystemExit(main())
