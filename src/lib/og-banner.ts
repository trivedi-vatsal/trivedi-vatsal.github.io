import sharp from 'sharp'
import { SITE } from './constants'

export type OgBannerKind = 'site' | 'blog' | 'tag' | 'experiment'

export type OgBannerJob = {
  path: string
  title: string
  description: string
  kind: OgBannerKind
  eyebrow?: string
}

const WIDTH = 1200
const HEIGHT = 630

const COLORS = {
  background: 'hsl(36, 18%, 97%)',
  foreground: 'hsl(24, 10%, 8%)',
  muted: 'hsl(25, 6%, 38%)',
  primary: 'hsl(22, 74%, 48%)',
  border: 'hsl(30, 8%, 86%)',
  card: 'hsl(40, 25%, 99%)',
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function wrapLines(text: string, maxChars: number, maxLines: number): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return []

  const lines: string[] = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length <= maxChars) {
      current = next
      continue
    }
    if (current) lines.push(current)
    current = word
    if (lines.length >= maxLines - 1) break
  }

  if (current && lines.length < maxLines) lines.push(current)

  if (
    lines.length === maxLines &&
    words.join(' ').length > lines.join(' ').length
  ) {
    const last = lines[maxLines - 1]
    if (last.length > 3) {
      lines[maxLines - 1] = `${last.replace(/\s+\S+$/, '')}…`
    }
  }

  return lines
}

function defaultEyebrow(kind: OgBannerKind): string {
  switch (kind) {
    case 'blog':
      return 'Journal'
    case 'tag':
      return 'Topic'
    case 'experiment':
      return 'Experiment'
    default:
      return SITE.TITLE
  }
}

function buildSvg(job: OgBannerJob): string {
  const eyebrow = escapeXml(job.eyebrow ?? defaultEyebrow(job.kind))
  const titleLines = wrapLines(job.title, 34, 3).map(escapeXml)
  const descriptionLines = wrapLines(job.description, 52, 2).map(escapeXml)

  const titleY = 248
  const titleBlock = titleLines
    .map(
      (line, index) =>
        `<text x="96" y="${titleY + index * 72}" fill="${COLORS.foreground}" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="56" font-weight="600" letter-spacing="-0.02em">${line}</text>`,
    )
    .join('\n')

  const descriptionY = titleY + titleLines.length * 72 + 36
  const descriptionBlock = descriptionLines
    .map(
      (line, index) =>
        `<text x="96" y="${descriptionY + index * 34}" fill="${COLORS.muted}" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="26" font-weight="400">${line}</text>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${COLORS.primary}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${COLORS.primary}" stop-opacity="0"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${COLORS.border}" stroke-width="1" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="${COLORS.background}"/>
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5"/>
  <circle cx="1040" cy="120" r="220" fill="url(#glow)"/>
  <rect x="72" y="72" width="72" height="72" rx="12" fill="${COLORS.card}" stroke="${COLORS.border}" stroke-width="2"/>
  <text x="108" y="124" text-anchor="middle" fill="${COLORS.foreground}" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="24" font-weight="500">VT</text>
  <text x="168" y="108" fill="${COLORS.muted}" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" letter-spacing="0.08em">${eyebrow.toUpperCase()}</text>
  <rect x="72" y="148" width="120" height="3" fill="${COLORS.primary}" rx="1.5"/>
  ${titleBlock}
  ${descriptionBlock}
  <text x="96" y="566" fill="${COLORS.muted}" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="20">vatsal.xyz</text>
</svg>`
}

export async function renderOgBannerPng(job: OgBannerJob): Promise<Buffer> {
  const svg = buildSvg(job)
  return sharp(Buffer.from(svg)).png().toBuffer()
}

export const OG_IMAGE_WIDTH = WIDTH
export const OG_IMAGE_HEIGHT = HEIGHT
