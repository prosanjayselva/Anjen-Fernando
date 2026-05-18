# Feature Visibility Rules

## Scope
Applies to feature flags, gradual rollouts, audience targeting, and exposure tracking.

## Flag Governance
- Every flag must have owner, purpose, and planned removal date.
- Name flags clearly by domain and intent.
- Do not create permanent flags without explicit approval.

## Rollout Strategy
- Start with internal/staff exposure before public rollout.
- Use percentage or cohort rollout for risky features.
- Define rollback trigger thresholds before release.

## Behavior Safety
- Ensure feature-off state is fully functional.
- Avoid hard dependencies on flag-on behavior unless irreversible by design.
- Handle stale or missing flag values safely.

## Visibility and Telemetry
- Track exposure events (who saw what and when).
- Track adoption and error metrics segmented by flag state.
- Correlate user-impact metrics with rollout steps.

## Environment and Consistency
- Keep flag defaults documented per environment.
- Avoid silent divergence between staging and production.
- Validate targeting rules before broad rollout.

## Lifecycle
- Reassess flags after rollout completion.
- Remove dead flags and code paths promptly.
- Keep changelog entries for major rollout decisions.
