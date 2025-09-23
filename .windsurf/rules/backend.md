# Backend Rules

These rules apply to backend projects, such as Node/Express services or API servers.

- Use ES Modules (`import`/`export`) for Node projects; avoid `require` unless your runtime does not support ESM.
- Place API route handlers under a `routes/` or `api/` directory, grouped by feature domain.
- Use service modules to abstract database access and external APIs.  Avoid mixing database calls directly in route handlers.
- Prefer asynchronous functions and Promises; avoid callback‑style code.
- Write tests for each route and service.  Put tests in a `tests/` directory mirroring the source tree.