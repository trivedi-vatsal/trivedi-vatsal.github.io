# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Static Astro portfolio site (no backend, database, or Docker). Single dev process serves all pages.

### Commands

| Task | Command |
|------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port **4321**) |
| Production build | `pnpm build` |
| Preview build | `pnpm preview` |
| Format check | `pnpm exec prettier --check . --cache` |
| Format fix | `pnpm format` |

### Running the dev server

Start with `pnpm dev --host 0.0.0.0` so the server is reachable from the VM browser. The default `pnpm dev` binds to localhost only.

There is no ESLint or test runner configured. Prettier is the only lint/format tool.

### Node / pnpm

- `.nvmrc` specifies Node 20; Node 22 also works.
- `packageManager` in `package.json` pins **pnpm@9.1.4** — use `corepack enable` if pnpm is missing.

### Key routes

- `/` — homepage (bento grid)
- `/work` — work experience page
- `/404` — not found page
