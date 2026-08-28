# SpireAgent Skill Update Policy

## Stable-Skill model

SpireAgent Workspace Skills are stable workflow/trigger bundles. They do not own mutable project status. Current-state work refreshes Workspace governance plus the exact owning Platform/STPD ref through GitHub.

Release a Workspace Skill only when its trigger, routing, authority/storage model, connector/tool workflow, output contract, or a demonstrated recurring failure pattern changes. Platform/STPD repo-owned Skills belong to their owning repositories.

## Product feasibility gate

Track five independent states:

- `LOCAL_VALIDATION`: deterministic structure/package/integrity/hash tests;
- `PRODUCT_SCAN`: actual ChatGPT product acceptance of the edited/uploaded Skill;
- `DEPLOYMENT`: actual save/install state;
- `DELIVERY`: the user actually received an actionable Skill action or a retrievable package;
- `REAL_INVOCATION`: representative behavior after the saved/installed update.

Local validation and green CI are preflight evidence, not proof that ChatGPT accepted/saved the Skill or that the user actually received the artifact.

When Skill creation/edit/install/file-delivery behavior may have changed, check current official OpenAI Help/Developer documentation instead of relying only on remembered UI behavior. Official documentation currently confirms that ChatGPT can create or modify Skills through chat and prompt installation, and that files uploaded to or created in ChatGPT are saved to Library where Library is available. It does **not** define `sandbox:/mnt/data/...` Markdown as a stable user-facing download contract.

## One-command user update

`更新 SpireAgent Skills` and `一键更新 SpireAgent Skills` explicitly authorize the governed Workspace Skill update workflow: compare deployments with the manifest, reuse canonical release artifacts for deployment-only drift, rebuild only genuinely changed Skills, validate/package the full changed set, and prepare governed remote reconciliation.

### Default delivery contract

Use the strongest product-visible surface actually available:

1. real conversation-delivered edited Skill card/action;
2. an explicitly available and authorized Skill deployment API/action;
3. a native generated-file attachment/file card for the complete validated `skill.zip`;
4. Library retrieval/download for a file actually created/saved in ChatGPT;
5. `sandbox:` Markdown only as best-effort compatibility when the current client is known to render it.

For multiple changed Skills, prepare and validate the complete changed set first. Present multiple edited cards together only when the product actually demonstrates that capability. Current official Skills documentation confirms chat-based Skill creation/modification but does not promise multi-card batch rendering in a single turn.

Do not require the user to pre-open editors merely to expose a route. Never promise a card, file attachment, or download that the current surface has not actually produced. Rendering an edited card is delivery evidence, not save/install evidence.

### File delivery is a separate gate

The 2026-08-28 repeated blank-link failure established that package existence and emitted Markdown are not delivery.

For each ZIP fallback:

1. verify the final archive exists, is non-empty, passes ZIP integrity, and matches the expected SHA-256;
2. prefer a native generated-file attachment/file card when the current conversation exposes one;
3. when ChatGPT created/saved the file and Library is available, provide the exact filename and use Library as the durable retrieval/download surface;
4. treat `sandbox:/mnt/data/...` as an internal compatibility reference, not as the product contract;
5. if a sandbox link is blank, hidden, or non-clickable, set `DELIVERY=FAIL` and **switch transport** rather than repeatedly restaging/re-emitting the same mechanism;
6. if no product-native attachment, Library retrieval, deployment action, or other verified transport is available, report `DELIVERY_BLOCKED_CURRENT_SURFACE` instead of claiming success.

Never claim `DELIVERY=PASS` from file existence, hash output, assistant intent, or emitted sandbox Markdown alone.

## Suite-level update option

If recurring Workspace-wide Skill updates make per-Skill product installation expensive, evaluate a **skill-only Workspace Plugin**. Current official Plugin documentation supports a single plugin containing multiple Skills. This is the preferred direction to investigate for one-install/one-governance suite UX; do not assume the existing personal-Skill chat editor can batch-render all Skill updates until the product proves that capability.

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
