import { EXPERIENCE, LINKS } from './constants'

export const IDENTITY = {
  name: 'Vatsal Trivedi',
  roleLine: 'AI × ENGINEERING × DESIGN',
  statement:
    'I build intelligent products, developer tools, and digital experiences.',
  meta: [
    { label: '8+ YEARS', value: 'Experience' },
    { label: 'AI / FULL STACK', value: 'Focus' },
    { label: 'BENGALURU, INDIA', value: 'Based' },
  ],
}

export const NOW = {
  building:
    'An AI-powered platform for pharmaceutical content creation and workflow automation.',
  exploring: ['Agentic AI', 'LLM orchestration', 'Enterprise AI systems'],
  role: 'Principal Engineer · AI Platform for Pharma',
  updatedLabel: 'July 2026',
}

/** Featured editorial project — sourced from current EXPERIENCE entry */
export const FEATURED = {
  name: EXPERIENCE[0].company,
  position: EXPERIENCE[0].position,
  description: EXPERIENCE[0].tasks[0],
  tags: ['AI', 'Content Systems', 'Enterprise', 'Veeva'],
  href: '/work/',
  period: `${EXPERIENCE[0].start} — ${EXPERIENCE[0].end}`,
}

export const SELECTED_WORK = {
  themes: ['AI Platforms', 'Enterprise Systems', 'SaaS', 'Developer Tools'],
  href: '/work/',
}

export const CURRENTLY_BUILDING = {
  title: 'AI Content Wizard',
  summary:
    'End-to-end pharmaceutical workflow automation with brand-compliant content generation.',
  tags: ['AI', 'Agents', 'Enterprise'],
  status: 'In progress',
  href: '/work/',
}

/**
 * Experiments & outlets grounded in real links already on the site.
 * No invented project names.
 */
export const EXPERIMENTS = [
  {
    title: 'Open Source',
    blurb: 'Code, tools, and contributions on GitHub.',
    href: LINKS.github,
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
    blurb: 'Notes on engineering and product craft.',
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

/**
 * Technologies mentioned across real experience + site copy,
 * mapped only to companies/roles that exist in EXPERIENCE.
 */
export const STACK = [
  {
    name: 'AI / LLMs',
    projects: ['AI Platform for Pharma', 'Comviva'],
  },
  {
    name: 'React',
    projects: ['AI Platform for Pharma', 'Comviva', 'TCS'],
  },
  {
    name: 'TypeScript',
    projects: ['Comviva', 'AI Platform for Pharma'],
  },
  {
    name: 'Node',
    projects: ['Comviva', 'TCS'],
  },
  {
    name: 'Postgres',
    projects: ['Comviva'],
  },
  {
    name: 'Astro',
    projects: ['vatsal.xyz'],
  },
  {
    name: 'Cloud / SaaS',
    projects: ['Comviva'],
  },
  {
    name: 'Integrations',
    projects: ['Comviva'],
  },
]

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
