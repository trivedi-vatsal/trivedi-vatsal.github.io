import type { CollectionEntry } from 'astro:content'

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
}

export type BlogLane = {
  key: string
  label: string
  count: number
  posts: BlogPostSummary[]
}

export type TagCount = {
  tag: string
  slug: string
  count: number
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

    const haystack = [post.title, post.description, ...post.tags]
      .join(' ')
      .toLowerCase()
    return haystack.includes(search)
  })
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
          posts: [post],
        })
      }
    }
  }

  return [...lanes.values()]
    .map((lane) => ({
      ...lane,
      posts: [...lane.posts].sort(
        (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
      ),
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
        posts: [post],
      })
    }
  }

  return [...lanes.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([, lane]) => ({
      ...lane,
      posts: [...lane.posts].sort(
        (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
      ),
    }))
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
