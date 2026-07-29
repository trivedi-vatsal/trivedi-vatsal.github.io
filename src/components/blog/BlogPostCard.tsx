import {
  formatPostDate,
  formatReadingTime,
  slugifyTag,
  type BlogPostSummary,
} from '@/lib/blog'
import { cn } from '@/lib/utils'

type Layout = 'list' | 'grid'

type Props = {
  post: BlogPostSummary
  layout: Layout
  className?: string
}

export function BlogPostCard({ post, layout, className }: Props) {
  if (layout === 'list') {
    return (
      <article
        className={cn(
          'border-border/60 group border-b py-5 last:border-b-0',
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
        <a
          href={post.href}
          className="text-primary mt-3 inline-flex text-sm font-medium hover:underline"
        >
          Read more →
        </a>
      </article>
    )
  }

  return (
    <article
      className={cn(
        'border-border/70 bg-card/40 hover:border-primary/40 flex h-full flex-col rounded-lg border p-4 transition-colors',
        className,
      )}
    >
      <h3 className="text-base font-semibold tracking-tight">
        <a href={post.href} className="hover:text-primary transition-colors">
          {post.title}
        </a>
      </h3>
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
