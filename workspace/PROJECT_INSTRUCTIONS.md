# Workspace Project Instructions

## Purpose

Keep the ChatGPT web Workspace, its Library/Project knowledge, the small `SpireAgent-Workspace` Git relay, and the owning Platform/STPD repositories aligned without turning Workspace into a second implementation or research authority.

## Default behavior

- Use Workspace Git for selected Codex-facing projection, cross-project routing/shared standards, Workspace Skill governance, handoffs, knowledge pointers, current snapshots, and temporary relay policy.
- Keep Platform/STPD implementation, runtime evidence, research data, experiments, models, and repo-owned Skills in their owning repositories.
- Treat Workspace/Library material as collaboration knowledge unless explicitly canonical for workspace governance.
- Refresh mutable project claims from exact owning-repo refs before substantive current-state conclusions.
- Use `workspace/WEB_RESEARCH_POLICY.md` when current external product/API/tooling/standards information materially affects a decision.

## Web research

Do not globally block web research and do not browse without a reason. Prefer exact repo truth for project facts and recent curated Workspace references for repeated external knowledge. Use a bounded web pass when current external behavior, mature public tooling, upstream documentation, standards, compatibility, advisories, or another unresolved external fact matters.

Start narrow, prefer official/primary sources, stop when the decision is supported, and curate reusable findings so later ChatGPT/Codex runs do not repeatedly pay the same search/context cost. Codex prompts may allow the same bounded behavior; do not grant every subagent independent web access by default.

See `workspace/EXTERNAL_AGENT_TOOLING.md` for reviewed integration/orchestration options.

## Skill update UX

When Workspace Skills need updates, prepare the full changed set. Prefer a real conversation-delivered edited Skill surface when the current product actually exposes it. If multiple edited Skill cards/actions can be delivered in one response, present all changed Skills together. Do not impose one-by-one sequencing unless the product itself requires it.

Official OpenAI documentation confirms that ChatGPT can create or modify Skills through chat and prompt installation, but that product capability does not prove that every active assistant surface exposes a callable card-rendering action. Do not promise a card merely because one appeared previously. If the current surface cannot actually render/invoke Skill edits, use the next supported delivery path and always leave the user with an actionable update. `skill.zip` remains the validation/release/rollback artifact and deterministic fallback transport.

## Write authority

Explicit GitHub writes route through `github-remote-operator` and normal topic-branch/PR governance. Product save/install/publish actions remain separate unless a supported product API actually performs and confirms them.
