# Workspace Knowledge Map

This map links the ChatGPT Workspace knowledge plane, durable `SpireAgent-Workspace` governance, and the owning Platform/STPD repositories. It is an index, not a duplicate source of implementation truth.

| Item | Class | Lifetime | Authority / owner | Current source |
|---|---|---|---|---|
| Workspace Router | CANONICAL | LONG_TERM | SpireAgent-Workspace | `WORKSPACE_ROUTER.md` |
| Source of Truth | CANONICAL | LONG_TERM | SpireAgent-Workspace | `workspace/SOURCE_OF_TRUTH.md` |
| Knowledge Plane | CANONICAL | LONG_TERM | SpireAgent-Workspace | `workspace/KNOWLEDGE_PLANE.md` |
| Current Snapshot | CURRENT | WORKING | SpireAgent-Workspace | `workspace/CURRENT.md`; owning refs must be refreshed |
| Handoff | HANDOFF | WORKING | SpireAgent-Workspace / user | `workspace/HANDOFF.md` |
| Skill Manifest/Releases | CANONICAL | LONG_TERM | SpireAgent-Workspace | `skills/SKILL_SUITE_MANIFEST.json`, `skills/releases/` |
| Platform status/architecture/evidence | CANONICAL/EVIDENCE | LONG_TERM | STS2-AI-PLATFORM | exact active Platform ref |
| STPD status/model/training/evaluation | CANONICAL/EVIDENCE | LONG_TERM | STS2-The-Perfect-Defect | exact active STPD ref |
| Session scratch | RAW/TEMP | TEMP | current execution | `/mnt/data` or equivalent; never assume persistence |
| Workspace Library/Project artifacts | REFERENCE/HANDOFF/CURRENT | WORKING/LONG_TERM | Workspace users | use only when directly accessible; keep GitHub/source pointer here |

## Current access note — 2026-08-28

- Session scratch read/write: available in the active execution environment.
- GitHub governance/repositories: available through the connected GitHub connector.
- Generic ChatGPT Workspace Library/Project persistent file CRUD/benchmark API: not exposed in the current tool surface, so automatic Library writes and backend throughput remain `UNMEASURED` here.

When that persistent file surface becomes directly accessible, `workspace-knowledge-librarian` should inventory it and update this map rather than creating a second competing index.
