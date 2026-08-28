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

## Default create/update UX

Use `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills` for the governed update flow.

The working Project conversation prepares and validates the change, then gives the user a complete **Skill Chat Prompt** for:

`Plugins -> Skills -> Create -> Create with chat`

For updates, the prompt must identify the existing Skill, say not to create a duplicate, use the currently installed Skill as baseline, include the exact requested behavior changes, require built-in `skill-creator`, preserve and validate the complete Skill, and finish through the native Skill update/install surface.

For new Skills, use the same dedicated Skill-chat route with a complete creation prompt.

This is the preferred default because it intentionally enters the product workflow designed for Skill creation/modification. If a stronger direct native edited-Skill action is already exposed in the current conversation, use it instead.

For multiple changed Skills, prepare the full set together but normally return one prompt per Skill so target identity stays unambiguous. Combine only after the product has been verified to update multiple existing Skills correctly in one native workflow.

## Fallback delivery order

If the dedicated Skill-chat path is unavailable or fails:

1. supported deployment API/action when explicitly available and authorized;
2. native generated-file attachment/file card for the validated package;
3. Library retrieval/download for files actually created/saved in ChatGPT;
4. explicitly authorized short-lived `SpireAgent-Workspace` `relay/*` download transport;
5. `sandbox:` Markdown only as best-effort compatibility.

Do not promise that a card or attachment will appear merely because one appeared previously. Do not treat package existence or emitted `sandbox:` Markdown as delivery success.

A Workspace Git relay is temporary delivery infrastructure only: it has zero canonical Skill authority, must not merge into `develop`/`main`, and must be removed after product acceptance/save or TTL expiry.

`skill.zip` remains the canonical validation/release/rollback artifact. `LOCAL_VALIDATION=PASS` does not imply `DELIVERY=PASS`, `PRODUCT_SCAN=PASS`, or `DEPLOYMENT=PASS`.

If Workspace-wide updates become frequent, evaluate a skill-only Workspace Plugin: current official Plugin documentation supports a single Plugin containing multiple Skills, which may offer a cleaner suite-level installation/governance surface.

The maintainer compares installed versions with this manifest, reuses canonical releases for deployment-only drift, and rebuilds only genuinely changed Skills. Narrow `chore/workspace/skill-update-*` PRs are eligible for automatic merge to `develop` after all Skill Governance checks pass; policy/router/workflow changes are not.

Installed copies are deployments and may lead or lag this manifest during reconciliation. Repository merge does not itself prove ChatGPT/Codex installation or publication.
