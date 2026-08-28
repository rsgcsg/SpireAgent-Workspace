# Skill Rollout

Canonical Workspace Skill release authority is `skills/SKILL_SUITE_MANIFEST.json`; each manifest entry binds one validated repository archive at `skills/releases/<skill-name>/skill.zip`.

## Normal operating model

Workspace Skills are stable workflow shells and should change rarely. Mutable Platform/STPD truth stays in the owning repositories. Do not bump a Skill merely because SHAs, PRs, objectives, runtime artifacts, or research results changed.

## Validation layers

Keep these states separate:

1. `DIRECT_PROJECT_CHAT_RENDER`;
2. `LOCAL_VALIDATION`;
3. `PRODUCT_SCAN`;
4. `DEPLOYMENT`;
5. `DELIVERY`;
6. `REAL_INVOCATION`.

A local PASS, package hash, or green GitHub CI cannot substitute for product acceptance/save or real invocation.

## Direct-render evidence

Two 2026-08-28 Project-chat experiments were partial:

- 8 prepared Skills -> only the Governor card rendered;
- 6 update candidates with explicit `@skill-creator` invocation -> only the Librarian card rendered.

Therefore generic Project-chat suite rendering remains `PARTIAL`. An exact-target card that actually appears can be used for that Skill, but generic multi-card rendering is not a suite transport.

## Final product update flow

### One Skill

Start in the current Project conversation and include:

`Use @skill-creator to help me create a skill. Keep it conversational, and start by asking what the skill should do.`

Follow it with the complete Skill-specific request. For an existing Skill, say update-not-create, do not create a duplicate, use the currently installed Skill as baseline, invoke built-in `skill-creator`, preserve/validate the full Skill, and finish through native save/update UX.

If the exact target card renders, use it. If it does not, reuse the same complete prompt in:

`Plugins -> Skills -> Create -> Create with chat`

### Multiple Skills

Analyze the changed set together when efficient, but generate one complete prompt per Skill. Include the same trigger phrase in **every** prompt and update/save one Skill at a time. Do not rely on a generic Project-chat batch renderer.

The working Project conversation owns project context, evidence, design, and prompt preparation. Dedicated Skill Chat is the reliable fallback/native editing surface when an exact-target Project card is absent.

## Current reconciled state — 2026-08-28

All eight governed Workspace Skills are observed at the target installed versions recorded in the manifest. Product scan/deployment/delivery and representative current-agent smoke are recorded separately from repository package validation. Generic Project rendering remains `PARTIAL`.

The product surface does not expose installed Skill package bytes/hash. Repository `package_sha256` is therefore the identity of the canonical validated **repository archive**, not a claimed ChatGPT package-byte identity.

## File fallback

When native Skill editing is unavailable:

1. use an explicitly available deployment action/API if supported;
2. prefer a native generated-file/file card;
3. use Library only for files actually saved there;
4. use an explicitly authorized short-lived Workspace Git relay when necessary;
5. use `sandbox:` only as best-effort compatibility.

A hidden/non-clickable link is not delivery. Relay payloads have zero canonical authority and never merge to Workspace integration branches.

## GitHub governance

Narrow `chore/workspace/skill-update-*` PRs may use the governed Skill auto-merge lane only after all Skill Governance checks pass. Broader router/policy/validator/workflow changes remain normal governance work.

Repository merge does not install a Skill in ChatGPT; product deployment evidence stays separate.
