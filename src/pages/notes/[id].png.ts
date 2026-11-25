import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'
import { isListedPost } from '../../lib/blog'
import { renderNoteCardPng } from '../../lib/og-banner'
import { noteSummary } from '../../lib/notes'

export const prerender = true

export const getStaticPaths = (async () => {
  const notes = await getCollection('notes', isListedPost)
  return notes.map((note) => ({ params: { id: note.id }, props: { note } }))
}) satisfies GetStaticPaths

export const GET: APIRoute = async ({ props }) => {
  const note = props.note as CollectionEntry<'notes'>
  const s = noteSummary(note)
  // Comment present: it's the big text, the thing goes in the card.
  // No comment: the thing's name is the big text.
  const png = await renderNoteCardPng({
    eyebrow: s.eyebrow,
    text: s.text || s.heading || s.label,
    date: note.data.date,
    shortUrl: s.host
      ? `vatsal.xyz/go/${note.id}`
      : `vatsal.xyz/notes/${note.id}`,
    ref:
      s.text && s.heading
        ? { title: s.heading, sub: s.host ?? s.label, isLink: !!s.host }
        : undefined,
  })
  return new Response(png, { headers: { 'Content-Type': 'image/png' } })
}
