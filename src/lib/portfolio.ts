import { EXPERIENCE, LINKS } from './constants'
import { yearsExperience } from './resume'

export const STACK = [
  {
    name: 'TypeScript',
    useCases: ['Product apps', 'API contracts', 'Developer tooling'],
  },
  {
    name: 'React',
    useCases: ['Interfaces', 'Design systems', 'Interactive workflows'],
  },
  {
    name: 'Node.js',
    useCases: ['APIs', 'Services', 'Automation'],
  },
  {
    name: 'Python',
    useCases: ['Data pipelines', 'Security tooling', 'AI workflows'],
  },
  {
    name: 'PostgreSQL',
    useCases: ['Relational data', 'Product state', 'Analytics backends'],
  },
  {
    name: 'Kafka',
    useCases: ['Event streams', 'Async systems', 'Integrations'],
  },
  {
    name: 'AI / LLMs',
    useCases: ['RAG', 'Agents', 'Content generation'],
  },
  {
    name: 'Integrations',
    useCases: ['CRM', 'Marketing clouds', 'Third-party APIs'],
  },
]

export const AI_SUBSCRIPTIONS = [
  {
    name: 'Claude',
    use: 'Deep reasoning',
  },
  {
    name: 'Cursor',
    use: 'Coding workflow',
  },
  {
    name: 'Gemini',
    use: 'Research passes',
  },
  {
    name: 'ChatGPT',
    use: 'Daily assistant',
  },
]

export const IDENTITY = {
  name: 'Vatsal Trivedi',
  roleLine: 'AI PLATFORMS × ENTERPRISE INTEGRATIONS',
  statement:
    'I dig into messy integration work, ship to production, and keep AI features working inside real enterprise systems.',
  meta: [
    { label: `${yearsExperience()} YEARS`, value: 'Experience' },
    { label: 'AI / FULL STACK', value: 'Focus' },
    { label: 'BENGALURU, INDIA', value: 'Based' },
  ],
}

export const NOW = {
  building:
    'Ariya at Phamax: an AI platform for pharmaceutical content, research, analytics, and engagement.',
  exploring: ['Agentic AI', 'LLM orchestration', 'Enterprise integrations'],
  role: 'Principal Engineer · Phamax (Ariya)',
  updatedLabel: 'July 2026',
}

/** Featured independent project. */
export const FEATURED = {
  name: 'openpreflight',
  position: 'GitHub Checks, on your own server',
  description:
    'Gate private pull requests with native GitHub Check Runs. One Go binary, one SQLite file, on a server you run.',
  tags: ['Self-hosted CI', 'Go', 'SQLite', 'GitHub'],
  href: 'https://openpreflight.xyz',
  external: true,
}

export const SELECTED_WORK = {
  themes: ['AI Platforms', 'Enterprise Systems', 'SaaS', 'Developer Tools'],
  href: '/work/',
}

export const CURRENTLY_BUILDING = {
  title: 'AI tooling experiments',
  summary:
    'Agent skills, inbox automation, and small tools I use with LLMs while coding.',
  tags: ['Agent Skills', 'MCP', 'Tooling', 'LLMs'],
  status: 'Exploring',
  href: '/experiments/',
}

/**
 * Experiments & outlets grounded in real links already on the site.
 * No invented project names.
 * `cover` maps to `/experiments/{cover}.svg` via EXPERIMENT_COVERS
 * (swap in real product shots later under public/experiments/).
 */
