# /phase-status

Report delivery status by project phase.

## Purpose
- Give a reliable phase-by-phase delivery snapshot.
- Separate actual progress from assumed progress.
- Expose dependency risks early.

## Status Values
- `not started`
- `in progress`
- `blocked`
- `done`

## Inputs
- Delivery phases list (planning, implementation, testing, release, etc.).
- Exit criteria per phase.
- Evidence sources: files, commits, PRs, test runs, deployment logs.

## Steps
1. Enumerate phases in sequence.
2. For each phase, assign a status based on evidence only.
3. List completed exit criteria and remaining criteria.
4. Capture dependencies and blockers.
5. Flag timeline risk for each non-done phase.

## Output Format
```md
## Phase Status
Date: <YYYY-MM-DD>

### Phase 1: <name>
- Status: <not started|in progress|blocked|done>
- Evidence: <file/commit/PR/test>
- Exit Criteria Met:
1. <criterion>
2. <criterion>
- Exit Criteria Remaining:
1. <criterion>
2. <criterion>
- Blockers/Risks:
1. <issue>
- Dependencies:
1. <upstream dependency>

### Phase 2: <name>
- Status: <not started|in progress|blocked|done>
- Evidence: <file/commit/PR/test>
- Exit Criteria Met:
1. <criterion>
- Exit Criteria Remaining:
1. <criterion>
- Blockers/Risks:
1. <issue>
- Dependencies:
1. <upstream dependency>

### Overall Assessment
- On-track: <yes/no>
- Highest-risk phase: <phase name>
- Immediate escalation needed: <yes/no and why>
```

## Rules
- Do not infer completion without concrete evidence.
- If evidence is missing, status cannot be `done`.
- Call out cross-phase dependencies explicitly.
