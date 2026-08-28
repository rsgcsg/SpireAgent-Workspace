# Workspace Skill Registry

Canonical Workspace Skill release/source identity lives in `SKILL_SUITE_MANIFEST.json`. Complete validated repository release archives live under `skills/releases/<skill-name>/skill.zip`.

Current suite:
- spireagent-workspace-governor
- spireagent-explainer
- spireagent-codex-prompt-writer
- spireagent-conversation-organizer
- spireagent-context-handoff
- github-remote-operator
- workspace-knowledge-librarian
- workspace-skill-maintainer

Workspace Skills are stable workflow shells and should update rarely. Mutable Platform/STPD truth remains in the owning repositories.

## Create/update UX

For **one Skill**, first use the current Project conversation and include:

`Use @skill-creator to help me create a skill. Keep it conversational, and start by asking what the skill should do.`

Then provide the complete Skill-specific create/update requirements. For an existing Skill, say update-not-create, do not create a duplicate, use the currently installed Skill as baseline, invoke built-in `skill-creator`, preserve/validate the complete Skill, and finish through native save/update UX.

If the exact target edited-Skill card renders, use it. If it does not, reuse the same complete prompt in:

`Plugins -> Skills -> Create -> Create with chat`

Chinese UI: `插件 -> 技能 -> 创建 -> 通过聊天创建`.

For **multiple Skills**, batch analysis when useful but generate one complete prompt per Skill, include the same trigger phrase in every prompt, and update/save one Skill at a time. Generic Project-chat multi-card rendering is not reliable: two controlled 2026-08-28 experiments each rendered only one card from a multi-Skill batch.

## Evidence and release boundary

`skill.zip` remains the canonical repository validation/release/rollback artifact. `LOCAL_VALIDATION`, `PRODUCT_SCAN`, `DEPLOYMENT`, `DELIVERY`, `REAL_INVOCATION`, and `DIRECT_PROJECT_CHAT_RENDER` are separate evidence states.

The current ChatGPT product surface does not expose installed Skill package bytes/hash. Repository `package_sha256` therefore identifies the canonical validated repository archive and is not claimed as observed ChatGPT binary identity.

Narrow `chore/workspace/skill-update-*` PRs may use the governed auto-merge lane after all Skill Governance checks pass. Broader policy/router/workflow changes remain normal governance work.
