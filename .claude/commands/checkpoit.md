# /checkpoit

Create a detailed project checkpoint that can be shared with engineering and product stakeholders.

## Purpose
- Capture project state at a specific time.
- Make handoff and async collaboration reliable.
- Identify blockers before they become schedule risk.

## Inputs
- Current branch and latest commit hash.
- Relevant requirement/source docs.
- Changes since last checkpoint (files, tests, decisions).

## Steps
1. Confirm objective:
- State the exact feature/task objective in one sentence.
- Include scope boundaries (what is intentionally out of scope).
2. Summarize completed work:
- List concrete completed items with evidence.
- Attach file paths and test evidence where available.
3. Summarize active work:
- List in-progress items and percent confidence.
- Identify unresolved decisions.
4. Identify blockers and risks:
- Technical blockers, dependency blockers, and timeline blockers.
- Include impact and owner if known.
5. Define next actions:
- Provide exactly 3 immediate actions.
- Each action must be executable in under one focused session.

## Output Format
```md
## Checkpoint
Date: <YYYY-MM-DD>
Branch: <branch-name>
Commit: <short-sha>

### Objective
<single sentence objective>

### Completed Since Last Checkpoint
1. <item> (evidence: <file/test/commit>)
2. <item> (evidence: <file/test/commit>)
3. <item> (evidence: <file/test/commit>)

### In Progress
1. <item> (status: <x%>, risk: <low/med/high>)
2. <item> (status: <x%>, risk: <low/med/high>)

### Blockers and Risks
1. <blocker/risk> (impact: <scope/time/quality>, owner: <name or unknown>)
2. <blocker/risk> (impact: <scope/time/quality>, owner: <name or unknown>)

### Next 3 Actions
1. <action>
2. <action>
3. <action>

### Assumptions
- <assumption>
```

## Rules
- Keep statements factual and evidence-based.
- Do not mark work as complete without proof.
- Always include file paths for code claims.
