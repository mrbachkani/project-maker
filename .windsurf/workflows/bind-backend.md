# Bind Backend Workflow

This workflow scans your project for components annotated with `@fetch:<source>` and inserts the necessary data-fetching guidance so your frontend and backend stay in sync.

1. Ensure your environment variables are configured.  Copy `.env.example` to `.env.local` (or `.env`) and fill in Firebase/Supabase URLs, API keys, and any REST base URLs.
2. Start required local services (e.g. `npm run dev` for the backend API, `firebase emulators:start`, or `supabase start`) so integration tests can run after binding.
3. Run the backend binding script:

   ```bash
   node scripts/bind-backend.js
   ```

4. The script scans `src/` for annotations like `// @fetch:users` across JavaScript **and** TypeScript files.  When an annotation is found it injects placeholder code covering Firebase, Supabase, and REST patterns plus reminders to add loading/error handling.
5. Review each generated block.  Replace the placeholder with concrete calls into your service modules (for example `await usersService.list()`), and wire the result into your component state.
6. Update or create integration tests that prove the UI talks to the backend.  If no automated test fits, document a manual smoke test in the task breakdown template.
7. Run `/full-stack-check` (see workflow below) or manually exercise the UI to confirm end-to-end behaviour.
8. Commit the refined implementation once everything passes.
