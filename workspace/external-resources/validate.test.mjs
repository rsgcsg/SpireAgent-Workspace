import assert from "node:assert/strict";
import test from "node:test";

import { readRegistry, validateRegistry } from "./validate.mjs";

test("current external resource registry is valid", () => {
  assert.deepEqual(validateRegistry(readRegistry()), []);
});

test("duplicates, floating refs, and authority escalation fail closed", () => {
  const registry = structuredClone(readRegistry());
  registry.resources.push(structuredClone(registry.resources[0]));
  registry.resources[0].pinned_ref = "main";
  registry.resources[0].adoption_status = "integrated_external_tool";
  const errors = validateRegistry(registry);
  assert.ok(errors.some((error) => error.includes("duplicate")));
  assert.ok(errors.some((error) => error.includes("40-character commit")));
  assert.ok(errors.some((error) => error.includes("cannot integrate")));
});

test("unknown supersession and missing lifecycle fields fail closed", () => {
  const registry = structuredClone(readRegistry());
  registry.resources[0].supersedes = ["missing-resource"];
  registry.resources[0].refresh_triggers = [];
  const errors = validateRegistry(registry);
  assert.ok(errors.some((error) => error.includes("unknown resource")));
  assert.ok(errors.some((error) => error.includes("refresh_triggers")));
});
