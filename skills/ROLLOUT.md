# Skill Suite Reconciliation Rollout — 2026-08-28

## Why

The initial governance release contained a deployment manifest but not the Skill source directories named by its `source_path` fields. The installed Skill copies also lagged the manifest version records, and `spireagent-conversation-organizer` still treated historical P8-P13 architecture and document paths as current project truth.

## Reconciliation rule

Do not fabricate the missing intermediate packages. Recover the auditable installed sources, update the stale organizer against the current Workspace -> Platform Foundation -> STPD authority model, validate the complete suite, and publish new patch versions above the old manifest-only targets.

## Prepared releases

| Skill | Reconciliation version | Status |
|---|---:|---|
| github-remote-operator | 1.2.1 | package prepared; publish/install pending |
| spireagent-codex-prompt-writer | 2.1.1 | package prepared; publish/install pending |
| spireagent-context-handoff | 1.1.1 | package prepared; publish/install pending |
| spireagent-conversation-organizer | 2.1.1 | package prepared; publish/install pending |
| spireagent-explainer | 2.1.1 | package prepared; publish/install pending |
| spireagent-workspace-governor | 1.1.1 | package prepared; publish/install pending |
| workspace-knowledge-librarian | 1.1.1 | package prepared; publish/install pending |
| workspace-skill-maintainer | 1.1.1 | package prepared; publish/install pending |

Exact package hashes and deterministic source-tree hashes live in `SKILL_SUITE_MANIFEST.json`.

## Rollout order

1. `spireagent-workspace-governor`
2. `spireagent-explainer`
3. `spireagent-conversation-organizer`
4. `spireagent-codex-prompt-writer`
5. `spireagent-context-handoff`
6. `github-remote-operator`
7. `workspace-knowledge-librarian`
8. `workspace-skill-maintainer`

Test a private/installable copy before workspace-wide publishing when the product surface allows it. Do not claim deployment complete until the installed Skill version is observed to match this manifest.

## Rollback

Installed pre-reconciliation copies remain the rollback reference until the new packages pass representative invocation tests. Do not rewrite the old manifest hashes as if they were recoverable packages.

## Next audit

The daily noon drift check should compare repository source + manifest + installed version and flag any mismatch. Re-audit immediately after a project hierarchy, connector/tool, branch/evidence policy, or Skill trigger change.
