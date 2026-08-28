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

The default create/update route is now explicit:

`Plugins -> Skills -> Create -> Create with chat`

The working Project conversation should prepare the complete Skill change and hand the user one exact **Skill Chat Prompt**. For updates, that prompt must name the existing Skill, say not to create a duplicate, use the installed Skill as baseline, include the full requested change set, require built-in `skill-creator`, preserve/validate the complete Skill, and finish through the native update/install flow.

This separates responsibilities cleanly:

- Project conversation: project/workspace context, evidence, change design, validation target, prompt generation;
- dedicated Skill-chat conversation: native Skill editor/install product UX.

If the current conversation already exposes a stronger direct Skill edit action, use it. Otherwise do not gamble on whether a generic Project chat will render an edited-Skill card. File/Library/Workspace-Git relay fallback remains available only when the dedicated Skill-chat route is unavailable or fails.

### Prepared Skill candidates

Current locally validated candidates include:

- `spireagent-workspace-governor@1.6.0` — bounded web-research routing and durable curation;
- `workspace-knowledge-librarian@1.4.0` — web-source lifecycle and Library/product boundaries;
- `spireagent-codex-prompt-writer@2.4.0` — bounded Codex web research plus token-aware subagent/Skill policy;
- `workspace-skill-maintainer@1.9.0` — dedicated Skill Chat Prompt handoff as the default native create/update route, with product/file/relay fallbacks only when needed.

`workspace-skill-maintainer@1.9.0` local package SHA-256: `763583322ab9196bdec8ea74a702dd54717c4449c49d6415da4b0c9c81cdc651`.

Do not promote candidate releases/manifest entries until actual ChatGPT product acceptance/deployment state is confirmed and the release/manifest is reconciled.
