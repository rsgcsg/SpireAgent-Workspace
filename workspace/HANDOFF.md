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

### Skill rollout correction

Official OpenAI documentation confirms that ChatGPT can create or modify Skills through chat and prompt installation. Official Library documentation says files uploaded to or created in ChatGPT are saved to Library where available and can be downloaded there.

Two separate delivery failures were observed in this conversation:

- assistant text promised an edited Skill card that did not render;
- assistant text emitted `sandbox:/mnt/data/...` download links, but the user's rendered client hid those links entirely while a Skill card remained visible.

Therefore:

- prepare the full changed Skill set first;
- use real product-native Skill cards/actions when the current surface actually renders them;
- do not assume one chat turn can render multiple edited Skill cards: current public Skills documentation does not guarantee that behavior;
- prefer native generated-file attachment/file-card output for ZIP handoff when available;
- use Library as the durable retrieval/download surface for files actually created/saved in ChatGPT when Library is available;
- treat `sandbox:/mnt/data/...` only as best-effort compatibility, not as a documented product contract;
- a blank/hidden sandbox link is `DELIVERY=FAIL`; switch transport rather than re-emitting the same mechanism;
- if no verified product-native transport exists in the current surface, report `DELIVERY_BLOCKED_CURRENT_SURFACE`.

For recurring suite-wide updates, evaluate a **skill-only SpireAgent Workspace Plugin**. Current official Plugin documentation supports one Plugin containing multiple Skills and may provide a cleaner one-install suite UX than independent personal Skill updates.

### Prepared Skill candidates

Current locally validated candidates supersede earlier uninstalled candidates:

- `spireagent-workspace-governor@1.6.0` — SHA-256 `a595f553a73932cc77816f9cbd8bdeb49c092a5d78f86877c9c7b537fde88585`: bounded web-research routing and durable curation.
- `workspace-knowledge-librarian@1.4.0` — SHA-256 `4ce48ee9db227abc76b6b4bb1d12c1ed1a284b951609e6723ea2b11919470fa0`: web-source lifecycle and promotion rules.
- `spireagent-codex-prompt-writer@2.4.0` — SHA-256 `010c70cd9c19614e5a1aa090f461bdb614e8f1fbd01eaff629122e5d9aa6c7d9`: bounded Codex web research plus token-aware subagent/Skill policy.
- `workspace-skill-maintainer@1.7.2` — SHA-256 `30c270be1837aea8143ecce7fafda1b1883624ef5fa287b05b3e34fe0d7e1300`: product-native Skill/file/Library delivery, explicit sandbox non-guarantee, `DELIVERY_BLOCKED_CURRENT_SURFACE`, and suite-Plugin evaluation.

Do not promote candidate releases/manifest entries until actual ChatGPT product acceptance/deployment state is confirmed and the release/manifest is reconciled.
