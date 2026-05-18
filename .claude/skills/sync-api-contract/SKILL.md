---
name: sync-api-contract
description: |
  Scan all NestJS controllers and DTOs to generate/update an API contract document.
  Detects new/removed/changed endpoints and updates docs/API_CONTRACT.md.
  Run periodically or after major API changes to keep documentation accurate.
argument-hint: "[optional: module-name to sync only one module]"
allowed-tools: Read, Write, Edit, Glob, Grep
model: sonnet
user-invocable: true
---

## Context

- Backend source: `apps/api/src/`
- API Contract document: `docs/API_CONTRACT.md` (create if it doesn't exist)
- Controller pattern: `apps/api/src/{module}/{module}.controller.ts`
- DTO pattern: `apps/api/src/{module}/dto/*.dto.ts`
- Base path: `/api/v1/` (per docs/01_SYSTEM_ARCHITECTURE.md)

## Process

1. **Read existing `docs/API_CONTRACT.md`** if it exists (to understand what's already documented).

2. **Scan all controllers** (or just `$ARGUMENTS` module if specified):
   - Find all `*.controller.ts` files in `apps/api/src/`
   - For each controller, extract:
     - `@Controller('prefix')` — route prefix
     - Class-level guards/decorators
     - Each method: HTTP decorator, path, guards, `@Body()` DTO, `@Param()`, `@Query()`, `@RequirePermission()`

3. **Scan all DTOs** referenced by controllers:
   - Extract fields with their types and class-validator decorators

4. **Compare with existing contract** and identify:
   - NEW endpoints not in the contract
   - REMOVED endpoints still in the contract
   - CHANGED endpoints (different auth, DTO fields)

5. **Update `docs/API_CONTRACT.md`** using this per-endpoint format:

```markdown
#### METHOD /path
- **Auth:** @RequirePermission('key') or @Public()
- **Params:** `paramName` (type) — if path params exist
- **Query:** `queryName` (type) — if query params exist
- **Body DTO:** `DtoClassName` — field (type, validators), ...
- **Success:** 200/201 — description
- **Errors:** 404 — Not Found, 409 — Conflict, etc.
- **Permission:** `module:action`
```

6. Update the endpoint count in the Meta section.

## Rules

- Never guess — only document what the source code actually shows.
- Check actual `@RequirePermission()` decorators, not assumed permissions.
- Flag endpoints missing permission guards (except `@Public()` routes).
- Flag DTOs using `any` types.
- After updating, confirm the endpoint count matches reality.
