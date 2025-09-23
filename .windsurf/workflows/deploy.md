# Deploy Workflow

This workflow builds and deploys your application.  It is aimed at simple front‑end or static site deployments using a service like Netlify or Vercel.  For more complex deployments, adapt these steps or integrate your own CI/CD pipeline.

1. Build the project:

   ```bash
   npm run build
   ```

2. Use the Windsurf Deploy feature or your preferred CLI to upload the build directory to your hosting provider.  For example, if you are deploying to Netlify, you can run:

   ```bash
   npx netlify deploy --prod --dir=out
   ```

3. Verify the deployment by visiting the URL provided by the hosting service.

4. If you make subsequent changes, rerun this workflow to deploy the new build.