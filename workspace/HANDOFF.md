# Workspace Handoff

## Governance closeout — 2026-08-28

Workspace is a small durable bridge between ChatGPT web Workspace/Library and Codex/GitHub projects. Platform and STPD remain self-governed owning repositories.

### Bounded web research

Public web research is allowed when it materially resolves a current external fact, upstream dependency/tool behavior, standard/advisory, or mature public solution. Project facts still come from exact owning-repo code/evidence. Prefer recent curated Workspace references before repeating broad search, prefer official/primary sources, and stop when the decision is supported.

Codex prompts may use the same bounded policy. Do not give every subagent independent browsing by default; use the lead or one focused research worker for a shared external question and pass a concise result onward.

See `workspace/WEB_RESEARCH_POLICY.md` and `workspace/CODEX_MODEL_AND_CREDIT_POLICY.md`.

### External tooling conclusion

Current best fit remains the small Git relay + Skills/Plugins + owning-repo Agent OS. Add a narrow MCP/Codex App Server bridge only when a concrete missing interface justifies it. Symphony is relevant only when many parallel Codex tasks need a queue/control plane.

### Skill deployment closeout

All eight governed Workspace Skills are now observed at the target installed versions recorded in `skills/SKILL_SUITE_MANIFEST.json`, and representative current-agent smoke passed. The canonical repository release/manifest reconciliation was completed through the narrow Skill-update lane before this governance closeout.

Generic Project-chat Skill rendering remains `DIRECT_PROJECT_CHAT_RENDER=PARTIAL` based on two controlled experiments:

- 8 prepared Skills -> only Governor rendered;
- 6 update candidates with explicit `@skill-creator` -> only Librarian rendered.

The final operating convention is:

- **one Skill**: start in the current Project chat and include `Use @skill-creator to help me create a skill. Keep it conversational, and start by asking what the skill should do.` plus the complete Skill-specific requirements; if the exact target card renders, use it; otherwise reuse the same prompt in `Plugins -> Skills -> Create -> Create with chat`;
- **multiple Skills**: batch analysis if useful, but generate one complete prompt per Skill, include the same trigger phrase in each prompt, and update/save one Skill at a time;
- Skills should remain stable and update rarely.

The active product surface does not expose installed Skill package bytes/hash. Repository package hashes identify canonical validated repository archives; they are not claimed to be observed ChatGPT-installed package hashes.

### Next engineering phase

With Workspace governance and Workspace Skills closed, move to owning-repo Agent OS work:

1. Platform Repo Agent OS v1 in `rsgcsg/STS2-AI-PLATFORM`;
2. STPD Repo Agent OS v1 in `rsgcsg/STS2-The-Perfect-Defect`;
3. then continue the Platform Full-Run runtime gates and STPD checkpoint/Human-Gold path.

Neither owning repository should require Workspace for routine operation.
