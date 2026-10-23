import { getCollection } from 'astro:content'
import { ABOUT, BLOG, EXPERIMENTS_PAGE, SITE, WORK } from './constants'
import type { OgBannerJob } from './og-banner'
import { getAllTags, isListedPost, toBlogPostSummary } from './blog'
import { EXPERIMENTS } from './portfolio'

function sitePage(
  path: string,
  title: string,
  description: string,
): OgBannerJob {
  return { path, title, description, kind: 'site' }
}

export async function getOgBannerJobs(): Promise<OgBannerJob[]> {
  const jobs: OgBannerJob[] = [
    sitePage('home', SITE.TITLE, SITE.DESCRIPTION),
    sitePage('about', ABOUT.TITLE, ABOUT.DESCRIPTION),
    sitePage('work', WORK.TITLE, WORK.DESCRIPTION),
    sitePage(
      'experiments',
      EXPERIMENTS_PAGE.TITLE,
      EXPERIMENTS_PAGE.DESCRIPTION,
    ),
    sitePage('blog', BLOG.TITLE, BLOG.DESCRIPTION),
    sitePage(
      '404',
      'Page not found',
      'This page does not exist on vatsal.xyz.',
    ),
  ]

  const posts = await getCollection('blog', isListedPost)
  const summaries = posts.map(toBlogPostSummary)

  for (const post of posts) {
    jobs.push({
      path: `blog/${post.id}`,
      title: post.data.title,
      description: post.data.description,
      kind: 'blog',
      eyebrow: post.data.series?.title ?? 'Journal',
    })
  }

  for (const { tag, slug } of getAllTags(summaries)) {
    jobs.push({
      path: `blog/tags/${slug}`,
      title: tag,
      description: `Articles about ${tag}`,
      kind: 'tag',
    })
  }

  for (const experiment of EXPERIMENTS) {
    jobs.push({
      path: `experiments/${experiment.slug}`,
      title: experiment.title,
      description: experiment.blurb,
      kind: 'experiment',
    })
  }

  return jobs
}
