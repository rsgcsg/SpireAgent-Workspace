# Codex Model and Credit Policy

Default principle: use expensive reasoning only where it changes the engineering decision.

- Lead/strong model (for example Sol where available): scope, hypotheses, owning layer, architecture/seam choice, stop/continue decision, and final acceptance.
- Cheaper delegated workers (for example Luna-High where available): targeted source inspection, explicit implementation, tests, docs, coverage/BOM updates, cleanup, and commit/PR preparation.

Avoid multiple expensive agents rereading the same large context. Give workers narrow context and explicit deliverables, then have the lead perform one integrated review.

If current Codex products expose different model names/capabilities, preserve the policy rather than the literal names: strongest model for uncertain judgment, cheapest sufficient model for clear execution.

For SpireAgent prompts, default to short, autonomous, complete prompts. Put large history/architecture/evidence material in attachments or durable repo references instead of pasting it into the prompt.
