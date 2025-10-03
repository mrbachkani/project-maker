# Full-Stack Check Workflow

Use this workflow whenever you need to prove that the frontend and backend integrate correctly.  It is designed for Cascade so agents can follow it step-by-step.

1. **Prepare environment**
   - Copy `.env.example` files to `.env.local` or `.env` in both frontend and backend apps.
   - Fill in service URLs, API keys, and test credentials.  Use staging services or local emulators where available.

2. **Start dependencies**
   - Launch databases, queues, or emulators (`docker compose up`, `firebase emulators:start`, etc.).
   - Seed baseline data using `scripts/seed.ts` or project-specific fixtures.

3. **Boot services**
   - Run the backend (`npm run dev` or equivalent) and wait for the health check endpoint to report healthy (`curl http://localhost:PORT/healthz`).
   - Start the frontend dev server (`npm run dev`) in a separate terminal.

4. **Smoke test critical flows**
   - Visit the primary user journey in the browser or use Playwright/Cypress to run automated flows.
   - Verify that data loads from the backend, loading states clear, and error handling behaves as expected when the backend is temporarily unavailable (simulate with `CTRL+C` on the backend and refresh).

5. **Automated tests**
   - Run unit and integration test suites (`npm test`, `npm run test:e2e`, etc.).
   - Capture artefacts (screenshots, logs) if tests fail and attach them to the task or PR.

6. **Wrap up**
   - Stop services (`docker compose down`, `Ctrl+C`).
   - Update documentation or task notes with any required follow-up.

Trigger this workflow from Windsurf chat with `/full-stack-check` to remind agents of the process.
