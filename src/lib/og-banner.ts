import sharp from 'sharp'
import { SITE } from './constants'

export type OgBannerKind = 'site' | 'blog' | 'tag' | 'experiment' | 'note'

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
    case 'note':
      return 'Note'
    default:
      return SITE.TITLE
  }
}

function buildSvg(job: OgBannerJob): string {
  const eyebrow = escapeXml(job.eyebrow ?? defaultEyebrow(job.kind))
  // Notes are longer free text: smaller type, more lines.
  const isNote = job.kind === 'note'
  const title = isNote
    ? { chars: 44, lines: 5, size: 44, lead: 58, y: 220 }
    : { chars: 34, lines: 3, size: 56, lead: 72, y: 248 }
  const titleLines = wrapLines(job.title, title.chars, title.lines).map(
    escapeXml,
  )
  const descriptionLines = wrapLines(job.description, 52, 2).map(escapeXml)

  const titleY = title.y
  const titleBlock = titleLines
    .map(
      (line, index) =>
        `<text x="96" y="${titleY + index * title.lead}" fill="${COLORS.foreground}" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="${title.size}" font-weight="600" letter-spacing="-0.02em">${line}</text>`,
    )
    .join('\n')

  const descriptionY = titleY + titleLines.length * title.lead + 36
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
  <text x="96" y="114" fill="${COLORS.muted}" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18" letter-spacing="0.08em">${eyebrow.toUpperCase()}</text>
  <rect x="96" y="132" width="72" height="3" fill="${COLORS.primary}" rx="1.5"/>
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

export type NoteCardJob = {
  eyebrow: string
  text: string
  date: Date
  shortUrl: string
  /** Card under the text: the thing logged (title + host/type). */
  ref?: { title: string; sub: string; isLink: boolean }
}

const SANS = 'ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif'
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace'

/** Square 1080×1080 share card for a note. Shorter notes get bigger type. */
function buildNoteSvg(job: NoteCardJob): string {
  const S = 1080
  const X = 96
  const R = S - X
  const len = job.text.length
  const size = len <= 90 ? 76 : len <= 180 ? 58 : len <= 320 ? 46 : 38
  const lead = Math.round(size * 1.25)
  const areaTop = 220
  const areaBottom = job.ref ? 750 : 920
  const lines = wrapLines(
    job.text,
    Math.floor((R - X) / (size * 0.47)),
    Math.floor((areaBottom - areaTop) / lead),
  ).map(escapeXml)
  // Vertically center the block; first baseline sits ~0.8em below its top.
  const textTop =
    areaTop + (areaBottom - areaTop - lines.length * lead) / 2 + size * 0.85
  const date = job.date
    .toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    })
    .toUpperCase()

  const text = lines
    .map(
      (line, i) =>
        `<text x="${X}" y="${textTop + i * lead}" fill="${COLORS.foreground}" font-family="${SANS}" font-size="${size}" font-weight="600" letter-spacing="-0.02em">${line}</text>`,
    )
    .join('\n')

  const ref = job.ref
  const refTitle = ref ? escapeXml(wrapLines(ref.title, 44, 1)[0] ?? '') : ''
  const link = ref
    ? `<rect x="${X}" y="780" width="${R - X}" height="120" rx="20" fill="${COLORS.card}" stroke="${COLORS.border}" stroke-width="2"/>
  <text x="${X + 32}" y="828" fill="${COLORS.muted}" font-family="${MONO}" font-size="22">${escapeXml(ref.sub)}</text>
  <text x="${X + 32}" y="872" fill="${COLORS.foreground}" font-family="${SANS}" font-size="30" font-weight="600">${refTitle}</text>
  ${ref.isLink ? `<text x="${R - 32}" y="858" text-anchor="end" fill="${COLORS.primary}" font-family="${SANS}" font-size="40">↗</text>` : ''}`
    : ''

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${S}" height="${S}" viewBox="0 0 ${S} ${S}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow">
      <stop offset="0%" stop-color="${COLORS.primary}" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="${COLORS.primary}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${COLORS.border}" stroke-width="1" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="${COLORS.background}"/>
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5"/>
  <circle cx="${S - 80}" cy="80" r="360" fill="url(#glow)"/>
  <text x="${X}" y="150" fill="${COLORS.muted}" font-family="${MONO}" font-size="22" letter-spacing="0.12em">${escapeXml(job.eyebrow.toUpperCase())}</text>
  <text x="${R}" y="150" text-anchor="end" fill="${COLORS.muted}" font-family="${MONO}" font-size="22" letter-spacing="0.08em">${date}</text>
  <rect x="${X}" y="170" width="72" height="4" fill="${COLORS.primary}" rx="2"/>
  ${text}
  ${link}
  <line x1="${X}" y1="950" x2="${R}" y2="950" stroke="${COLORS.border}" stroke-width="2"/>
  <text x="${X}" y="1004" fill="${COLORS.foreground}" font-family="${SANS}" font-size="28" font-weight="600">Vatsal Trivedi</text>
  <text x="${R}" y="1004" text-anchor="end" fill="${COLORS.muted}" font-family="${MONO}" font-size="22">${escapeXml(job.shortUrl)}</text>
</svg>`
}

export async function renderNoteCardPng(job: NoteCardJob): Promise<Buffer> {
  return sharp(Buffer.from(buildNoteSvg(job)))
    .png()
    .toBuffer()
}
