# SpireAgent Workspace Agent Guide

## Mission

Keep `SpireAgent-Workspace` a small durable bridge between the ChatGPT web Workspace/Library and Codex/GitHub projects. Govern cross-project routing and Workspace-level infrastructure without becoming a second implementation or research authority.

## Authority

- ChatGPT Workspace/Library: human/ChatGPT collaboration and persistent knowledge/files when the product/tool surface exposes them.
- `rsgcsg/SpireAgent-Workspace`: selected Codex-facing Workspace projection, routing, Workspace-level Skill release/manifest, shared standards, handoffs, knowledge pointers, current snapshots, coordination, and temporary relay policy.
- `rsgcsg/STS2-AI-PLATFORM`: Platform Foundation code/contracts/runtime/evidence plus its repo-owned agent/Skill governance.
- `rsgcsg/STS2-The-Perfect-Defect`: STPD research/data/model/training/evaluation plus its repo-owned agent/Skill governance.

Routine single-repository Platform/STPD development must remain possible without Workspace. Workspace snapshots and discussion summaries never override exact owning-repo code/runtime/research evidence.

## Required read order

For workspace-level or cross-project work:

1. `WORKSPACE_ROUTER.md`
2. `workspace/CURRENT.md`
3. `workspace/SOURCE_OF_TRUTH.md`
4. `workspace/KNOWLEDGE_PLANE.md`
5. `skills/SKILL_SUITE_MANIFEST.json` when Workspace Skills matter
6. `workspace/HANDOFF.md` when continuity matters
7. task-specific docs
8. refresh exact Platform/STPD refs before project-state claims

For routine single-repository implementation/research work, go directly to that repository's `AGENTS.md` and canonical docs instead of requiring this relay as ceremony.

## Library/product boundary

A visible ChatGPT Library UI does not prove that the active agent session has generic Library CRUD. Only claim inventory/create/update/move/rename/delete operations when the actual product/tool surface exposes them. Otherwise return the artifact through an available surface and state the remaining user-side Library step.

## Skill governance

Workspace-level Skills are governed here. Platform/STPD repo-owned Skills should be governed by their owning repositories once introduced; Workspace may keep pointers but not become their source authority.

For Workspace Skills, canonical release/source authority is the governed release archive/manifest after local validation and product feasibility are reconciled. Installed copies may lead or lag during reconciliation. Never silently self-update or publish a Skill.

## Git workflow

Normal governance changes target `develop` from short-lived topic branches. Keep `main` for reviewed stable workspace governance. Do not direct-push integration branches for ordinary changes.

## Relay guardrail

Temporary code/text relay is allowed only under short-lived `relay/*` branches following `workspace/TEMPORARY_RELAY_POLICY.md`. Relay branches have zero implementation authority, are never merged into Workspace `main`/`develop`, and must be transferred and validated in the owning repository.

Never store secrets, raw Human data, proprietary STS2 files, decompiled source, model weights, local runtime artifacts, or other unsafe Git history.