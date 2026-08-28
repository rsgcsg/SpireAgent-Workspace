# Workspace Knowledge Map

This map links ChatGPT Workspace/Library, the small durable `SpireAgent-Workspace` Git relay, the public-web research input, and the owning Platform/STPD repositories. It is an index and Codex-facing projection, not a duplicate source of implementation/research truth.

| Item | Class | Lifetime | Authority / owner | Current source |
|---|---|---|---|---|
| Workspace Router | CANONICAL | LONG_TERM | SpireAgent-Workspace | `WORKSPACE_ROUTER.md` |
| Source of Truth | CANONICAL | LONG_TERM | SpireAgent-Workspace | `workspace/SOURCE_OF_TRUTH.md` |
| Knowledge Plane | CANONICAL | LONG_TERM | SpireAgent-Workspace | `workspace/KNOWLEDGE_PLANE.md` |
| Web Research Policy | CANONICAL | LONG_TERM | SpireAgent-Workspace | `workspace/WEB_RESEARCH_POLICY.md` |
| External Agent Tooling Map | REFERENCE | WORKING | SpireAgent-Workspace | `workspace/EXTERNAL_AGENT_TOOLING.md`; re-check current product/tool facts before major adoption |
| Current cross-project snapshot | CURRENT | WORKING | SpireAgent-Workspace | `workspace/CURRENT.md`; owning refs must be refreshed |
| Cross-project / Workspace handoff | HANDOFF | WORKING | SpireAgent-Workspace / user | `workspace/HANDOFF.md` |
| Workspace Skill manifest/releases | CANONICAL | LONG_TERM | SpireAgent-Workspace | `skills/SKILL_SUITE_MANIFEST.json`, `skills/releases/` |
| ChatGPT Library / Project artifacts | REFERENCE/HANDOFF/CURRENT/RAW | WORKING/LONG_TERM | Workspace users/product | use when actually accessible; keep durable pointer only when useful to Codex/cross-project governance |
| Public web research | RAW/REFERENCE | TEMP/WORKING | external source + reviewing agent/user | search only when useful; promote reviewed reusable conclusions/pointers according to `WEB_RESEARCH_POLICY.md` |
| Platform status/architecture/evidence/agent Skills | CANONICAL/EVIDENCE | LONG_TERM | STS2-AI-PLATFORM | exact active Platform ref |
| STPD status/model/training/evaluation/agent Skills | CANONICAL/EVIDENCE | LONG_TERM | STS2-The-Perfect-Defect | exact active STPD ref |
| Session scratch | RAW/TEMP | TEMP | current execution | `/mnt/data` or equivalent; never assume persistence |
| Temporary code/text relay | RAW/HANDOFF | TEMP | SpireAgent-Workspace relay branch | `relay/*`; zero implementation authority, transfer then delete |

## Selection rule

Do not mirror the whole ChatGPT Library, chat history, or public web into Git. Promote only reviewed conclusions, pointers, shared standards, handoffs, Workspace-level Skill governance, or Codex-facing reference packets that materially improve cross-project continuity.

Routine single-repository Platform/STPD work should read the owning repository directly and should not depend on this map. For external questions, use curated references first and targeted web research only when freshness or a real knowledge gap warrants it.

## Current access note — 2026-08-28

- Session scratch read/write: available in the active execution environment.
- GitHub governance/repositories: available through the connected GitHub connector.
- Public web search: available in ChatGPT and should be used according to the bounded research policy.
- ChatGPT Library UI: visible in the product.
- Generic ChatGPT Library persistent-file list/move/rename/delete CRUD in this active agent tool surface: not exposed/verified. Do not claim direct operations until an actual tool surface provides them.

When direct Library file operations become available, `workspace-knowledge-librarian` should inventory that plane and update this map rather than creating a second competing index.
