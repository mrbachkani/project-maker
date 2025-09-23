# Windsurf‑Ready Guide

The Project Maker includes configuration files to take advantage of the Windsurf IDE and its Cascade AI agent.  Following this guide ensures that your generated projects are fully Windsurf‑ready and able to leverage the power of agentic development.

## Rules

The `.windsurf/rules/` folder contains markdown files that define coding guidelines and project conventions.  Cascade automatically loads these rules and uses them to generate consistent code.  Add your own rules as your project evolves.  Use descriptive file names (e.g. `frontend.md`, `backend.md`) to organise rules by concern.

## Workflows

Reusable multi‑step tasks are defined in the `.windsurf/workflows/` folder.  Each file is written in plain markdown with numbered instructions and code blocks.  You can invoke these workflows from Windsurf chat using a slash command matching the filename.  For example, run `/test-and-lint` to lint and test your code, or `/bind-backend` to wire data‑fetching annotations to your backend.

## Memories

Important project documentation and context can be saved as Windsurf memories.  For example, after writing your Product Requirement Document, you can load it into Windsurf memory so Cascade will recall the project's goals when generating code or tests.  You can create memories directly from the Windsurf UI or by instructing the agent to remember specific details during a conversation.

## Using Windsurf

1. Open your generated project in the Windsurf IDE.
2. Review the rules under `.windsurf/rules/` to understand the project conventions.
3. Use `/help` in the chat to list available workflows.
4. Run `/test-and-lint` before committing to ensure your code passes the test suite and linter.
5. When you add new components that fetch data, run `/bind-backend` to wire them to your backend.
6. When you are ready to deploy, run `/deploy` (works best for static websites; see the workflow file for details).

For more information on Windsurf features, consult the official documentation at <https://windsurf.dev>.