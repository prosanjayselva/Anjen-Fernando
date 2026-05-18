# Tailwind Rules

## Scope
Applies to all Tailwind CSS usage across components, pages, and shared UI patterns.

## Design System Consistency
- Use predefined color, spacing, radius, and typography tokens.
- Keep Game2Grow black/gold visual identity consistent.
- Avoid arbitrary values unless justified and documented.

## Utility Usage
- Prefer utility-first styling over custom CSS files.
- Group classes in readable order: layout, spacing, typography, visual, state.
- Extract repeated utility groups into reusable components/helpers.
- Avoid long unreadable class chains when abstraction improves clarity.

## Responsive Rules
- Build mobile-first with clear breakpoint progression.
- Validate layouts at common breakpoints before merge.
- Prevent overflow and layout shift in dynamic content sections.

## State and Accessibility
- Always define clear hover, focus, active, disabled states.
- Ensure focus-visible styles are present for keyboard users.
- Maintain accessible contrast for text and interactive elements.

## Performance
- Keep Tailwind config clean and intentional.
- Remove unused custom utilities/components.
- Avoid duplicate style patterns that increase maintenance overhead.

## Maintainability
- Prefer semantic component composition for large UI blocks.
- Keep style decisions close to component logic.
- When custom CSS is required, keep it minimal and documented.

## Review Checklist
- Visual consistency with brand tokens
- Responsive correctness
- Accessible states present
- No unnecessary custom CSS
- No obvious utility duplication
