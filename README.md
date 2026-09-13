# Codex orchestration template

This template turns Codex into a task-driven development team:

- the main Codex agent is the **orchestrator**;
- `backend` implements server, data, and API work;
- `frontend` implements user-interface work;
- `tester` writes and runs task-derived tests;
- `reviewer` checks the completed change against the original task.

## Start here

1. Copy this folder into the root of a new Git repository.
2. Generate a feature task using your preferred `ai_first` workflow and place it in `specs/tasks.md` (or provide its path in the prompt).
3. Open the repository in Codex and use this prompt:

   ```text
   Implement every unfinished item in specs/tasks.md.
   Act as the orchestrator: delegate independent work to the appropriate agents,
   wait for their results, run the reviewer, and do not mark a task complete
   until the acceptance criteria and checks are satisfied.
   ```

## Files

- `AGENTS.md` — task-execution protocol for the main agent.
- `.codex/config.toml` — project-level subagent settings.
- `.codex/agents/` — specialised subagent roles.
- `specs/tasks.md` — replaceable task template.
- `docs/ai-first-workflow.md` — hand-off rules for generated tasks.

Keep project-specific commands (for example, `pnpm lint`, `pnpm test`, and `pnpm build`) in the repository `AGENTS.md` once the stack is chosen.
