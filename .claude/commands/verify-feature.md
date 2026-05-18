# /verify-feature

Verify a feature is ready for release.

## Purpose
- Determine if a feature is safe and complete enough to ship.
- Produce a go/no-go decision backed by evidence.

## Inputs
- Feature requirements and acceptance criteria.
- Code diff or feature branch.
- Test results and environment notes.

## Verification Checklist
1. Functional correctness:
- Matches acceptance criteria.
- No known broken primary user flow.
2. Edge and failure handling:
- Empty states, invalid input, backend failure, timeout behavior.
- Fallback behavior exists and is user-safe.
3. UX and accessibility:
- Keyboard navigation works.
- Semantic structure and labels are correct.
- Responsive behavior verified for key breakpoints.
4. Contract and integration health:
- Frontend/backend payload compatibility confirmed.
- Data consistency after retries/reloads validated.
5. Test quality:
- Unit tests for key logic.
- Integration or e2e coverage for main flow.
- Regression coverage for previous bugs.
6. Operability:
- Logging/metrics include feature success and failure signals.
- Feature-flag behavior validated (if applicable).
- Rollback/disable path confirmed.

## Required Output
```md
## Feature Verification: <feature-name>

### Verdict
- Status: <PASS | FAIL | PASS WITH CONDITIONS>

### Evidence by Checklist Item
1. Functional correctness: <evidence>
2. Edge and failure handling: <evidence>
3. UX and accessibility: <evidence>
4. Contract and integration health: <evidence>
5. Test quality: <evidence>
6. Operability: <evidence>

### Defects Blocking Release
1. [<severity>] <defect>
- Impact: <what breaks>
- Fix: <required remediation>

### Non-Blocking Follow-Ups
1. <improvement>
2. <improvement>

### Go/No-Go Recommendation
- Decision: <GO | NO-GO>
- Conditions (if GO with conditions): <conditions>
```

## Rules
- No release recommendation without evidence.
- If a critical path fails, final decision must be `NO-GO`.
