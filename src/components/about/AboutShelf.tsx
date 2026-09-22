import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

export type ShelfItem = {
  title: string
  author: string
  category: 'build' | 'craft' | 'life'
  href: string
  external?: boolean
}

type Filter = 'all' | ShelfItem['category']

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'build', label: 'Build' },
  { id: 'craft', label: 'Craft' },
  { id: 'life', label: 'Life' },
]

/** Cover treatments — warm / ink / paper, not purple-gradient defaults. */
const COVERS = [
  {
    face: 'bg-[#1c1814] text-[#f4efe8]',
    stripe: 'bg-[#c56a32]',
    height: 'h-[11.5rem] sm:h-[13.5rem]',
  },
  {
    face: 'bg-[#c56a32] text-[#fff7ef]',
    stripe: 'bg-[#1c1814]',
    height: 'h-[12.5rem] sm:h-[14.5rem]',
  },
  {
    face: 'bg-[#efe6da] text-[#1c1814]',
    stripe: 'bg-[#c56a32]',
    height: 'h-[10.5rem] sm:h-[12.5rem]',
  },
  {
    face: 'bg-[#2a221c] text-[#f4efe8]',
    stripe: 'bg-[#efe6da]',
    height: 'h-[13rem] sm:h-[15rem]',
  },
  {
    face: 'bg-[#d9c4ae] text-[#1c1814]',
    stripe: 'bg-[#1c1814]',
    height: 'h-[11rem] sm:h-[13rem]',
  },
  {
    face: 'bg-[#c56a32] text-[#fff7ef]',
    stripe: 'bg-[#efe6da]',
    height: 'h-[12rem] sm:h-[14rem]',
  },
  {
    face: 'bg-[#1c1814] text-[#efe6da]',
    stripe: 'bg-[#c56a32]',
    height: 'h-[10.75rem] sm:h-[12.75rem]',
  },
  {
    face: 'bg-[#efe6da] text-[#1c1814]',
    stripe: 'bg-[#2a221c]',
    height: 'h-[12.25rem] sm:h-[14.25rem]',
  },
]

type Props = {
  items: ShelfItem[]
  className?: string
}

export function AboutShelf({ items, className }: Props) {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = useMemo(
    () =>
      filter === 'all'
        ? items
        : items.filter((item) => item.category === filter),
    [filter, items],
  )

  return (
    <section className={cn('space-y-10', className)} aria-label="Shelf">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Shelf
          </h2>
          <span
            className="text-muted-foreground font-mono text-xs"
            aria-hidden="true"
          >
            →
          </span>
        </div>
        <div
          className="flex flex-wrap gap-x-4 gap-y-2"
          role="tablist"
          aria-label="Shelf filters"
        >
          {FILTERS.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.id)}
                className={cn(
                  'font-mono text-[0.65rem] tracking-[0.14em] uppercase transition-colors',
                  active
                    ? 'text-foreground underline underline-offset-4'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative">
        <ul className="flex items-end gap-2 overflow-x-auto px-1 pt-10 pb-0 sm:gap-3 sm:px-2">
          {visible.map((item, index) => {
            const cover = COVERS[index % COVERS.length]
            const lean = index % 2 === 0 ? '-rotate-1' : 'rotate-1'
            return (
              <li key={`${item.title}-${item.author}`} className="shrink-0">
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={cn(
                    'group relative block origin-bottom transition-transform duration-300 ease-out',
                    'hover:-translate-y-3 focus-visible:-translate-y-3',
                    lean,
                  )}
                  aria-label={`${item.title} by ${item.author}`}
                >
                  <span
                    className={cn(
                      'relative flex w-[4.75rem] flex-col justify-between overflow-hidden rounded-[2px] px-2 py-3 shadow-[2px_4px_14px_-4px_rgba(0,0,0,0.4)] sm:w-[5.5rem] sm:px-2.5 sm:py-3.5',
                      'focus-visible:ring-foreground/40 focus-visible:ring-2 focus-visible:outline-none',
                      cover.face,
                      cover.height,
                    )}
                  >
                    <span
                      className={cn(
                        'absolute inset-x-0 top-0 h-1',
                        cover.stripe,
                      )}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[0.55rem] tracking-[0.14em] uppercase opacity-60">
                      {item.category}
                    </span>
                    <span className="mt-auto min-w-0 space-y-1 overflow-hidden">
                      <span className="line-clamp-4 block text-[0.72rem] leading-[1.15] font-semibold tracking-tight break-words hyphens-auto sm:text-[0.8rem]">
                        {item.title}
                      </span>
                      <span className="line-clamp-1 block truncate text-[0.6rem] leading-snug opacity-70">
                        {item.author}
                        {item.external ? ' ↗' : ''}
                      </span>
                    </span>
                    <span
                      className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/25"
                      aria-hidden="true"
                    />
                    <span
                      className="pointer-events-none absolute inset-y-0 right-0 w-px bg-black/15"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        {/* Shelf board */}
        <div className="relative" aria-hidden="true">
          <div className="h-2.5 rounded-sm bg-gradient-to-b from-[#d2b896] via-[#b0895f] to-[#8f704a] shadow-[0_10px_22px_-8px_rgba(0,0,0,0.5)] dark:from-[#6b5640] dark:via-[#564433] dark:to-[#3f3226]" />
          <div className="mx-0.5 h-2 rounded-b-md bg-[#6e563c] dark:bg-[#241c14]" />
          <div className="from-foreground/15 absolute inset-x-6 -bottom-4 h-5 bg-gradient-to-b to-transparent blur-md" />
        </div>
      </div>
    </section>
  )
}
