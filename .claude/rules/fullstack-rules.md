# Fullstack Rules

## Scope
Applies to end-to-end features spanning frontend, API, and data layers.

## Contract-First Development
- Define feature contract before implementation.
- Keep request/response schemas explicit and version-aware.
- Never rely on implicit field presence across layers.

## Data Integrity
- Validate all writes at API boundary.
- Ensure idempotency for retryable operations.
- Handle partial failures with rollback or compensation logic.

## Error Handling
- Return consistent error structures from APIs.
- Map backend failures to clear user-facing states.
- Include correlation IDs or trace context when available.

## Security
- Enforce auth and authorization server-side.
- Never trust client-only checks.
- Avoid exposing sensitive fields in responses.

## Observability
- Log key business events and failure points.
- Add metrics for success rate, latency, and error rate.
- Ensure alerts cover critical feature failure modes.

## Delivery Safety
- Prefer feature flags for risky changes.
- Maintain backward compatibility or ship migrations safely.
- Include migration and rollback notes for deploys.

## Testing
- Cover unit, integration, and e2e for critical paths.
- Include cross-layer contract tests where feasible.
