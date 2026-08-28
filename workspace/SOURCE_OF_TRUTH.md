# Source of Truth

## ChatGPT Workspace / Library

The web Workspace/Library is the human/ChatGPT collaboration and persistent knowledge/file plane when the product/tool surface exposes it. It may hold reusable references, working reports, handoffs, and larger artifacts. It is not implementation/runtime/research truth by itself.

## Workspace Git governance / relay

`rsgcsg/SpireAgent-Workspace` owns the small durable Codex-facing projection of selected Workspace knowledge plus cross-project routing, shared standards, Workspace-level Skill source/version governance, handoffs, knowledge maps/pointers, current snapshots, collaboration policy, and temporary relay rules.

It does not own Platform/STPD source or their future repo-owned Skills.

## Platform

`rsgcsg/STS2-AI-PLATFORM` owns Platform Foundation implementation truth: Connector/Player Environment, Host Runtime, Human Annotator/Evidence, Policy Runtime, Workbench/Live UI, unified Mod, runtime identity, Platform evidence, and its repo-local agent/Skill governance.

## Research

`rsgcsg/STS2-The-Perfect-Defect` owns STPD research projection, datasets, representation, models, training, evaluation, experiment provenance, and its repo-local agent/Skill governance.

## Precedence

For implementation/runtime/research claims:

exact current code + exact runtime/research evidence > current canonical owning-repo docs > dated closeout/evidence within scope > Workspace Git snapshot/handoff > ChatGPT Library/Project summary > conversation memory/proposal.

Workspace `CURRENT.md` and Library artifacts are locators/context, not substitutes for refreshing the owning repo.

## Independence rule

Routine single-repository Platform/STPD development must remain possible without `SpireAgent-Workspace` or ChatGPT Library. Workspace context is optional enrichment for cross-project coordination, reviewed web-Workspace decisions, shared standards, handoffs, and Workspace-level Skill governance.