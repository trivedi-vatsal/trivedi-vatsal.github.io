import type { BlogLane, BlogSeries } from '@/lib/blog'
import { clubPosts } from '@/lib/blog'
import { cn } from '@/lib/utils'
import { BlogPostCard } from './BlogPostCard'
import { BlogSeriesCluster } from './BlogSeriesCluster'

type Layout = 'list' | 'grid' | 'compact'

type Props = {
  lane: BlogLane
  layout: Layout
  catalog?: BlogSeries[]
}

export function BlogSwimLane({ lane, layout, catalog = [] }: Props) {
  const items = clubPosts(lane.posts, catalog)
  const hideSeriesHeader = lane.kind === 'series'

  return (
    <section
      aria-labelledby={`lane-${lane.key}`}
      className={cn(
        'border-border/50 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 border-b duration-300 last:border-b-0',
        layout === 'compact' ? 'py-4' : 'py-6',
      )}
    >
      <div className="md:grid md:grid-cols-[15rem_minmax(0,1fr)] md:gap-8">
        <header className="mb-4 md:sticky md:top-24 md:mb-0 md:self-start">
          <h2
            id={`lane-${lane.key}`}
            className={cn(
              'text-foreground font-semibold tracking-tight text-balance',
              layout === 'compact' ? 'text-base' : 'text-lg',
            )}
          >
            {lane.label}
            <span className="text-muted-foreground ml-2 text-sm font-normal">
              ({lane.count})
            </span>
          </h2>
        </header>

        <div
          className={cn(
            layout === 'grid'
              ? 'grid grid-cols-1 gap-3 sm:grid-cols-2'
              : 'flex flex-col',
          )}
        >
          {hideSeriesHeader &&
            items[0]?.type === 'series' &&
            items[0].series.description &&
            layout !== 'compact' && (
              <p className="text-muted-foreground mb-1 text-sm leading-relaxed sm:col-span-2">
                {items[0].series.description}
              </p>
            )}
          {items.map((item) =>
            item.type === 'series' ? (
              <BlogSeriesCluster
                key={`${lane.key}-series-${item.series.slug}`}
                series={item.series}
                layout={layout}
                hideHeader={hideSeriesHeader}
              />
            ) : (
              <BlogPostCard
                key={`${lane.key}-${item.post.id}`}
                post={item.post}
                layout={layout}
              />
            ),
          )}
        </div>
      </div>
    </section>
  )
}
