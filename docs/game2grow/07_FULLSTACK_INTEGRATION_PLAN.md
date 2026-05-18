# Fullstack Integration Plan

## Integration Contracts
- Frontend form payloads must match backend DTOs
- Success/failure response schema standardized
- Shared enum for program-interest categories

## Data Flow
1. User submits enquiry form
2. Frontend validates and posts to API
3. Backend validates, stores/sends lead
4. UI shows success or actionable error

## Integration Quality Gates
- Contract test for each endpoint
- E2E tests for both enquiry forms
- Failure-path verification (network/API/validation)
