# Architecture Guide

This document describes recommended architectural patterns and best practices for building applications with the Project Maker templates.  It is not exhaustive but provides a baseline structure and guidelines for different types of projects.

## Web / Frontend

- Use a component‑based architecture.  Organise UI components in a `components/` folder and pages in a `pages/` folder.
- Reuse components from the shared `components-library/` whenever possible to avoid duplication.
- State management should be local or via React context; for more complex state, consider a library like Redux or Zustand.
- Use Tailwind CSS for styling in Next.js/React projects; avoid inline styles unless necessary.
- Keep API calls in a separate `services/` folder or hook to avoid mixing data fetching logic with presentation.

## Backend

- Organise code by domain rather than by type.  Group models, routes, and services for a feature together.
- Abstract database and cloud service access behind modules to make it easy to swap providers.
- Use environment variables and configuration files to control connections and credentials.
- Write unit and integration tests to validate your API endpoints and business logic.
- Expose APIs via a common interface (e.g. REST or GraphQL) and document them.

## Mobile

- For Flutter projects, keep cross‑platform code in shared modules and platform‑specific code under `ios/` and `android/` when necessary.
- Use a state management solution like Provider, Bloc, or Riverpod and avoid storing state in widgets.
- Structure your app into features with their own `models`, `views`, and `controllers` or `bloc`s.

## AI / Agents

- Keep AI prompts and model configuration in a separate `ai/` folder so they can be updated independently of the code.
- Wrap calls to AI APIs in service modules (e.g. `services/ai.js`) to allow easy changes or mocking.
- Document the expected input and output of each AI agent in the code or accompanying documentation.

## Deployment

- Provide a `Dockerfile` for containerised deployment and a `docker-compose.yml` for local development where appropriate.
- Include CI/CD pipeline definitions (e.g. GitHub Actions workflows) in a `.github/workflows/` folder.
- Use environment variables for all configuration and secrets in deployment environments (e.g. staging, production).