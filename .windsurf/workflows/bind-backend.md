# Bind Backend Workflow

This workflow scans your project for components annotated with `@fetch:<source>` and inserts the necessary data fetching code based on your selected backend (Firebase, Supabase, REST, etc.).

1. Run the backend binding script:

   ```bash
   node scripts/bind-backend.js
   ```

2. The script will scan all files in your `src/` directory for annotations like `// @fetch:users`.
3. For each annotation, it will:
   - Determine the backend type from your environment variables (e.g. whether you are using Firebase or another provider).
   - Insert code to fetch the data and update the component to render real data.  A placeholder comment is inserted if automatic insertion is not possible.
4. Review the changes and test your UI.
5. Commit the changes if everything works as expected.