export const EXPERIMENTS = [
  {
    title: 'openpreflight',
    slug: 'openpreflight',
    cover: 'openpreflight',
    kind: 'Self-hosted CI',
    blurb:
      'Native GitHub Check Runs for private pull requests, operated from one Go binary and one SQLite file on your own server.',
    overview:
      'Self-hosted CI for private PRs: GitHub App, webhooks, runner, UI, and SQLite state in one deploy. No hosted control plane, no Actions-minute bill.',
    whatIBuilt:
      'One deployable unit that covers GitHub App setup, webhooks, Check Runs, a local runner, a small UI, and SQLite-backed state.',
    builtFor: [
      'Private repositories',
      'Self-hosted teams',
      'Straightforward build gates',
    ],
    capabilities: [
      'Run native GitHub Check Runs against private pull requests',
      'Keep runner state and logs on a server you run',
      'Set up with Docker Compose or a Linux release binary',
    ],
    href: 'https://openpreflight.xyz',
    external: true,
    action: 'Visit openpreflight',
  },
  {
    title: 'gh-helix',
    slug: 'gh-helix',
    cover: 'gh-helix',
    kind: 'Backup CLI',
    blurb:
      'Backs up every repository in a GitHub organization to local copies you can check, and restores them offline, Git LFS included.',
    overview:
      'GitHub being reliable is not the same as having a second copy. This keeps a checked, browsable mirror of every repo in an org and restores from it even when GitHub is down.',
    whatIBuilt:
      'A Node.js CLI that discovers repos through the GitHub API, clones every branch in parallel, runs git fsck on each copy, writes a manifest, and restores working clones offline with LFS objects.',
    builtFor: [
      'GitHub organizations',
      'Disaster recovery plans',
      'Teams that want a copy GitHub does not hold',
    ],
    capabilities: [
      'Mirror every repo in an org as real files on disk, with renames and archives tracked by repo ID',
      'Treat missing LFS objects as a failed backup and never delete a local copy',
      'Restore a working clone with no network, and resume safely after an interrupted run',
    ],
    href: 'https://github.com/trivedi-vatsal/gh-helix',
    external: true,
    action: 'View source',
  },
  {
    title: 'Knock',
    slug: 'knock',
    cover: 'knock',
    kind: 'React component library',
    blurb:
      'Copy-paste React components for private previews: access screens, invitations, and draft controls.',
    overview:
      'UI pieces for private product previews: access screens, invites, and draft controls. React, Tailwind, shadcn-friendly install.',
    whatIBuilt:
      'Copy-paste React and Tailwind components for private preview access, invites, and draft controls.',
    builtFor: [
      'Product teams',
      'Private-preview launches',
      'React and Tailwind projects',
    ],
    capabilities: [
      'Add access screens for private previews',
      'Use invitation flows and draft controls without starting from scratch',
      'Copy components directly into a shadcn-based React project',
    ],
    href: 'https://knock.codes',
    external: true,
    action: 'Visit Knock',
  },
  {
    title: 'astro-markdown-block',
    slug: 'astro-markdown-block',
    cover: 'astro-markdown-block',
    kind: 'npm package',
    blurb:
      'A Markdown block for Astro and React. Readers flip between the rendered preview and the raw source, and copy the Markdown in one click.',
    overview:
      'Prompts, READMEs, and snippets usually get pasted somewhere else. This block shows them rendered, keeps the original Markdown one toggle away, and copies it exactly as written.',
    whatIBuilt:
      'A React component on npm with GitHub Flavored Markdown, light and dark themes from CSS variables, your own remark and rehype plugins, and about 1.7 KB of JS gzipped.',
    builtFor: [
      'Astro and MDX sites',
      'React 18+ apps',
      'Docs and prompt libraries',
    ],
    capabilities: [
      'Install with npm install astro-markdown-block',
      'Switch between rendered preview and raw Markdown, then copy it in one click',
      'Restyle it with --amb-* CSS variables, no Tailwind needed',
    ],
    href: 'https://vatsal.xyz/astro-markdown-block/',
    external: true,
    action: 'Open the demo',
  },
  {
    title: 'Terrazzo',
    slug: 'astro-terrazzo',
    cover: 'astro-terrazzo',
    kind: 'Astro theme',
    blurb:
      'The theme behind this site, released on its own: a bento-grid portfolio and blog for Astro with a work timeline, experiments, and a journal.',
    overview:
      'This site, minus my content. A bento home page, work timeline, experiments gallery, and a journal with series, tags, search, and Mermaid diagrams. Sample content belongs to a made-up person, so you swap in your own.',
    whatIBuilt:
      'An Astro theme with no UI framework. Interactive parts are small custom elements, share images are generated at build time, and light and dark mode follow the system.',
    builtFor: [
      'Developers who want a portfolio and blog',
      'Astro sites',
      'People who like pages with almost no JavaScript',
    ],
    capabilities: [
      'Start with npm create astro@latest -- --template trivedi-vatsal/astro-terrazzo',
      'Write posts in series with numbering, next and previous links, and Mermaid diagrams',
      'Get an Open Graph image for every page, plus a sitemap, RSS, and JSON-LD',
    ],
    href: 'https://vatsal.xyz/astro-terrazzo/',
    external: true,
    action: 'Open the demo',
  },
  {
    title: 'receipts',
    slug: 'receipts',
    cover: 'receipts',
    kind: 'Claude Code tool',
    blurb:
      'A weekly record of what you shipped. Claude Code reads your git history and sessions and writes dated notes backed by commits, PRs, and measured results.',
    overview:
      'Performance reviews and 1:1s go better with receipts. Once a week this reads your commits and Claude Code sessions, then writes up what you shipped with every claim dated and sourced. Everything runs locally.',
    whatIBuilt:
      'A Python collector and no-AI draft step for the counting, a /weekly-update command for the prose, per-project topic files, and static share pages for non-technical readers.',
    builtFor: [
      'Engineers using Claude Code',
      'Performance reviews and promotion packets',
      'Managers who want a plain-language summary',
    ],
    capabilities: [
      'Collect commits, PRs, sessions, and test results into a facts-only weekly draft, no AI needed',
      'Run /weekly-update to write each week up, with a commit hash or PR behind every claim',
      'Share static pages that work from disk and make no network requests',
    ],
    href: 'https://vatsal.xyz/receipts/',
    external: true,
    action: 'Visit receipts',
  },
  {
    title: 'InboxCraft',
    slug: 'inboxcraft',
    cover: 'inboxcraft',
    kind: 'Developer tool',
    blurb:
      'Client-side PowerShell generation for Microsoft 365 Outlook inbox rules. Also shipped as an Agent Skills pack.',
    overview:
      'Describe the Outlook rule you want. Get PowerShell for Microsoft 365 you can inspect and run yourself. Nothing leaves the browser.',
    whatIBuilt:
      'A browser-only PowerShell generator for Outlook inbox rules, plus an Agent Skills pack for the same workflow.',
    builtFor: [
      'Microsoft 365 users',
      'Inbox organizers',
      'Agent-assisted workflows',
    ],
    capabilities: [
      'Turn a rule idea into a ready-to-run PowerShell command',
      'Create Microsoft 365 Outlook inbox rules without sending credentials anywhere',
      'Use the workflow as an Agent Skills pack',
    ],
    href: 'https://inboxcraft.app/',
    external: true,
    action: 'Open InboxCraft',
  },
  {
    title: 'InboxCraft Skills',
    slug: 'inboxcraft-skills',
    cover: 'inboxcraft-skills',
    kind: 'Agent Skills',
    blurb:
      'Agent Skills pack for InboxCraft: nine PowerShell tools so assistants can manage Outlook rules, folders, and categories from a prompt.',
    overview:
      'Install once, then ask Claude Code, Cursor, or any npx-skills assistant to create rules, build folder trees, scan large folders, or clean up empty ones.',
    whatIBuilt:
      'Nine PowerShell tools for rule creation, folders, categories, large-folder scans, and empty-folder cleanup. Install with the standard skills CLI.',
    builtFor: [
      'Claude Code and Cursor users',
      'Microsoft 365 power users',
      'Agent-assisted inbox workflows',
    ],
    capabilities: [
      'Install with npx skills add trivedi-vatsal/inboxcraft-skills',
      'Manage Outlook rules, folders, and categories from a prompt',
      'Works with assistants that follow the npx skills spec',
    ],
    href: 'https://github.com/trivedi-vatsal/inboxcraft-skills',
    external: true,
    action: 'View skills pack',
  },
  {
    title: 'audit-plan-tasks',
    slug: 'audit-plan-tasks',
    cover: 'audit-plan-tasks',
    kind: 'Agent Skills',
    blurb:
      'Agent Skill that scaffolds AUDIT.md, PLAN.md, and TASKS.md so a plan is based on what you actually checked, not on the request.',
    overview:
      'Most AI plans start from the prompt. This skill starts from the code: read it, run the commands, hit the real endpoints, then write AUDIT.md, PLAN.md, and TASKS.md from what you found.',
    whatIBuilt:
      'An Agent Skill that scaffolds AUDIT.md, PLAN.md, and TASKS.md after a real audit, not before one.',
    builtFor: [
      'Engineers using coding agents',
      'Complex feature or fix work',
      'Teams that want plans tied to real checks',
    ],
    capabilities: [
      'Scaffold AUDIT.md, PLAN.md, and TASKS.md from a real audit',
      'Install with npx skills add trivedi-vatsal/audit-plan-tasks',
      'Keep plans grounded in code and commands, not wishful prompts',
    ],
    href: 'https://github.com/trivedi-vatsal/audit-plan-tasks',
    external: true,
    action: 'View skill',
  },
  {
    title: 'production-agent-md',
    slug: 'production-agent-md',
    cover: 'production-agent-md',
    kind: 'Agent instructions',
    blurb:
      'My CLAUDE.md for Claude Code, packaged so the same instructions work in Codex through a mirrored AGENTS.md.',
    overview:
      'How I want coding agents to behave in a production codebase: planning, context management, safe edits, testing, and correcting themselves. One file is the source of truth, and the other is generated from it.',
    whatIBuilt:
      'A canonical CLAUDE.md, an AGENTS.md mirror, an install script that backs up existing files, and starter gotchas.md and context-log.md templates for session notes.',
    builtFor: [
      'Claude Code and Codex users',
      'Production repositories',
      'Teams that want agents to behave the same way every session',
    ],
    capabilities: [
      'Install into a repo with one curl command, with existing files backed up first',
      'Keep CLAUDE.md and AGENTS.md in sync from one source',
      'Seed gotchas.md and context-log.md without overwriting history',
    ],
    href: 'https://github.com/trivedi-vatsal/production-agent-md',
    external: true,
    action: 'View source',
  },
  {
    title: 'StaleGuard',
    slug: 'staleguard',
    cover: 'staleguard',
    kind: 'Frontend utility',
    blurb:
      'Silent SPA stale-deploy detector using ETag and Last-Modified on tab focus. No polling, no banners.',
    overview:
      'When someone comes back to an open SPA tab, check if a newer deploy exists. No polling, no banner.',
    whatIBuilt:
      'A small library that checks ETag and Last-Modified on tab focus so SPAs can reload after a deploy.',
    builtFor: ['SPA maintainers', 'Product teams'],
    capabilities: [
      'Detect a newer deploy when someone comes back to a tab',
      'Use ETag and Last-Modified instead of polling',
      'Reload quietly, without a banner',
    ],
    href: 'https://github.com/trivedi-vatsal/StaleGuard',
    external: true,
    action: 'View source',
  },
  {
    title: 'PySecRecipes',
    slug: 'pysec-recipes',
    cover: 'pysec-recipes',
    kind: 'CI recipes',
    blurb:
      'GitHub Actions recipes for Python dependency security audits with automated issue lifecycle.',
    overview:
      'GitHub Actions recipes that audit Python dependencies and open issues for findings instead of burying them in build logs.',
    whatIBuilt:
      'Reusable Actions recipes that run dependency audits and keep findings in GitHub issues as they open and close.',
    builtFor: ['Python teams', 'GitHub Actions users'],
    capabilities: [
      'Run Python dependency security audits in GitHub Actions',
      'Open and maintain issues around detected findings',
      'Reuse the recipes as a starting point for a security pipeline',
    ],
    href: 'https://github.com/trivedi-vatsal/pysec-recipes',
    external: true,
    action: 'View recipes',
  },
  {
    title: 'PyImportSync',
    slug: 'py-import-sync',
    cover: 'py-import-sync',
    kind: 'Developer tool',
    blurb:
      'AST-based check that every Python import is declared in requirements.txt. Action and pre-commit hook.',
    overview:
      'Catches imports that never made it into requirements.txt. AST-based, so the same check runs locally and in CI.',
    whatIBuilt:
      'An AST check packaged as a GitHub Action and a pre-commit hook.',
    builtFor: ['Python maintainers', 'CI pipelines', 'Pre-commit workflows'],
    capabilities: [
      'Find imports missing from requirements.txt',
      'Run the check in CI with a GitHub Action',
      'Catch dependency drift before commit with a pre-commit hook',
    ],
    href: 'https://github.com/trivedi-vatsal/PyImportSync',
    external: true,
    action: 'View source',
  },
  {
    title: 'UI Experiments',
    slug: 'ui-experiments',
    cover: 'ui-experiments',
    kind: 'Visual studies',
    blurb: 'Interface studies and visual explorations.',
    overview:
      'Loose interface experiments: hierarchy, motion, composition. Rough drafts, not case studies.',
    whatIBuilt:
      'Small UI studies where I try layout, type, and motion before using them in real work.',
    builtFor: ['Design peers', 'Product builders'],
    capabilities: [
      'Browse interface concepts and interaction studies',
      'See explorations of layout, type, and motion',
    ],
    href: LINKS.dribbble,
    external: true,
    action: 'Browse studies',
  },
  {
    title: 'Design Work',
    slug: 'design-work',
    cover: 'design-work',
    kind: 'Design portfolio',
    blurb: 'Selected design pieces on Behance.',
    overview:
      'Selected design pieces on Behance: interfaces and visual work from past projects.',
    whatIBuilt:
      'A Behance portfolio of interface and visual work from product projects.',
    builtFor: ['Design teams', 'Product leaders'],
    capabilities: [
      'Browse selected case studies and design pieces',
      'See the visual side of product and interface work',
    ],
    href: LINKS.behance,
    external: true,
    action: 'View portfolio',
  },
  {
    title: 'Writing',
    slug: 'writing',
    cover: 'writing',
    kind: 'Writing archive',
    blurb:
      "Notes on engineering, AI, and the work that didn't fit in a commit.",
    overview:
      'Short notes on engineering, AI, and integrations. The stuff I wish I had written down sooner.',
    whatIBuilt: 'Short posts on DEV about things I learned while building.',
    builtFor: ['Engineers', 'People building with LLMs'],
    capabilities: [
      'Read notes on engineering, AI, and shipping software',
      'Browse longer-form writing on DEV',
    ],
    href: LINKS.devto,
    external: true,
    action: 'Read writing',
  },
]

