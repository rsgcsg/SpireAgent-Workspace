# Skill Rollout

Canonical Skill release authority is `skills/SKILL_SUITE_MANIFEST.json`; each manifest entry binds one complete archive at `skills/releases/<skill-name>/skill.zip`.

## Normal operating model

Workspace Skills are stable workflow shells. Mutable Platform/STPD truth stays in the owning repositories. Do not bump a Skill merely because repository SHAs, PRs, objectives, runtime artifacts, or research results changed. Update Skills only for trigger/routing/authority/tool/output-workflow changes or demonstrated recurring failures.

## Validation is three-layered

Keep these states separate:

1. `LOCAL_VALIDATION`: skill-creator validator/package, references/scripts, ZIP integrity and SHA-256.
2. `PRODUCT_SCAN`: actual ChatGPT product acceptance of the edited/uploaded Skill.
3. `REAL_INVOCATION`: representative behavior after the saved/installed update.

A local PASS or green GitHub CI is preflight evidence only. It does not prove the ChatGPT product accepted or saved the Skill.

## One-command update

The user can say `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills`.

The maintainer compares installed versions with the remote manifest, reuses canonical releases for deployment-only drift, rebuilds only genuinely changed Skills, validates/packages the full Skill, and selects the shortest product-supported handoff.

## Default product deployment: conversation edited Skill card

When the current ChatGPT conversation can render an existing Skill as an **edited Skill card**, use that as the default update UX.

Required sequence:

1. prepare and validate exactly one changed Skill;
2. render/present it directly from the conversation as the edited existing Skill;
3. do not require the user to navigate to or pre-open the Skill editor;
4. stop at the final `Save changes` / `保存更改` product action;
5. verify the resulting installed/version/product state;
6. only after confirmation, continue to the next changed Skill.

Do not present multiple ZIP packages when this product surface is available. Do not call the update deployed merely because the edit card rendered; the save/product result is the deployment evidence.

Priority order:

1. conversation-delivered in-product edited Skill card + final user save;
2. explicitly available and authorized deployment API that confirms the update;
3. one verified `skill.zip` fallback for that Skill.

`skill.zip` remains a required release/validation artifact and rollback source even when it is not shown to the user.

## GitHub governance

Eligible narrow Skill-update PRs named `chore/workspace/skill-update-*` may use the governed Skill auto-merge lane after all Skill Governance checks pass. Changes to routers, authority policy, validators, Actions workflows, CURRENT semantics, or this rollout policy require normal reviewed governance.

Repository merge does not itself install or publish a Skill in ChatGPT/Codex. Product deployment state must be reconciled separately with `skills/SKILL_SUITE_MANIFEST.json`.
