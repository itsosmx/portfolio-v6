# Contributing

Welcome, and thanks for helping improve this project. This guide explains how to work with the repo, what we expect in pull requests, the coding standards to follow, and how to run tests.

## Rules of Engagement
- Use GitHub issues to propose changes before large work; small fixes can go straight to a PR.
- Keep discussions respectful and assume good intent; summarize decisions in the issue or PR for future readers.
- Prefer smaller, reviewable PRs over large batches; one focused change per PR when possible.
- When in doubt, add a short note in the PR description about context, alternatives considered, and any trade-offs.

## Pull Request Process
- Branch naming: `feature/<topic>`, `fix/<topic>`, or `chore/<topic>`.
- Keep PRs rebased on the latest `main`; avoid merge commits in feature branches.
- Checklist for every PR:
	- Update docs, types, and fixtures when behavior changes.
	- Add or update tests that cover the change.
	- Include screenshots or recordings for UI changes.
	- Confirm lint, type-check, and tests pass locally (see Commands below).
- PR description template:
	- What changed and why (1–3 bullets)
	- Testing done (commands + outcomes)
	- Screenshots (if UI)
	- Risks / rollbacks (if any)
- Reviews: at least one approval is required; address feedback with follow-up commits (avoid force-push after review unless agreed).

## Coding Standards
- Language/stack: Next.js (App Router) with TypeScript and React.
- Style:
	- Prefer functional components, React hooks, and server components where appropriate.
	- Keep components small and composable; lift shared logic into hooks.
	- Use strict TypeScript typing; avoid `any`. Narrow types and surface explicit return types for exported functions.
	- Favor declarative JSX and early returns; avoid deep nesting.
	- Accessibility: use semantic HTML, proper labels, and keyboard/focus handling; ensure `aria-*` where needed.
	- Styling lives in `globals.css` or co-located component styles; prefer CSS variables and utility classes already in use.
- Imports: use absolute imports per tsconfig baseUrl when available; keep order as libs → components → local utilities.
- Data and config: update entries in `src/constants` or `src/data` rather than hardcoding copies.
- Logging/errors: prefer typed errors and user-friendly messages; avoid leaking secrets in logs.

## Tests and Quality Gates
- Lint: `npm run lint`
- Type check: `npm run type-check`
- Unit/component tests (if present): `npm test`
- Build check: `npm run build`

Run the commands relevant to your change before submitting. For UI changes, manually verify key flows and responsive layouts. If a command is missing, add it to `package.json` or note it in the PR.

## Security and Data
- Do not commit secrets or tokens; use environment variables and `.env.example` for required keys.
- Report security concerns privately via issue triage or maintainer contact (avoid public repros of sensitive bugs).

Thanks for contributing!
