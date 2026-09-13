# Feature task: Document project commands and baseline checks

## Goal

Downstream Food Diary issues can rely on documented npm commands for installing
dependencies, running the NestJS backend, running the Angular frontend, and
executing baseline lint, test, and build checks.

## Scope and constraints

- Update project-owned documentation with concrete commands for install, local
  run, lint, test, and build.
- Add or wire baseline smoke checks for the existing backend and frontend
  scaffolds.
- Keep command names stable enough for future Food Diary issues to reference.
- Do not claim Supabase/Auth/RLS validation coverage unless those checks are
  actually implemented.

## Acceptance criteria

- [x] The project documents install, local run, lint, test, and build commands.
- [x] Baseline commands cover both backend and frontend scaffolds where applicable.
- [x] The documented commands are suitable for a clean checkout after dependency installation.
- [x] The docs identify any commands that require Supabase local services or environment variables.

## Tasks

### 1. Document command contract

- [x] 1.1 Document install, lint, test, build, backend start, and frontend start commands.
- [x] 1.2 Wire a root `lint` command and per-workspace baseline lint/type checks.
- [x] 1.3 Update scaffold tests to guard the command contract and environment notes.
- [x] 1.4 Run baseline lint, test, and build checks.

## Completion record

- Changed files: `AGENTS.md`, `README.md`, `package.json`, `apps/api/package.json`, `apps/web/package.json`, `test/scaffold.test.mjs`, `specs/tasks.md`.
- Checks run: `npm run lint`, `npm test`, `npm run build`; tester independently reran all three and reported them passing.
- Reviewer result: blocking closeout issue found for pending completion record, then resolved by updating this record and clarifying local start command environment requirements.
- Non-blocking risks or follow-ups: scaffold tests verify command/doc presence but do not semantically parse every README sentence; no Supabase/Auth/RLS runtime validation exists because the scaffold does not include those integrations yet.
