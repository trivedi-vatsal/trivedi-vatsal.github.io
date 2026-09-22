import { useEffect, useMemo, useState } from 'react'
import {
  buildDateLanes,
  buildLabelLanes,
  buildSeriesCatalog,
  buildSeriesLanes,
  filterPosts,
  getAllTags,
  slugifyTag,
  type BlogPostSummary,
} from '@/lib/blog'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BlogSwimLane } from './BlogSwimLane'
import { BlogToolbar, type BlogLayout, type BlogView } from './BlogToolbar'

type Props = {
  posts: BlogPostSummary[]
  initialTag?: string
  hideViewToggle?: boolean
}

const CHIP_LIMIT = 10

function readParam(key: string): string | null {
  if (typeof window === 'undefined') return null
  return new URLSearchParams(window.location.search).get(key)
}

function parseView(value: string | null, hasSeries: boolean): BlogView {
  if (value === 'date' || value === 'category' || value === 'series')
    return value
  return hasSeries ? 'series' : 'category'
}

function parseLayout(value: string | null): BlogLayout {
  if (value === 'grid' || value === 'compact') return value
  return 'list'
}

export function BlogExplorer({
  posts,
  initialTag,
  hideViewToggle = Boolean(initialTag),
}: Props) {
  const hasSeries = posts.some((post) => Boolean(post.series))
  const defaultView: BlogView = hasSeries ? 'series' : 'category'
  const [view, setView] = useState<BlogView>(() =>
    initialTag ? 'date' : parseView(readParam('view'), hasSeries),
  )
  const [layout, setLayout] = useState<BlogLayout>(() =>
    parseLayout(readParam('layout')),
  )
  const [search, setSearch] = useState(() => readParam('search') ?? '')
  const [activeTag, setActiveTag] = useState<string | undefined>(initialTag)
  const [chipsExpanded, setChipsExpanded] = useState(false)
  const [urlReady, setUrlReady] = useState(() => typeof window !== 'undefined')

  useEffect(() => {
    if (initialTag) {
      setUrlReady(true)
      return
    }
    setView(parseView(readParam('view'), hasSeries))
    setLayout(parseLayout(readParam('layout')))
    setSearch(readParam('search') ?? '')
    setUrlReady(true)
  }, [hasSeries, initialTag])

  useEffect(() => {
    if (!urlReady) return
    const params = new URLSearchParams(window.location.search)

    if (!hideViewToggle) {
      if (view === defaultView) params.delete('view')
      else params.set('view', view)
    }

    if (layout === 'list') params.delete('layout')
    else params.set('layout', layout)

    if (search.trim()) params.set('search', search.trim())
    else params.delete('search')

    const query = params.toString()
    const next = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`
    window.history.replaceState({}, '', next)
  }, [view, layout, search, hideViewToggle, defaultView, urlReady])

  const tags = useMemo(() => getAllTags(posts), [posts])
  const visibleTags = chipsExpanded ? tags : tags.slice(0, CHIP_LIMIT)
  const hiddenCount = Math.max(0, tags.length - CHIP_LIMIT)

  const filtered = useMemo(
    () =>
      filterPosts(posts, {
        search,
        tag: activeTag ?? initialTag,
      }),
    [posts, search, activeTag, initialTag],
  )

  const catalog = useMemo(() => buildSeriesCatalog(posts), [posts])

  const lanes = useMemo(() => {
    if (view === 'date') return buildDateLanes(filtered)
    if (view === 'series') return buildSeriesLanes(filtered)
    return buildLabelLanes(filtered)
  }, [filtered, view])

  if (posts.length === 0) {
    return <p className="text-muted-foreground">No notes yet.</p>
  }

  return (
    <div className="flex flex-col gap-6">
      <BlogToolbar
        view={view}
        layout={layout}
        search={search}
        onViewChange={setView}
        onLayoutChange={setLayout}
        onSearchChange={setSearch}
        hideViewToggle={hideViewToggle}
      />

      {!initialTag && tags.length > 0 && (
        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="Filter by tag"
        >
          {visibleTags.map(({ tag, slug, count }) => {
            const isActive = activeTag === slug || activeTag === tag
            return (
              <button
                key={slug}
                type="button"
                role="listitem"
                onClick={() =>
                  setActiveTag((current) =>
                    current === slug || current === tag ? undefined : slug,
                  )
                }
                className={cn(
                  buttonVariants({
                    variant: isActive ? 'default' : 'outline',
                    size: 'sm',
                  }),
                  'h-8 rounded-md text-xs',
                )}
              >
                {tag}
                <span className="text-muted-foreground ml-1.5 tabular-nums">
                  {count}
                </span>
              </button>
            )
          })}
          {!chipsExpanded && hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setChipsExpanded(true)}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'h-8 text-xs',
              )}
            >
              +{hiddenCount}
            </button>
          )}
          {chipsExpanded && hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setChipsExpanded(false)}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'h-8 text-xs',
              )}
            >
              Show less
            </button>
          )}
        </div>
      )}

      {lanes.length === 0 ? (
        <p className="text-muted-foreground">No notes match these filters.</p>
      ) : (
        <div className="flex flex-col">
          {lanes.map((lane) => (
            <BlogSwimLane
              key={lane.key}
              lane={lane}
              layout={layout}
              catalog={catalog}
            />
          ))}
        </div>
      )}

      {!initialTag && activeTag && (
        <p className="text-muted-foreground text-sm">
          Showing tag{' '}
          <a
            href={`/blog/tags/${slugifyTag(activeTag)}/`}
            className="text-primary hover:underline"
          >
            {tags.find((t) => t.slug === activeTag || t.tag === activeTag)
              ?.tag ?? activeTag}
          </a>
          .{' '}
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => setActiveTag(undefined)}
          >
            Clear filter
          </button>
        </p>
      )}
    </div>
  )
}
