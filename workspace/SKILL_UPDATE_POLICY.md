# SpireAgent Skill Update Policy

## Stable-Skill model

SpireAgent Workspace Skills are stable workflow/trigger bundles. They do not own mutable project status. Current-state work refreshes Workspace governance plus the exact owning Platform/STPD ref through GitHub.

Release a Workspace Skill only when its trigger, routing, authority/storage model, connector/tool workflow, output contract, or a demonstrated recurring failure pattern changes. Platform/STPD repo-owned Skills belong to their owning repositories.

## Product feasibility gate

Track three independent states:

- `LOCAL_VALIDATION`: deterministic structure/package/integrity/hash tests;
- `PRODUCT_SCAN`: actual ChatGPT product acceptance of the edited/uploaded Skill;
- `REAL_INVOCATION`: representative behavior after the saved/installed update.

Local validation and green CI are preflight evidence, not proof that ChatGPT accepted or saved the Skill.

## One-command user update

`更新 SpireAgent Skills` and `一键更新 SpireAgent Skills` explicitly authorize the governed Workspace Skill update workflow: compare deployments with the manifest, reuse canonical release artifacts for deployment-only drift, rebuild only genuinely changed Skills, validate/package them, and prepare the governed remote reconciliation.

### Default delivery contract

If the current ChatGPT conversation can render an existing Skill as an **edited Skill card**, use that route before ZIP delivery.

For multiple changed Skills:

1. prepare/validate one Skill;
2. present that existing Skill directly in the conversation as edited;
3. do **not** ask the user to navigate to or pre-open its editor merely to expose the surface;
4. stop at the final `Save changes` / `保存更改` action;
5. verify the resulting installed/version/product state;
6. only then present the next Skill.

Rendering an edited card is delivery evidence, not save/install evidence. Never claim the deployment completed until the product confirms it or the installed version can be re-read.

A complete validated `skill.zip` remains a release/rollback artifact. It is the user-facing fallback only when the conversation cannot provide an edited Skill card, no supported deployment API is available, or the user explicitly requests a ZIP.

## Reconciliation closeout

Every explicit Skill update or reported product result must close two common drift classes before it is called complete:

1. installed Skill version / observed product state versus `skills/SKILL_SUITE_MANIFEST.json`;
2. `workspace/CURRENT.md` owning-repo pointers versus live GitHub refs.

If a product-accepted deployment is newer than the manifest, the remote canonical release is lagging and must be reconciled through the Skill-update lane. If CURRENT is stale, prepare a separate governance snapshot reconciliation. Do not cache the Workspace repository's own live `develop` SHA inside CURRENT because updating the file changes that SHA.

Remote writes belong to `github-remote-operator` and still require explicit user authorization for the governed write workflow.

## Automatic merge boundary

Only same-repository PRs targeting `develop` whose branch starts with `chore/workspace/skill-update-` are eligible for custom Skill auto-merge, and only after every Skill Governance matrix job succeeds.

Auto-merge scope remains narrow:

- `skills/releases/**/skill.zip`
- `skills/SKILL_SUITE_MANIFEST.json`
- `skills/README.md`
- `workspace/SKILL_ROLLOUT.md`

Governance authority, router, CURRENT semantics, validators, Actions workflows, or this policy require a normal reviewed PR unless a future deterministic validator explicitly authorizes a narrower auto-sync path.

Repository-level GitHub **Allow auto-merge** may be enabled as an operator convenience, but it is not the Skill safety mechanism. The custom Skill lane remains the authoritative scope gate.
