# Tech Stack and Architecture

## Frontend (React + TypeScript)
- React (component-based UI)
- TypeScript (strict typing)
- CSS strategy with design tokens for black/gold theme
- Form validation layer for dual enquiry workflows

## Backend (Node.js)
- Node.js API for form submissions and lead capture
- Validation and sanitization at API boundary
- Structured logging for enquiry pipeline

## Fullstack Architecture
- Frontend consumes API contracts via typed DTOs
- Shared schema strategy for request/response alignment
- Analytics events for CTA and conversion tracking

## Operations
- Environment-based configuration
- Deployment pipeline with staging and production
- Monitoring for form failures and API latency

## Feature Visibility
- Feature flags for staged release (blog, future media channels, experiments)
- Gradual rollout for major UX changes
