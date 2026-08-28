# Workspace Skill Source Registry

This directory is the governed source authority for the SpireAgent workspace Skill suite.

Because the GitHub connector should not create dozens of tiny file commits, canonical Skill source is stored as one exact reconstructable snapshot per Skill under `skills/source-snapshots/<skill-name>.json`.

Each snapshot contains the complete text source tree for that Skill (`SKILL.md`, `agents/`, `references/`, optional `scripts/` and `assets/`). `SKILL_SUITE_MANIFEST.json` binds the snapshot's deterministic source-tree hash, release version, prepared `skill.zip` hash, trigger scope, connector expectations, and deployment state.

`workspace/scripts/validate_skill_manifest.py` verifies every source snapshot, embedded Skill version, deterministic source-tree hash, and package hash format. `.github/workflows/governance.yml` runs the validation on governance PRs and integration pushes.

To edit a Skill, materialize its snapshot, use `workspace-skill-maintainer` + built-in `skill-creator`, validate/package the complete Skill, replace the source snapshot, and update the manifest. Do not hand-edit the manifest to invent package/source state.

Platform/STPD implementation/runtime/research authority remains in their owning repositories.
