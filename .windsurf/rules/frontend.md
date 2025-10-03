# Frontend Rules

These rules guide the development of frontend applications using React and other web technologies.

- Use React functional components with hooks; avoid class components unless you have a specific reason.
- Use Tailwind CSS for styling; do not use inline styles unless necessary.  See `tailwind.config.js` in your project for available utilities.
- Export components as named exports from the file where they are defined.
- When adding a new component, also create a corresponding story or test file if applicable.
- Avoid duplication: check the `components-library/` before writing a component that already exists.
- Consume backend data through dedicated hooks or services (e.g. `useUsers()` in `src/services/users.ts`).  Never sprinkle raw `fetch` or SDK calls across multiple components.
- Always provide `loading`, `error`, and `empty` UI states when a component relies on backend data.  These should be captured in Storybook stories or visual regression tests when possible.
- Keep environment variable usage in one place (e.g. a `config/client.ts` module) and import from there so the backend contract stays consistent across components.
