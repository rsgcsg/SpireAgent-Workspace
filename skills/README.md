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

Use `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills` for the governed update flow.

Prepare and validate the complete changed Skill set first. Check current official OpenAI documentation when Skill creation/edit/install behavior may have changed.

If the current ChatGPT product surface can actually render existing Skills as edited Skill cards/actions, prefer that surface over ZIP. When multiple edited cards/actions can be delivered in one response, present all changed Skills together. Do not impose one-by-one sequencing unless the product itself requires sequential interaction.

Do not require the user to pre-open Skill editors merely to expose an in-product update route. Do not promise that a card will appear merely because a prior reply or screenshot showed one.

A rendered edited card is delivery evidence; save/install/product acceptance still requires confirmation. `skill.zip` remains the canonical validation/release/rollback artifact and deterministic fallback transport.

### Deterministic ZIP handoff

If no real in-product update action is exposed, return working downloads for the whole changed set in the same response. Delivery is a separate gate from packaging:

1. restage every user-facing package to a simple unique top-level path such as `/mnt/data/<skill>-<version>-skill.zip`;
2. verify that exact final path is non-empty, passes ZIP integrity, and matches the expected SHA-256;
3. emit an explicit standalone Markdown link for each package, e.g. `[Download <skill>](sandbox:/mnt/data/<filename>.zip)`;
4. do not rely on blank bullets, table-only links, deep working paths, or opaque file IDs as the sole handoff;
5. if the user reports blank/missing links, classify the delivery as failed, restage to fresh top-level filenames, and immediately re-emit new links.

Never claim the update package was delivered merely because it exists in the execution environment. `LOCAL_VALIDATION=PASS` does not imply `DELIVERY=PASS`.

The maintainer compares installed versions with this manifest, reuses canonical releases for deployment-only drift, and rebuilds only genuinely changed Skills. Narrow `chore/workspace/skill-update-*` PRs are eligible for automatic merge to `develop` after all Skill Governance checks pass; policy/router/workflow changes are not.

Installed copies are deployments and may lead or lag this manifest during reconciliation. Repository merge does not itself prove ChatGPT/Codex installation or publication.
