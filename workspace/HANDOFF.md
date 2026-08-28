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

A 2026-08-28 direct renderer experiment prepared eight complete locally validated SpireAgent Skill packages in one ordinary Project conversation. The user saw exactly one native card: `spireagent-workspace-governor`. The other seven prepared Skills did not render as cards/downloads.

Therefore record generic Project-chat Skill rendering as `PARTIAL`, not PASS or FAIL.

The reliable default create/update route is:

`Plugins -> Skills -> Create -> Create with chat`

The working Project conversation prepares the complete Skill change and hands the user one exact **Skill Chat Prompt**. For updates, that prompt must name the existing Skill, say not to create a duplicate, use the installed Skill as baseline, include the full requested change set, require built-in `skill-creator`, preserve/validate the complete Skill, and finish through the native update/install flow.

This separates responsibilities cleanly:

- Project conversation: project/workspace context, evidence, change design, validation target, prompt generation;
- dedicated Skill-chat conversation: native Skill editor/install product UX.

If an ordinary Project conversation actually renders the exact target Skill card, that card may be used opportunistically for that one Skill. Never infer that other prepared Skills were delivered from one visible card. For multi-Skill updates, batch the analysis but generate one dedicated Skill Chat Prompt per changed Skill by default. File/Library/Workspace-Git relay fallback remains available only when the dedicated Skill-chat route is unavailable or fails.

### Prepared Skill candidates

Current locally validated candidates include:

- `spireagent-workspace-governor@1.6.0` — bounded web-research routing and durable curation;
- `workspace-knowledge-librarian@1.4.0` — web-source lifecycle and Library/product boundaries;
- `spireagent-codex-prompt-writer@2.4.0` — bounded Codex web research plus token-aware subagent/Skill policy;
- `workspace-skill-maintainer@1.9.1` — dedicated Skill Chat Prompt handoff as the default reliable create/update route, with generic Project-chat rendering explicitly classified as partial/opportunistic after the 1-of-8 render test.

`workspace-skill-maintainer@1.9.1` local package SHA-256: `c53528a077b980c7f7b4bc22b39afadde82041d0c59a758dac6dc0d3b87bc277`.

Do not promote candidate releases/manifest entries until actual ChatGPT product acceptance/deployment state is confirmed and the release/manifest is reconciled.
