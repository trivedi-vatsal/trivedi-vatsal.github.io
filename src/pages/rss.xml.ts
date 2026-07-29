import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'
import { SITE } from '../lib/constants'

type BlogPost = CollectionEntry<'blog'>

export const GET: APIRoute = async (context) => {
  const posts = (
    await getCollection('blog', ({ data }: BlogPost) => !data.draft)
  ).sort(
    (a: BlogPost, b: BlogPost) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site ?? 'https://vatsal.xyz',
    items: posts.map((post: BlogPost) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      author: post.data.author,
    })),
  })
}
