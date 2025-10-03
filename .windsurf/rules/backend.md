# Backend Rules

These rules apply to backend projects, such as Node/Express services or API servers.

- Use ES Modules (`import`/`export`) for Node projects; avoid `require` unless your runtime does not support ESM.
- Place API route handlers under a `routes/` or `api/` directory, grouped by feature domain.
- Use service modules to abstract database access and external APIs.  Avoid mixing database calls directly in route handlers.
- Prefer asynchronous functions and Promises; avoid callback-style code.
- Write tests for each route and service.  Put tests in a `tests/` directory mirroring the source tree.
- Document every endpoint with request/response schemas (TypeScript types, Zod validators, or OpenAPI definitions) and export them so the frontend can reuse the types.
- Expose a `/healthz` or equivalent endpoint that checks downstream dependencies (database, external APIs) to support the `/full-stack-check` workflow.
- Provide seed scripts or fixtures (e.g. `scripts/seed.ts`) that prepare sample data for frontend development and automated tests.
- Capture integration logic in dedicated modules (e.g. `integrations/stripe.ts`) so they can be mocked in tests and reused by other services.
