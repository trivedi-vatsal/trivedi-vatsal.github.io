import { EXPERIENCE, LINKS } from './constants'

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
    'I embed with the problem, ship into production, and own the integrations that make AI useful in real enterprises.',
  meta: [
    { label: '8+ YEARS', value: 'Experience' },
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
    'Gate private pull requests with native GitHub Check Runs. One Go binary, one SQLite file, on infrastructure you control.',
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
    'Agent skills, inbox automation, and small developer tools that make LLM assistants useful in day-to-day workflows.',
  tags: ['Agent Skills', 'MCP', 'Tooling', 'LLMs'],
  status: 'Exploring',
  href: '/experiments/',
}

/**
 * Experiments & outlets grounded in real links already on the site.
 * No invented project names.
 */
export const EXPERIMENTS = [
  {
    title: 'openpreflight',
    slug: 'openpreflight',
    kind: 'Self-hosted CI',
    blurb:
      'Native GitHub Check Runs for private pull requests, operated from one Go binary and one SQLite file on your own server.',
    overview:
      'openpreflight gives teams a straightforward way to gate private pull requests without a hosted CI control plane, runner fleet, or Actions-minute bill. The GitHub App, webhook receiver, runner, UI, and local state are designed to be understandable and operated in one place.',
    whatIBuilt:
      'A self-hosted CI product that brings GitHub App configuration, webhooks, Check Runs, a local runner, a small UI, and SQLite-backed state into one deployable unit.',
    builtFor: [
      'Private repositories',
      'Self-hosted teams',
      'Straightforward build gates',
    ],
    capabilities: [
      'Run native GitHub Check Runs against private pull requests',
      'Keep runner state and logs on infrastructure you control',
      'Set up with Docker Compose or a Linux release binary',
    ],
    href: 'https://openpreflight.xyz',
    external: true,
    action: 'Visit openpreflight',
  },
  {
    title: 'Knock',
    slug: 'knock',
    kind: 'React component library',
    blurb:
      'Copy-paste React components for private previews: access screens, invitations, and draft controls.',
    overview:
      'Knock is a focused set of UI building blocks for the awkward middle stage of a product: when a preview is private, invitations need to be managed, and draft controls need to be clear. Components are built for React and Tailwind, with shadcn-friendly installation.',
    whatIBuilt:
      'A copy-paste component collection for the private-preview journey, including access screens, invitation UI, and draft-state controls that fit naturally into React and Tailwind projects.',
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
    kind: 'Developer tool',
    blurb:
      'Client-side PowerShell generation for Microsoft 365 Outlook inbox rules. Also shipped as an Agent Skills pack.',
    overview:
      'InboxCraft takes the friction out of setting up repeatable inbox rules. Describe the sorting or routing you need, then use the generated PowerShell as a practical starting point for Outlook on Microsoft 365.',
    whatIBuilt:
      'A client-side rule generator and Agent Skills pack that turns everyday inbox-routing needs into PowerShell people can inspect and run themselves.',
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
    href: 'https://github.com/trivedi-vatsal/inboxcraft',
    external: true,
    action: 'View source',
  },
  {
    title: 'StaleGuard',
    slug: 'staleguard',
    kind: 'Frontend utility',
    blurb:
      'Silent SPA stale-deploy detector using ETag and Last-Modified on tab focus. No polling, no banners.',
    overview:
      'StaleGuard is a small guardrail for single-page apps. It checks whether a newer deployment exists when someone returns to an open tab, keeping users current without adding constant network traffic or disruptive UI.',
    whatIBuilt:
      'A focused stale-deployment detector that treats tab focus as the right moment to check headers, keeping the implementation lightweight and the visitor experience calm.',
    builtFor: ['SPA maintainers', 'Product teams', 'Quiet refresh flows'],
    capabilities: [
      'Detect a newer deployment when a visitor returns to a tab',
      'Use ETag and Last-Modified headers instead of a polling loop',
      'Keep the refresh experience quiet and unobtrusive',
    ],
    href: 'https://github.com/trivedi-vatsal/StaleGuard',
    external: true,
    action: 'View source',
  },
  {
    title: 'PySecRecipes',
    slug: 'pysec-recipes',
    kind: 'CI recipes',
    blurb:
      'GitHub Actions recipes for Python dependency security audits with automated issue lifecycle.',
    overview:
      'PySecRecipes packages a repeatable dependency-security workflow for Python projects. The recipes help teams surface findings in CI and keep the follow-up work visible instead of letting it disappear in build logs.',
    whatIBuilt:
      'Reusable GitHub Actions recipes that combine Python dependency auditing with an issue workflow, so findings can be reviewed and tracked instead of being left as one-off CI output.',
    builtFor: [
      'Python teams',
      'Security-minded maintainers',
      'GitHub Actions users',
    ],
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
    kind: 'Developer tool',
    blurb:
      'AST-based check that every Python import is declared in requirements.txt. Action and pre-commit hook.',
    overview:
      'PyImportSync catches a familiar source of broken environments: imports that never made it into requirements.txt. It inspects Python code structurally, so the same check can run locally and in CI.',
    whatIBuilt:
      'An AST-based import-to-requirements check packaged for both GitHub Actions and pre-commit, so dependency drift is caught where teams already work.',
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
    kind: 'Visual studies',
    blurb: 'Interface studies and visual explorations.',
    overview:
      'A working collection of interface ideas: small explorations of hierarchy, motion, composition, and interaction. These are useful as a window into the visual thinking behind production work.',
    whatIBuilt:
      'A living set of visual studies used to test interaction patterns, typography, and layout ideas before they make their way into larger product work.',
    builtFor: ['Design peers', 'Product builders', 'Interface-curious people'],
    capabilities: [
      'Browse interface concepts and interaction studies',
      'See explorations focused on visual craft',
    ],
    href: LINKS.dribbble,
    external: true,
    action: 'Browse studies',
  },
  {
    title: 'Design Work',
    slug: 'design-work',
    kind: 'Design portfolio',
    blurb: 'Selected design pieces on Behance.',
    overview:
      'A curated view of selected design work, from individual interface pieces to broader visual explorations. It is the right place to look for the craft and decisions behind the final surface.',
    whatIBuilt:
      'A curated design portfolio that makes the visual work legible: the surfaces, systems, and explorations behind the final product experience.',
    builtFor: ['Potential collaborators', 'Design teams', 'Product leaders'],
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
    kind: 'Writing archive',
    blurb: 'Thinking, documented.',
    overview:
      'Notes from the work: practical lessons about engineering, AI, integration work, and the craft of building useful software. The archive is meant to be useful whether you are debugging a detail or thinking through a bigger system.',
    whatIBuilt:
      'An ongoing writing practice that turns implementation details, lessons, and engineering decisions into short pieces other builders can use.',
    builtFor: ['Engineers', 'AI practitioners', 'Curious builders'],
    capabilities: [
      'Read notes on engineering, AI, and developer craft',
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

/** About page — longer narrative, stack folders, place. */
export const ABOUT_INTRO = {
  greeting: "Hey, I'm Vatsal!",
  paragraphs: [
    "I'm a Full Spectrum Engineer with 8+ years of experience building AI platforms, multi-tenant SaaS, and enterprise integrations. What I enjoy most is owning a product problem end to end: finding the gap worth solving, shaping the architecture, shipping the craft, and watching whether it actually worked. I do my best work close to product, design, and business, with enough trust and context to help define the problem.",
    'At Phamax I lead engineering for Ariya, an AI platform for pharmaceutical content. Brand-compliant generation from early sketches to production workflows under real regulatory constraints, wired into systems like Veeva CRM and Salesforce Marketing Cloud.',
    "Outside of work, I'm usually somewhere with a camera (travel, frames, visual craft) or tinkering in open source and interface experiments.",
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
      note: 'Now enjoying Bengaluru, India.',
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
 * (role starts + published blog posts — no invented entries).
 */
export type BuildLogEntry = {
  date: string
  label: string
  href?: string
}

export function buildLogFromContent(
  latestPosts: { title: string; href: string; pubDate: string }[],
): BuildLogEntry[] {
  const roleStarts: BuildLogEntry[] = EXPERIENCE.map((entry) => ({
    date: formatBuildDate(entry.start),
    label: `${entry.position} · ${entry.company}`,
    href: '/work/',
  }))

  const posts: BuildLogEntry[] = latestPosts.map((post) => ({
    date: formatIsoBuildDate(post.pubDate),
    label: post.title,
    href: post.href,
  }))

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
