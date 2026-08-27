# Workspace Skill Registry

Skill deployment/version authority is `SKILL_SUITE_MANIFEST.json`.

Each ChatGPT Skill is packaged and installed separately as its own `skill.zip`; never upload a multi-Skill archive as one Skill.

Current suite:
- spireagent-workspace-governor
- spireagent-explainer
- spireagent-codex-prompt-writer
- spireagent-conversation-organizer
- spireagent-context-handoff
- github-remote-operator
- workspace-knowledge-librarian
- workspace-skill-maintainer

Installed copies are deployments and may lag this manifest. On an explicit Skill update request, use `workspace-skill-maintainer` + built-in `skill-creator`, validate/package the changed Skill, update its hash/version here, then roll out the new package.
