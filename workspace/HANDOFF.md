# Workspace Handoff

## Current governance correction — 2026-08-28

Workspace is a small durable bridge between ChatGPT web Workspace/Library and Codex/GitHub projects. Platform and STPD remain self-governed owning repositories.

### Skill rollout UX

A prior response incorrectly imposed one-by-one Skill updates and promised that an edited Skill card would appear below the reply. No card rendered. Treat this as real product-surface evidence:

- prepare the full changed Skill set first;
- if the current ChatGPT product can actually render multiple edited Skill cards/actions in one response, present all changed Skills together;
- do not impose one-by-one sequencing unless the product itself requires it;
- do not require users to pre-open editors merely to expose the route;
- never promise a card that the current product/tool surface cannot actually render;
- keep `skill.zip` as validation/release/rollback artifact and fallback transport.

### Prepared Skill candidates

- `workspace-skill-maintainer@1.6.1`: batch-first rollout and truthful edit-card capability detection; LOCAL_VALIDATION PASS.
- `workspace-knowledge-librarian@1.3.0`: ChatGPT Library role and UI-vs-agent-CRUD boundary; LOCAL_VALIDATION PASS.
- `spireagent-codex-prompt-writer@2.3.0`: owning-repo-first Codex grounding with optional Workspace enrichment; LOCAL_VALIDATION PASS.
- `spireagent-workspace-governor@1.5.0` is already observed installed and contains the current small Workspace relay model.

Do not promote candidate releases/manifest entries until actual product save/acceptance state is confirmed. The Workspace PR remains the governance lane for the policy correction.
