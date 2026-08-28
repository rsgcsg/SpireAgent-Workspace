# Skill Rollout

Canonical Skill release authority is `skills/SKILL_SUITE_MANIFEST.json`; each manifest entry binds one complete archive at `skills/releases/<skill-name>/skill.zip`.

## Normal operating model

Project-specific SpireAgent Skills are stable workflow shells. For current project truth they refresh `SpireAgent-Workspace` and the owning Platform/STPD exact ref through the GitHub connector rather than embedding frequently changing status.

Do not bump a Skill just because repository SHAs, PRs, objectives, runtime artifacts, or research results changed. Update Skills only for trigger/routing/authority/tool/output-workflow changes or demonstrated recurring failures.

## Validation is three-layered

Do not collapse these states:

1. `LOCAL_VALIDATION`: skill-creator validator/package, ZIP integrity, referenced files/scripts, and SHA-256.
2. `PRODUCT_SCAN`: actual ChatGPT Skills upload result. This is authoritative for ChatGPT deployability.
3. `REAL_INVOCATION`: representative post-install behavior smoke test.

A local PASS or green GitHub CI does **not** prove ChatGPT accepts a Skill. If the UI reports `无效技能` / `Invalid skill`, record it as product evidence and do not advertise the package as deployable.

### Observed ChatGPT upload scan — 2026-08-28

PASS:

- `spireagent-codex-prompt-writer@2.2.0`
- `spireagent-conversation-organizer@2.3.0`
- `spireagent-explainer@2.2.0`

INVALID:

- `spireagent-context-handoff@1.2.0`
- `spireagent-workspace-governor@1.2.0`
- `workspace-skill-maintainer@1.2.1`

Compatibility-safe 1.3.0 candidates were rebuilt locally for the three invalid Skills by narrowing implicit authority and adding explicit read/write/share/install boundaries. They remain `PRODUCT_SCAN=PENDING` and are **not** canonical until ChatGPT accepts them.

## One-command update

The user can say `更新 SpireAgent Skills` or `一键更新 SpireAgent Skills`.

The maintainer compares installed versions with the remote manifest, reuses canonical packages for deployment-only drift, rebuilds only genuinely changed Skills, and returns only changed packages. Eligible narrow Skill-update PRs named `chore/workspace/skill-update-*` auto-merge to `develop` after all Skill Governance jobs pass.

Changes to routers, authority policy, validators, or workflow files are not auto-merge eligible.

## GitHub auto-merge modes

The governed Skill-update lane currently uses the `Skill Governance` workflow to squash-merge only after the 8/8 matrix and changed-path whitelist pass. PR #6 demonstrated that this works while repository-level `allow_auto_merge=false`.

Enabling GitHub's native repository **Allow auto-merge** setting is recommended as an additional operator convenience. It is not a replacement for the Skill-update validation/path gate. Native PR auto-merge only becomes useful when the target PR is blocked on required reviews/status checks; keep required checks/rules explicit rather than relying on the repository toggle alone.

## Product deployment

Repository merge does not install or publish Skills in ChatGPT/Codex. When no supported deployment write API is available, upload changed Skills through the product Skills surface. When diagnosing scanner failures, upload changed candidates one at a time.
