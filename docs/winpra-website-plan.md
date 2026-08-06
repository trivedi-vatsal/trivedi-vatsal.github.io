# Winpra Website — Build Plan

**Status:** proposed, ready for Phase 0 decisions  
**Date:** 2026-08-06 (rev 2)  
**Source material:** [winpra-landing-shortlist/](../winpra-landing-shortlist/) — two shortlisted mockups + README

---

## 1. Decisions taken

| Decision | Choice | Note |
|---|---|---|
| Framework | **Astro 7.1.6** (static, TS strict) | Overrides "Next.js + Tailwind" in the shortlist README. See §2. |
| Runtime | **Node ≥ 22.12.0** | Hard engine since Astro 6. Pin via `.nvmrc` (local is on 22.23.1). |
| UI interactivity | **Astro + thin React islands** | Not Next.js. Not a full React app. shadcn/ui only inside islands. See §2.1. |
| Styling | Tailwind CSS 4.3.3 via `@tailwindcss/vite`, tokens in `@theme` | CSS-first tokens make the re-skin cheap. Not `@astrojs/tailwind`. |
| Fonts | **Astro Fonts API** (`fonts:` in config) | Subsetting, fallback metrics, preload. No Fontsource / Google `<link>`. |
| Markdown | **Sätteri** (Astro 7 default), `unified()` as escape hatch | Decide fallback only if Phase 5 needs a remark plugin. |
| Design direction | **Hybrid** — H (Masterplan) base, G tower on `/platform` | See §3. |
| Blog content | **MDX in-repo**, Content Layer + Zod 4 | Reads only via `src/lib/content.ts` (CMS seam). |
| Demo booking | **Cal.com embed** as a lazy island + deep-link fallback | |
| Contact form | **Adapter-stubbed** — UI in Phase 4, backend before launch | Static-host compatible adapter. See §9. |
| Package manager | pnpm | |
| OG images | **Build-time** (e.g. `astro-og-canvas` / Satori) | Portable across Cloudflare and Vercel. No runtime edge dependency. |
| Scroll reveal | **IntersectionObserver primary**; `animation-timeline: view()` as enhancement | Safari/Firefox are in-market, not optional. See §11. |
| Analytics | **Plausible or Fathom** (cookieless) | Prefer self-hosted Plausible if residency optics matter. |

**Pinned versions** (verified on npm, 2026-08-06):

```
astro                7.1.6      @astrojs/mdx        7.0.5
tailwindcss          4.3.3      @astrojs/sitemap    3.7.3
@tailwindcss/vite    4.3.3      @astrojs/react      6.0.2
react / react-dom    19.x       @astrojs/rss        4.0.19
```

---

## 2. Why Astro over Next.js

The shortlist README records Next.js as agreed. This site is ~15 mostly-static marketing pages plus a blog. Astro ships zero JS by default and adds it per-component; Next ships a React runtime to every visitor whether or not the page needs one.

- The mockups are **almost entirely CSS animation**. In Astro they stay CSS animation without a hydration boundary.
- MDX content collections, RSS, sitemap, image optimization, and font self-hosting are first-party.
- The genuinely interactive pieces (Cal.com, mobile nav, contact form, possibly DemoConsole state) become islands. Everything else is HTML.

**Customer portal:** if a logged-in product surface is planned, it is a **separate app** (`app.winpra.com` preferred over `winpra.com/app` on the same static deploy). Do not co-locate Next App Router and Astro on one marketing build. Confirm before Phase 0 — see §9.

### 2.1 React islands + shadcn (not a React site)

Use React only where there is real client state or a third-party widget:

| Island | Why React |
|---|---|
| `MobileNav` | Disclosure, focus trap, escape |
| `ContactForm` | Validation, submit/error/success |
| `CalEmbed` | Lazy third-party embed |
| `DemoConsole` (optional) | Only if chat → recompute → approve is live UI state, not a CSS sequence |

**shadcn/ui** is allowed **only inside those islands** (Button, Input, Label, Textarea, Sheet). Do not adopt shadcn card/bento/dashboard patterns for marketing sections — they fight the H pine/lime system.

Signature visuals (`MasterplanMap`, `TowerBuild`, sparklines, stat strips) stay **Astro + CSS**.

---

## 3. Design direction: the hybrid

**Base system = H (Masterplan).** Pine `#0d221a` / lime `#c8f169` / cream `#f2efe2`, Sora + IBM Plex Mono, rounded corners, calm grid. Survives long-form content — G's uppercase Archivo and hard-edged panels are striking on a landing page and exhausting across a 2,000-word blog post.

**Kept from G:** the floor-by-floor tower build, on `/platform`, re-colored to the H palette.

