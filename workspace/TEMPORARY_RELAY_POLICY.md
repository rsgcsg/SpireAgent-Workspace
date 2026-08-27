# Temporary Relay / Scratch Policy

`rsgcsg/SpireAgent-Workspace` may be used as a **short-lived relay** when ChatGPT web + the GitHub connector cannot safely or conveniently perform a larger edit directly in the owning repository.

This is an escape hatch, not a second implementation repository.

## Use only when direct editing is awkward

Examples:
- a change spans many text files and connector-by-file writes would create fragile partial state;
- a draft patch/migration must survive across ChatGPT conversations while Codex/local execution is unavailable;
- a temporary code sketch, patch or analysis script must be shared before promotion;
- the connector can write files but cannot run the owning repo's build/tests, so the change must be staged and explicitly handed off.

Do not use relay merely to avoid the normal Platform/STPD topic-branch + PR workflow.

## Branch and layout

Use `relay/YYYYMMDD-<target>-<task>`.

Do **not** merge relay branches into Workspace `main` or `develop`.

Store payload under `relay/<target-repo>/<task>/` with at least:
- `README.md`: purpose, owner, target repo/base SHA, created time, expiry;
- `HANDOFF.md`: transfer steps and required validation;
- draft code/patches only when needed.

## TTL

Default expiry: 3 days. Maximum normal expiry: 7 days.

Before expiry, transfer the coherent change into a real topic branch in the owning repo and validate it there, or discard it. Delete the relay branch afterwards.

## Git is not temporary storage

Branch deletion does not guarantee immediate physical erasure. Never put secrets/tokens, raw Human data, proprietary STS2 files, decompiled source, game binaries, model weights, private identifiers, or anything unsafe for Git history in relay branches.

## Authority

Relay code has zero implementation authority. Platform/STPD become authoritative only after the change is recreated/reviewed in the owning repo and its checks/evidence gates pass.
