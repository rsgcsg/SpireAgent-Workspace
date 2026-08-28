# SpireAgent Skill Update Policy

## Stable-Skill model

SpireAgent Workspace Skills are stable workflow/trigger bundles. They do not own mutable project status. Current-state work refreshes Workspace governance plus the exact owning Platform/STPD ref through GitHub.

Release a Workspace Skill only when its trigger, routing, authority/storage model, connector/tool workflow, output contract, or a demonstrated recurring failure pattern changes. Platform/STPD repo-owned Skills belong to their owning repositories.

## Product feasibility gate

Track independent states:

- `DIRECT_PROJECT_CHAT_RENDER`: whether the ordinary Project conversation actually rendered the requested native Skill card/action;
- `LOCAL_VALIDATION`: deterministic structure/package/integrity/hash tests;
- `PRODUCT_SCAN`: actual ChatGPT product acceptance of the created/modified/uploaded Skill;
- `DEPLOYMENT`: actual save/install state;
- `DELIVERY`: the user actually received an actionable Skill action or retrievable package;
- `REAL_INVOCATION`: representative behavior after the saved/installed update.

Local validation and green CI are preflight evidence, not proof that ChatGPT accepted/saved the Skill or that the user actually received the artifact.

When Skill creation/edit/install/file-delivery behavior may have changed, check current official OpenAI Help/Developer documentation instead of relying only on remembered UI behavior.

## Observed Project-chat renderer evidence — 2026-08-28

Two separate ordinary Project-chat experiments now show the same partial behavior:

1. Eight complete locally validated SpireAgent Skill packages were prepared together. The client displayed only the native `spireagent-workspace-governor` edited-Skill card; the other seven did not render as cards/downloads.
2. Six complete update candidates were then prepared again after explicitly invoking the `@skill-creator` workflow in the same Project chat. The client displayed only the native `workspace-knowledge-librarian` edited-Skill card; the other five did not render.

Record generic Project-chat suite rendering as:

`DIRECT_PROJECT_CHAT_RENDER=PARTIAL`

Interpretation:

- generic Project-chat native Skill rendering exists, but is not deterministic enough to be the Workspace suite-update transport;
- a visible exact-target card may be used opportunistically for that specific Skill;
- one rendered card does not prove the other prepared Skills were delivered;
- explicitly invoking `@skill-creator` in an ordinary Project chat does not by itself make multi-Skill card rendering reliable;
- do not keep retrying the same renderer merely because one card appeared previously.

This is now sufficient product evidence to keep the dedicated Skill Chat route as the reliable default unless a future controlled test demonstrates complete, repeatable multi-Skill native rendering and save behavior.

## Default native Skill update path

For normal Workspace Skill creation or update, the working Project conversation should **prepare the exact change** and then hand the user one complete **Skill Chat Prompt** for the dedicated product surface:

`Plugins -> Skills -> Create -> Create with chat`

For an existing Skill, the prompt must:

1. name the target Skill exactly;
2. state that this is an update, not a new same-name Skill;
3. say **do not create a duplicate**;
4. say **use the currently installed Skill as the baseline**;
5. include the complete requested behavior/constraint changes;
6. instruct ChatGPT to invoke built-in `skill-creator`;
7. preserve the full Skill structure and validate the complete Skill;
8. finish through the native Skill update/install flow;
9. report the product save/install result back to the working conversation for reconciliation.

For a new Skill, use the same dedicated Skill-chat surface; omit the existing-Skill/no-duplicate clauses and provide the complete trigger, workflow, tools, outputs, and safety constraints.

This split is deliberate:

- the working Project conversation owns project context, cross-repo evidence, design, audit, and exact prompt preparation;
- the dedicated Skill-chat conversation owns native Skill creation/edit/install UX.

Do not make the user manually reconstruct requirements. The maintainer must provide the complete prompt.

If the current conversation actually renders the exact target Skill card/action, that card may be used for that Skill as an opportunistic shortcut. Do not infer batch delivery from one card, and do not make ordinary Project-chat rendering the default merely because a single card appeared. If the dedicated Skill-chat path is unavailable or fails, fall back to a supported deployment API/action, native generated-file/Library delivery, or an explicitly authorized short-lived Workspace Git relay. `sandbox:/mnt/data/...` remains best-effort compatibility only and never proves delivery.

## One-command user update

`更新 SpireAgent Skills` and `一键更新 SpireAgent Skills` explicitly authorize the governed Workspace Skill update workflow: compare deployments with the manifest, reuse canonical release artifacts for deployment-only drift, rebuild only genuinely changed Skills, validate/package the changed set, prepare one native Skill Chat Prompt per changed Skill by default, and prepare governed remote reconciliation.

Analysis/preparation may be batch-first. Deployment defaults to one dedicated Skill Chat Prompt per changed Skill so identity remains unambiguous. A combined multi-Skill prompt is acceptable only after the dedicated Skill-chat surface has been explicitly verified to update several existing Skills correctly.

## File delivery is a separate gate

The 2026-08-28 repeated blank-link failure established that package existence and emitted Markdown are not delivery.

For each ZIP fallback:

1. verify the final archive exists, is non-empty, passes ZIP integrity, and matches the expected SHA-256;
2. prefer a native generated-file attachment/file card when the current conversation exposes one;
3. when ChatGPT created/saved the file and Library is available, provide the exact filename and use Library as the durable retrieval/download surface;
4. if product-native delivery is unavailable, an explicitly authorized short-lived `SpireAgent-Workspace` `relay/*` branch may expose a normal GitHub download URL;
5. relay artifacts are delivery-only, have zero canonical Skill authority, are never merged into Workspace `develop`/`main`, and must be deleted after product acceptance/save or TTL expiry;
6. treat `sandbox:/mnt/data/...` as an internal compatibility reference, not as the product contract;
7. if a sandbox link is blank, hidden, or non-clickable, set `DELIVERY=FAIL` and switch transport rather than repeating the same mechanism;
8. if no verified transport is available, report `DELIVERY_BLOCKED_CURRENT_SURFACE` instead of claiming success.

Never claim `DELIVERY=PASS` from file existence, hash output, assistant intent, emitted sandbox Markdown, or another Skill's visible card.

## Suite-level update option

If recurring Workspace-wide Skill updates make per-Skill product installation expensive, evaluate a **skill-only Workspace Plugin**. Current official Plugin documentation supports a single plugin containing multiple Skills. This remains an evaluation item until its Business-workspace creation/update/share behavior is verified in product.

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
