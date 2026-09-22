import {
  formatPartIndex,
  formatPostDate,
  formatReadingTime,
  seriesPartTitle,
  type BlogSeries,
} from '@/lib/blog'
import { cn } from '@/lib/utils'

type Layout = 'list' | 'grid' | 'compact'

type Props = {
  series: BlogSeries
  layout: Layout
  hideHeader?: boolean
  className?: string
}

function PartRow({ series, dense }: { series: BlogSeries; dense?: boolean }) {
  const padTo = series.totalParts >= 10 ? 2 : 2

  return (
    <ol className="flex flex-col">
      {series.posts.map((post) => {
        const part = post.series?.part ?? 0
        return (
          <li key={post.id}>
            <a
              href={post.href}
              className={cn(
                'group/part hover:bg-foreground/[0.03] -mx-2 flex items-baseline gap-3 rounded-md px-2 transition-colors',
                dense ? 'py-1.5' : 'py-2.5',
              )}
            >
              <span className="text-muted-foreground w-6 shrink-0 font-mono text-xs tabular-nums">
                {formatPartIndex(part, padTo)}
              </span>
              <span
                className={cn(
                  'min-w-0 flex-1 tracking-tight',
                  dense ? 'text-sm' : 'text-sm sm:text-base',
                )}
              >
                <span className="group-hover/part:text-primary font-medium transition-colors">
                  {seriesPartTitle(post)}
                </span>
              </span>
              <span className="text-muted-foreground hidden shrink-0 font-mono text-[11px] tabular-nums sm:inline">
                {formatReadingTime(post.readingTime)}
              </span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

export function BlogSeriesCluster({
  series,
  layout,
  hideHeader = false,
  className,
}: Props) {
  const visible = series.posts.length
  const total = series.totalParts
  const partLabel =
    visible === total
      ? `${total} part${total === 1 ? '' : 's'}`
      : `${visible} of ${total} parts`

  if (layout === 'compact') {
    return (
      <article
        className={cn(
          'border-border/40 py-3',
          !hideHeader && 'border-b last:border-b-0',
          className,
        )}
      >
        {!hideHeader && (
          <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-sm font-semibold tracking-tight">
              <a
                href={series.href}
                className="hover:text-primary transition-colors"
              >
                {series.title}
              </a>
            </h3>
            <span className="text-muted-foreground font-mono text-xs tabular-nums">
              {partLabel}
            </span>
          </div>
        )}
        <PartRow series={series} dense />
      </article>
    )
  }

  if (layout === 'grid') {
    return (
      <article
        className={cn(
          'bento-tile flex h-full flex-col p-4 sm:col-span-2',
          className,
        )}
      >
        {!hideHeader && (
          <header className="mb-3">
            <h3 className="text-base font-semibold tracking-tight">
              <a
                href={series.href}
                className="hover:text-primary transition-colors"
              >
                {series.title}
              </a>
            </h3>
            {series.description && (
              <p className="text-muted-foreground mt-1.5 line-clamp-2 text-sm leading-relaxed">
                {series.description}
              </p>
            )}
            <p className="text-muted-foreground mt-2 font-mono text-xs tabular-nums">
              {partLabel}
              <span aria-hidden="true"> · </span>
              {formatReadingTime(series.readingTime)}
            </p>
          </header>
        )}
        <PartRow series={series} dense />
      </article>
    )
  }

  return (
    <article
      className={cn(
        'border-border/60 py-5',
        !hideHeader && 'border-b last:border-b-0',
        className,
      )}
    >
      {!hideHeader && (
        <header className="mb-3">
          <div className="text-muted-foreground mb-2 flex flex-wrap items-center gap-2 text-xs">
            <time dateTime={series.pubDate}>
              {formatPostDate(series.pubDate)}
            </time>
            <span aria-hidden="true">·</span>
            <span>{partLabel}</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight">
            <a
              href={series.href}
              className="hover:text-primary transition-colors"
            >
              {series.title}
            </a>
          </h3>
          {series.description && (
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {series.description}
            </p>
          )}
        </header>
      )}
      <div
        className={cn(hideHeader ? '' : 'border-border/50 mt-4 border-t pt-2')}
      >
        <PartRow series={series} />
      </div>
    </article>
  )
}
