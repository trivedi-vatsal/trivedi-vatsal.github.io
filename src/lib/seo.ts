import { LINKS, SITE } from './constants'

export function formatPageTitle(title?: string, useTemplate = true): string {
  if (!title) return SITE.TITLE
  if (!useTemplate || title.includes(SITE.TITLE)) return title
  return `${title} | ${SITE.TITLE}`
}

function originFrom(siteUrl: URL | string): string {
  return String(siteUrl).replace(/\/$/, '')
}

export function siteGraphJsonLd(siteUrl: URL | string) {
  const origin = originFrom(siteUrl)
  const personId = `${origin}/#person`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: SITE.TITLE,
        description: SITE.DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE.AUTHOR,
        url: `${origin}/`,
        jobTitle: 'Full Spectrum Engineer',
        sameAs: [
          LINKS.github,
          LINKS.linkedin,
          LINKS.instagram,
          LINKS.behance,
          LINKS.dribbble,
          LINKS.devto,
        ],
      },
    ],
  }
}

export function blogPostingJsonLd(options: {
  siteUrl: URL | string
  title: string
  description: string
  url: string
  datePublished: Date
  dateModified: Date
  author: string
  image?: string
}) {
  const personId = `${originFrom(options.siteUrl)}/#person`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: options.title,
    description: options.description,
    datePublished: options.datePublished.toISOString(),
    dateModified: options.dateModified.toISOString(),
    image: options.image,
    author: {
      '@type': 'Person',
      '@id': personId,
      name: options.author,
    },
    publisher: { '@id': personId },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': options.url,
    },
  }
}
