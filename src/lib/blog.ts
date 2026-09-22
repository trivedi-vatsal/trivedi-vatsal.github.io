import type { CollectionEntry } from 'astro:content'

export type SeriesRef = {
  slug: string
  title: string
  part: number
  description?: string
}

export type BlogPostSummary = {
  id: string
  title: string
  description: string
  href: string
  pubDate: string
  updatedDate?: string
  tags: string[]
  readingTime: number
  heroImage?: string
  heroAlt?: string
  series?: SeriesRef
}

export type BlogSeries = {
  slug: string
  title: string
  description: string
  href: string
  pubDate: string
  readingTime: number
  tags: string[]
  totalParts: number
  posts: BlogPostSummary[]
  heroImage?: string
  heroAlt?: string
}

export type LaneKind = 'tag' | 'date' | 'series' | 'standalone'

export type BlogLane = {
  key: string
  label: string
  count: number
  kind: LaneKind
  posts: BlogPostSummary[]
}

export type LaneItem =
  | { type: 'post'; post: BlogPostSummary }
  | { type: 'series'; series: BlogSeries }

export type TagCount = {
  tag: string
  slug: string
  count: number
}

export type FeaturedJournal = {
  title: string
  description: string
  href: string
  tags: string[]
  pubDate: string
  readingTime: number
  isSeries?: boolean
}

const WORDS_PER_MINUTE = 200

export function isListedPost(entry: { data: { draft: boolean } }): boolean {
  return import.meta.env.DEV || !entry.data.draft
}

