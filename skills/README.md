# Workspace Skill Registry

This directory is the canonical release/source authority for the SpireAgent workspace Skill suite.

Each governed Skill is stored as its complete validated `skill.zip` at:

`skills/releases/<skill-name>/skill.zip`

The archive contains the full Skill source (`SKILL.md`, `agents/`, `references/`, scripts/assets when present) and is also the deployable ChatGPT package. `SKILL_SUITE_MANIFEST.json` binds every release to a version and SHA-256.

Installed ChatGPT/Codex copies are deployments and may lag the repository release. They never override repository authority.

Run:

```bash
python scripts/validate_skill_suite.py
```

before merging Skill governance changes. The `Skill Governance` GitHub workflow performs the same hash/archive/version checks.

Current suite:

- `spireagent-workspace-governor`
- `spireagent-explainer`
- `spireagent-codex-prompt-writer`
- `spireagent-conversation-organizer`
- `spireagent-context-handoff`
- `github-remote-operator`
- `workspace-knowledge-librarian`
- `workspace-skill-maintainer`

Skill updates require an explicit user request and must use `workspace-skill-maintainer` together with built-in `skill-creator`. Validate and package the complete changed Skill, replace its release archive, update the manifest, then roll out that exact archive to ChatGPT/Codex surfaces as appropriate.
