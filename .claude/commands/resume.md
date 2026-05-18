# /resume

Resume work from the latest known project state.

## Purpose
- Restart work quickly with minimal context loss.
- Avoid repeating completed work.
- Re-establish a clear next action.

## Inputs
- Latest checkpoint/notes.
- Current branch and pending local changes.
- Relevant requirement documents and tickets.

## Steps
1. Recover latest state:
- Identify last completed unit of work.
- Confirm whether there are uncommitted changes.
2. Reconfirm objective and scope:
- Restate current objective.
- Clarify in-scope and out-of-scope boundaries.
3. Validate continuity:
- Check if assumptions used previously are still valid.
- Identify any newly introduced constraints or blockers.
4. Define immediate next action:
- Choose one concrete, high-leverage action to execute now.
- State expected output of that action.
5. Establish short execution queue:
- Add next 2 follow-up actions after the immediate step.

## Required Output
```md
## Resume Status
Date: <YYYY-MM-DD>
Branch: <branch-name>
Commit: <short-sha>

### Last Completed Work
- <summary>
- Evidence: <files/commits/tests>

### Current Objective
- <single-sentence objective>
- In scope: <items>
- Out of scope: <items>

### Continuity Check
- Open changes in workspace: <yes/no + notes>
- Assumptions still valid: <yes/no + notes>
- New blockers: <list or none>

### Next Action Now
1. <concrete action>
- Expected result: <deliverable>

### Next Two Actions
1. <action>
2. <action>

### Risk Notes
- <risk and impact>
```
