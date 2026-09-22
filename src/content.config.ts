import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

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

export const collections = { blog }