export const LIFE = {
  title: 'Life outside code',
  interests: [
    {
      label: 'Photography',
      href: LINKS.instagram,
      external: true,
    },
    {
      label: 'Travel',
      href: LINKS.instagram,
      external: true,
    },
    {
      label: 'Design',
      href: LINKS.behance,
      external: true,
    },
    {
      label: 'Open Source',
      href: LINKS.github,
      external: true,
    },
  ],
}

/** About page: longer narrative, stack folders, place. */
export const ABOUT_INTRO = {
  greeting: "Hey, I'm Vatsal!",
  paragraphs: [
    `I'm an engineer with ${yearsExperience()} years on AI platforms, multi-tenant SaaS, and enterprise integrations. I like owning a product problem the whole way: figure out what's worth building, design it, ship it, then see if it actually helped. I work best next to product and design, with enough context to help shape the problem.`,
    'At Phamax I lead engineering for Ariya, a generative-AI platform for pharma teams. In a normal week I touch every layer: a React feature, a Django or FastAPI endpoint, a retrieval-grounded LLM pipeline with citations, and the GitHub Actions workflow that ships all three to 8 client deployments. Before that I spent three years on Factoreal, a fan-engagement SaaS for sports teams that Comviva incubated, where I built its BigQuery analytics pipeline, fan scoring, and Shopify integration. After that I ran releases and wrote the segmentation engine for MobiLytix Rewards at Comviva.',
    "Outside work I'm usually with a camera, or tinkering in open source and small UI experiments.",
  ],
}

