# Workspace Handoff

## Current governance correction — 2026-08-28

Workspace is a small durable bridge between ChatGPT web Workspace/Library and Codex/GitHub projects. Platform and STPD remain self-governed owning repositories.

### Bounded web research

Public web research is allowed when it materially resolves a current external fact, upstream dependency/tool behavior, standard/advisory, or mature public solution. Project facts still come from exact owning-repo code/evidence. Prefer recent curated Workspace references before repeating a broad search, prefer official/primary sources, and stop when the decision is supported.

Codex prompts may allow the same bounded research. Do not give every subagent independent web research by default; use the lead or one focused research worker for a shared external question and pass a concise result to implementation workers.

See `workspace/WEB_RESEARCH_POLICY.md` and `workspace/CODEX_MODEL_AND_CREDIT_POLICY.md`.

### External tooling conclusion

Current best fit is still the small Git relay + Skills/Plugins + owning-repo Agent OS. Apps with sync may help repeated external knowledge. A narrow MCP or Codex App Server integration should be added only if a concrete missing interface justifies a custom bridge. Symphony becomes relevant only if many parallel Codex tasks need a queue/control plane.

See `workspace/EXTERNAL_AGENT_TOOLING.md`.

### Skill rollout UX

Current official OpenAI documentation confirms that ChatGPT can create or modify Skills through chat and prompt installation. However, a prior response incorrectly promised that an edited Skill card would appear below the reply and no card rendered. Treat this as real product-surface evidence:

- prepare the full changed Skill set first;
- if the current ChatGPT product can actually render multiple edited Skill cards/actions in one response, present all changed Skills together;
- do not impose one-by-one sequencing unless the product itself requires it;
- do not require users to pre-open editors merely to expose the route;
- never promise a card that the current product/tool surface cannot actually render;
- if no real card/deployment action appears, return verified Skill packages in the same response so the user is never left with neither cards nor links.

### Prepared Skill candidates

All locally validate and supersede earlier uninstalled candidates:

- `spireagent-workspace-governor@1.6.0` — SHA-256 `a595f553a73932cc77816f9cbd8bdeb49c092a5d78f86877c9c7b537fde88585`: bounded web-research routing and durable curation.
- `workspace-knowledge-librarian@1.4.0` — SHA-256 `4ce48ee9db227abc76b6b4bb1d12c1ed1a284b951609e6723ea2b11919470fa0`: web-source lifecycle and promotion rules.
- `spireagent-codex-prompt-writer@2.4.0` — SHA-256 `010c70cd9c19614e5a1aa090f461bdb614e8f1fbd01eaff629122e5d9aa6c7d9`: bounded Codex web research plus token-aware subagent/Skill policy.
- `workspace-skill-maintainer@1.7.0` — SHA-256 `cb1e850a1c9ea33343bd5fd9c05aa90f47bec211d0519d50d9b82564d27fda9f`: current official product-doc checks and guaranteed actionable ZIP fallback when cards/actions are not actually exposed.

Do not promote candidate releases/manifest entries until actual ChatGPT product acceptance/deployment state is confirmed and the release/manifest is reconciled.
