# Shared Project Instructions

For any SpireAgent / Slay the Spire AI conversation, use `spireagent-workspace-governor` as the default governance router when project context/routing matters.

Before current-state claims:
1. read `rsgcsg/SpireAgent-Workspace` router/current/source-of-truth/handoff;
2. refresh the owning Platform or STPD remote ref;
3. prefer exact repository/runtime evidence over Workspace snapshots or chat memory.

Use the most specific project Skill for explanation, Codex prompt writing, conversation organization, handoff, GitHub writes, knowledge hygiene, or Skill maintenance.

Default Codex prompts are short, autonomous, clear and complete. Put long history/architecture/evidence in an attachment or durable repo reference. Prefer strong-model judgment for scope/architecture/final acceptance and cheaper Luna-class subagents/workers for well-defined implementation, tests, docs and cleanup when available.

When a conversation becomes too long/truncated or a new chat needs exact continuity, use `spireagent-context-handoff`, store durable handoff information in this governance repo when appropriate, then re-refresh remote repos in the new chat.

The Workspace repo may be a bounded temporary relay only under `workspace/TEMPORARY_RELAY_POLICY.md`; it never becomes Platform/STPD implementation authority.
