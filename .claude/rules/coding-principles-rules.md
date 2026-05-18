# Coding Principles Rules

## Scope
Applies to all frontend, backend, and shared code.

## SOLID
- Single Responsibility Principle (SRP): one module/class/function should have one clear reason to change.
- Open/Closed Principle (OCP): extend behavior via composition/abstractions instead of modifying stable code.
- Liskov Substitution Principle (LSP): derived implementations must behave safely where base contracts are expected.
- Interface Segregation Principle (ISP): prefer small focused interfaces over large general-purpose contracts.
- Dependency Inversion Principle (DIP): depend on abstractions, not concrete low-level implementations.

## DRY
- Do not duplicate business logic across files or layers.
- Extract repeated logic into reusable functions/hooks/services.
- Keep one source of truth for constants, schemas, and shared types.
- If duplication appears 2+ times, refactor intentionally.

## KISS
- Prefer the simplest correct solution.
- Avoid overengineering and unnecessary abstractions.
- Keep functions short, readable, and explicit.
- Choose clarity over cleverness in naming and implementation.

## Enforcement Checklist
- Before merge, verify: SRP, no obvious duplication, and simplest viable design.
- Reject changes that add complexity without measurable benefit.
- Add comments only where complexity cannot be reduced further.
