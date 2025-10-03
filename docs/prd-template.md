# Product Requirement Document (PRD) Template

Use this template to describe the features, goals, and constraints of your new application. Delete or fill out the sections as appropriate.

## Vision

Describe the high level vision for the product.  What problem does it solve and why does it matter?

## Goals

List the goals or user stories the product must achieve.  These should be measurable and focused on user value.  Explicitly tie each goal to the customer or business outcome it supports.

## Non-Goals

Call out what this project is not going to do.  Defining non-goals helps maintain focus on the core problem.

## Assumptions

List any assumptions that you have about the user, the environment, integrations, or the underlying technology.  Highlight any third-party systems or credentials that must be available.

## System Architecture Overview

Provide a diagram or narrative describing the full stack.  Identify the frontend client(s), backend services, data stores, and any external APIs.  Include communication patterns (REST, GraphQL, websockets, queues, etc.) and note which components are owned by your team.

## Functional Requirements

- [ ] Requirement 1
- [ ] Requirement 2

### Frontend Experience Details

Summarise the UI surfaces affected by this PRD.  Link goals to specific pages or components, and describe how data from the backend should appear.  Capture validation rules, loading states, empty states, and error states.

### Backend Responsibilities

Document the backend functionality needed to satisfy the goals.  List new endpoints, database tables, or event handlers, and describe how they will authenticate and authorise access.  Note any background jobs or cron tasks.

## Data Contracts & API Shapes

Define the request/response payloads shared between the frontend and backend.  Include type definitions, status codes, and example payloads.  Call out backwards compatibility concerns and versioning requirements.

## Integration Plan

Explain how the frontend will consume the backend.  Specify environment variables, secrets, and feature flags required for end-to-end testing.  Outline how mock data or staging services can be used during development.  If multiple backends are supported (e.g. Firebase vs Supabase), document the switching strategy.

## Non-Functional Requirements

- [ ] Performance requirements
- [ ] Security requirements
- [ ] Observability/monitoring requirements
- [ ] Compliance or privacy requirements

## User Journeys

Describe the typical user flows for your application.  Walk through the steps a user will take to achieve their goals.  Reference which backend endpoints and data sources are invoked during each step.

## Acceptance Criteria

Define how you will know when this product is complete.  Each feature should have clear criteria that can be tested.  Include success metrics, analytics events, and any manual QA scripts required.

## Rollout & Post-Launch

Outline the deployment plan, including feature flag strategy, migration steps, and telemetry you will monitor after release.  Capture the rollback plan if something goes wrong.
