# SpireAgent Workspace Agent Guide

## Mission

Govern the SpireAgent workspace without becoming a second implementation authority.

## Authority

- `rsgcsg/SpireAgent-Workspace`: routing, canonical Skill release/source version manifest, handoffs, project instructions, knowledge pointers, coordination and temporary relay policy.
- `rsgcsg/STS2-AI-PLATFORM`: Platform Foundation code/contracts/runtime/evidence.
- `rsgcsg/STS2-The-Perfect-Defect`: STPD research projection/data/model/training/evaluation.

Workspace snapshots never override exact code/runtime truth in Platform or STPD.

## Required read order

1. `WORKSPACE_ROUTER.md`
2. `workspace/CURRENT.md`
3. `workspace/SOURCE_OF_TRUTH.md`
4. `skills/SKILL_SUITE_MANIFEST.json`
5. `workspace/HANDOFF.md` when continuity matters
6. task-specific docs
7. refresh the owning Platform/STPD repo before current-state claims

## Skill governance

Canonical governed Skill source is the complete release archive at `skills/releases/<skill-name>/skill.zip`. Installed Skill copies are deployments and may lag source. Run `python scripts/validate_skill_suite.py` and the built-in Skill validator/packager before claiming a Skill release. Never silently self-update or publish a Skill; updates require explicit user authorization.

## Git workflow

Normal governance changes target `develop` from short-lived topic branches. Keep `main` for reviewed stable workspace governance. Do not direct-push integration branches for ordinary changes.

## Relay guardrail

Temporary code/text relay is allowed only under short-lived `relay/*` branches following `workspace/TEMPORARY_RELAY_POLICY.md`. Relay branches are never implementation authority and are never merged into Workspace `main`/`develop`.

Never store secrets, raw Human data, proprietary STS2 files, decompiled source, model weights, local runtime artifacts, or other unsafe Git history.
