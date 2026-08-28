# Workspace Knowledge Plane

## Purpose

Use the ChatGPT Workspace knowledge surface and `rsgcsg/SpireAgent-Workspace` together as the information relay between conversations/Skills and the real Platform/STPD repositories.

The relay improves speed, continuity, file management, and discoverability. It never replaces owning-repository authority.

## Four storage/execution planes

| Plane | Role | Typical contents | Authority |
|---|---|---|---|
| Chat / session scratch | hot execution cache | temporary transforms, generated reports, downloads, packaging, `/mnt/data` artifacts | none unless promoted |
| Workspace knowledge | warm collaboration store | shared Project/Library/Work files, handoffs, indexes, reusable reports/references | collaboration/reference only |
| SpireAgent-Workspace | durable control-plane relay | router, source-of-truth map, CURRENT snapshot, Skill manifest/releases, policies, knowledge pointers | workspace governance |
| Platform / STPD repos | owning truth | source, tests, runtime evidence, research provenance, canonical project docs | implementation/runtime/research |

## File lifecycle

Classify items by both knowledge class and lifetime.

Knowledge class: `CANONICAL`, `CURRENT`, `EVIDENCE`, `REFERENCE`, `HANDOFF`, `RAW`, `ARCHIVE`.

Lifetime: `TEMP`, `WORKING`, `LONG_TERM`.

Promotion should be intentional:

`TEMP scratch -> reviewed Workspace artifact -> durable governance pointer`.

If the artifact is implementation/runtime/research truth, promote it to the owning Platform/STPD repository instead of the relay.

## File operations

When the active product/tool surface exposes a Workspace Project/Library/Work file interface, use it for inventory, read, create/update, deduplication, archive/supersession, and retrieval of larger collaboration artifacts. Maintain a small durable knowledge map in governance that records owner, class, lifetime, currentness, source/exact ref, and replacement link.

If direct Workspace file CRUD is not exposed in the active surface, do not pretend it is. Create a local artifact and report the exact promotion step required.

## Performance boundary

Measure each storage plane independently.

Current execution benchmark on 2026-08-28 for `/mnt/data` only:

- 128 MiB direct sequential write: about **424 MB/s**;
- 128 MiB direct sequential read: about **4.1 GB/s**;
- 1,000 x 4 KiB file writes: about **0.60 s total**;
- 1,000 x 4 KiB file reads: about **0.54 s total**.

These values prove only that current session scratch is suitable as a hot working cache. They are not measurements of ChatGPT Workspace Library/Project persistence.

Recent GitHub connector operations in the same session were typically sub-second to roughly 1.4 seconds per API request. Treat that as API request latency, not filesystem throughput.

Workspace Library/Project backend read/write throughput is currently **UNMEASURED** because the active tool surface does not expose a generic persistent-library CRUD/benchmark API.

## Read path

1. Use the Workspace knowledge map/library as a fast locator/cache when accessible.
2. Read `SpireAgent-Workspace` governance to resolve routing, Skill versions, handoff, and authority.
3. Refresh exact Platform/STPD refs through GitHub before current-state claims.
4. Return results to the chat; promote only durable useful artifacts.

## Write path

- temporary output -> session scratch;
- reusable collaboration/reference -> Workspace knowledge store when available;
- durable governance/pointers/Skill releases -> `SpireAgent-Workspace`;
- implementation/runtime/research evidence -> owning Platform/STPD repository.

Never duplicate raw Human data, secrets, model weights, proprietary game files, or implementation authority into the relay for convenience.
