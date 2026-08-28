# Skill Rollout

Canonical Skill release authority is `skills/SKILL_SUITE_MANIFEST.json`; each manifest entry binds one complete archive at `skills/releases/<skill-name>/skill.zip`.

## Normal operating model

Workspace Skills are stable workflow shells. Mutable Platform/STPD truth stays in the owning repositories. Do not bump a Skill merely because repository SHAs, PRs, objectives, runtime artifacts, or research results changed. Update Skills only for trigger/routing/authority/tool/output-workflow changes or demonstrated recurring failures.

## Validation is layered

Keep these states separate:

1. `LOCAL_VALIDATION`: skill-creator validator/package, references/scripts, ZIP integrity and SHA-256.
2. `PRODUCT_SCAN`: actual ChatGPT product acceptance of the edited/uploaded Skill.
3. `DEPLOYMENT`: actual save/install state.
4. `DELIVERY`: the user actually received an actionable Skill action or retrievable package.
5. `REAL_INVOCATION`: representative behavior after the saved/installed update.

A local PASS or green GitHub CI is preflight evidence only. It does not prove the ChatGPT product accepted or saved the Skill, and it does not prove the user received the artifact.

When rollout behavior is uncertain, check current official OpenAI product/developer documentation. Current documentation supports creating or modifying Skills through chat and prompting installation. Current Library documentation says files uploaded to or created in ChatGPT are saved to Library where available and can be downloaded there. No public OpenAI documentation reviewed here defines `sandbox:/mnt/data/...` as a stable user-facing download contract.

## One-command update

The user can say `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills`.

The maintainer compares installed versions with the remote manifest, reuses canonical releases for deployment-only drift, rebuilds only genuinely changed Skills, validates/packages the full changed set, and selects the shortest actually supported handoff.

## Preferred product deployment

Priority order:

1. real conversation-delivered in-product edited Skill surface;
2. explicitly available and authorized deployment API/action that confirms the update;
3. native generated-file attachment/file card for the validated `skill.zip`;
4. ChatGPT Library retrieval/download for files actually created/saved there;
5. `sandbox:` Markdown only as best-effort compatibility when the active client is known to render it.

Prepare the complete changed Skill set first. Present multiple edited Skill cards together only when the product actually demonstrates multi-card support. Official Skills documentation does not currently guarantee that one chat turn can render several edited Skill cards.

Do not require editor pre-navigation merely to make an in-product route work. Do not promise cards or attachments based on earlier screenshots. Rendering an edited card is delivery evidence, not save/install evidence.

## File-delivery gate

For every user-facing ZIP fallback:

1. verify the exact archive exists, is non-empty, passes `unzip -t` or equivalent integrity checking, and matches the expected SHA-256;
2. prefer a native file attachment/file card when the current ChatGPT surface exposes one;
3. where the file is actually created/saved in ChatGPT and Library is available, provide the exact filename and use Library as the durable download surface;
4. do not treat an emitted `sandbox:` Markdown path as delivery success;
5. if the user reports a blank/hidden/non-clickable sandbox link, record `DELIVERY=FAIL` and switch transport rather than repeating the same mechanism;
6. if no verified product-native transport is exposed, record `DELIVERY_BLOCKED_CURRENT_SURFACE` and say so explicitly.

`skill.zip` remains a required release/validation artifact and rollback source. Multiple Skills remain separate Skill packages unless they are intentionally packaged through a supported higher-level product such as a Plugin.

## Workspace suite option

Current official Plugin documentation says one plugin can contain multiple Skills. If suite-wide updates become frequent, evaluate a **skill-only SpireAgent Workspace Plugin** so Workspace Skills can be governed and installed as a suite rather than relying on repeated independent personal-Skill update flows. This is an evaluation item, not yet an adopted dependency.

## GitHub governance

Eligible narrow Skill-update PRs named `chore/workspace/skill-update-*` may use the governed Skill auto-merge lane after all Skill Governance checks pass. Changes to routers, authority policy, validators, Actions workflows, CURRENT semantics, or this rollout policy require normal reviewed governance.

Repository merge does not itself install or publish a Skill in ChatGPT/Codex. Product deployment state must be reconciled separately with `skills/SKILL_SUITE_MANIFEST.json`.
