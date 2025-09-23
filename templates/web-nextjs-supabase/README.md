# Web App Template (Next.js + Supabase)

This template provides a basic starting point for building a React/Next.js application with **Supabase** integration.  It demonstrates how to structure a Next.js project, wire up Tailwind CSS for styling, and includes a simple component annotated with `@fetch` to illustrate how backend data can be integrated automatically.

## Features

- Uses Next.js 13+ with the new App Router and React 18.
- Includes a Supabase client stub (`src/supabaseClient.js`) and example usage in a component.
- Preconfigured Tailwind CSS for styling.
- `@fetch` annotation example in `src/components/Hello.jsx` for automatic backend binding.

## Setup

1. Copy this template using the Project Maker script.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file at the root of your new project and set the following variables (see `.env.example` for the keys):

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Fetching Data

Components that need data from Supabase can be annotated with `// @fetch:<table>`.
Use the Project Maker's `scripts/bind-backend.js` script or the Windsurf `/bind-backend` workflow to automatically insert fetch code.  See `src/components/Hello.jsx` for an example.
