# sync-api-contract

## Purpose
Synchronize API contracts between implementation, docs, and consumers.

## Inputs
- Endpoint list
- Source-of-truth contract (OpenAPI/typed DTOs)
- Consumer usage points

## Steps
1. Extract current implementation contract.
2. Compare with documented/OpenAPI contract.
3. Compare with consumer field usage.
4. Identify drift (missing fields, renamed fields, type mismatches).
5. Update implementation/docs/consumers to a single aligned contract.
6. Add regression tests for updated contract.

## Drift Categories
- Breaking: consumer will fail without changes
- Risky: behavior change but backward compatible
- Cosmetic: naming/docs mismatch only

## Output Format
```md
## API Contract Sync Report

### Endpoints Audited
1. <method path>
2. <method path>

### Drift Findings
1. [<Breaking|Risky|Cosmetic>] <issue>
- Source: <impl/docs/consumer>
- Impact: <description>
- Resolution: <action>

### Applied Changes
1. <file/path + summary>
2. <file/path + summary>

### Verification
- Tests added/updated: <list>
- Final status: <aligned/not aligned>
```