/** Folder peek lines: tools · tools · category */
export const ABOUT_STACK_FOLDERS = [
  {
    id: '01',
    category: 'build',
    tools: ['typescript', 'react', 'node'],
  },
  {
    id: '02',
    category: 'data',
    tools: ['postgres', 'delta', 'vectors'],
  },
  {
    id: '03',
    category: 'ai',
    tools: ['llms', 'agents', 'orchestration'],
  },
  {
    id: '04',
    category: 'ship',
    tools: ['astro', 'cloud', 'integrations'],
  },
]

export const ABOUT_LOCATION = {
  places: [
    {
      id: 'current' as const,
      code: 'IN',
      label: 'Current',
      city: 'Bengaluru',
      region: 'India',
      note: 'Based in Bengaluru, India.',
      coords: '12.9716° N, 77.5946° E',
      embed:
        'https://www.openstreetmap.org/export/embed.html?bbox=77.5346%2C12.9416%2C77.6546%2C13.0016&layer=mapnik&marker=12.9716%2C77.5946',
      link: 'https://www.openstreetmap.org/?mlat=12.9716&mlon=77.5946#map=13/12.9716/77.5946',
    },
    {
      id: 'studied' as const,
      code: 'GJ',
      label: 'Studied',
      city: 'Vallabh Vidyanagar',
      region: 'Gujarat, India',
      note: 'Studied in Vallabh Vidyanagar, Gujarat.',
      coords: '22.5485° N, 72.9250° E',
      embed:
        'https://www.openstreetmap.org/export/embed.html?bbox=72.8850%2C22.5185%2C72.9650%2C22.5785&layer=mapnik&marker=22.5485%2C72.9250',
      link: 'https://www.openstreetmap.org/?mlat=22.5485&mlon=72.9250#map=14/22.5485/72.9250',
    },
  ],
}

