# Operation Rules

## Scope
Applies to deployment, runtime operations, monitoring, and incident readiness.

## Configuration and Environments
- Keep configuration externalized and environment-specific.
- Validate required env vars at startup.
- Avoid environment drift with documented parity checks.

## Deployment Safety
- Use staged rollout for high-risk changes.
- Ensure rollback path exists before release.
- Prefer immutable artifacts for reproducibility.

## Reliability
- Set sensible timeouts and retry policies.
- Use circuit-breaking or fallback where dependency failure is likely.
- Prevent single-point failures in critical paths.

## Observability
- Emit structured logs with actionable context.
- Track core SLO metrics (availability, latency, errors).
- Keep dashboards and alerts aligned with business-critical flows.

## Incident Response
- Maintain runbooks for common failure classes.
- Record post-incident actions with owners and due dates.
- Reduce MTTR through clear ownership and escalation paths.

## Security and Compliance
- Apply least-privilege access controls.
- Rotate secrets and avoid secret leakage in logs.
- Keep dependency and base image updates regular.
