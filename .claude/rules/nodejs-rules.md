# Node.js Rules

## Scope
Applies to Node.js server code, APIs, services, background jobs, and integrations.

## Architecture
- Keep modules focused with clear responsibilities.
- Separate transport (HTTP), business logic, and data access layers.
- Avoid circular dependencies and hidden side effects.

## Async and Concurrency
- Use `async/await` consistently for readability and error safety.
- Do not leave promises unhandled.
- Protect shared resources against race conditions.
- Apply timeouts and cancellation where long-running tasks are possible.

## API and Validation
- Validate all request inputs at the boundary.
- Return consistent response and error shapes.
- Do not leak internal error details to clients.
- Preserve backward compatibility unless versioning is planned.

## Error Handling
- Fail with typed/structured errors where possible.
- Add central error handling middleware for APIs.
- Include actionable context in logs without exposing secrets.

## Security
- Enforce authentication and authorization server-side.
- Sanitize inputs and encode outputs where relevant.
- Never trust client-supplied roles/permissions.
- Keep secrets out of code and logs.

## Performance and Reliability
- Avoid blocking the event loop with CPU-heavy work.
- Use streaming/pagination for large payloads.
- Add retry/backoff only for safe, idempotent operations.
- Use health checks and graceful shutdown patterns.

## Observability
- Emit structured logs with correlation/request IDs.
- Track latency, throughput, and error rates.
- Add metrics around critical paths and external dependencies.

## Testing
- Cover unit tests for core logic and integration tests for routes.
- Test failure paths (timeouts, dependency errors, validation errors).
- Add regression tests for production bugs.
