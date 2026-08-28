# SpireAgent Workspace Router

`SpireAgent-Workspace` is a **small durable Codex-facing projection and cross-project relay** for the SpireAgent workspace. Its most important job is to expose selected ChatGPT web Workspace/Library conclusions and shared context in a versioned form that Codex and GitHub workflows can read.

It is not a third main project, not a mirror of ChatGPT Library, and not an implementation/runtime/research authority.

## Relay and repository routing

- ChatGPT Workspace/Library knowledge plane: human/ChatGPT collaboration, reusable files, reports, handoffs, and larger references when the product/tool surface actually exposes them.
- `rsgcsg/SpireAgent-Workspace`: selected Workspace-to-Codex projection, cross-project routing/shared standards, Workspace-level Skill release/manifest, handoffs, knowledge pointers, current snapshots, and temporary relay policy.
- `rsgcsg/STS2-AI-PLATFORM`: Platform Foundation code/contracts/runtime/evidence and its repo-owned agent/Skill governance.
- `rsgcsg/STS2-The-Perfect-Defect`: STPD research/data/model/training/evaluation and its repo-owned agent/Skill governance.
- Public web research: selective freshness/upstream/ecosystem input, never an owning source of project truth.

Routine single-repository Platform/STPD work should go directly to the owning repository. Workspace is optional enrichment, not a required bootstrap dependency.

See `workspace/KNOWLEDGE_PLANE.md` for storage/lifecycle rules and `workspace/WEB_RESEARCH_POLICY.md` for bounded external research. Exact Platform/STPD refs remain project truth.

## Web research routing

Do not globally forbid Internet use and do not browse without a concrete reason. Use exact repo truth first for project facts, then recent curated Workspace references for repeated external knowledge, then a bounded web pass when current external product/API/tooling/standards/upstream behavior or a mature public solution materially affects the decision.

Prefer official/primary sources, start with a small query budget, and stop when the decision is supported. If the finding is likely to matter again, curate it through `workspace-knowledge-librarian` instead of repeatedly searching. Codex may use the same bounded pattern; do not grant every subagent independent web access by default.

See `workspace/EXTERNAL_AGENT_TOOLING.md` for reviewed current integration/orchestration options.

## Library/product boundary

The ChatGPT product may visibly provide Library. Do not infer generic agent CRUD from the UI. Inventory/create/update/move/rename/delete Library items only when the active tool surface actually exposes those operations. Otherwise create/return the artifact through an available surface and report the remaining user-side Library step.

## Skill source and deployment

Workspace-level Skill source/releases and their manifest are governed here. Platform/STPD repo-owned Skills should be governed by their owning repositories once introduced; Workspace may keep cross-project pointers but does not become their source authority.

For Workspace Skills, local validation, ChatGPT PRODUCT_SCAN, installed deployment state, and GitHub manifest state are separate evidence classes that must be reconciled explicitly.

Current OpenAI product documentation confirms that ChatGPT can create or modify Skills through chat and prompt installation. When the current product surface actually exposes edited Skill cards/actions, prefer that in-product route over ZIP and present the complete changed set together when batch delivery is supported.

Do not promise that a card will appear merely because it appeared in a prior conversation or screenshot. Product capability is not the same as a callable action in every assistant surface. If the current surface does not actually produce a card/deployment action, provide verified downloadable Skill packages so the user is never left with neither cards nor links.

ZIP remains a release/rollback artifact and deterministic fallback transport.

## Skill routing

- Workspace-wide routing/context/storage-plane selection: `spireagent-workspace-governor`
- Current state, architecture, evidence, blocker, repo/history alignment: `spireagent-explainer`
- Codex task/prompt/review/reference packet: `spireagent-codex-prompt-writer`
- chat/meeting/PR/run organization: `spireagent-conversation-organizer`
- context overflow/new chat/local handoff: `spireagent-context-handoff`
- ChatGPT Library/Project knowledge lifecycle and storage planning: `workspace-knowledge-librarian`
- explicit GitHub writes/branches/PR/merge: `github-remote-operator`
- explicit Workspace Skill update/package/version/rollout/reconciliation: `workspace-skill-maintainer` + built-in `skill-creator`

## New-chat / cross-project bootstrap

1. Use a Workspace Library/Project knowledge index only if actually accessible.
2. Read the smallest relevant Workspace Git relay files.
3. Refresh exact Platform/STPD remote refs before project-state claims.
4. Report cache/snapshot/deployment drift instead of silently choosing one copy.
5. Use bounded web research only for unresolved/current external questions that materially affect the task.
6. For routine single-repo work, continue in the owning repository without requiring further Workspace reads.

## Reconciliation defaults

Workspace calibration and explicit Skill-update flows check:

- installed Workspace Skill/product-scan state versus the remote manifest;
- cached `CURRENT` project pointers versus live owning-repo refs.

The Workspace repository's own live `develop` head should be resolved at read time rather than self-cached in `CURRENT.md`.

## Temporary code relay

When ChatGPT web + GitHub connector cannot safely or conveniently perform a larger direct edit in the owning repository and Codex/local execution is unavailable, use a short-lived `relay/YYYYMMDD-<target>-<task>` branch following `workspace/TEMPORARY_RELAY_POLICY.md`. Relay content has zero implementation authority and must be transferred back to the owning repo for validation.
