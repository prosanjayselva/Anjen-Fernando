# scaffold-module

## Purpose
Scaffold a new API module with consistent structure and conventions.

## Inputs
- Module name
- Domain/entity name
- Required operations (CRUD/custom)
- Target framework/runtime

## Standard Structure
- `routes/` for transport layer
- `controllers/` for request orchestration
- `services/` for business logic
- `repositories/` for data access
- `schemas/` for validation and DTOs
- `tests/` for unit/integration coverage

## Steps
1. Create module directories and baseline files.
2. Define request/response schemas first.
3. Add route handlers and controller mappings.
4. Implement service logic and repository interfaces.
5. Add baseline tests for success and failure paths.
6. Add module README with usage and contracts.

## Output Format
```md
## Module Scaffolded
- Module: <name>
- Paths created:
1. <path>
2. <path>

### Next Required Edits
1. <todo>
2. <todo>
3. <todo>
```
