# External Resource Lifecycle

This directory is the cross-project index for external STS2 repositories,
mods, tools, datasets, APIs, solvers, and research packets. It is routing and
provenance, never Platform or STPD implementation authority.

## Lifecycle

```text
discover
-> pin exact source or release
-> inspect license and terms
-> classify authority and reuse
-> state a local hypothesis
-> run a discriminating owning-repository experiment
-> adopt, reject, watch, or supersede
-> point to the repo-owned invariant, test, adapter, or evidence
```

Historical evidence remains bound to the recorded pin. Refresh a record only
when it affects an active decision, a game/API/release change can invalidate a
finding, license or terms change, an adapter breaks, a security issue appears,
or code/tool adoption is about to begin. A newer upstream commit never rewrites
old evidence.

## Authority And Reuse

- `external_reference_only`: study and compare; never game or evidence truth.
- `external_tool`: execute separately with exact provenance.
- `external_baseline`: a research comparator, not a label authority.
- `metadata_reference`: cross-check visible metadata only.
- `candidate_dependency`: requires a separate adoption and license review.
- `game_owned_reference`: official game/runtime behavior remains authoritative.

`link_only` and `architecture_study` prohibit source copying. `clean_room_pattern`
allows an independently implemented invariant after a local experiment.
`selective_reuse_allowed` still requires provenance, notices, and review.
`separate_process` keeps an external executable outside Platform authority.
`vendored_review_required` is not approval to vendor.

Observed license fields are engineering provenance, not legal advice. Missing
or project-specific licenses default to study only.

## Files And Checks

- `registry.json`: current cross-project resource and adoption index.
- `registry.schema.json`: documented machine contract.
- `validate.mjs`: dependency-free semantic validator.
- `validate.test.mjs`: rejection tests for drift, duplicates, and bad links.

Run:

```bash
node workspace/external-resources/validate.mjs
node --test workspace/external-resources/validate.test.mjs
```

Owning repositories may link to a registry record, but only their own code,
tests, ADRs, evidence, and versioned adapters can internalize a finding.
