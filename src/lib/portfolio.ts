import { EXPERIENCE, LINKS } from './constants'
import { STACK as RESUME_STACK } from './resume'

export { RESUME_STACK as STACK }

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

/** Featured editorial project — sourced from current EXPERIENCE entry */
export const FEATURED = {
  name: EXPERIENCE[0].company,
  position: EXPERIENCE[0].position,
  description: EXPERIENCE[0].tasks[0],
  tags: ['AI', 'Pharma', 'LLM', 'Veeva', 'SFMC'],
  href: '/work/',
  period: `${EXPERIENCE[0].start} to ${EXPERIENCE[0].end}`,
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
    title: 'InboxCraft',
    blurb:
      'Client-side PowerShell generation for Microsoft 365 Outlook inbox rules. Also shipped as an Agent Skills pack.',
    href: 'https://github.com/trivedi-vatsal/inboxcraft',
    external: true,
  },
  {
    title: 'StaleGuard',
    blurb:
      'Silent SPA stale-deploy detector using ETag and Last-Modified on tab focus. No polling, no banners.',
    href: 'https://github.com/trivedi-vatsal/StaleGuard',
    external: true,
  },
  {
    title: 'PySecRecipes',
    blurb:
      'GitHub Actions recipes for Python dependency security audits with automated issue lifecycle.',
    href: 'https://github.com/trivedi-vatsal/pysec-recipes',
    external: true,
  },
  {
    title: 'PyImportSync',
    blurb:
      'AST-based check that every Python import is declared in requirements.txt. Action and pre-commit hook.',
    href: 'https://github.com/trivedi-vatsal/PyImportSync',
    external: true,
  },
  {
    title: 'UI Experiments',
    blurb: 'Interface studies and visual explorations.',
    href: LINKS.dribbble,
    external: true,
  },
  {
    title: 'Design Work',
    blurb: 'Selected design pieces on Behance.',
    href: LINKS.behance,
    external: true,
  },
  {
    title: 'Writing',
    blurb: 'Thinking, documented.',
    href: LINKS.devto,
    external: true,
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

function staticMapUrl(lat: number, lon: number, zoom = 12): string {
  return `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lon}&zoom=${zoom}&size=1200x600&maptype=transport&markers=${lat},${lon},lightblue1`
}

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
      image: staticMapUrl(12.9716, 77.5946, 12),
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
      image: staticMapUrl(22.5485, 72.9250, 13),
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
