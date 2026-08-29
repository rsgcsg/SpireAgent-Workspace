# SpireAgent Workspace

A small durable bridge between the ChatGPT web Workspace/Library and Codex/GitHub projects for the SpireAgent / Slay the Spire AI project family.

This repository owns workspace-level routing, selected Workspace-to-Codex knowledge projection, shared standards, Workspace Skill governance, handoffs, knowledge pointers, current snapshots, and temporary relay policy. It is **not** the implementation authority for STS2 AI Platform or STPD and is not a mirror of ChatGPT Library.

Canonical implementation/research authorities:
- `rsgcsg/STS2-AI-PLATFORM`
- `rsgcsg/STS2-The-Perfect-Defect`

Routine single-repository development should go directly to the owning repo. Workspace is optional enrichment for cross-project decisions, web-Workspace context Codex cannot otherwise see, shared Workspace Skills/standards, and temporary connector relay.

For Workspace Skill updates, prefer real in-product edited Skill surfaces when they are actually available. Prepare the full changed set and present all changed Skills together when the product supports multiple edited cards/actions in one response; do not impose artificial one-by-one sequencing. Do not promise Skill cards that the current product/tool surface cannot actually render. ZIP remains the release/rollback artifact and fallback transport.

See `WORKSPACE_ROUTER.md` and `workspace/SOURCE_OF_TRUTH.md` after bootstrap.

External repositories, tools, licenses, hypotheses, experiments, and adoption
pointers are tracked in
[`workspace/external-resources/`](workspace/external-resources/README.md).
