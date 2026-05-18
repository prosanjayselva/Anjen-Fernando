# Frontend Rules

## Scope
Applies to all browser-facing UI, styles, interaction logic, and client-side performance.

## UI Consistency
- Follow existing design tokens and spacing scale.
- Keep typography, spacing, and control behavior consistent.
- Avoid one-off styling unless documented.

## Responsive Design
- Build mobile-first and verify desktop behavior.
- Prevent horizontal overflow at common breakpoints.
- Ensure touch targets are usable on small screens.

## Accessibility
- Use semantic landmarks and heading hierarchy.
- Ensure color contrast meets accessibility standards.
- Support keyboard and screen reader workflows.
- Manage focus properly after modals and route changes.

## State and Feedback
- Every async action needs loading, success, and error feedback.
- Use clear, actionable error messages.
- Preserve user input when recoverable after failures.

## Performance
- Optimize critical render path and bundle weight.
- Lazy-load non-critical code and assets.
- Compress/optimize images and media assets.
- Avoid layout shift by reserving media dimensions.

## Testing
- Add UI tests for critical user journeys.
- Add visual/regression checks for high-risk components.
