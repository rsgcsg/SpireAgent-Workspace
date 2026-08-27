# GitHub Connector Policy

Use the GitHub connector for exact remote topology, small coherent text/config edits, branches, PR metadata, reviews, CI inspection and explicit merges.

## Normal write path

`latest integration SHA -> short-lived topic branch -> coherent edits -> draft PR -> latest-head CI -> review -> explicit merge`

Do not direct-push protected `main`/`develop`, force-update refs, or use admin bypass as normal workflow.

## When direct connector coding is a poor fit

Prefer Codex/local execution when a change:
- spans many implementation files;
- requires compile/test/build/run feedback;
- needs generated code or binary artifacts;
- needs repeated refactor/test cycles;
- would create a fragile sequence of full-file remote replacements;
- depends on repository-wide semantic search or local tooling.

If Codex/local execution is unavailable and the work must survive temporarily, use the Workspace `relay/*` fallback described in `TEMPORARY_RELAY_POLICY.md`, then transfer to the real owning repo for validation.

## File safety

Re-fetch file/blob SHA before update/delete. Never update/delete the same path concurrently. Never store secrets, raw Human data, game files, model weights or local artifacts.
