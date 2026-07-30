import type { ExperienceItemType } from '@/components/work-experience'
import resume from '../../resume.json'

type ResumeWork = {
  name: string
  location?: string
  description?: string
  position: string
  url?: string
  startDate: string
  endDate?: string
  summary?: string
  highlights?: string[]
}

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

/** Optional skill chips per role — not part of JSON Resume work schema. */
const ROLE_SKILLS: Record<string, string[]> = {
  '2025-05-08': [
    'TypeScript',
    'React',
    'LLM',
    'RAG',
    'Veeva CRM',
    'SFMC',
    'Python',
    'Postgres',
  ],
  '2021-12-01': [
    'TypeScript',
    'React',
    'FeathersJS',
    'Kafka',
    'Delta Lake',
    'Postgres',
    'Vector DB',
  ],
  '2020-06-01': ['Shopify', 'HubSpot', 'BigQuery', 'GoodData', 'AWS', 'CDN'],
  '2018-09-01': [
    'React',
    'Angular',
    'Node.js',
    'Express',
    'Microsoft 365',
    'GA360',
  ],
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function formatHumanMonth(iso: string): string {
  const [year, month] = iso.split('-')
  const label = MONTHS[Number(month) - 1] ?? month
  return `${label} ${year}`
}

function formatPeriodMonth(iso: string): string {
  const [year, month] = iso.split('-')
  return `${month}.${year}`
}

function companyWebsite(url?: string): string | undefined {
  if (!url) return undefined
  try {
    const parsed = new URL(url)
    return `${parsed.origin}/`
  } catch {
    return url
  }
}

function positionTitle(job: ResumeWork): string {
  if (!job.description) return job.position
  // Prefer a short product/line name before an em/en dash.
  const product = job.description.split(/\s+[—–-]\s+/)[0]?.trim()
  if (!product || product === job.name) return job.position
  // Avoid duplicating context already in the position title.
  if (job.position.includes(product)) return job.position
  return `${job.position} · ${product}`
}

function toMarkdownBullets(highlights: string[] = []): string {
  return highlights.map((line) => `- ${line}`).join('\n')
}

const work = resume.work as ResumeWork[]

/** Flat role rows — used by homepage / portfolio derived content. */
export const EXPERIENCE = work.map((job) => {
  const current = !job.endDate
  return {
    company: job.name,
    location: job.location ?? '',
    position: job.position.replace(/\s*\([^)]*\)\s*$/, '').trim(),
    start: formatHumanMonth(job.startDate),
    end: current ? 'Current' : formatHumanMonth(job.endDate!),
    link: job.url ?? '',
    current,
    stack: ROLE_SKILLS[job.startDate] ?? [],
    tasks: job.highlights ?? [],
  }
})

/** Company-grouped experience for the Work Experience component. */
export const WORK_EXPERIENCES: ExperienceItemType[] = (() => {
  const groups = new Map<
    string,
    {
      id: string
      companyName: string
      companyWebsite?: string
      isCurrentEmployer: boolean
      positions: ExperienceItemType['positions']
    }
  >()

  for (const [index, job] of work.entries()) {
    const key = job.name
    const existing = groups.get(key)
    const position = {
      id: `${slugify(job.name)}-${slugify(job.position)}-${job.startDate}`,
      title: positionTitle(job),
      employmentPeriod: {
        start: formatPeriodMonth(job.startDate),
        ...(job.endDate ? { end: formatPeriodMonth(job.endDate) } : {}),
      },
      employmentType: 'Full-time',
      isExpanded: index === 0,
      description: toMarkdownBullets(job.highlights),
      skills: ROLE_SKILLS[job.startDate],
    }

    if (existing) {
      existing.positions.push(position)
      existing.isCurrentEmployer = existing.isCurrentEmployer || !job.endDate
      if (!existing.companyWebsite && job.url) {
        existing.companyWebsite = companyWebsite(job.url)
      }
      continue
    }

    groups.set(key, {
      id: slugify(job.name),
      companyName: job.name,
      companyWebsite: companyWebsite(job.url),
      isCurrentEmployer: !job.endDate,
      positions: [position],
    })
  }

  return [...groups.values()]
})()

/**
 * Homepage stack icons — curated from resume.json skills,
 * with companies inferred from role skill overlays + work history.
 */
const STACK_FROM_RESUME: Array<{
  name: string
  /** Keywords / aliases matched against ROLE_SKILLS */
  match: string[]
  /** Always include these companies when present in EXPERIENCE */
  always?: string[]
}> = [
  { name: 'TypeScript', match: ['TypeScript'] },
  { name: 'React', match: ['React'] },
  { name: 'Node.js', match: ['Node.js', 'Node'] },
  { name: 'Python', match: ['Python'] },
  { name: 'PostgreSQL', match: ['PostgreSQL', 'Postgres'] },
  { name: 'Kafka', match: ['Kafka'] },
  {
    name: 'AI / LLMs',
    match: ['LLM', 'RAG', 'OpenAI', 'Claude', 'LangGraph', 'MCP'],
  },
  {
    name: 'Integrations',
    match: [
      'Veeva CRM',
      'SFMC',
      'Shopify',
      'HubSpot',
      'Enterprise Integrations',
      'API Integrations',
    ],
  },
]

function companiesForSkill(match: string[]): string[] {
  const found = new Set<string>()
  for (const job of work) {
    const skills = ROLE_SKILLS[job.startDate] ?? []
    const haystack = [
      ...skills,
      ...(job.highlights ?? []),
      job.summary ?? '',
      job.description ?? '',
    ]
      .join(' ')
      .toLowerCase()

    if (
      match.some(
        (token) =>
          skills.some((s) => s.toLowerCase() === token.toLowerCase()) ||
          haystack.includes(token.toLowerCase()),
      )
    ) {
      found.add(job.name)
    }
  }
  return [...found]
}

/** Verify resume still lists these as skills (or close aliases). */
function resumeMentionsSkill(match: string[]): boolean {
  const keywords = (resume.skills ?? []).flatMap(
    (group: { keywords?: string[] }) => group.keywords ?? [],
  )
  const all = keywords.map((k) => k.toLowerCase())
  return match.some((token) => {
    const t = token.toLowerCase()
    return all.some(
      (k) =>
        k === t ||
        k.includes(t) ||
        t.includes(k) ||
        (t === 'node.js' && (k === 'nodejs' || k === 'node')) ||
        (t === 'postgresql' && k === 'postgres'),
    )
  })
}

export const STACK = STACK_FROM_RESUME.filter((item) =>
  resumeMentionsSkill(item.match),
).map((item) => ({
  name: item.name,
  projects: [
    ...new Set([...(item.always ?? []), ...companiesForSkill(item.match)]),
  ],
}))

export { resume }
