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

Install dependencies from the repository root:

```bash
npm install
```

Build every workspace app:

```bash
npm run build
```

Run scaffold tests:

```bash
npm test
```

Start the backend in watch mode:

```bash
npm run start:api
```

Start the frontend dev server:

```bash
npm run start:web
```
