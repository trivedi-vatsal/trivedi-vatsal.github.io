import {
  formatPostDate,
  formatReadingTime,
  slugifyTag,
  type BlogPostSummary,
} from '@/lib/blog'
import { cn } from '@/lib/utils'

type Layout = 'list' | 'grid' | 'compact'

type Props = {
  post: BlogPostSummary
  layout: Layout
  className?: string
}

function CoverMedia({
  post,
  className,
}: {
  post: BlogPostSummary
  className?: string
}) {
  const monogram = post.tags[0]?.charAt(0).toUpperCase() || '▸'

  if (post.heroImage) {
    return (
      <img
        src={post.heroImage}
        alt={post.heroAlt ?? ''}
        className={cn(
          'aspect-[16/9] w-full rounded object-cover grayscale transition duration-500 group-hover:grayscale-0 motion-reduce:transition-none',
          className,
        )}
      />
    )
  }

  return (
    <div
      className={cn(
        'bg-muted flex aspect-[16/9] w-full items-center justify-center rounded',
        className,
      )}
      aria-hidden="true"
    >
      <span className="text-muted-foreground/40 font-mono text-4xl sm:text-5xl">
        {monogram}
      </span>
    </div>
  )
}

export function BlogPostCard({ post, layout, className }: Props) {
  if (layout === 'compact') {
    return (
      <article
        className={cn(
          'border-border/40 group hover:border-foreground/15 grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-3 border-b py-2.5 transition-colors last:border-b-0 sm:grid-cols-[7.5rem_minmax(0,1fr)]',
          className,
        )}
      >
        <time
          dateTime={post.pubDate}
          className="text-muted-foreground font-mono text-xs tabular-nums"
        >
          {formatPostDate(post.pubDate)}
        </time>
        <h3 className="text-sm font-medium tracking-tight">
          <a
            href={post.href}
            className="group-hover:text-primary transition-colors"
          >
            {post.title}
          </a>
        </h3>
      </article>
    )
  }

  if (layout === 'list') {
    return (
      <article
        className={cn(
          'border-border/60 group hover:border-foreground/18 border-b py-5 transition-colors last:border-b-0',
          className,
        )}
      >
        <div className="text-muted-foreground mb-2 flex flex-wrap items-center gap-2 text-xs">
          {post.tags[0] && (
            <a
              href={`/blog/tags/${slugifyTag(post.tags[0])}/`}
              className="hover:text-primary font-medium tracking-wide uppercase"
            >
              {post.tags[0]}
            </a>
          )}
          <time dateTime={post.pubDate}>{formatPostDate(post.pubDate)}</time>
          <span aria-hidden="true">·</span>
          <span>{formatReadingTime(post.readingTime)}</span>
          {post.updatedDate && post.updatedDate !== post.pubDate && (
            <span>Updated {formatPostDate(post.updatedDate)}</span>
          )}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">
          <a
            href={post.href}
            className="group-hover:text-primary transition-colors"
          >
            {post.title}
          </a>
        </h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {post.description}
        </p>
        <a href={post.href} className="bento-arrow text-primary mt-3 text-sm">
          Read more <span aria-hidden="true">→</span>
        </a>
      </article>
    )
  }

  return (
    <article
      className={cn('bento-tile group flex h-full flex-col p-4', className)}
    >
      <CoverMedia post={post} className="mb-3" />
      <h3 className="text-base font-semibold tracking-tight">
        <a href={post.href} className="hover:text-primary transition-colors">
          {post.title}
        </a>
      </h3>
      <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
        {post.description}
      </p>
      <div className="text-muted-foreground mt-2 flex flex-wrap items-center gap-2 text-xs">
        <time dateTime={post.pubDate}>{formatPostDate(post.pubDate)}</time>
        <span aria-hidden="true">·</span>
        <span>{formatReadingTime(post.readingTime)}</span>
      </div>
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={`/blog/tags/${slugifyTag(tag)}/`}
              className="bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary rounded-md px-2 py-0.5 text-[11px] transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
