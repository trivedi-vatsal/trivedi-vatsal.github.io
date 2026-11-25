# Vatsal Trivedi — Portfolio

Personal portfolio and blog built with Astro. Live at [vatsal.xyz](https://vatsal.xyz).

## Tech stack

- **Astro** — static site framework
- **Tailwind CSS** — styling (v4 via Vite plugin)
- **shadcn/ui** — accessible React components (theme toggle, buttons)
- **MDX** — blog posts via Astro content collections

## Requirements

- Node.js 22.23.4 (see `.nvmrc`)
- [pnpm](https://pnpm.io/) 9+

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321). Dev still runs locally; canonical, sitemap, RSS, and OG URLs always use `https://vatsal.xyz`.

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `pnpm dev`          | Start dev server                 |
| `pnpm build`        | Production build to `dist/`      |
| `pnpm preview`      | Preview production build         |
| `pnpm check`        | Type-check with Astro            |
| `pnpm format`       | Format with Prettier             |
| `pnpm format:check` | Check formatting without writing |

## Preview a production build

```bash
pnpm build
pnpm preview
```

This is the way to check canonical URLs, sitemap, and RSS against `https://vatsal.xyz`. Analytics stay off unless `PUBLIC_GOOGLE_ANALYTICS_ID` is set (see below).

## Analytics

Google Analytics is omitted unless `PUBLIC_GOOGLE_ANALYTICS_ID` is present at build time. Copy `.env.example` to `.env` only if you need it locally:

```bash
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

The GitHub Pages deploy workflow sets this for production. There is no cookie consent banner; add one if your audience or jurisdiction requires it.

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

### Drafts

- `draft: true` posts appear in `pnpm dev` so you can preview them.
- Production builds, RSS, and `pnpm preview` omit drafts. Flip `draft` to `false` to publish.

## Notes

`/notes/` is a running log: thoughts, articles read, videos, movies, shows, books, podcasts, and bookmarks. Each entry is one Markdown file in `src/content/notes/`. Only `date` is required.

```yaml
---
date: 2026-11-22
type: movie # thought (default) | article | video | movie | show | book | podcast | link
title: 'Dune: Part Two' # name of the thing; quote it if it contains a colon
link: https://example.com # optional, http(s) only
rating: 5 # optional, 1–5
status: done # optional: queued | in-progress | done (default)
tags: ['sci-fi'] # optional
image: /posters/dune-2.jpg # optional poster/cover (URL or file in public/)
draft: false
---
Optional comment, in Markdown.
```

The file name is the entry's id, so keep it short and flat (no subfolders): `dune-2.md` becomes `/notes/dune-2/`.

A few examples:

```md
## <!-- src/content/notes/best-code.md: a quick thought -->

## date: 2026-11-24

The best code is the code you never had to write.
```

```md
## <!-- src/content/notes/aposd.md: a book to read later -->

date: 2026-11-24
type: book
title: A Philosophy of Software Design
status: queued
tags: ['design', 'engineering']

---
```

```md
## <!-- src/content/notes/talk-1.md: a video; the YouTube thumbnail is added automatically -->

date: 2026-11-24
type: video
title: Some conference talk
link: https://www.youtube.com/watch?v=VIDEO_ID

---

Worth it for the second half.
```

What each entry gets:

- A card on `/notes/`, grouped by month. Filter by type, status, or topic, or search. Filters are kept in the URL (`/notes/?type=movie&status=queued&tag=sci-fi`), so a view can be bookmarked.
- Its own page at `/notes/<id>/`, with details, related entries, and newer/older links.
- A short link at `/go/<id>/` that redirects to `link`. Cards and pages link through it.
- A square 1080×1080 share image at `/notes/<id>.png`. The share button on each entry offers download, copy image, copy link, and the system share sheet.

`draft: true` works the same as for blog posts.

## Deployment

The site deploys to GitHub Pages on push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The custom domain is configured in [`public/CNAME`](public/CNAME).

### One-time GitHub Pages settings

1. Repo **Settings → Pages**.
2. Set **Source** to **GitHub Actions** (not the `gh-pages` branch).
3. Keep the custom domain `vatsal.xyz`. Enforce HTTPS.

### DNS

Point the domain at GitHub Pages:

- Apex `A` records to GitHub Pages IPs, or
- `CNAME` for `www` to `trivedi-vatsal.github.io`

GitHub’s [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) have the current IPs.

## Project structure

```
public/          Static assets (images, CNAME)
src/
  components/    Astro sections and shadcn UI
  content/       Blog posts (blog/) and log entries (notes/)
  layouts/       Page layouts
  lib/           Constants and utilities
  pages/         Routes (/, /work, /blog, /notes, /go)
  styles/        Global CSS
astro.config.ts
src/styles/globals.css   Tailwind theme + base styles
```

## Credits

Based on a template by [bue221](https://github.com/bue221/astro-portfolio), customized for my experience.
