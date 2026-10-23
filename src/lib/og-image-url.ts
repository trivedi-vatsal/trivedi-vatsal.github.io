import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from './og-banner'

export function pathnameToOgPath(pathname: string): string {
  const trimmed = pathname.replace(/^\/+|\/+$/g, '')
  return trimmed.length > 0 ? trimmed : 'home'
}

export function ogImageUrlForPath(
  siteUrl: URL | string,
  ogPath: string,
): string {
  const origin = String(siteUrl).replace(/\/$/, '')
  const encoded = ogPath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
  return `${origin}/og/${encoded}.png`
}

export const OG_IMAGE_META = {
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
}
