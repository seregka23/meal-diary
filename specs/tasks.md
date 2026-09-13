# Feature task: Scaffold NestJS and Angular npm workspace

## Goal

The repository contains a runnable npm-managed workspace with a minimal NestJS
backend scaffold and Angular frontend scaffold.

## Scope and constraints

- Add npm package manifests and a root lockfile for the workspace structure.
- Scaffold backend and frontend startup placeholders only.
- Do not implement Food Diary domain APIs or UI flows in this task.

## Acceptance criteria

- [x] The repository contains a NestJS backend scaffold.
- [x] The repository contains an Angular frontend scaffold.
- [x] npm package manifests and lockfile are committed for the introduced workspace/app structure.
- [x] A developer can install dependencies with the documented npm command.
- [x] The scaffold does not implement Food Diary domain behavior beyond minimal startup placeholders.
- [x] Relevant automated tests pass.

## Tasks

### 1. Scaffold workspace

- [x] 1.1 Add the NestJS backend scaffold.
- [x] 1.2 Add the Angular frontend scaffold.
- [x] 1.3 Add npm workspace manifests, lockfile, and command documentation.
- [x] 1.4 Add scaffold acceptance tests.

## Completion record

- Changed files: `.gitignore`, `AGENTS.md`, `README.md`, `package.json`, `package-lock.json`, `apps/api/**`, `apps/web/**`, `test/scaffold.test.mjs`, `specs/tasks.md`.
- Checks run: `npm install`, `npm ls --workspaces --depth=0`, `npm run build`, `npm test`.
- Reviewer result: no blocking issues after reconciling Angular package ranges with the root lockfile.
- Non-blocking risks or follow-ups: `npm install` reports dependency audit findings in third-party packages; no issue #8 acceptance criterion remains open.
