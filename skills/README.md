# Workspace Skill Registry

Canonical Skill deployment/source authority is `SKILL_SUITE_MANIFEST.json`. Each manifest entry points to one complete validated archive at `skills/releases/<skill-name>/skill.zip` and binds its exact SHA-256.

Each ChatGPT Skill is installed separately unless a supported higher-level Plugin intentionally packages multiple Skills.

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

Use `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills` for the governed update flow.

Prepare and validate the complete changed Skill set first. Check current official OpenAI documentation when Skill creation/edit/install/file-delivery behavior may have changed.

The reliable default create/update route is:

`Plugins -> Skills -> Create -> Create with chat`

The working Project conversation should generate one exact Skill Chat Prompt per changed Skill by default. For an existing Skill the prompt must preserve identity, say not to create a duplicate, use the current installed Skill as baseline, include the full change set, invoke built-in `skill-creator`, validate the full Skill, and finish through the native save/install UX.

### Observed renderer evidence

A 2026-08-28 ordinary Project-chat experiment prepared eight complete locally validated SpireAgent Skill packages. Only one native card (`spireagent-workspace-governor`) was visible. Therefore generic Project-chat Skill rendering is classified as `PARTIAL` and is opportunistic only; it is not the default suite-update transport.

If the exact target Skill card is already visible in the current conversation, the user may use it for that Skill. Never infer that other prepared Skills were delivered from one visible card.

Fallback order when the dedicated Skill-chat route is unavailable or fails:

1. supported deployment API/action when explicitly available and authorized;
2. native generated-file attachment/file card;
3. Library retrieval/download for files actually created/saved in ChatGPT;
4. explicitly authorized short-lived Workspace Git relay;
5. `sandbox:` Markdown only as best-effort compatibility.

`skill.zip` remains the canonical validation/release/rollback artifact. `LOCAL_VALIDATION=PASS` does not imply `DIRECT_PROJECT_CHAT_RENDER=PASS`, `DELIVERY=PASS`, `PRODUCT_SCAN=PASS`, or `DEPLOYMENT=PASS`.

If Workspace-wide updates become frequent, evaluate a skill-only Workspace Plugin as a possible suite-level installation/governance surface; do not adopt it until product permissions and update semantics are verified.

The maintainer compares installed versions with this manifest, reuses canonical releases for deployment-only drift, and rebuilds only genuinely changed Skills. Narrow `chore/workspace/skill-update-*` PRs are eligible for automatic merge to `develop` after all Skill Governance checks pass; policy/router/workflow changes are not.

Installed copies are deployments and may lead or lag this manifest during reconciliation. Repository merge does not itself prove ChatGPT/Codex installation or publication.
