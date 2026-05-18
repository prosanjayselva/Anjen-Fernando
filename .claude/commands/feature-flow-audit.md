# /feature-flow-audit

Audit end-to-end feature flow across UI, API, and data boundaries.

## Purpose
- Verify that feature behavior is consistent across layers.
- Catch contract drift and silent failure paths.
- Produce an actionable remediation plan.

## Inputs
- Feature name and expected user journey.
- Entry routes/components.
- API endpoints and data models involved.
- Existing tests (unit/integration/e2e).

## Audit Checklist
1. Entry and trigger coverage:
- All user entry points identified.
- Alternate paths (direct URL, refresh, deep link) validated.
2. UI and state behavior:
- Loading, empty, success, and error states implemented.
- Local/global state transitions are deterministic.
3. API contract integrity:
- Request payload shape matches server expectations.
- Response fields consumed by UI actually exist.
- Error payload handling is explicit.
4. Data and persistence flow:
- Write/read lifecycle is consistent and idempotent where needed.
- Failure rollback or compensation behavior exists.
5. Resilience and observability:
- Errors are logged with enough context.
- Metrics/analytics capture key success/failure signals.
6. Security and access controls:
- Auth checks enforced server-side.
- Sensitive fields are not exposed to unauthorized users.
7. Test completeness:
- Happy path, edge cases, and failure paths covered.
- Regressions are detectable by automated tests.

## Severity Definitions
- Critical: Data loss, security issue, or production outage risk.
- High: User-facing breakage or major contract mismatch.
- Medium: Functional gap with workaround.
- Low: Maintainability or clarity issue.

## Output Format
```md
## Feature Flow Audit: <feature-name>

### Scope
- Entry points: <paths/components>
- APIs: <endpoints>
- Data models: <entities>

### Findings
1. [<Critical|High|Medium|Low>] <title>
- Impact: <what breaks>
- Evidence: <file path / endpoint / behavior>
- Recommendation: <precise fix>

2. [<Critical|High|Medium|Low>] <title>
- Impact: <what breaks>
- Evidence: <file path / endpoint / behavior>
- Recommendation: <precise fix>

### Test Gaps
1. <missing test>
2. <missing test>

### Recommended Fix Order
1. <first fix>
2. <second fix>
3. <third fix>

### Release Readiness
- Status: <Not Ready | Conditionally Ready | Ready>
- Conditions (if any): <required fixes before release>
```