export const ABOUT_SHELF = [
  {
    title: 'Open Source',
    author: 'GitHub',
    category: 'build' as const,
    href: LINKS.github,
    external: true,
  },
  {
    title: 'UI Experiments',
    author: 'Dribbble',
    category: 'craft' as const,
    href: LINKS.dribbble,
    external: true,
  },
  {
    title: 'Design Work',
    author: 'Behance',
    category: 'craft' as const,
    href: LINKS.behance,
    external: true,
  },
  {
    title: 'Writing',
    author: 'DEV',
    category: 'build' as const,
    href: LINKS.devto,
    external: true,
  },
  {
    title: 'Photography',
    author: 'Instagram',
    category: 'life' as const,
    href: LINKS.instagram,
    external: true,
  },
  {
    title: 'Travel',
    author: 'Instagram',
    category: 'life' as const,
    href: LINKS.instagram,
    external: true,
  },
  {
    title: 'Resume',
    author: 'vatsal.xyz',
    category: 'build' as const,
    href: LINKS.resume,
    external: true,
  },
  {
    title: 'Journal',
    author: 'This site',
    category: 'build' as const,
    href: '/blog/',
    external: false,
  },
]

export const ABOUT_PHOTO_CATEGORIES = [
  { label: 'All', href: LINKS.instagram },
  { label: 'Photography', href: LINKS.instagram },
  { label: 'Travel', href: LINKS.instagram },
  { label: 'Design', href: LINKS.behance },
] as const