**Built once, shared:** demo console, stat strip, footer, CTA band, section rhythm.

Every color, font, radius, and spacing step lands in `src/styles/tokens.css` as CSS custom properties consumed by Tailwind `@theme`. Structure tokens so a **full-G skin later is a token file + two hero components** — declare display-font and radius scales even if only H is active at launch.

**Type size floor:** mono chrome labels may be small; anything body-adjacent must stay at a comfortable reading size. The mockups' 9.5–10px mono labels need a deliberate pass in Phase 6 (and a lighter pass when porting).

---

## 4. Information architecture

```
/                          Home (masterplan hero, demo console, stack, CTA)
/platform                  Overview (tower hero) + links to the six modules
  /platform/site-intelligence      L1
  /platform/feasibility            L2
  /platform/compliance             L3
  /platform/bim-cost               L4
  /platform/construction           L5
  /platform/portfolio              L6
/why-winpra                Draft-gating, formula traceability, 1:1 calibration
/security                  Sovereign AI, data residency, jurisdiction
/engagement                Paid POC → Platform → Sovereign (no dollar figures)
/blog                      Index (paginate only when volume warrants)
  /blog/[slug]             Post
  /blog/tag/[tag]          Tag archive (noindex until tag has ≥ 3 posts)
/about                     Team, offices (Riyadh · Dubai · Austin)
/contact                   Form (adapter-stubbed)
/demo                      Cal.com embed + deep-link fallback
/legal/privacy
/legal/terms
/404
```

Generated: `sitemap-index.xml`, `rss.xml`, per-page OG images (build-time).

Module pages share one template and expose **prev / next floor + up to overview** so the tower metaphor is navigable, not only visual.

The six modules are **data**. One `modules` collection feeds the home stack table, `/platform` grid, footer column, and each module page. Change a module name once.

---

## 5. Repository layout

```
winpra-website/
├── src/
│   ├── components/
│   │   ├── primitives/      Button, Container, Section, Kicker, Lede, Heading, Prose
│   │   ├── layout/          Nav, MobileNav (island), Footer, SkipLink
│   │   ├── marketing/       StatStrip, NumberRow, PunchList, RegistryTable,
│   │   │                    ModuleTable, DistrictCards, CTABand, VideoBand
│   │   ├── signature/       MasterplanMap, TowerBuild, DemoConsole, Sparkline
│   │   ├── blog/            PostCard, PostGrid, TableOfContents, TagPill,
│   │   │                    AuthorBox, ShareRow
│   │   └── islands/         CalEmbed.tsx, ContactForm.tsx, MobileNav.tsx
│   │                        (+ shadcn primitives used only here)
│   ├── content/
│   │   ├── blog/*.mdx
│   │   ├── authors/*.yaml
│   │   ├── modules/*.mdx    # frontmatter + prose body (not YAML body)
│   │   └── config.ts        Zod 4 schemas + loaders
│   ├── lib/
│   │   ├── content.ts       Loader façade — the CMS seam
│   │   ├── seo.ts
│   │   ├── nav.ts           Single source for nav + footer links
│   │   └── figures.ts       Illustrative metrics (typed, always labeled)
│   ├── layouts/             BaseLayout, MarketingLayout, PostLayout
│   ├── pages/
│   ├── styles/
│   │   ├── tokens.css       Every design token (H active; G-ready scales)
│   │   └── global.css
│   └── assets/              Optimized via astro:assets (self-hosted only)
├── public/                  Favicons, robots.txt (fonts via Fonts API, not here)
├── docs/
│   ├── mockups/             Shortlisted HTML mockups (visual reference)
│   └── winpra-website-plan.md
├── astro.config.mjs
└── .nvmrc
```

---

## 6. Content model

**`blog`** — `title`, `description`, `publishDate`, `updatedDate?`, `author` (reference → authors), `tags[]`, `heroImage?`, `draft` (default `true`), `canonicalUrl?`, `readingTime` (computed in `content.ts`). Drafts excluded from production builds; preview builds may include them via env flag.

**`authors`** — `name`, `role`, `avatar?`, `bio?`, `linkedin?`.

**`modules`** — `level` (L1–L6), `name`, `slug`, `oneLiner`, `status` (`FOUNDED` / `PRICED` / `CLEAR ✓`, etc.), `order`, plus **MDX body** for long copy. Keep machine fields in frontmatter; do not put prose in YAML.

**`figures` (or inline schema)** — illustrative metrics as `{ value, label, illustrative: true }` so `IRR 30.6%` / `SAR 54M` cannot silently become factual claims.

