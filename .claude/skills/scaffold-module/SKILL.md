---
name: scaffold-module
description: |
  Scaffold a complete NestJS feature module for pallavan-cabs following all project conventions.
  Creates module, controller, service, and DTOs. Registers in app.module.ts.
  Use when starting a new backend domain module (drivers, vehicles, shifts, etc.).
argument-hint: "[module-name] [description]"
allowed-tools: Read, Write, Edit, Glob, Grep
model: sonnet
user-invocable: true
---

## Context

- Backend: `apps/api/src/`
- Shared types: `packages/types/src/` — add types here FIRST
- PrismaModule is `@Global()` — never import it in feature modules
- Root module: `apps/api/src/app.module.ts` — register every new module here

## Process

1. **Parse arguments**: module name (kebab-case) and optional description from `$ARGUMENTS`.
   Examples: `drivers`, `vehicles`, `shifts`, `payments`

2. **Check packages/types/src/** — do shared types for this module already exist?
   If not, add `{Module}Response` and `{Module}sListResponse` interfaces to `packages/types/src/`.

3. **Create module file** (`apps/api/src/{module}/{module}.module.ts`):
   ```typescript
   import { Module } from '@nestjs/common';
   import { {Module}Controller } from './{module}.controller';
   import { {Module}Service } from './{module}.service';

   @Module({
     controllers: [{Module}Controller],
     providers: [{Module}Service],
   })
   export class {Module}Module {}
   ```

4. **Create service** (`apps/api/src/{module}/{module}.service.ts`):
   ```typescript
   import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
   import { ConfigService } from '@nestjs/config';
   import { PrismaService } from '../prisma/prisma.service';

   @Injectable()
   export class {Module}Service {
     constructor(
       private readonly prisma: PrismaService,
       private readonly config: ConfigService,
     ) {}

     async findAll() {
       return this.prisma.{model}.findMany({
         where: { isActive: true },
         take: 100,
         orderBy: { createdAt: 'desc' },
       });
     }

     async findOne(id: string) {
       return this.prisma.{model}.findUniqueOrThrow({ where: { id } })
         .catch(() => { throw new NotFoundException('{Entity} not found'); });
     }
   }
   ```

5. **Create controller** (`apps/api/src/{module}/{module}.controller.ts`):
   ```typescript
   import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
   import { {Module}Service } from './{module}.service';
   import { Create{Module}Dto } from './dto/create-{module}.dto';

   @Controller('{module}')
   export class {Module}Controller {
     constructor(private readonly {module}Service: {Module}Service) {}

     @Get()
     findAll() {
       return this.{module}Service.findAll();
     }

     @Get(':id')
     findOne(@Param('id') id: string) {
       return this.{module}Service.findOne(id);
     }
   }
   ```

6. **Create DTOs**:
   - `apps/api/src/{module}/dto/create-{module}.dto.ts` — fields with class-validator
   - `apps/api/src/{module}/dto/update-{module}.dto.ts` — `PartialType(Create{Module}Dto)`
   - `apps/api/src/{module}/dto/{module}-response.dto.ts` — ONLY re-exports from `@repo/types`

7. **Register in app.module.ts**:
   Add `{Module}Module` to the `imports` array in `apps/api/src/app.module.ts`.

## Rules

- NEVER import PrismaModule in feature modules — it's `@Global()`.
- ALL monetary DTO fields: `@IsInt() @Min(0)` with `// paise` comment.
- All list queries: `where: { isActive: true }` + `take` limit.
- `{module}-response.dto.ts` ONLY re-exports from `@repo/types` — never declares types locally.
- Single quotes in all TypeScript files.
- Files: `kebab-case`. Classes: `PascalCase`.
