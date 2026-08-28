# Current Workspace Snapshot

Last refreshed: 2026-08-28 13:12 Australia/Brisbane.

This file is a routing snapshot only. Refresh owning repositories through the GitHub connector before current-state claims.

## STS2 AI Platform

Repository: `rsgcsg/STS2-AI-PLATFORM`

- `main`: `5604050ef0e0f55f13bf2fdb720e5c215d774fd5` (frozen pre-governance integration baseline)
- `develop`: `b9db31936e6bac4f887f0ba27f8b2cc41c816c08`
- active Full-Run topic: `feature/annotator/full-run-semantic-mainline`
- active head: `fd5f1a5482a29990f9f431b008f00b0e2a7e92a4`
- PR #3: open/draft against `develop`; latest-head CI observed green during calibration.

Current owning-repo status:
- Full-Run Human Semantic Timeline remains the active Platform objective.
- the repaired Combat -> Reward -> Map bounded owner canary passes semantic accounting; this is not exhaustive Full Run qualification.
- subsequent source/test covers Human potion use/cancel semantics; the next bounded Combat gate remains targeted/untargeted potion use, target-picker cancel, generated skip, and representative hand selection paths.
- PR #3 body remains stale relative to current STATUS/ROADMAP.

## STPD

Repository: `rsgcsg/STS2-The-Perfect-Defect`

- `main`: `4c4bbca5e5bf16656bd7c0ba175ff5c069c81818`
- `develop`: `ae4c8ac43caf224b01951c030842a60814a09bea`
- no open PR observed during calibration; latest `develop` CI observed green.

Current owning-repo status:
- pre-alpha; bounded S1 behavior smoke and thin Platform Policy Adapter are source/test complete.
- the exact S1 checkpoint is not present on the current Mac, so Platform Runtime Shadow/One-Step/bounded Auto parity remains unexercised there.
- Human Gold remains absent; scientific Core/B6/final-v0 claims remain blocked.

## Workspace Governance

Repository: `rsgcsg/SpireAgent-Workspace`

- `main`: `e0a136bc29ec0186c98a9f37980ef86d72e9b0a2`
- `develop`: **resolve live at read time; do not cache this repository's own integration-head SHA in CURRENT**.
- observed integration base at this refresh: `97bd215c5489460304dc338c75af2dd4648bab6b`.
- historical bootstrap branch head: `17399174605fb94d94d2b45314928b1905ae87fe`.

The self-ref rule avoids false drift: editing this snapshot necessarily changes the Workspace integration SHA. Drift checks should compare this file's owning-repo pointers and semantics, not require it to predict the commit that contains itself.

Canonical Skill release/deployment identity is tracked by `skills/SKILL_SUITE_MANIFEST.json`. Workspace knowledge/storage cooperation is defined in `workspace/KNOWLEDGE_PLANE.md`.
