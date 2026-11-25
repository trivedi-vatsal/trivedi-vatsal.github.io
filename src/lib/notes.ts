import type { CollectionEntry } from 'astro:content'
import { slugifyTag } from './blog'

/** Log entry types, in filter order, with a one-line blurb for the index tiles. */
export const NOTE_TYPES = {
  thought: 'Thought',
  article: 'Article',
  video: 'Video',
  movie: 'Movie',
  show: 'Show',
  book: 'Book',
  podcast: 'Podcast',
  link: 'Link',
} as const

export const NOTE_TYPE_BLURBS: Record<NoteType, string> = {
  thought: 'Loose ideas',
  article: 'Things I read',
  video: 'Watched online',
  movie: 'Films',
  show: 'Series',
  book: 'Books',
  podcast: 'Episodes',
  link: 'Bookmarks',
}

export const NOTE_STATUSES = {
  queued: 'Queued',
  'in-progress': 'In progress',
  done: 'Done',
} as const

export type NoteType = keyof typeof NOTE_TYPES
export type NoteStatus = keyof typeof NOTE_STATUSES

/** Markdown body → plain text for share images and titles. */
export function noteText(body = ''): string {
  return body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function noteHost(link: string): string {
  return new URL(link).hostname.replace(/^www\./, '')
}

export function stars(rating: number): string {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}

/** YouTube watch / youtu.be / shorts link → thumbnail URL. */
export function youtubeThumb(link: string): string | undefined {
  const url = new URL(link)
  const host = url.hostname.replace(/^(www|m)\./, '')
  const id =
    host === 'youtu.be'
      ? url.pathname.slice(1)
      : host === 'youtube.com'
        ? url.searchParams.get('v') ??
          url.pathname.match(/^\/shorts\/([^/]+)/)?.[1]
        : undefined
  return id ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : undefined
}

/** Everything the feed, permalink page and images derive from one entry. */
export function noteSummary(note: CollectionEntry<'notes'>) {
  const { type, title, link, rating, status, tags, image } = note.data
  const host = link ? noteHost(link) : undefined
  const text = noteText(note.body)
  const label = NOTE_TYPES[type]
  const statusLabel = status === 'done' ? '' : NOTE_STATUSES[status]
  return {
    type,
    label,
    status,
    /** e.g. "MOVIE · ★★★★☆" or "BOOK · QUEUED" */
    eyebrow: [label, rating ? stars(rating) : '', statusLabel]
      .filter(Boolean)
      .join(' · '),
    heading: title ?? host,
    host,
    text,
    tags: tags.map((tag) => ({ tag, slug: slugifyTag(tag) })),
    thumb: image ?? (link ? youtubeThumb(link) : undefined),
    /** Short plain-text name for <title> and share sheets. */
    name: title ?? (text || host || label),
  }
}

export function sortNotes(notes: CollectionEntry<'notes'>[]) {
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}
