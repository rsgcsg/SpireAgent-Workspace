# SpireAgent Skill Update Policy

## Stable-skill model

SpireAgent Skills are stable workflow/trigger bundles. They do not own mutable project status.

For current-state work, project-specific Skills use the GitHub connector to refresh:

1. `rsgcsg/SpireAgent-Workspace` governance on `develop`;
2. the exact owning `rsgcsg/STS2-AI-PLATFORM` or `rsgcsg/STS2-The-Perfect-Defect` ref;
3. evidence at the correct source/runtime/Human/scientific boundary.

Do not release a new Skill merely because a branch SHA, current objective, PR number, runtime artifact, or research result changed. Release a Skill when its trigger, routing, authority model, connector/tool workflow, output contract, or recurring failure pattern changes.

## One-command user update

The canonical user command is:

`更新 SpireAgent Skills`

That phrase authorizes the maintainer workflow to compare installed versions against `skills/SKILL_SUITE_MANIFEST.json`, reuse exact canonical archives for deployment-only drift, rebuild only genuinely changed Skills, validate/package them, and prepare the governed Workspace update.

A repository update is not the same as installing a Skill into ChatGPT/Codex. If no supported deployment API is available, return the changed `skill.zip` files and the minimum upload/publish steps; never claim silent installation.

## Automatic merge boundary

Only same-repository PRs targeting `develop` whose branch starts with `chore/workspace/skill-update-` are eligible for Skill auto-merge, and only after every `Skill Governance` matrix job succeeds.

Auto-merge scope is intentionally narrow:

- `skills/releases/**/skill.zip`
- `skills/SKILL_SUITE_MANIFEST.json`
- `skills/README.md`
- `workspace/SKILL_ROLLOUT.md`

Changes to governance authority, routers, validators, GitHub Actions workflows, or other Workspace policy files require a normal reviewed PR and are never auto-merged by the Skill gate.
