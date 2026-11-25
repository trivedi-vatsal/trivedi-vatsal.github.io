import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import {
  NOTE_STATUSES,
  NOTE_TYPES,
  type NoteStatus,
  type NoteType,
} from './lib/notes'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    author: z.string().default('trivedi-vatsal'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    series: z
      .object({
        slug: z.string(),
        title: z.string(),
        part: z.number().int().positive(),
        description: z.string().optional(),
      })
      .optional(),
  }),
})

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    date: z.coerce.date(),
    type: z
      .enum(Object.keys(NOTE_TYPES) as [NoteType, ...NoteType[]])
      .default('thought'),
    /** Name of the thing: movie, article, video… */
    title: z.string().optional(),
    link: z
      .string()
      .url()
      .refine((u) => /^https?:\/\//.test(u), 'link must be http(s)')
      .optional(),
    rating: z.number().int().min(1).max(5).optional(),
    /** queued = want to watch/read (antilibrary). */
    status: z
      .enum(Object.keys(NOTE_STATUSES) as [NoteStatus, ...NoteStatus[]])
      .default('done'),
    tags: z.array(z.string()).default([]),
    /** Poster/cover/thumbnail URL or /public path. YouTube links get one automatically. */
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog, notes }