export function slugifyTag(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getReadingTime(body: string | undefined): number {
  if (!body) return 1
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const words = text ? text.split(' ').length : 0
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}

export function toBlogPostSummary(
  entry: CollectionEntry<'blog'>,
): BlogPostSummary {
  return {
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    href: `/blog/${entry.id}/`,
    pubDate: entry.data.pubDate.toISOString(),
    updatedDate: entry.data.updatedDate?.toISOString(),
    tags: entry.data.tags,
    readingTime: getReadingTime(entry.body),
    heroImage: entry.data.heroImage,
    heroAlt: entry.data.heroAlt,
    series: entry.data.series,
  }
}

export function getAllTags(posts: BlogPostSummary[]): TagCount[] {
  const counts = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, slug: slugifyTag(tag), count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

function postHaystack(post: BlogPostSummary): string {
  return [
    post.title,
    post.description,
    ...post.tags,
    post.series?.title ?? '',
    post.series?.description ?? '',
  ]
    .join(' ')
    .toLowerCase()
}

export function filterPosts(
  posts: BlogPostSummary[],
  options: { search?: string; tag?: string },
): BlogPostSummary[] {
  const search = options.search?.trim().toLowerCase() ?? ''
  const tagFilter = options.tag?.trim().toLowerCase()

  return posts.filter((post) => {
    if (tagFilter) {
      const matchesTag = post.tags.some(
        (tag) =>
          tag.toLowerCase() === tagFilter || slugifyTag(tag) === tagFilter,
      )
      if (!matchesTag) return false
    }

    if (!search) return true
    return postHaystack(post).includes(search)
  })
}

function sortPostsNewest(posts: BlogPostSummary[]): BlogPostSummary[] {
  return [...posts].sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
  )
}

function sortSeriesParts(posts: BlogPostSummary[]): BlogPostSummary[] {
  return [...posts].sort(
    (a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0),
  )
}

function uniqueTags(posts: BlogPostSummary[]): string[] {
  const seen = new Set<string>()
  const tags: string[] = []
  for (const post of posts) {
    for (const tag of post.tags) {
      const key = tag.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      tags.push(tag)
    }
  }
  return tags
}

export function buildSeriesFromPosts(posts: BlogPostSummary[]): BlogSeries {
  const parts = sortSeriesParts(posts)
  const first = parts[0]
  const series = first?.series
  const latest = sortPostsNewest(parts)[0] ?? first

  return {
    slug: series?.slug ?? 'series',
    title: series?.title ?? first?.title ?? 'Series',
    description:
      parts.find((post) => post.series?.description)?.series?.description ??
      first?.description ??
      '',
    href: first?.href ?? '/blog/',
    pubDate: latest?.pubDate ?? first?.pubDate ?? new Date().toISOString(),
    readingTime: parts.reduce((sum, post) => sum + post.readingTime, 0),
    tags: uniqueTags(parts),
    totalParts: parts.length,
    posts: parts,
    heroImage: parts.find((post) => post.heroImage)?.heroImage,
    heroAlt: parts.find((post) => post.heroImage)?.heroAlt,
  }
}

export function buildSeriesCatalog(posts: BlogPostSummary[]): BlogSeries[] {
  const groups = new Map<string, BlogPostSummary[]>()

  for (const post of posts) {
    const slug = post.series?.slug
    if (!slug) continue
    const existing = groups.get(slug)
    if (existing) existing.push(post)
    else groups.set(slug, [post])
  }

  return [...groups.values()]
    .map((group) => {
      const series = buildSeriesFromPosts(group)
      return { ...series, totalParts: series.posts.length }
    })
    .sort(
      (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
    )
}

export function clubPosts(
  posts: BlogPostSummary[],
  catalog: BlogSeries[] = [],
): LaneItem[] {
  const seen = new Set<string>()
  const items: LaneItem[] = []

  for (const post of posts) {
    const slug = post.series?.slug
    if (!slug) {
      items.push({ type: 'post', post })
      continue
    }
    if (seen.has(slug)) continue
    seen.add(slug)

    const members = sortSeriesParts(
      posts.filter((entry) => entry.series?.slug === slug),
    )
    const full = catalog.find((series) => series.slug === slug)
    const series = buildSeriesFromPosts(members)

    items.push({
      type: 'series',
      series: {
        ...series,
        title: full?.title ?? series.title,
        description: full?.description ?? series.description,
        href: full?.href ?? series.href,
        totalParts: full?.totalParts ?? series.totalParts,
        tags: full?.tags ?? series.tags,
        heroImage: full?.heroImage ?? series.heroImage,
        heroAlt: full?.heroAlt ?? series.heroAlt,
      },
    })
  }

  return items
}

export function getSeriesForPost(
  post: BlogPostSummary,
  catalog: BlogSeries[],
): BlogSeries | undefined {
  if (!post.series?.slug) return undefined
  return catalog.find((series) => series.slug === post.series?.slug)
}

export function seriesPartTitle(post: BlogPostSummary): string {
  const seriesTitle = post.series?.title
  const part = post.series?.part
  if (!seriesTitle) return post.title

  const escaped = seriesTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const partClause =
    part !== undefined
      ? `(?:,?\\s*part\\s*${part})?`
      : '(?:,?\\s*part\\s*\\d+)?'
  const prefix = new RegExp(`^${escaped}${partClause}[:.\\s-]*`, 'i')
  const stripped = post.title.replace(prefix, '').trim()
  return stripped || post.title
}

export function getFeaturedJournal(
  posts: BlogPostSummary[],
): FeaturedJournal | undefined {
  const latest = sortPostsNewest(posts)[0]
  if (!latest) return undefined

  if (latest.series?.slug) {
    const series = buildSeriesCatalog(posts).find(
      (entry) => entry.slug === latest.series?.slug,
    )
    if (series) {
      return {
        title: series.title,
        description: series.description || latest.description,
        href: series.href,
        tags: [series.slug, `${series.totalParts} parts`],
        pubDate: series.pubDate,
        readingTime: series.readingTime,
        isSeries: true,
      }
    }
  }

  return {
    title: latest.title,
    description: latest.description,
    href: latest.href,
    tags: latest.tags,
    pubDate: latest.pubDate,
    readingTime: latest.readingTime,
  }
}

export function buildLabelLanes(posts: BlogPostSummary[]): BlogLane[] {
  const lanes = new Map<string, BlogLane>()

  for (const post of posts) {
    for (const tag of post.tags) {
      const key = slugifyTag(tag)
      const existing = lanes.get(key)
      if (existing) {
        existing.posts.push(post)
        existing.count = existing.posts.length
      } else {
        lanes.set(key, {
          key,
          label: tag,
          count: 1,
          kind: 'tag',
          posts: [post],
        })
      }
    }
  }

  return [...lanes.values()]
    .map((lane) => ({
      ...lane,
      kind: 'tag' as const,
      posts: sortPostsNewest(lane.posts),
    }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
}

export function buildDateLanes(posts: BlogPostSummary[]): BlogLane[] {
  const lanes = new Map<string, BlogLane>()

  for (const post of posts) {
    const date = new Date(post.pubDate)
    const key = `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`
    const label = date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    })
    const existing = lanes.get(key)
    if (existing) {
      existing.posts.push(post)
      existing.count = existing.posts.length
    } else {
      lanes.set(key, {
        key,
        label,
        count: 1,
        kind: 'date',
        posts: [post],
      })
    }
  }

  return [...lanes.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([, lane]) => ({
      ...lane,
      kind: 'date' as const,
      posts: sortPostsNewest(lane.posts),
    }))
}

export function buildSeriesLanes(posts: BlogPostSummary[]): BlogLane[] {
  const catalog = buildSeriesCatalog(posts)
  const standalone = posts.filter((post) => !post.series)

  const seriesLanes: BlogLane[] = catalog.map((series) => ({
    key: `series-${series.slug}`,
    label: series.title,
    count: series.posts.length,
    kind: 'series',
    posts: series.posts,
  }))

  if (standalone.length > 0) {
    seriesLanes.push({
      key: 'standalone',
      label: 'Notes',
      count: standalone.length,
      kind: 'standalone',
      posts: sortPostsNewest(standalone),
    })
  }

  return seriesLanes
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`
}

export function formatPartIndex(part: number, padTo = 2): string {
  return String(part).padStart(padTo, '0')
}
