# Skill Rollout

Canonical Skill release authority is `skills/SKILL_SUITE_MANIFEST.json`; each manifest entry binds one complete validated archive at `skills/releases/<skill-name>/skill.zip`.

## Normal operating model

Project-specific SpireAgent Skills are stable workflow shells. For current project truth they refresh `SpireAgent-Workspace` and the owning Platform/STPD exact ref through the GitHub connector rather than embedding frequently changing status.

Do not bump a Skill just because repository SHAs, PRs, objectives, runtime artifacts, or research results changed. Update Skills only for trigger/routing/authority/tool/output-workflow changes or demonstrated recurring failures.

## One-command update

The user can say:

`更新 SpireAgent Skills`

The maintainer compares installed versions with the remote manifest, reuses canonical packages for deployment-only drift, rebuilds only genuinely changed Skills, and returns only changed packages. Eligible narrow Skill-update PRs named `chore/workspace/skill-update-*` auto-merge to `develop` after all Skill Governance jobs pass.

Changes to routers, authority policy, validators, or workflow files are not auto-merge eligible.

Repository merge does not itself install or publish Skills in ChatGPT/Codex. When no supported deployment write API is available, upload/publish only the changed `skill.zip` files through the product Skills surface.
