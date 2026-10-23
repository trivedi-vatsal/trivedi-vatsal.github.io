import type { APIRoute, GetStaticPaths } from 'astro'
import { renderOgBannerPng } from '../../lib/og-banner'
import { getOgBannerJobs } from '../../lib/og-routes'

export const prerender = true

export const getStaticPaths = (async () => {
  const jobs = await getOgBannerJobs()
  return jobs.map((job) => ({
    params: { path: job.path },
    props: { job },
  }))
}) satisfies GetStaticPaths

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgBannerPng(props.job)

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
