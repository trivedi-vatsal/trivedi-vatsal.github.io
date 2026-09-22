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
    href: 'https://vatsal.xyz/StaleGuard/',
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
    builtFor: [
      'Python teams',
      'GitHub Actions users',
    ],
    capabilities: [
      'Run Python dependency security audits in GitHub Actions',
      'Open and maintain issues around detected findings',
      'Reuse the recipes as a starting point for a security pipeline',
    ],
    href: 'https://vatsal.xyz/pysec-recipes/',
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
    blurb: "Notes on engineering, AI, and the work that didn't fit in a commit.",
    overview:
      'Short notes on engineering, AI, and integrations. The stuff I wish I had written down sooner.',
    whatIBuilt:
      'Short posts on DEV about things I learned while building.',
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
    'At Phamax I lead engineering for Ariya, an AI platform for pharmaceutical content. Brand-compliant generation under real regulatory constraints, wired into Veeva CRM and Salesforce Marketing Cloud.',
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
