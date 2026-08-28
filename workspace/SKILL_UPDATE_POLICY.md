# SpireAgent Skill Update Policy

## Stable-Skill model

SpireAgent Skills are stable workflow/trigger bundles. They do not own mutable project status. Current-state work refreshes `SpireAgent-Workspace` governance plus the exact owning Platform/STPD ref through GitHub.

Release a Skill only when its trigger, routing, authority/storage model, connector/tool workflow, output contract, or recurring failure pattern changes.

## Product feasibility gate

Track three independent states:

- `LOCAL_VALIDATION`: deterministic structure/package/integrity/hash tests;
- `PRODUCT_SCAN`: actual ChatGPT Skills upload result;
- `REAL_INVOCATION`: representative behavior after installation.

Local validation and green CI are preflight evidence, not proof that ChatGPT accepts the Skill. If the product reports invalid/review/blocked, record that exact state, reduce unnecessary risk surface without broadening authority, rebuild, and test one package at a time. Promote to canonical only after product acceptance.

The 2026-08-28 compatibility-safe replacements `spireagent-context-handoff@1.3.0`, `spireagent-workspace-governor@1.3.0`, and `workspace-skill-maintainer@1.3.0` were subsequently accepted by the ChatGPT Skill upload surface and observed as installed Skills. This is `PRODUCT_SCAN=PASS` / deployment evidence for those packages; it does not change Platform/STPD authority.

## One-command user update

`更新 SpireAgent Skills` and `一键更新 SpireAgent Skills` explicitly authorize the governed Skill update workflow: compare deployments with the manifest, reuse canonical packages for deployment-only drift, rebuild only genuinely changed Skills, validate/package, and prepare the governed remote update.

Repository update and ChatGPT installation remain separate actions unless a supported deployment API actually confirms installation.

## Reconciliation closeout

Every explicit Skill update or reported product upload result must close two common drift classes before it is called complete:

1. installed Skill version / observed product-scan state versus `skills/SKILL_SUITE_MANIFEST.json`;
2. `workspace/CURRENT.md` owning-repo pointers versus live GitHub refs.

If a product-accepted deployment is newer than the manifest, the remote canonical release is lagging and must be reconciled through the Skill-update lane. If CURRENT is stale, prepare a separate governance snapshot reconciliation. Do not cache the Workspace repository's own live `develop` SHA inside CURRENT because updating the file changes that SHA.

Remote writes still belong to `github-remote-operator` and require the user request to authorize the governed write workflow.

## Automatic merge boundary

Only same-repository PRs targeting `develop` whose branch starts with `chore/workspace/skill-update-` are eligible for custom Skill auto-merge, and only after every Skill Governance matrix job succeeds.

Auto-merge scope remains narrow:

- `skills/releases/**/skill.zip`
- `skills/SKILL_SUITE_MANIFEST.json`
- `skills/README.md`
- `workspace/SKILL_ROLLOUT.md`

Governance authority, router, CURRENT semantics, validators, Actions workflows, or this policy require a normal reviewed PR unless a future deterministic validator explicitly authorizes a narrower auto-sync path.

## Native GitHub auto-merge

Repository-level GitHub **Allow auto-merge** may be enabled as an operator convenience, but it is not the Skill safety mechanism. The custom Skill lane remains the authoritative scope gate.