All reads go through `src/lib/content.ts`. Pages never call `getCollection` directly.

---

## 7. Phase 0 decision table (blockers)

Resolve these **before** scaffolding. Day estimates elsewhere assume these answers exist.

| # | Decision | Suggested default | Owner | Blocks |
|---|---|---|---|---|
| D1 | Hosting | Cloudflare Pages if residency optics matter; else either | | Form adapter, redirects, previews |
| D2 | Customer portal | Separate subdomain `app.` — not on this static app | | Hosting / reverse proxy |
| D3 | Arabic / RTL | Out of v1; layouts use logical properties (`ms`/`me`, `start`/`end`) | | Primitive API |
| D4 | URL inventory | Crawl current winpra.com → redirect map draft | | Phase 7 |
| D5 | Imagery | License or use owned photos; no Pexels hotlinks | | Phase 2 |
| D6 | Contact backend | Resend → shared inbox for v1; same adapter → CRM later | | Phase 4 done |
| D7 | Motion fallback | IntersectionObserver primary (locked — see §11) | eng | Phase 1 |
| D8 | Cal.com | Event slug + privacy review of third-party embed | | Phase 4 |

---

## 8. Phased delivery

Phases list **exit criteria**, not calendar promises. Rough effort is in engineer-days for sequencing only.

### Phase 0 — Setup
`pnpm create astro@latest` → 7.1.6, TypeScript strict, Tailwind 4 via `@tailwindcss/vite`, MDX, sitemap, Prettier (+ `astro check`), `.editorconfig`, `.nvmrc` → `22`. Move mockups to `docs/mockups/`. Record §7 decisions in this file.

**Exit:** repo builds empty shell; Node engine enforced; mockups in-repo; decision table filled.

### Phase 1 — Foundation
Tokens from H into `tokens.css` (G-ready scales present). Sora + IBM Plex Mono via Fonts API (`cssVariable` → `var(--font-sora)`). Primitives (logical properties), `BaseLayout` + `<Font>`, `Nav` + `MobileNav` island, `Footer`, scroll-reveal utility (IO-based). All infinite hero loops gated behind `prefers-reduced-motion: no-preference`.

**Exit:** layout shell on desktop + mobile; tokens documented; reduced-motion kills loops; keyboard skip-link + nav.

### Phase 2 — Home
Port `masterplan.html` section by section. `MasterplanMap` (CSS). `DemoConsole` built once (Astro+CSS, or island if stateful). `RegistryTable`, `DistrictCards`, `NumberRow`, `CTABand`. Self-host and optimize all imagery; no third-party hotlinks.

**Compiler budget:** Astro 7's Rust compiler rejects unclosed non-void elements and invalid nesting the mockups may rely on Chrome to forgive. `compressHTML` defaults to `'jsx'` and strips whitespace between inline elements — SVG/text spots like `ZONING <tspan>…` need `&nbsp;` or `{' '}`. Diff rendered output against mockups.

**Exit:** `/` matches H mockup at 1440 and 390; assets first-party; illustrative figures labeled; Lighthouse perf ≥ 90 on `/` (informal).

### Phase 3 — Platform + modules
`modules` collection (MDX), `/platform` with `TowerBuild` recolored pine/lime, six module pages from one template, floor prev/next, `ModuleTable`. Reuse `DemoConsole`.

**Exit:** all six modules reachable from overview + footer; one name change updates every surface.

### Phase 4 — Company pages
`/why-winpra`, `/security`, `/engagement` (named tiers, no dollar figures), `/about`, `/contact` (form UI + adapter interface; Resend or stub that works on chosen host), `/demo` (Cal island lazy on interaction or viewport + plain link fallback). Legal pages get real copy ownership.

**Exit:** every IA route returns 200; form submit path defined for target host; Cal works without JS via fallback link.

### Phase 5 — Blog
Content Layer `glob()` + Zod 4, index, post layout with brand prose, TOC (anchors from Astro-generated IDs, do not re-slugify), tag archives (noindex if thin), RSS, related posts, three seed posts. Pagination only if needed.

Sätteri default (GFM, SmartyPants, heading IDs). Reading time from raw body in `content.ts`. If a remark plugin is required: `@astrojs/markdown-remark` + `markdown: { processor: unified() }`.

**Exit:** three posts render; drafts excluded in prod; RSS valid; prose matches H, not a generic typography plugin look.

### Phase 6 — SEO / perf / a11y
Per-page meta + canonical, JSON-LD (`Organization`, `Article`, `BreadcrumbList`), build-time OG images, `robots.txt`. Lighthouse CI on key routes — target ≥ 95 mobile. Keyboard pass, axe clean, contrast audit (`--dim` on `--pine`), mono label size pass. Visual regression snapshots for `MasterplanMap`, `TowerBuild`, `DemoConsole`. Security/sovereignty copy legal review.

