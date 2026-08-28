# SpireAgent Skill Update Policy

## Stable-Skill model

SpireAgent Workspace Skills are stable workflow/trigger bundles. They do not own mutable project status. Current-state work refreshes Workspace governance plus the exact owning Platform/STPD ref through GitHub.

Release a Workspace Skill only when its trigger, routing, authority/storage model, connector/tool workflow, output contract, or a demonstrated recurring failure pattern changes. Platform/STPD repo-owned Skills belong to their owning repositories.

## Product feasibility gate

Track five independent states:

- `LOCAL_VALIDATION`: deterministic structure/package/integrity/hash tests;
- `PRODUCT_SCAN`: actual ChatGPT product acceptance of the edited/uploaded Skill;
- `DEPLOYMENT`: actual save/install state;
- `DELIVERY`: user received an actionable card/action or visible working download link;
- `REAL_INVOCATION`: representative behavior after the saved/installed update.

Local validation and green CI are preflight evidence, not proof that ChatGPT accepted/saved the Skill or that the user actually received the artifact.

When Skill creation/edit/install behavior itself may have changed, check current official OpenAI Help/Developer documentation instead of relying only on remembered UI behavior. Official documentation can confirm a product capability without proving every assistant runtime exposes a callable card-rendering action.

## One-command user update

`更新 SpireAgent Skills` and `一键更新 SpireAgent Skills` explicitly authorize the governed Workspace Skill update workflow: compare deployments with the manifest, reuse canonical release artifacts for deployment-only drift, rebuild only genuinely changed Skills, validate/package the full changed set, and prepare governed remote reconciliation.

### Default delivery contract

If the current ChatGPT conversation can actually render existing Skills as **edited Skill cards/actions**, use that route before ZIP delivery.

For multiple changed Skills:

1. prepare and validate the complete changed set first;
2. if the product supports multiple edited cards/actions in one response, present all changed Skills together;
3. do not ask the user to pre-open editors merely to expose the surface;
4. leave only unavoidable `Save changes` / `保存更改` or equivalent product confirmations to the user;
5. record each Skill's product/deployment/delivery result independently;
6. only use sequential handoff when the product itself requires it.

Do not infer a callable/renderable Skill-edit action from a screenshot, prior conversation, or the existence of the Skills UI. Never promise a card will appear unless the current surface can actually produce it. Rendering an edited card is delivery evidence, not save/install evidence.

A complete validated `skill.zip` remains a release/rollback artifact and deterministic user-facing fallback. If no real in-product action is exposed, return verified clickable packages for the whole changed set in the same response. Never leave the user with neither cards nor download links.

### ZIP delivery is a separate gate

The 2026-08-28 repeated blank-link failure established that having a ZIP under a working directory is not enough. For every fallback package:

1. restage the final archive to a simple unique file directly under `/mnt/data`;
2. verify the exact final path exists and is non-empty;
3. run ZIP integrity validation and SHA-256 on that exact final path;
4. emit a literal standalone Markdown link such as `[Download <skill>](sandbox:/mnt/data/<filename>.zip)`;
5. keep link text visible in normal prose, not only in a table/bare bullet;
6. if the user reports blank/missing links, set `DELIVERY=FAIL`, restage to fresh top-level filenames, re-verify, and immediately issue replacement links.

Never claim `DELIVERY=PASS` from file existence, hash output, or assistant intent alone.

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
