# Tech Stack and Architecture

## Frontend
- React
- TypeScript
- Node.js API integration

## State Management: Zustand
- Use `Zustand` for client-side UI/app state.
- Examples: modal state, navigation state, local filters, temporary workflow state.
- Keep non-server state in Zustand stores.

## API Data Layer: TanStack Query
- Use `TanStack Query` for all API/server state.
- Handles caching, background refetching, retries, invalidation.
- Keep fetched data out of Zustand unless strictly required.

## Styling System: Tailwind CSS
- Use `Tailwind CSS` for responsive UI and utility-first styling.
- Define black/gold theme tokens and reusable class patterns.
- Build mobile-first layouts with consistent spacing and typography.

## Backend
- Node.js API layer for lead forms and content endpoints.

## Fullstack
- Typed request/response contracts between frontend and backend.
- Validation at API boundaries.

## Operations
- Environment-based config.
- Staging and production deployment flow.

## Feature Visibility
- Feature flags for staged rollout and controlled release.
