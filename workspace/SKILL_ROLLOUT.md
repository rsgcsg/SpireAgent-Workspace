# Skill Rollout

Canonical Skill release authority is `skills/SKILL_SUITE_MANIFEST.json`; each manifest entry binds one complete archive at `skills/releases/<skill-name>/skill.zip`.

## Normal operating model

Workspace Skills are stable workflow shells. Mutable Platform/STPD truth stays in the owning repositories. Do not bump a Skill merely because repository SHAs, PRs, objectives, runtime artifacts, or research results changed. Update Skills only for trigger/routing/authority/tool/output-workflow changes or demonstrated recurring failures.

## Validation is layered

Keep these states separate:

1. `LOCAL_VALIDATION`: skill-creator validator/package, references/scripts, ZIP integrity and SHA-256.
2. `PRODUCT_SCAN`: actual ChatGPT product acceptance of the edited/uploaded Skill.
3. `DEPLOYMENT`: actual save/install state.
4. `REAL_INVOCATION`: representative behavior after the saved/installed update.

A local PASS or green GitHub CI is preflight evidence only. It does not prove the ChatGPT product accepted or saved the Skill.

## One-command update

The user can say `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills`.

The maintainer compares installed versions with the remote manifest, reuses canonical releases for deployment-only drift, rebuilds only genuinely changed Skills, validates/packages the full changed set, and selects the shortest product-supported handoff.

## Preferred product deployment

If the current ChatGPT conversation can actually render existing Skills as edited Skill cards/actions, prefer that route over ZIP.

Required behavior:

1. prepare and validate the complete changed Skill set;
2. if the product supports multiple edited cards/actions in one response, present all changed Skills together;
3. do not require the user to navigate to or pre-open Skill editors merely to expose the route;
4. leave only unavoidable product save/confirm actions to the user;
5. record each Skill's saved/installed/product result independently;
6. only force sequential interaction when the product surface itself requires it.

Do not promise that an edited Skill card will appear merely because one appeared previously. A prior 2026-08-28 reply promised a card below the message and no card rendered; this is explicit evidence that assistant instructions alone cannot force the product surface. The current product/tool surface must actually provide the capability.

Rendering an edited card is delivery evidence, not save/install evidence.

Priority order:

1. real conversation-delivered in-product edited Skill surface;
2. explicitly available and authorized deployment API that confirms the update;
3. verified per-Skill `skill.zip` fallback.

`skill.zip` remains a required release/validation artifact and rollback source even when it is not shown to the user. Multiple Skills remain separate packages; never create a multi-entrypoint Skill upload.

## GitHub governance

Eligible narrow Skill-update PRs named `chore/workspace/skill-update-*` may use the governed Skill auto-merge lane after all Skill Governance checks pass. Changes to routers, authority policy, validators, Actions workflows, CURRENT semantics, or this rollout policy require normal reviewed governance.

Repository merge does not itself install or publish a Skill in ChatGPT/Codex. Product deployment state must be reconciled separately with `skills/SKILL_SUITE_MANIFEST.json`.
