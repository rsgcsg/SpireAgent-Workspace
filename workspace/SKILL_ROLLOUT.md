# Skill Suite Rollout

## Canonical source

`rsgcsg/SpireAgent-Workspace/skills/releases/<skill-name>/skill.zip` is the canonical complete source/release archive for each governed Skill. `skills/SKILL_SUITE_MANIFEST.json` binds each version to the SHA-256 of the complete validated release archive.

## Reconciliation release — 2026-08-28

This release repairs the previous state where the manifest referenced `skills/<skill-name>` paths that did not exist in the repository while installed copies could lag the manifest.

The conversation organizer is intentionally upgraded more substantially: historical P8-P15 / hard-shell / soft-shell / Context OS terminology is lineage only unless current canonical repositories reactivate it. Current discussion alignment follows Workspace governance -> exact owning Platform/STPD repository -> evidence-class verification.

## Rollout order

1. `spireagent-conversation-organizer` — high priority because the installed copy encoded stale project-phase authority.
2. `spireagent-workspace-governor` and `spireagent-explainer`.
3. `spireagent-codex-prompt-writer` and `spireagent-context-handoff`.
4. `github-remote-operator`, `workspace-knowledge-librarian`, `workspace-skill-maintainer`.

Each package is uploaded/published separately as `skill.zip`. Do not treat repository merge as proof that a ChatGPT-installed deployment has updated; deployment version must be checked independently.
