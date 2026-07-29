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

function StackIcon({ name, className }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'TypeScript':
      return (
        <svg {...common}>
          <path d="M3 3h18v18H3V3zm9.8 14.4h1.9V9.6h2.4V8H9.4v1.6h2.4v7.8zM8.1 12.2c0 1.7 1.1 2.7 3 2.7.7 0 1.4-.1 1.9-.3v-1.5c-.4.2-.9.3-1.4.3-.9 0-1.5-.4-1.5-1.3V10H8.1v2.2zm8.3-.5c.3-.2.8-.4 1.4-.4.6 0 .9.2.9.6 0 .4-.3.6-1.1.9l-.5.2c-1.3.5-1.9 1.2-1.9 2.3 0 1.4 1.1 2.4 2.8 2.4 1.2 0 2.1-.3 2.7-.7l-.9-1.3c-.4.3-1.1.5-1.7.5-.6 0-1-.2-1-.7 0-.4.3-.6 1.1-.9l.5-.2c1.4-.5 2-1.2 2-2.4 0-1.4-1.1-2.3-2.8-2.3-1.3 0-2.3.4-3 .8l.9 1.2z" />
        </svg>
      )
    case 'React':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            transform="rotate(120 12 12)"
          />
        </svg>
      )
    case 'Node':
      return (
        <svg {...common}>
          <path d="M12 2.2 3.8 6.9v10.2L12 21.8l8.2-4.7V6.9L12 2.2zm0 2.3 6 3.4v6.2l-6 3.4-6-3.4V7.9l6-3.4z" />
          <path d="M11 9.2h2.2c1.7 0 2.8.9 2.8 2.4 0 1.5-1.1 2.5-2.9 2.5H12.2V17H11V9.2zm1.2 1.3v2.3h.9c.9 0 1.5-.4 1.5-1.2s-.5-1.1-1.4-1.1h-1z" />
        </svg>
      )
    case 'Postgres':
      return (
        <svg {...common}>
          <path d="M12.4 2.5c-3.8 0-5.7 1.9-5.7 3.7v1.1c.7-.5 2.3-1.1 4.5-1.1 3.6 0 5.8 1.3 5.8 1.3s-.3-1.8-2.1-3.2c-.9-.7-1.8-.8-2.5-.8zm-4.9 5.2c-.6.2-1 .6-1 1.2 0 .9 1.1 1.5 3.2 1.9 2.6.5 5.6.4 6.7-.3.3-.2.5-.4.5-.7 0-.8-1.6-1.5-4-1.8-1.7-.2-3.9-.2-5.4-.3zm-.8 4.1v5.5c0 1.6 1.5 2.8 4.5 2.8 1.1 0 2.1-.1 2.8-.4v-1.7c-.6.2-1.3.3-2.1.3-1.8 0-2.6-.6-2.6-1.5v-4.2c-.9-.2-1.8-.4-2.6-.8zm8.6.3c-.3.1-.7.2-1.1.3v6.4h2.1v-5.8c-.3-.3-.7-.6-1-.9z" />
        </svg>
      )
    case 'Astro':
      return (
        <svg {...common}>
          <path d="M16.4 17.3c-.7 1.2-1.9 1.9-3.4 1.9-1.9 0-3.1-1.4-3.4-3.3h-.1c-.5 2.2-1.9 3.5-3.8 3.5-1.7 0-2.8-1.1-2.8-2.6 0-2.1 1.9-3.4 5.3-3.7l1.1-.1V12c0-1.4-.5-2.1-1.6-2.1-.9 0-1.5.5-1.7 1.4l-2.1-.3c.3-1.8 1.8-3.1 4-3.1 2.5 0 3.8 1.4 3.8 4v2.4l1.5.1c2.1.2 3.2.9 3.2 2.3 0 .7-.3 1.3-.9 1.6zm-5.4-2.5c-1.7.2-2.7.7-2.7 1.6 0 .6.4 1 1.1 1 .9 0 1.6-.8 1.6-2.1v-.5zm5.4 1.5c0-.5-.5-.8-1.5-.9h-.9c.1 1.3.6 1.9 1.4 1.9.6 0 1-.4 1-1zM12.8 3.2l3.7 11.2h-2.3L12.8 7l-1.5 7.4H9L12.8 3.2z" />
        </svg>
      )
    case 'AI / LLMs':
      return (
        <svg {...common}>
          <path d="M12 2.5 13.6 8H19l-4.3 3.2L16.4 17 12 13.9 7.6 17l1.7-5.8L5 8h5.4L12 2.5z" />
        </svg>
      )
    case 'Cloud / SaaS':
      return (
        <svg {...common}>
          <path d="M17.5 18.5h-10A4.5 4.5 0 0 1 6.2 10a5.5 5.5 0 0 1 10.7-1.4 3.8 3.8 0 0 1 .6 7.5v.4z" />
        </svg>
      )
    case 'Integrations':
      return (
        <svg {...common}>
          <path d="M8.5 7.5a2.5 2.5 0 1 1 0 5H7v2h1.5a4.5 4.5 0 1 0 0-9H7v2h1.5zm7 0H14v2h1.5a2.5 2.5 0 1 1 0 5H14v2h1.5a4.5 4.5 0 1 0 0-9zM8 11h8v2H8v-2z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M7 4h10v2H7V4zm0 7h10v2H7v-2zm0 7h10v2H7v-2z" />
        </svg>
      )
  }
}

export function StackTile({ items, className }: Props) {
  const [active, setActive] = useState<string | null>(null)
  const current = items.find((item) => item.name === active)

  return (
    <article
      className={cn(
        'bento-tile bento-tile--flat group tile-reveal order-6 col-span-1 flex min-h-[200px] flex-col justify-between p-5 sm:p-6 lg:order-7 lg:col-span-4',
        className,
      )}
      style={{ animationDelay: '180ms' }}
      aria-label="My stack"
    >
      <div>
        <h2 className="text-foreground text-base font-semibold tracking-tight">
          My stack
        </h2>

        <ul className="mt-4 grid grid-cols-4 gap-2.5 sm:gap-3">
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
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  className={cn(
                    'bg-muted text-muted-foreground flex aspect-square w-full items-center justify-center rounded-2xl transition-colors',
                    'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
                    isActive
                      ? 'bg-secondary text-foreground'
                      : 'hover:bg-secondary hover:text-foreground',
                  )}
                  aria-pressed={isActive}
                  aria-label={item.name}
                  title={item.name}
                >
                  <StackIcon name={item.name} className="size-[42%] max-h-8 max-w-8" />
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className="border-border/60 mt-5 min-h-[3.25rem] border-t pt-3"
        aria-live="polite"
      >
        {current ? (
          <div>
            <p className="text-foreground text-sm font-medium">{current.name}</p>
            <p className="text-muted-foreground mt-0.5 font-mono text-[0.65rem] tracking-wide">
              {current.projects.join(' · ')}
            </p>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            Hover a tool to see where it shows up.
          </p>
        )}
      </div>
    </article>
  )
}
