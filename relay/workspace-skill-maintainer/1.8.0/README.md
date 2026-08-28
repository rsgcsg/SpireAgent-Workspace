# Temporary Skill Delivery Relay

Purpose: fallback delivery for `workspace-skill-maintainer` because the current ChatGPT Project surface has not reliably rendered native Skill cards or sandbox download links.

- Target Skill: `workspace-skill-maintainer`
- Installed baseline observed: `1.5.0`
- Candidate: `1.8.0`
- Package: `skill.zip`
- SHA-256: `9fd68f7568d07cab9658cfdd575a304105ff2caa8865a5f3a70edddd40d8f67e`
- Workspace base: `develop@97bd215c5489460304dc338c75af2dd4648bab6b`
- Created: 2026-08-28
- Expiry: 2026-08-31 (default 3-day relay TTL)

This relay is transport only. It is not a canonical Skill release, does not update `skills/SKILL_SUITE_MANIFEST.json`, and must never merge into Workspace `develop` or `main`.

Preferred use:
1. If ChatGPT renders the native edited-Skill/create-modify-install surface, use that instead of this ZIP.
2. Otherwise download `skill.zip` from this relay and submit it through the supported Skills product surface.
3. After the product accepts/saves the update, reconcile the canonical Skill release/manifest separately and delete this relay branch.

Do not treat local validation or this relay publication as `PRODUCT_SCAN=PASS`, `DEPLOYMENT=PASS`, or `REAL_INVOCATION=PASS`.
