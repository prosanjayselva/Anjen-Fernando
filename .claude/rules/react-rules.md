# React Rules

## Scope
Applies to all React components, hooks, pages, and UI state logic.

## Architecture
- Keep components focused on one responsibility.
- Extract reusable UI and logic when duplication appears in 2+ places.
- Prefer composition over inheritance.
- Keep shared logic in custom hooks when tied to React lifecycle.

## State Management
- Prefer local state first; lift state only when required.
- Avoid prop drilling beyond 2 levels; use context or composition.
- Keep derived state computed, not duplicated.
- Do not mutate state directly.

## Hooks
- Follow Rules of Hooks strictly.
- Keep `useEffect` for side effects only, not derivation.
- Include complete dependency arrays or document intentional exceptions.
- Use `useMemo` and `useCallback` only for measured or likely render impact.

## Rendering and Performance
- Use stable keys for list rendering; never use index when order can change.
- Avoid expensive computation inside render paths.
- Prevent unnecessary re-renders by stabilizing props and handlers.
- Split large components before they become hard to reason about.

## UX and Accessibility
- Use semantic HTML elements first.
- Ensure keyboard navigation and visible focus states.
- Provide labels for all form inputs.
- Handle loading, empty, and error states explicitly.

## Testing
- Test user-observable behavior, not implementation details.
- Cover primary flows and failure states.
- Add regression tests for bugs fixed.
