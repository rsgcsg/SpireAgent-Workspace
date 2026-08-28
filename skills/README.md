# Workspace Skill Registry

Canonical Skill deployment/source authority is `SKILL_SUITE_MANIFEST.json`. Each manifest entry points to one complete validated archive at `skills/releases/<skill-name>/skill.zip` and binds its exact SHA-256.

Each ChatGPT Skill is installed separately. Never upload a multi-Skill archive as one Skill.

Current suite:
- spireagent-workspace-governor
- spireagent-explainer
- spireagent-codex-prompt-writer
- spireagent-conversation-organizer
- spireagent-context-handoff
- github-remote-operator
- workspace-knowledge-librarian
- workspace-skill-maintainer

Project-specific SpireAgent Skills are intentionally stable workflow shells. They refresh mutable Workspace/Platform/STPD truth through the GitHub connector instead of embedding frequently changing project status in the Skill package.

## Default update UX

Use the user command `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills` for the governed update flow.

When the current ChatGPT conversation can render an existing Skill as an **edited Skill card**, that is the default user-facing delivery path:

1. prepare and validate one changed Skill;
2. present that Skill directly in the conversation as an edited Skill;
3. leave only the final `Save changes` / `保存更改` action to the user;
4. verify the saved/installed state;
5. only then present the next changed Skill.

Do **not** require the user to navigate to or pre-open the Skill editor merely to expose this path. Do **not** present a stack of ZIP downloads when edited Skill cards are available. `skill.zip` remains the canonical validation/release artifact and fallback transport, not the default user update UX.

The maintainer still compares installed versions with this manifest, reuses canonical releases for deployment-only drift, and rebuilds only genuinely changed Skills. Narrow `chore/workspace/skill-update-*` PRs are eligible for automatic merge to `develop` after all Skill Governance checks pass; policy/router/workflow changes are not.

Installed copies are deployments and may lead or lag this manifest during reconciliation. Repository merge does not itself prove ChatGPT/Codex installation or publication.
