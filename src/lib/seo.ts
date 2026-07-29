import { SITE } from './constants'

export function formatPageTitle(title?: string, useTemplate = true): string {
  if (!title) return SITE.TITLE
  if (!useTemplate || title.includes(SITE.TITLE)) return title
  return `${title} | ${SITE.TITLE}`
}
