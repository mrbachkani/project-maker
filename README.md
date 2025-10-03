## Master Project Maker

This repository provides a collection of ready‑made project scaffolds with built‑in scripts, documentation, UI components and AI‑ready configuration.  It is designed for solo developers who want to kick‑start new projects quickly while still following good architecture and tooling practices.  By using these scaffolds you avoid spending hours setting up boilerplate and can focus on building the unique parts of your application.

### Getting Started

1. Install Node.js (version 16 or later) and make sure `npm` is available.
2. Clone this repository and run the interactive script to generate a new project:

   ```bash
   node scripts/create-project.js
   ```

   The script will ask you which template you want to use (web, mobile, backend, etc.), prompt you for any required configuration (project name, cloud service keys, etc.) and then generate a new folder with everything preconfigured.

### Features

- **Multiple templates** for different stacks (React/Firebase, Flutter/Firebase, Node/Express, Python/AI, etc.).
- **Shared `components‑library/`** with reusable UI components for React projects.
- **`scripts/bind-backend.js`** to automatically wire data sources into components annotated with `@fetch`.
- **`.windsurf/` configuration** with rules and workflows so the Windsurf IDE knows how to run tests, bind backends, deploy and reuse components.
- **Documentation templates** for PRDs, task breakdowns, architecture, and project rules.
- **Optional Dockerfiles and CI pipelines** per template.
- A **script to synchronise new reusable components** into the central library.

For more details, see the individual `README.md` files in each template and the `docs` folder.