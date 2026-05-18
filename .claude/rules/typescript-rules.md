# TypeScript Rules

## Scope
Applies to all `.ts` and `.tsx` files.

## Type Safety
- Avoid `any`; use `unknown` then narrow safely.
- Prefer explicit domain types for external data.
- Keep strict null handling enabled in logic design.
- Avoid unsafe non-null assertions unless proven safe.

## API and Contracts
- Define request/response DTO types at boundaries.
- Validate untrusted input before use.
- Keep backend and frontend contracts version-aligned.
- Avoid hidden shape assumptions from dynamic data.

## Type Design
- Prefer readable types over clever type gymnastics.
- Use discriminated unions for variant states.
- Use generics when they improve correctness and reuse.
- Keep public exported types stable and documented.

## Runtime Safety
- Add guards for nullable/optional values.
- Fail fast with clear errors at trust boundaries.
- Keep parsing and validation separate from business logic.

## Maintainability
- Use consistent naming for types/interfaces.
- Remove dead types and stale utility types.
- Co-locate type definitions near usage unless shared broadly.

## Testing
- Add tests for runtime behavior where type safety cannot guarantee correctness.
- Include boundary and malformed-input cases.
