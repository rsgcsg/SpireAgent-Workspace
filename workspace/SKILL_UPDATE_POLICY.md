# SpireAgent Skill Update Policy

## Stable-Skill model

SpireAgent Workspace Skills are deliberately stable workflow/trigger bundles and should be updated **rarely**. They do not own mutable project status. Current-state work refreshes Workspace governance plus the exact owning Platform/STPD ref through GitHub.

Release a Workspace Skill only when its trigger, routing, authority/storage model, connector/tool workflow, output contract, or a demonstrated recurring failure pattern materially changes. Platform/STPD repo-owned Skills belong to their owning repositories.

## Product feasibility gate

Track independent states:

- `DIRECT_PROJECT_CHAT_RENDER`: whether the ordinary Project conversation actually rendered the requested native Skill card/action;
- `LOCAL_VALIDATION`: deterministic structure/package/integrity/hash tests;
- `PRODUCT_SCAN`: actual ChatGPT product acceptance of the created/modified Skill;
- `DEPLOYMENT`: actual save/install state;
- `DELIVERY`: the user actually received an actionable Skill action or retrievable package;
- `REAL_INVOCATION`: representative behavior after the saved/installed update.

Local validation and green CI are preflight evidence, not proof that ChatGPT accepted/saved the Skill or that the user actually received the artifact. When product behavior may have changed, check current official OpenAI documentation rather than relying only on remembered UI behavior.

## Observed Project-chat renderer evidence — 2026-08-28

Two controlled experiments showed partial rendering:

1. Eight locally validated SpireAgent Skills were prepared together; only `spireagent-workspace-governor` rendered as a native edited-Skill card.
2. Six update candidates were prepared after explicitly invoking the `@skill-creator` workflow; only `workspace-knowledge-librarian` rendered.

Record generic Project-chat suite rendering as `DIRECT_PROJECT_CHAT_RENDER=PARTIAL`.

Therefore:

- an exact-target card that actually appears is usable for that one Skill;
- one visible card never proves delivery of other prepared Skills;
- explicitly mentioning `@skill-creator` does not make generic multi-Skill rendering deterministic;
- do not use generic Project-chat multi-card rendering as a suite deployment mechanism.

## Final create/update convention

### One Skill

When exactly one Workspace Skill needs creation or update, first use the current working Project conversation. The request should explicitly include this product trigger phrase:

`Use @skill-creator to help me create a skill. Keep it conversational, and start by asking what the skill should do.`

Then provide the exact Skill-specific create/update requirements. For an existing Skill, also state:

- exact Skill name;
- this is an update, not a new same-name Skill;
- do not create a duplicate;
- use the currently installed Skill as the complete baseline;
- invoke built-in `skill-creator`;
- preserve and validate the complete Skill;
- finish through native Skill save/update UX.

If the current Project conversation actually renders the exact target edited-Skill card, use that card. If it does not, reuse the **same complete prompt** in:

`Plugins -> Skills -> Create -> Create with chat`

Chinese UI: `插件 -> 技能 -> 创建 -> 通过聊天创建`.

### More than one Skill

When several Skills genuinely need changes, batch the engineering analysis when useful, but deploy **one Skill at a time**. Produce one complete prompt per Skill, and include the same trigger phrase in every prompt:

`Use @skill-creator to help me create a skill. Keep it conversational, and start by asking what the skill should do.`

Do not depend on generic Project-chat multi-card rendering. The user enters one prompt, updates/saves that Skill, then moves to the next. This keeps target identity and product evidence unambiguous.

Do not make the user reconstruct requirements: the working Project conversation owns context, evidence, change design, and the complete prompt. A dedicated Skill Chat is the reliable fallback/native editing surface when the exact-target Project card is absent.

## Current suite deployment state — 2026-08-28

The eight governed Workspace Skills are now observed at their target installed versions and representative current-agent smoke passed. Canonical repository releases and the manifest are reconciled separately. Generic direct Project rendering remains `PARTIAL`.

The active product surface does not expose installed Skill package bytes or package SHA-256. Repository `package_sha256` therefore identifies the canonical validated **repository release archive**, not an observed ChatGPT-installed binary identity.

## One-command user update

`更新 SpireAgent Skills` and `一键更新 SpireAgent Skills` authorize the governed Workspace Skill update workflow: compare installed versions with the manifest, rebuild only genuinely changed Skills, validate the changed set, prepare per-Skill prompts, and reconcile the remote release state. Analysis may be batch-first; product update/save remains one Skill at a time unless a future product surface is explicitly proven safe for a true native batch.

## File delivery is a separate gate

Package existence and emitted Markdown are not delivery. For ZIP fallback:

1. verify archive existence, non-zero size, ZIP integrity, and SHA-256;
2. prefer a native file attachment/file card when actually exposed;
3. use Library retrieval only for files actually created/saved there;
4. when explicitly authorized, use a short-lived `SpireAgent-Workspace` `relay/*` branch as normal GitHub transport;
5. relay artifacts have zero canonical Skill authority and never merge to `develop`/`main`;
6. `sandbox:/mnt/data/...` is best-effort compatibility only and never proves `DELIVERY=PASS`;
7. if a transport is hidden or non-clickable, switch transport rather than repeating the same mechanism.

## Reconciliation closeout

Every explicit Skill update must reconcile:

1. installed Skill version/product state versus `skills/SKILL_SUITE_MANIFEST.json`;
2. `workspace/CURRENT.md` owning-repo pointers versus live GitHub refs when current-state claims are in scope.

Do not cache the Workspace repository's own future integration SHA inside CURRENT; updating the snapshot changes that SHA.

Remote writes belong to `github-remote-operator`. Merge/close/delete authority follows the user's explicit operating authorization and repository safety rules.

## Automatic merge boundary

Only same-repository PRs targeting `develop` whose branch starts with `chore/workspace/skill-update-` are eligible for the narrow Skill auto-merge lane, and only after every Skill Governance matrix job succeeds.

The narrow lane is for canonical Skill release/manifest reconciliation. Router, authority policy, validators, Actions workflows, or broader governance changes remain normal reviewed governance changes.
