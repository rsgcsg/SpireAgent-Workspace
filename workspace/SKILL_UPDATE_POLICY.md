# SpireAgent Skill Update Policy

## Stable-Skill model

SpireAgent Skills are stable workflow/trigger bundles. They do not own mutable project status.

For current-state work, project-specific Skills use the GitHub connector to refresh:

1. `rsgcsg/SpireAgent-Workspace` governance on `develop`;
2. the exact owning `rsgcsg/STS2-AI-PLATFORM` or `rsgcsg/STS2-The-Perfect-Defect` ref;
3. evidence at the correct source/runtime/Human/scientific boundary.

Do not release a new Skill merely because a branch SHA, current objective, PR number, runtime artifact, or research result changed. Release a Skill when its trigger, routing, authority model, connector/tool workflow, output contract, or recurring failure pattern changes.

## Product feasibility gate

Skill validity is not one boolean. Track three independent states:

- `LOCAL_VALIDATION`: deterministic structure/package/integrity/hash tests;
- `PRODUCT_SCAN`: actual ChatGPT Skills upload result;
- `REAL_INVOCATION`: representative behavior test after installation.

`LOCAL_VALIDATION=PASS` and green GitHub CI are necessary preflight evidence, not proof that ChatGPT accepts the Skill. For ChatGPT deployment, the upload scanner is authoritative.

If the product UI reports `无效技能` / `Invalid skill`, `Needs Review`, or `Blocked`:

1. record the exact product state;
2. do not promote the package as known-good/deployable;
3. compare it with contemporaneous packages that the same UI accepted;
4. review unnecessary risk surface, especially implicit remote writes, self-modification/publishing/install behavior, broad context export, and combined admin/share/write authority;
5. preserve legitimate safety restrictions while narrowing authority to the smallest viable workflow;
6. rebuild and run a one-at-a-time product upload smoke test;
7. promote to canonical only after product acceptance.

A product-scan failure does not by itself prove the exact root cause. Treat risk-surface reduction as a compatibility hypothesis until a replacement is accepted.

## One-command user update

The canonical user commands are:

`更新 SpireAgent Skills`

`一键更新 SpireAgent Skills`

Those phrases authorize the maintainer to compare installed versions against `skills/SKILL_SUITE_MANIFEST.json`, reuse exact canonical archives for deployment-only drift, rebuild only genuinely changed Skills, validate/package them, and prepare the governed Workspace update.

A repository update is not the same as installing a Skill into ChatGPT/Codex. If no supported deployment API is available, return the changed packages and minimum upload steps; never claim silent installation.

## Automatic merge boundary

Only same-repository PRs targeting `develop` whose branch starts with `chore/workspace/skill-update-` are eligible for the custom Skill auto-merge lane, and only after every `Skill Governance` matrix job succeeds.

Auto-merge scope is intentionally narrow:

- `skills/releases/**/skill.zip`
- `skills/SKILL_SUITE_MANIFEST.json`
- `skills/README.md`
- `workspace/SKILL_ROLLOUT.md`

Changes to governance authority, routers, validators, GitHub Actions workflows, or this policy require a normal reviewed PR and are never auto-merged by the Skill gate.

## Native GitHub auto-merge

Repository-level GitHub **Allow auto-merge** may be enabled as an operator convenience, but it is not the safety mechanism for Skill releases. The custom Skill lane remains the authoritative scope gate. If native auto-merge is enabled, do not weaken branch rules, required status checks, or the Skill path whitelist.