**Exit:** CI gates green; axe clean on primary templates; contrast documented; OG images in sitemap-linked pages.

### Phase 7 — Launch
Deploy to chosen host, domain cutover, redirect map from §7 D4, analytics, preview deploys per PR.

**Exit:** old URLs redirect; prod Lighthouse holds; contact + demo paths monitored.

**Parallelism:** Phases 3–5 can split across two engineers after Phase 1; Phase 2 is the critical path for brand fidelity. Run a **copy track** in parallel — fifteen pages + legal will gate launch more than Tailwind.

---

## 9. Open items

| # | Item | Status |
|---|---|---|
| 1 | winpra.com URL inventory for redirects | **Required before Phase 7; start in Phase 0** |
| 2 | Contact backend (Resend inbox vs CRM) | Adapter shape in Phase 4; provider before launch |
| 3 | Customer portal hosting | **Ask before Phase 0** — default `app.` subdomain |
| 4 | Real / licensed imagery | **Phase 0 / 2 blocker** — no Pexels hotlinks |
| 5 | Arabic / RTL scope | **Phase 0** — default: not v1, logical props ready |
| 6 | `animation-timeline` fallback | **Decided:** IO primary (§11) |
| 7 | Sätteri vs unified | Default Sätteri; revisit only if Phase 5 needs remark |
| 8 | Security page claims review | Before Phase 7 |
| 9 | Cal.com event slug + DPA/privacy check | Phase 4 |

---

## 10. Non-negotiables

- Illustrative figures stay labeled illustrative (typed in content).
- Positioning line: "The system of action for real-estate development."
- Engagement tiers named, no dollar figures.
- Winpra mark is inline SVG on `currentColor`.
- No third-party hotlinked media in production.
- Infinite motion respects `prefers-reduced-motion`.
- Marketing pages ship zero client JS unless an island is present.

---

## 11. Motion & progressive enhancement

| Concern | Approach |
|---|---|
| Scroll reveals | `IntersectionObserver` utility (~20 lines) is the real path; `animation-timeline: view()` may enhance on Chromium |
| Hero loops (crane, map, tower) | Only run under `prefers-reduced-motion: no-preference` |
| Demo console | Prefer CSS sequence; promote to island only if interaction requires state |
| Cal embed | Lazy load; always ship a normal scheduling link |

Mockups currently gate scroll reveals but leave infinite loops running — that is an a11y bug; fix in Phase 1, do not port as-is.

---

## 12. Astro 7 specifics (before Phase 0)

**Fonts API.** `fonts:` in config with `fontProviders.google()` or `.local()`, `<Font>` in head, consume CSS variables. Subsetting, fallback metrics from the real file, preload — deletes Fontsource and hand-written `@font-face`.

**Content Layer only.** Legacy Content Collections API removed in v6. Use loaders (`glob()`, `file()`) + Zod 4. Astro 4 blog tutorials will not compile.

**Sätteri.** Default markdown/MDX pipeline in v7. `unified()` via `@astrojs/markdown-remark` if remark plugins are required. Sätteri's `mdastPlugins` / `hastPlugins` ecosystem is thin — treat unified fallback as expected when needed.

**Rust compiler is strict.** Unclosed non-void elements and invalid nesting fail the build. Budget time in Phase 2.

**`compressHTML: 'jsx'` default.** Strips whitespace between inline elements. Catch via visual diff, not code reading.

**Image service.** No upscaling — sources must be ≥ largest render size. Cropping defaults without `fit`. SVGs may rasterize. Relevant when replacing Pexels assets.

**Heading IDs may keep trailing hyphens** (`#picture-`). TOC must use Astro-generated IDs.

**Also:** Vite 8; `@astrojs/db` discontinued (unused); `import.meta.env` values are always inlined strings — `"false"` is truthy.

---

## 13. Explicitly out of scope (v1)

- Next.js on the marketing site
- Full shadcn/React component tree for static sections
- Customer portal / auth
- `ar` locale (structure only)
- CMS (Sanity etc.) — seam only via `content.ts`
- Dollar figures on engagement tiers
- GA4

---

## 14. Revision history

| Rev | Date | Notes |
|---|---|---|
| 1 | 2026-08-06 | Initial Astro 5 plan |
| 2 | 2026-08-06 | Astro 7 pins; Fonts API; Sätteri; Phase 0 decision table; IO-primary motion; islands + thin shadcn; build-time OG; modules as MDX; exit criteria; portal = separate app |
