# SpireAgent Workspace Router

This repository is the governance/control-plane source of truth for the SpireAgent / Slay the Spire AI workspace. It does not replace the implementation authorities.

## Repository routing

- Workspace governance, canonical Skill release/source version, handoffs, shared-project instructions, knowledge pointers and temporary relay: `rsgcsg/SpireAgent-Workspace`
- Platform Foundation code/contracts/runtime/evidence: `rsgcsg/STS2-AI-PLATFORM`
- STPD research/model/training/evaluation: `rsgcsg/STS2-The-Perfect-Defect`

## Skill source and deployment

Canonical complete Skill release/source archives live under `skills/releases/<skill-name>/skill.zip`. `skills/SKILL_SUITE_MANIFEST.json` binds each governed Skill version to the SHA-256 of that complete validated release archive. Installed ChatGPT/Codex copies are deployments and may lag the repository; they never override repository source authority.

Run `python scripts/validate_skill_suite.py` before merging Skill governance changes.

## Skill routing

- Workspace-wide routing/context: `spireagent-workspace-governor`
- Current state/architecture/evidence/repo alignment: `spireagent-explainer`
- Codex prompts/tasks: `spireagent-codex-prompt-writer`
- Conversation/meeting/PR/run organization: `spireagent-conversation-organizer`
- New-chat/context-overflow handoff: `spireagent-context-handoff`
- GitHub writes/branches/PRs: `github-remote-operator`
- Knowledge/library hygiene: `workspace-knowledge-librarian`
- Skill version/update/packaging: `workspace-skill-maintainer` + built-in `skill-creator`

## New-chat bootstrap

Read `workspace/CURRENT.md`, `workspace/SOURCE_OF_TRUTH.md`, `skills/SKILL_SUITE_MANIFEST.json`, and `workspace/HANDOFF.md`; then refresh the relevant Platform/STPD remote ref through GitHub before claiming current state.

## Temporary code relay

When ChatGPT web + GitHub connector cannot safely or conveniently perform a larger direct edit in the owning repository and Codex/local execution is unavailable, use a short-lived `relay/YYYYMMDD-<target>-<task>` branch in this repository. Follow `workspace/TEMPORARY_RELAY_POLICY.md`. Relay code has zero implementation authority and must be transferred back to the owning repo for validation.
