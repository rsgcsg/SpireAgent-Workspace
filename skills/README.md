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

Preferred user-facing surfaces, in order:

1. real conversation-delivered edited Skill card/action;
2. supported deployment API/action when explicitly available and authorized;
3. native generated-file attachment/file card for the validated package;
4. Library retrieval/download for files actually created/saved in ChatGPT;
5. `sandbox:` Markdown only as best-effort compatibility when the active client is known to render it.

Do not promise that a card or attachment will appear merely because one appeared previously. Do not treat package existence or emitted `sandbox:` Markdown as delivery success. The 2026-08-28 repeated blank-link reports established that internal sandbox references can be hidden by the active client.

`skill.zip` remains the canonical validation/release/rollback artifact. `LOCAL_VALIDATION=PASS` does not imply `DELIVERY=PASS`, `PRODUCT_SCAN=PASS`, or `DEPLOYMENT=PASS`.

Current official OpenAI documentation confirms chat-based Skill creation/modification and says ChatGPT-created/uploaded files are saved to Library where available. It does not guarantee multi-card batch rendering in a single chat turn and does not document `sandbox:/mnt/data/...` as a stable user-facing download contract.

If Workspace-wide updates become frequent, evaluate a skill-only Workspace Plugin: current official Plugin documentation supports a single Plugin containing multiple Skills, which may offer a cleaner suite-level installation/governance surface.

The maintainer compares installed versions with this manifest, reuses canonical releases for deployment-only drift, and rebuilds only genuinely changed Skills. Narrow `chore/workspace/skill-update-*` PRs are eligible for automatic merge to `develop` after all Skill Governance checks pass; policy/router/workflow changes are not.

Installed copies are deployments and may lead or lag this manifest during reconciliation. Repository merge does not itself prove ChatGPT/Codex installation or publication.
