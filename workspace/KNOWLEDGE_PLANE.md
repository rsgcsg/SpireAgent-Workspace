# Workspace Knowledge Plane

## Purpose

Use the ChatGPT Workspace/Library knowledge surface and the small `rsgcsg/SpireAgent-Workspace` Git relay together to move reviewed context between web conversations/Skills and Codex/GitHub projects without duplicating Platform/STPD authority.

The relay improves continuity, file management, discoverability, and cross-project coordination. It never replaces owning-repository truth.

## Four storage/execution planes

| Plane | Role | Typical contents | Authority |
|---|---|---|---|
| Chat / session scratch | hot execution cache | temporary transforms, generated reports, downloads, packaging, `/mnt/data` artifacts | none unless promoted |
| ChatGPT Workspace / Library | warm human/ChatGPT knowledge store | uploaded/created files, reusable reports/references, handoffs, larger working knowledge when accessible | collaboration/reference only |
| `SpireAgent-Workspace` | small durable Codex-facing projection/relay | selected Workspace conclusions, router, source-of-truth map, current pointers, shared standards, Workspace Skill manifest/releases, handoffs, policies, knowledge pointers | workspace governance/relay |
| Platform / STPD repos | owning truth | source, tests, runtime evidence, research provenance, canonical project docs, repo-owned agent/Skill governance | implementation/runtime/research |

## Library product/tool boundary

The ChatGPT product can expose a visible Library UI. That does not automatically expose generic agent CRUD in every conversation/tool surface.

Before claiming direct Library inventory/create/update/move/rename/delete capability, verify that the active tool surface provides those operations. If it does not, create or return the artifact through an available surface and report the exact remaining user-side Library action.

## File lifecycle

Classify items by both knowledge class and lifetime.

Knowledge class: `CANONICAL`, `CURRENT`, `EVIDENCE`, `REFERENCE`, `HANDOFF`, `RAW`, `ARCHIVE`.

Lifetime: `TEMP`, `WORKING`, `LONG_TERM`.

Promotion should be intentional:

`TEMP scratch -> reviewed Library/Project artifact -> small durable Git pointer/summary` only when cross-project/Codex discoverability or governance needs it.

If the artifact is implementation/runtime/research truth, promote it to the owning Platform/STPD repository instead of the relay.

## What belongs in Workspace Git

Keep the Git repository small. Good contents include:

- reviewed web-Workspace conclusions that Codex needs to see;
- routing/source-of-truth maps;
- current cross-project pointers;
- shared standards;
- Workspace-level Skill source/release/manifest;
- handoffs and knowledge pointers;
- Codex-facing reference packets where Git visibility is materially useful;
- temporary relay policy and metadata.

Do not mirror Library files, chat transcripts, Platform/STPD source, raw runtime evidence, datasets, or model artifacts.

## Read path

1. For routine single-repo work, start in the owning Platform/STPD repo.
2. Use ChatGPT Library/Project or Workspace Git only when the task needs reviewed web-Workspace conclusions, cross-project routing/shared standards, handoff/reference material, Workspace Skill governance, or temporary relay context.
3. Refresh exact Platform/STPD refs before current-state claims.
4. Return results to chat; promote only durable useful artifacts.

## Write path

- temporary output -> session scratch;
- reusable collaboration/reference -> ChatGPT Library/Project when the product/tool surface supports it;
- durable cross-project/Codex projection, pointers, shared standards, Workspace Skill releases -> `SpireAgent-Workspace`;
- implementation/runtime/research evidence and repo-owned Skills -> owning Platform/STPD repository.

Never duplicate raw Human data, secrets, model weights, proprietary game files, or implementation authority into the relay for convenience.

## Performance boundary

Measure each storage plane independently. `/mnt/data` and GitHub API performance do not prove ChatGPT Library backend performance. If Library has no direct API in the active surface, mark programmatic throughput/access as `UNMEASURED/NOT_EXPOSED`.