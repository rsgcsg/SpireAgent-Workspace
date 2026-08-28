# SpireAgent Workspace Router

This repository is the durable governance/control-plane and information-relay source of truth for the SpireAgent / Slay the Spire AI workspace. It cooperates with the ChatGPT Workspace knowledge plane but does not replace implementation authorities.

## Relay and repository routing

- ChatGPT Workspace knowledge plane: shared Project/Library/Work files when accessible; fast collaboration, indexes, handoffs, reusable references and larger artifacts.
- Workspace governance, canonical Skill release/source archives, handoffs, knowledge pointers and temporary relay: `rsgcsg/SpireAgent-Workspace`.
- Platform Foundation code/contracts/runtime/evidence: `rsgcsg/STS2-AI-PLATFORM`.
- STPD research/model/training/evaluation: `rsgcsg/STS2-The-Perfect-Defect`.

See `workspace/KNOWLEDGE_PLANE.md` for storage/lifecycle rules. Workspace knowledge and this repository are relays; exact Platform/STPD refs remain project truth.

## Skill source and deployment

Canonical complete Skill release/source archives live under `skills/releases/<skill-name>/skill.zip`. `skills/SKILL_SUITE_MANIFEST.json` binds each governed Skill version to the SHA-256 of that complete validated release archive. Installed ChatGPT/Codex copies are deployments and may lead or lag the repository during reconciliation; neither overrides owning-repo truth.

Run `python scripts/validate_skill_suite.py` before merging Skill governance changes.

## Skill routing

- Workspace-wide routing/context/storage-plane selection: `spireagent-workspace-governor`
- Current state/architecture/evidence/repo alignment: `spireagent-explainer`
- Codex prompts/tasks: `spireagent-codex-prompt-writer`
- Conversation/meeting/PR/run organization: `spireagent-conversation-organizer`
- New-chat/context-overflow handoff: `spireagent-context-handoff`
- GitHub writes/branches/PRs: `github-remote-operator`
- Knowledge/library/file lifecycle: `workspace-knowledge-librarian`
- Skill version/update/packaging/reconciliation: `workspace-skill-maintainer` + built-in `skill-creator`

## New-chat bootstrap

1. use the Workspace knowledge index as a locator if actually accessible;
2. read `workspace/CURRENT.md`, `workspace/SOURCE_OF_TRUTH.md`, `skills/SKILL_SUITE_MANIFEST.json`, `workspace/HANDOFF.md`, and `workspace/KNOWLEDGE_PLANE.md` as relevant;
3. refresh the relevant Platform/STPD exact remote ref through GitHub before claiming current state;
4. report cache/snapshot/deployment drift instead of silently choosing one copy.

## Reconciliation defaults

Workspace calibration and explicit Skill-update flows check two common drift classes automatically:

- installed Skill/product-scan state versus the remote manifest;
- cached `CURRENT` project pointers versus live owning-repo refs.

The Workspace repository's own live `develop` head is resolved at read time rather than self-cached in `CURRENT.md`.

## Temporary code relay

When ChatGPT web + GitHub connector cannot safely or conveniently perform a larger direct edit in the owning repository and Codex/local execution is unavailable, use a short-lived `relay/YYYYMMDD-<target>-<task>` branch in this repository. Follow `workspace/TEMPORARY_RELAY_POLICY.md`. Relay code has zero implementation authority and must be transferred back to the owning repo for validation.
