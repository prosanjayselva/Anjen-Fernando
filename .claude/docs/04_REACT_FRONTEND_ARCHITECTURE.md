# React Frontend Architecture

## Required Tech Stack (Confirmed)
- **Zustand** for client state management
- **TanStack Query** for API/server state
- **Tailwind CSS** for styling

## Core Stack
- React + TypeScript
- Tailwind CSS
- Zustand
- TanStack Query

## State Management Rules
- Use Zustand only for UI/client state.
- Use TanStack Query only for API/server state.
- Do not duplicate server data inside Zustand.

## Tailwind CSS Rules
- Build all UI with Tailwind utility classes.
- Keep Game2Grow black/gold theme consistent.
- Ensure mobile-first responsive behavior.

## Component Domains
- Layout: Header, Footer, CTA band
- Home: Hero, ServicesHighlight, TestimonialStrip
- About: FounderProfile, VisionMission, VideoEmbedSection
- Services: CorporatePrograms, StudentTracks, FacultyProgram, MentoringOverview
- Portfolio: CaseStudyCard, PortfolioGrid
- Contact: CorporateForm, InstitutionForm, MapSection
