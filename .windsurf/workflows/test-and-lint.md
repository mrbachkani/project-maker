# Test and Lint Workflow

This workflow runs the linter and test suite for your project.  Use it before committing or merging code to ensure that your codebase remains clean and your tests pass.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the linter:

   ```bash
   npm run lint
   ```

3. Run the test suite:

   ```bash
   npm test
   ```

4. If there are any lint or test failures, fix them and rerun the workflow.
5. Summarise the results and, if everything is green, commit your changes.