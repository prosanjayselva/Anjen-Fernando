# Node.js Backend Architecture

## Core API Modules
1. Contact/Lead API
2. Content API (optional CMS-ready endpoints)
3. Media metadata API (video and gallery mapping)

## Contact API Requirements
- Separate endpoints or payload routing for:
  - Corporate enquiries
  - College/Institution enquiries
- Required fields validation:
  - Name, Organisation, Designation, Mobile, Email, Program Type, Message

## Reliability and Security
- Server-side validation and sanitization
- Rate limiting for form endpoints
- Error-safe responses (no sensitive internals)
- Structured logs with request correlation
