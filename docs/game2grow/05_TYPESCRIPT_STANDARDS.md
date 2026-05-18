# TypeScript Standards

## Strictness
- Use strict type checks for all props and API payloads
- Avoid `any`; use `unknown` + guards when needed

## Contract Types
- Enquiry DTOs for corporate and institution forms
- Program model types for corporate/student/faculty services
- Testimonial and portfolio data models

## Safety Patterns
- Input validation before submit
- Response parsing with explicit error handling
- Discriminated unions for async UI states
