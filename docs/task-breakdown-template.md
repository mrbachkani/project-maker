# Task Breakdown Template

Use this template to turn a PRD into a concrete backlog.  It is optimised for agentic IDEs so that each task has the context required for autonomous execution.

## Milestones

| Milestone | Description | Exit Criteria | Owner |
|-----------|-------------|---------------|-------|
| 1 | | | |
| 2 | | | |

## Task List

Break milestones into actionable tasks.  Keep tasks small enough to complete in a single agent session.

| ID | Task | Type (frontend/backend/devops/docs) | Dependencies | Definition of Done |
|----|------|-------------------------------------|--------------|--------------------|
| T-1 | | | | |
| T-2 | | | | |

### Task Details

For complex tasks, capture additional guidance the agent should follow.

#### Task ID
- **Context:** What part of the system is touched? Link to files, endpoints, or components.
- **Implementation Hints:** Algorithms, libraries, or patterns to use.
- **Testing Strategy:** Unit, integration, and end-to-end checks required.
- **Fallback Plan:** What to do if primary approach fails (e.g., use mock data, stub service).

Copy this sub-section for each task that requires more depth.

## Cross-Cutting Considerations

- **Environment & Secrets:** List environment variables, API keys, or secrets needed to run the stack locally.
- **Data Flow:** Describe how data moves between frontend, backend, and external services for this release.
- **QA Plan:** Outline manual and automated test passes, including smoke tests that prove frontend ↔ backend connectivity.
- **Observability:** Identify metrics, logs, and alerts to configure.

## Review Checklist

- [ ] Tasks cover both frontend and backend touchpoints.
- [ ] Dependencies between tasks are documented.
- [ ] Each task has explicit acceptance criteria and tests.
- [ ] Risks or unknowns are recorded and assigned owners.
