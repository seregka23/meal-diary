# Meal Diary

Meal Diary is an npm workspace with a minimal NestJS backend scaffold and a
minimal Angular frontend scaffold. The current project intentionally contains
only startup placeholders; Food Diary domain APIs and UI flows will be added in
later tasks.

## Layout

- `apps/api` - NestJS backend application.
- `apps/web` - Angular frontend application.
- `specs/tasks.md` - task tracking and completion record.
- `docs/ai-first-workflow.md` - AI-first workflow notes.

## Commands

Run all commands from the repository root after cloning the repository. The
baseline commands cover both workspace apps where applicable and rely only on
the committed npm workspace manifests and lockfile.

Install dependencies:

```bash
npm install
```

Run the baseline lint/type checks for every workspace app:

```bash
npm run lint
```

Build every workspace app:

```bash
npm run build
```

Run scaffold and workspace tests:

```bash
npm test
```

Start the NestJS backend in watch mode:

```bash
npm run start:api
```

Start the Angular frontend dev server:

```bash
npm run start:web
```

### Environment-dependent checks

The current scaffold has no Supabase, authentication, RLS, or external service
checks. `npm install`, `npm run lint`, `npm test`, `npm run build`,
`npm run start:api`, and `npm run start:web` are intended to work from a clean
checkout without Supabase local services or application environment variables.
Future tasks that add Supabase-backed features should document their required
local services and environment variables next to the commands that need them.
