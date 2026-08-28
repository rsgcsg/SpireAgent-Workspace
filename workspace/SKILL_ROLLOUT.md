# Skill Rollout

Canonical Skill release authority is `skills/SKILL_SUITE_MANIFEST.json`; each manifest entry binds one complete archive at `skills/releases/<skill-name>/skill.zip`.

## Normal operating model

Workspace Skills are stable workflow shells. Mutable Platform/STPD truth stays in the owning repositories. Do not bump a Skill merely because repository SHAs, PRs, objectives, runtime artifacts, or research results changed. Update Skills only for trigger/routing/authority/tool/output-workflow changes or demonstrated recurring failures.

## Validation is layered

Keep these states separate:

1. `DIRECT_PROJECT_CHAT_RENDER`: whether an ordinary Project conversation actually rendered the requested native Skill card/action.
2. `LOCAL_VALIDATION`: skill-creator validator/package, references/scripts, ZIP integrity and SHA-256.
3. `PRODUCT_SCAN`: actual ChatGPT product acceptance of the created/modified/uploaded Skill.
4. `DEPLOYMENT`: actual save/install state.
5. `DELIVERY`: the user actually received an actionable Skill action or retrievable package.
6. `REAL_INVOCATION`: representative behavior after the saved/installed update.

A local PASS or green GitHub CI is preflight evidence only. It does not prove the ChatGPT product accepted or saved the Skill, and it does not prove the user received the artifact.

## Observed direct-render result

Two ordinary Project-chat experiments on 2026-08-28 both produced partial native rendering:

- first test: eight complete locally validated SpireAgent Skill packages were prepared; only the `spireagent-workspace-governor` edited-Skill card was visible;
- second test: six complete update candidates were prepared after explicitly invoking the `@skill-creator` workflow; only the `workspace-knowledge-librarian` edited-Skill card was visible.

Treat generic Project-chat suite rendering as `DIRECT_PROJECT_CHAT_RENDER=PARTIAL`.

Consequences:

- a visible exact-target card may be used opportunistically for that Skill;
- never infer delivery of other Skills from one visible card;
- explicit `@skill-creator` invocation in a generic Project chat does not make multi-Skill card rendering deterministic;
- generic Project-chat multi-card rendering is not the default Workspace suite-update transport;
- keep the dedicated Skill-chat route as the reliable default until a future controlled test proves complete, repeatable multi-Skill rendering and save behavior.

## Default product deployment

The reliable default create/update path is the dedicated native Skill-chat surface:

`Plugins -> Skills -> Create -> Create with chat`

The working Project conversation prepares the complete change and gives the user one exact **Skill Chat Prompt**. For updates, that prompt must name the existing Skill, say not to create a duplicate, use the currently installed Skill as baseline, include the complete validated change set, require built-in `skill-creator`, preserve/validate the full Skill, and finish through the native update/install UX.

For new Skills, use the same dedicated Skill-chat surface with a complete creation prompt describing trigger, workflow, tools/connectors, outputs, and authority/safety boundaries.

The working Project conversation remains the place where project context and engineering analysis are assembled; the Skill-chat conversation is the native editing/install surface.

If the current Project conversation already renders the exact target Skill card, use that card only as an opportunistic shortcut for the target Skill. Do not wait for or promise the remaining cards, and do not promote ordinary Project-chat rendering to the default based on a single visible card. If the dedicated Skill-chat route is unavailable or fails, use this fallback order:

1. explicitly available and authorized deployment API/action;
2. native generated-file attachment/file card for the validated `skill.zip`;
3. ChatGPT Library retrieval/download for files actually created/saved there;
4. explicitly authorized short-lived Workspace Git relay with normal GitHub download;
5. `sandbox:` only as best-effort compatibility.

Rendering an edited card is delivery evidence, not save/install evidence.

## Multi-Skill updates

Prepare and validate the complete changed Skill set together. By default generate **one Skill Chat Prompt per changed Skill** so target identity stays unambiguous. A combined prompt is acceptable only after the dedicated Skill-chat surface has been explicitly verified to update several existing Skills correctly in one workflow.

Do not confuse preparation batching with deployment batching: analysis may be batch-first while product save/install remains per Skill.

## File-delivery gate

For every user-facing ZIP fallback:

1. verify the exact archive exists, is non-empty, passes `unzip -t` or equivalent integrity checking, and matches the expected SHA-256;
2. prefer a native file attachment/file card when the current ChatGPT surface exposes one;
3. where the file is actually created/saved in ChatGPT and Library is available, provide the exact filename and use Library as the durable download surface;
4. when native file delivery fails and the user authorizes it, use `SpireAgent-Workspace` only as a short-lived `relay/*` download transport;
5. relay payloads never become canonical Skill releases and are never merged into Workspace `develop`/`main`; remove them after product acceptance/save or TTL expiry;
6. do not treat an emitted `sandbox:` Markdown path as delivery success;
7. if the user reports a blank/hidden/non-clickable sandbox link, record `DELIVERY=FAIL` and switch transport;
8. if no verified transport is exposed, record `DELIVERY_BLOCKED_CURRENT_SURFACE` explicitly.

`skill.zip` remains a required release/validation artifact and rollback source. Multiple Skills remain separate Skill packages unless intentionally packaged through a supported higher-level product such as a Plugin.

## Workspace suite option

Current official Plugin documentation says one plugin can contain multiple Skills. If suite-wide updates become frequent, evaluate a **skill-only SpireAgent Workspace Plugin** so Workspace Skills can be governed and installed as a suite rather than relying on repeated independent personal-Skill update flows. This is an evaluation item, not yet an adopted dependency.

## GitHub governance

Eligible narrow Skill-update PRs named `chore/workspace/skill-update-*` may use the governed Skill auto-merge lane after all Skill Governance checks pass. Changes to routers, authority policy, validators, Actions workflows, CURRENT semantics, or this rollout policy require normal reviewed governance.

Repository merge does not itself install or publish a Skill in ChatGPT/Codex. Product deployment state must be reconciled separately with `skills/SKILL_SUITE_MANIFEST.json`.
