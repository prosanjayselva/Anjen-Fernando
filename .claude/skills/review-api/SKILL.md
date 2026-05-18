---
name: review-api
description: |
  Review recent NestJS backend API changes for security issues, missing validation,
  Prisma anti-patterns, and convention violations. Checks against .claude/rules/.
  Use after modifying any backend code in apps/api/src/.
context: fork
allowed-tools: Read, Grep, Glob, Bash(git diff *), Bash(git log *)
model: sonnet
user-invocable: true
---

## Context

- Backend: `apps/api/src/`
- Rules: `.claude/rules/nestjs.md`, `.claude/rules/security.md`, `.claude/rules/prisma.md`, `.claude/rules/typescript.md`
- Recent changes: !`git diff --name-only HEAD~3 -- apps/api/src/ 2>/dev/null || echo "no recent commits"`

## Review Checklist

### Security (Critical)
- [ ] Webhook endpoints verify HMAC-SHA256 with `timingSafeEqual` before processing
- [ ] Webhook routes read raw body BEFORE JSON parsing
- [ ] No `process.env` access — using `ConfigService.getOrThrow()`
- [ ] No secrets/keys hardcoded in source
- [ ] Rate limiting on auth endpoints (OTP, login)
- [ ] File upload validation (size, MIME type) if applicable
- [ ] No `$queryRawUnsafe` with user input

### Payments (Critical)
- [ ] Financial DB operations inside `prisma.$transaction()`
- [ ] Razorpay webhook idempotency check before processing
- [ ] All monetary values are integers (paise) — no floats passed to Razorpay

### Validation
- [ ] All `@Body()` parameters have DTO with class-validator decorators
- [ ] No `any` types in DTOs, service methods, or controller parameters
- [ ] Prisma errors mapped to HTTP exceptions (not raw to client)

### Architecture
- [ ] No business logic in controllers — controller calls service only
- [ ] No Prisma queries in controllers
- [ ] No `console.log` — using NestJS `Logger` instead
- [ ] New modules registered in `app.module.ts`
- [ ] Shared types added to `packages/types/src/` not declared locally in apps

### Prisma
- [ ] Multi-step financial writes wrapped in `$transaction`
- [ ] List queries have `take` limits
- [ ] List queries filter `{ isActive: true }` (soft delete)
- [ ] `findUniqueOrThrow` used where record must exist
- [ ] No unbounded relation fetching

### BullMQ (if queue changes)
- [ ] Jobs have `attempts`, `backoff`, `removeOnComplete`, `removeOnFail`
- [ ] Stable `jobId` for deduplication
- [ ] Dead-letter queue routing on exhausted retries

## Process

1. Read the changed files (from git diff or `$ARGUMENTS`).
2. For each changed file, check against the review checklist above.
3. Read related files (if controller changed, also check its service and DTOs).
4. Group findings by severity: **Critical** > **Warning** > **Suggestion**.
5. Include file path and line numbers for each finding.

## Output Format

```
## Review: [module/files reviewed]

### Critical
- [file:line] [description of issue]

### Warning
- [file:line] [description of issue]

### Suggestions
- [file:line] [description of improvement]

### Passed
- [list of checks that passed]

**Summary:** X critical, Y warnings, Z suggestions
```