/**
 * Build log from dated, verifiable activity only
 * (role starts + published blog posts; no invented entries).
 */
export type BuildLogEntry = {
  date: string
  label: string
  href?: string
}

export function buildLogFromContent(
  latestPosts: {
    title: string
    href: string
    pubDate: string
    series?: { slug: string; title: string; part: number }
  }[],
): BuildLogEntry[] {
  const roleStarts: BuildLogEntry[] = EXPERIENCE.map((entry) => ({
    date: formatBuildDate(entry.start),
    label: `${entry.position} · ${entry.company}`,
    href: '/work/',
  }))

  const seenSeries = new Set<string>()
  const posts: BuildLogEntry[] = []

  for (const post of latestPosts) {
    const slug = post.series?.slug
    if (slug) {
      if (seenSeries.has(slug)) continue
      seenSeries.add(slug)
      const parts = latestPosts.filter((entry) => entry.series?.slug === slug)
      const first = [...parts].sort(
        (a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0),
      )[0]
      posts.push({
        date: formatIsoBuildDate(post.pubDate),
        label: post.series?.title ?? post.title,
        href: first?.href ?? post.href,
      })
      continue
    }

    posts.push({
      date: formatIsoBuildDate(post.pubDate),
      label: post.title,
      href: post.href,
    })
  }

  return [...posts, ...roleStarts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5)
}

function formatBuildDate(human: string): string {
  // "May 2025" → "2025.05"
  const months: Record<string, string> = {
    Jan: '01',
    January: '01',
    Feb: '02',
    February: '02',
    Mar: '03',
    March: '03',
    Apr: '04',
    April: '04',
    May: '05',
    Jun: '06',
    June: '06',
    Jul: '07',
    July: '07',
    Aug: '08',
    August: '08',
    Sep: '09',
    September: '09',
    Oct: '10',
    October: '10',
    Nov: '11',
    November: '11',
    Dec: '12',
    December: '12',
  }
  const [month, year] = human.split(' ')
  const mm = months[month] ?? '01'
  return `${year}.${mm}`
}

function formatIsoBuildDate(iso: string): string {
  const d = new Date(iso)
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}
