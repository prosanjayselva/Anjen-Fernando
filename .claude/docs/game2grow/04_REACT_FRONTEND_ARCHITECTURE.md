# React Frontend Architecture

## Core Stack
- React + TypeScript
- Tailwind CSS
- Zustand
- TanStack Query

## Tailwind CSS Usage
- Build all UI using Tailwind utility classes.
- Apply Game2Grow visual system (black/gold, premium feel).
- Maintain responsive behavior across mobile/tablet/desktop.

## Zustand Usage
- Store only client/UI state in Zustand.
- Suggested stores:
  - `uiStore` (menu/modal/theme toggles)
  - `contactFlowStore` (multi-step form UI state)
  - `programFilterStore` (search/filter controls)

## TanStack Query Usage
- Handle API fetching through Query/Mutation hooks.
- Suggested query domains:
  - contact submission status
  - program library data
  - testimonial/media content (if API-backed)
- Use query keys and invalidation strategy consistently.

## State Separation Rule
- `Zustand` = client state
- `TanStack Query` = server state
- Do not mix responsibilities.

## Component Domains
- Layout: Header, Footer, CTA band
- Home: Hero, ServicesHighlight, TestimonialStrip
- About: FounderProfile, VisionMission, VideoEmbedSection
- Services: CorporatePrograms, StudentTracks, FacultyProgram, MentoringOverview
- Portfolio: CaseStudyCard, PortfolioGrid
- Contact: CorporateForm, InstitutionForm, MapSection
