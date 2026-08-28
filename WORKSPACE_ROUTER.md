# SpireAgent Workspace Router

`SpireAgent-Workspace` is a **small durable Codex-facing projection and cross-project relay** for the SpireAgent workspace. Its most important job is to expose selected ChatGPT web Workspace/Library conclusions and shared context in a versioned form that Codex and GitHub workflows can read.

It is not a third main project, not a mirror of ChatGPT Library, and not an implementation/runtime/research authority.

## Relay and repository routing

- ChatGPT Workspace/Library knowledge plane: human/ChatGPT collaboration, reusable files, reports, handoffs, and larger references when the product/tool surface actually exposes them.
- `rsgcsg/SpireAgent-Workspace`: selected Workspace-to-Codex projection, cross-project routing/shared standards, Workspace-level Skill release/manifest, handoffs, knowledge pointers, current snapshots, and temporary relay policy.
- `rsgcsg/STS2-AI-PLATFORM`: Platform Foundation code/contracts/runtime/evidence and its repo-owned agent/Skill governance.
- `rsgcsg/STS2-The-Perfect-Defect`: STPD research/data/model/training/evaluation and its repo-owned agent/Skill governance.

Routine single-repository Platform/STPD work should go directly to the owning repository. Workspace is optional enrichment, not a required bootstrap dependency.

See `workspace/KNOWLEDGE_PLANE.md` for storage/lifecycle rules. Exact Platform/STPD refs remain project truth.

## Library/product boundary

The ChatGPT product may visibly provide Library. Do not infer generic agent CRUD from the UI. Inventory/create/update/move/rename/delete Library items only when the active tool surface actually exposes those operations. Otherwise create/return the artifact through an available surface and report the remaining user-side Library step.

## Skill source and deployment

Workspace-level Skill source/releases and their manifest are governed here. Platform/STPD repo-owned Skills should be governed by their owning repositories once introduced; Workspace may keep cross-project pointers but does not become their source authority.

For Workspace Skills, local validation, ChatGPT PRODUCT_SCAN, installed deployment state, and GitHub manifest state are separate evidence classes that must be reconciled explicitly.

When the current ChatGPT product surface can actually render existing Skills as edited Skill cards/actions, prefer that in-product route over ZIP. Prepare the full changed Skill set first. If the product supports multiple edited Skill cards/actions in one response, present all changed Skills together; do not impose artificial one-by-one sequencing. Only fall back to sequential interaction when the product surface itself requires it.

Do not promise that an edited Skill card will appear merely because one appeared in a prior conversation or screenshot. A 2026-08-28 reply promised a card below the message but no card rendered; treat that as explicit evidence that assistant policy text alone cannot force the product UI. A card/save/install is a product capability/result and must be actually visible or confirmed.

ZIP remains a release/rollback artifact and fallback transport when no usable in-product edit/deployment surface is available or the user explicitly requests it.

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
5. For routine single-repo work, continue in the owning repository without requiring further Workspace reads.

## Reconciliation defaults

Workspace calibration and explicit Skill-update flows check:

- installed Workspace Skill/product-scan state versus the remote manifest;
- cached `CURRENT` project pointers versus live owning-repo refs.

The Workspace repository's own live `develop` head should be resolved at read time rather than self-cached in `CURRENT.md`.

## Temporary code relay

When ChatGPT web + GitHub connector cannot safely or conveniently perform a larger direct edit in the owning repository and Codex/local execution is unavailable, use a short-lived `relay/YYYYMMDD-<target>-<task>` branch following `workspace/TEMPORARY_RELAY_POLICY.md`. Relay content has zero implementation authority and must be transferred back to the owning repo for validation.
