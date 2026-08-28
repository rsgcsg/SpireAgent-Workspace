# External Agent Tooling Map

Checked against current public OpenAI documentation and selected public GitHub projects on 2026-08-28. This is a reviewed options map, not a requirement to adopt every tool. Re-check current docs/security before adoption.

## Current practical stack

### ChatGPT Skills and Plugins

OpenAI Skills are supported in ChatGPT, Codex, and the API. ChatGPT can create or modify Skills through chat. Plugins can package Skills together with connected apps and app templates for workflows that span ChatGPT and Codex.

Use this for shared workflow behavior, not mutable Platform/STPD state. Workspace-level Skills belong to `SpireAgent-Workspace`; repo-owned Skills belong to the owning development repository.

Current primary sources: OpenAI Help `Skills in ChatGPT` and `Plugins in ChatGPT and Codex`.

### GitHub connector/app

GitHub remains the simplest current bridge between ChatGPT web discussions and Codex-readable, versioned project context. `SpireAgent-Workspace` intentionally uses this as a small Codex-facing projection/relay rather than mirroring all Workspace knowledge.

### ChatGPT apps with sync

Apps with sync can pre-index selected external knowledge sources for faster retrieval in eligible plans. This may reduce repeated lookup cost for suitable external systems, but it is not treated as a replacement for owning-repo truth or as proof of direct ChatGPT Library-to-Codex synchronization.

Current primary source: OpenAI Help `ChatGPT apps with sync`.

## Official extension options

### Codex App Server

Codex App Server exposes the Codex harness through a bidirectional JSON-RPC interface and powers rich clients such as IDE integrations. It is the strongest official building block if SpireAgent later needs a custom service/UI that programmatically starts/resumes Codex threads, supplies context, and observes results.

Do not adopt it merely to solve today's documentation handoff; the current Git relay is much simpler.

Current primary source: OpenAI `Unlocking the Codex harness: how we built the App Server`.

### MCP

Codex supports MCP integrations. A future dedicated SpireAgent Workspace knowledge MCP could expose a curated knowledge index or narrowly approved actions to Codex without copying the whole Library into Git.

Use only if it provides a concrete benefit over Git/files/plugins. Keep capabilities narrow and avoid giving every subagent every connected MCP server.

### Symphony

OpenAI's open-source Symphony specification uses a project-management board such as Linear as a control plane for many coding agents. It is relevant if SpireAgent grows into a queue of many parallel Codex tasks with continuous orchestration.

It is not a Workspace-memory bridge and is unnecessary for the current two-repository scale.

Current primary source: OpenAI `An open-source spec for Codex orchestration: Symphony`.

### Workspace Agents

ChatGPT Workspace Agents can be configured with files, Skills, apps, custom MCPs, and channels. A future dedicated Workspace Librarian/Governor Agent could be useful for organization-wide knowledge workflows, but it should remain a collaboration/control surface rather than an implementation authority.

## Community bridge examples — watch, do not depend on yet

These projects show that the architecture is feasible, but they are not OpenAI product guarantees and should receive normal security/code review before use.

- `rebel0789/codexpro`: a local MCP server that connects ChatGPT Developer Mode to explicitly allowed local repositories and can read/edit/verify/import attachments/write handoffs. It is substantially more adopted than the other examples seen in this review, but it connects ChatGPT to local repo tools rather than providing ChatGPT Library-to-Codex synchronization.
- `joseanu/codex-from-chatgpt`: a small personal MCP bridge that exposes local Codex to ChatGPT through a secure MCP tunnel. It demonstrates a direct ChatGPT-to-Codex bridge pattern, but is currently a young/small community project rather than infrastructure we should make SpireAgent depend on.
- `buidangminh23/codex-mcp-bridge`: demonstrates using the real Codex App Server plus MCP/WebSocket to bridge live agent sessions. Useful architecture reference; not needed for current SpireAgent operations.

No mature, official direct ChatGPT **Library-to-Codex memory synchronization** product was identified in this review. That makes the current reviewed-file/Workspace-Git projection model a reasonable default rather than a workaround we should immediately replace.

## Recommended adoption order

1. Keep the current small `SpireAgent-Workspace` Git relay plus repo-local Agent OS design.
2. Use Workspace and repo-owned Skills for reusable workflows.
3. Curate repeated public-web knowledge into Workspace/owning-repo references.
4. Evaluate Plugins/apps with sync for external knowledge sources that are repeatedly used.
5. Evaluate community MCP bridges only for a concrete workflow and after security review; do not make them project authority.
6. Add a narrow first-party SpireAgent MCP only when a real missing data/action interface justifies it.
7. Consider Codex App Server only when building a dedicated bridge/service becomes valuable.
8. Consider Symphony only when task-queue scale and parallel-agent orchestration become a real bottleneck.

Avoid adding infrastructure whose only purpose is to duplicate information already legible through Git, files, or an existing plugin.
