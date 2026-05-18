# review-api

## Purpose
Review an API endpoint for correctness, consistency, security, and readiness.

## Inputs
- Endpoint path and method
- Request/response schema
- Auth requirements
- Related handler/service files

## Checklist
1. Contract correctness
- Request validation present
- Response shape matches documented schema
- Error response format consistent

2. Security
- Auth/authz enforced server-side
- Input sanitization and boundary checks present
- Sensitive data is not exposed

3. Reliability
- Timeout/retry behavior handled where needed
- Idempotency for retryable operations
- Proper status codes for all major outcomes

4. Observability
- Structured logs include request context
- Errors include actionable, non-sensitive detail

5. Test coverage
- Happy path covered
- Validation and failure paths covered

## Output Format
```md
## API Review: <METHOD> <PATH>

### Verdict
- Status: <PASS|FAIL|PASS WITH CONDITIONS>

### Findings
1. [<High|Medium|Low>] <issue>
- File: <path>
- Impact: <description>
- Fix: <concrete action>

### Coverage Gaps
1. <missing test>

### Recommendation
- <ship/no-ship and conditions>
```
