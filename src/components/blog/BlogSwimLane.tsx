import type { BlogLane } from '@/lib/blog'
import { cn } from '@/lib/utils'
import { BlogPostCard } from './BlogPostCard'

type Layout = 'list' | 'grid'

type Props = {
  lane: BlogLane
  layout: Layout
}

export function BlogSwimLane({ lane, layout }: Props) {
  return (
    <section
      aria-labelledby={`lane-${lane.key}`}
      className="border-border/50 animate-in fade-in slide-in-from-bottom-2 border-b py-8 duration-300 last:border-b-0"
    >
      <div className="md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
        <header className="mb-4 md:sticky md:top-24 md:mb-0 md:self-start">
          <h2
            id={`lane-${lane.key}`}
            className="text-foreground text-lg font-semibold tracking-tight"
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
          {lane.posts.map((post) => (
            <BlogPostCard key={`${lane.key}-${post.id}`} post={post} layout={layout} />
          ))}
        </div>
      </div>
    </section>
  )
}
