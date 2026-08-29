#!/usr/bin/env node

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SHA = /^[0-9a-f]{40}$/u;
const SHA256 = /^[0-9a-f]{64}$/u;
const ID = /^[a-z0-9][a-z0-9-]+$/u;
const DATE = /^\d{4}-\d{2}-\d{2}$/u;
const AUTHORITIES = new Set([
  "external_reference_only",
  "external_tool",
  "external_baseline",
  "metadata_reference",
  "candidate_dependency",
  "game_owned_reference"
]);
const ADOPTIONS = new Set([
  "discovered",
  "watch",
  "source_audited",
  "experiment_candidate",
  "experiment_running",
  "adopted_pattern",
  "integrated_external_tool",
  "rejected",
  "superseded"
]);
const CODE_POLICIES = new Set([
  "link_only",
  "architecture_study",
  "clean_room_pattern",
  "separate_process",
  "selective_reuse_allowed",
  "vendored_review_required"
]);
const EVIDENCE_LEVELS = new Set([
  "source_read",
  "license_read",
  "locally_exercised",
  "differentially_compared",
  "qualified_for_named_use"
]);

function nonEmptyStrings(value) {
  return Array.isArray(value) && value.length > 0
    && value.every((item) => typeof item === "string" && item.length > 0);
}

function unique(errors, label, values) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) errors.push(`${label} contains duplicate ${value}`);
    seen.add(value);
  }
}

export function validateRegistry(registry) {
  const errors = [];
  if (registry?.schema !== "spireagent.external-resources/registry-1")
    errors.push("schema must be spireagent.external-resources/registry-1");
  if (!DATE.test(registry?.checked_at ?? "")) errors.push("checked_at must be YYYY-MM-DD");
  if (!Array.isArray(registry?.source_packets)) errors.push("source_packets must be an array");
  if (!Array.isArray(registry?.resources)) errors.push("resources must be an array");
  if (!Array.isArray(registry?.adoption_decisions)) errors.push("adoption_decisions must be an array");
  if (errors.length) return errors;

  unique(errors, "source_packets", registry.source_packets.map((item) => item.packet_id));
  for (const packet of registry.source_packets) {
    if (!ID.test(packet.packet_id ?? "")) errors.push(`invalid packet_id ${packet.packet_id}`);
    if (!SHA256.test(packet.sha256 ?? "")) errors.push(`${packet.packet_id} has invalid sha256`);
    if (!DATE.test(packet.checked_at ?? "")) errors.push(`${packet.packet_id} has invalid checked_at`);
    if (packet.authority !== "reference_only") errors.push(`${packet.packet_id} may only be reference_only`);
  }

  const ids = registry.resources.map((item) => item.resource_id);
  unique(errors, "resources", ids);
  const idSet = new Set(ids);
  for (const resource of registry.resources) {
    const prefix = resource.resource_id ?? "unknown-resource";
    if (!ID.test(prefix)) errors.push(`invalid resource_id ${prefix}`);
    if (!SHA.test(resource.pinned_ref ?? "")) errors.push(`${prefix} must pin a 40-character commit`);
    if (!DATE.test(resource.checked_at ?? "")) errors.push(`${prefix} has invalid checked_at`);
    if (!AUTHORITIES.has(resource.authority_class)) errors.push(`${prefix} has invalid authority_class`);
    if (!ADOPTIONS.has(resource.adoption_status)) errors.push(`${prefix} has invalid adoption_status`);
    if (!CODE_POLICIES.has(resource.code_policy)) errors.push(`${prefix} has invalid code_policy`);
    if (!Array.isArray(resource.canonical_urls)
      || resource.canonical_urls.some((url) => !url.startsWith("https://")))
      errors.push(`${prefix} canonical_urls must be HTTPS URLs`);
    if (typeof resource.repository_url !== "string" || !resource.repository_url.startsWith("https://"))
      errors.push(`${prefix} repository_url must be HTTPS`);
    for (const field of [
      "game_compatibility", "runtime_platform_assumptions", "platform_relevance",
      "stpd_relevance", "workspace_relevance", "evidence_level", "hypotheses",
      "experiments", "limitations", "refresh_triggers"
    ]) {
      if (!nonEmptyStrings(resource[field])) errors.push(`${prefix}.${field} must be non-empty strings`);
    }
    for (const level of resource.evidence_level ?? [])
      if (!EVIDENCE_LEVELS.has(level)) errors.push(`${prefix} has invalid evidence_level ${level}`);
    if (typeof resource.license_observed !== "string" || !resource.license_observed)
      errors.push(`${prefix} must record license_observed`);
    if (typeof resource.license_source !== "string" || !resource.license_source)
      errors.push(`${prefix} must record license_source`);
    for (const field of ["supersedes", "superseded_by", "internalized_as", "owning_repo_pointers"])
      if (!Array.isArray(resource[field])) errors.push(`${prefix}.${field} must be an array`);
    for (const related of [...(resource.supersedes ?? []), ...(resource.superseded_by ?? [])])
      if (!idSet.has(related)) errors.push(`${prefix} references unknown resource ${related}`);
    if (resource.adoption_status === "superseded" && resource.superseded_by.length === 0)
      errors.push(`${prefix} is superseded without superseded_by`);
    if (resource.authority_class === "external_reference_only"
      && resource.adoption_status === "integrated_external_tool")
      errors.push(`${prefix} cannot integrate a reference-only resource`);
  }

  unique(errors, "adoption_decisions", registry.adoption_decisions.map((item) => item.decision_id));
  for (const decision of registry.adoption_decisions) {
    if (!ID.test(decision.decision_id ?? "")) errors.push(`invalid decision_id ${decision.decision_id}`);
    if (!nonEmptyStrings(decision.experiments)) errors.push(`${decision.decision_id}.experiments must be non-empty`);
    if (!Array.isArray(decision.internalized_as)) errors.push(`${decision.decision_id}.internalized_as must be an array`);
  }
  return errors;
}

export function readRegistry(file = path.join(ROOT, "registry.json")) {
  return JSON.parse(readFileSync(file, "utf8"));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const errors = validateRegistry(readRegistry(process.argv[2]));
  process.stdout.write(`${JSON.stringify({ status: errors.length ? "fail" : "pass", errors }, null, 2)}\n`);
  if (errors.length) process.exitCode = 1;
}
