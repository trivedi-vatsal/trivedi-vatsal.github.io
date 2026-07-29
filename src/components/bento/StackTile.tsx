import { useState } from 'react'
import { cn } from '@/lib/utils'

export type StackItem = {
  name: string
  projects: string[]
}

type Props = {
  items: StackItem[]
  className?: string
}

export function StackTile({ items, className }: Props) {
  const [active, setActive] = useState<string | null>(null)
  const current = items.find((item) => item.name === active)

  return (
    <article
      className={cn(
        'bento-tile bento-tile--flat group tile-reveal order-6 col-span-1 flex min-h-[240px] flex-col justify-between p-5 sm:p-6 lg:order-7 lg:col-span-4',
        className,
      )}
      style={{ animationDelay: '180ms' }}
      aria-label="What I build with"
    >
      <div>
        <p className="bento-label">What I build with</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {items.map((item) => {
            const isActive = active === item.name
            return (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() =>
                    setActive((prev) => (prev === item.name ? null : item.name))
                  }
                  onMouseEnter={() => setActive(item.name)}
                  onFocus={() => setActive(item.name)}
                  className={cn(
                    'rounded-sm border px-2.5 py-1.5 font-mono text-[0.7rem] tracking-wide transition-colors',
                    'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
                    isActive
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-secondary/50 text-foreground hover:border-foreground/30',
                  )}
                  aria-pressed={isActive}
                >
                  {item.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className="border-border/80 mt-5 min-h-[4.5rem] border-t pt-4"
        aria-live="polite"
      >
        {current ? (
          <div>
            <p className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.12em] uppercase">
              Used in
            </p>
            <ul className="mt-2 space-y-1">
              {current.projects.map((project) => (
                <li key={project} className="text-sm font-medium">
                  {project}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            Hover or select a technology to see where it shows up.
          </p>
        )}
      </div>
    </article>
  )
}
