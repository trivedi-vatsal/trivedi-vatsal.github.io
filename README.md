# Vatsal Trivedi — Portfolio

Personal portfolio and blog built with Astro. Live at [vatsal.xyz](https://vatsal.xyz).

## Tech stack

- **Astro** — static site framework
- **Tailwind CSS** — styling
- **shadcn/ui** — accessible React components (theme toggle, buttons)
- **MDX** — blog posts via Astro content collections

## Requirements

- Node.js 20+
- [pnpm](https://pnpm.io/) 9+

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start dev server                 |
| `pnpm build`        | Production build to `dist/`      |
| `pnpm preview`      | Preview production build         |
| `pnpm check`        | Type-check with Astro            |
| `pnpm format`       | Format with Prettier             |
| `pnpm format:check` | Check formatting without writing |

## Project structure

```
public/          Static assets (images, CNAME)
src/
  components/    Astro sections and shadcn UI
  content/       Blog MDX posts and content config
  layouts/       Page layouts
  lib/           Constants and utilities
  pages/         Routes (/, /work, /blog)
  styles/        Global CSS
astro.config.ts
tailwind.config.ts
```

## Deployment

The site deploys to GitHub Pages on push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The custom domain is configured in [`public/CNAME`](public/CNAME).

## Blog

Add posts as MDX files in `src/content/blog/` with frontmatter:

```yaml
---
title: 'Post title'
description: 'Short summary'
pubDate: 2026-07-29
tags: ['engineering']
draft: false
---
```

The blog index is at `/blog/`. RSS is available at `/rss.xml`. A sitemap is generated at build time.

## Credits

Based on a template by [bue221](https://github.com/bue221/astro-portfolio), customized for my experience.
