import { useState, type ComponentType, type SVGProps } from 'react'
import {
  SiApachekafka,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiZapier,
} from '@icons-pack/react-simple-icons'
import { cn } from '@/lib/utils'

export type StackItem = {
  name: string
  projects: string[]
}

type Props = {
  items: StackItem[]
  className?: string
}

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string }

/** OpenAI — removed from Simple Icons; official mark path retained for portfolio use. */
function OpenAIIcon({ className, size = '1em', ...props }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
      className={className}
      {...props}
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

const STACK_ICONS: Record<string, ComponentType<IconProps>> = {
  TypeScript: SiTypescript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  Node: SiNodedotjs,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  Postgres: SiPostgresql,
  Kafka: SiApachekafka,
  'AI / LLMs': OpenAIIcon,
  Integrations: SiZapier,
}

function StackIcon({ name, className }: { name: string; className?: string }) {
  const Icon = STACK_ICONS[name]
  if (!Icon) {
    // Fallback monogram so empty cells never appear blank.
    const initial = name.trim().charAt(0).toUpperCase() || '?'
    return (
      <span
        className={cn(
          'flex size-full items-center justify-center font-mono text-sm font-semibold',
          className,
        )}
        aria-hidden
      >
        {initial}
      </span>
    )
  }
  return <Icon className={className} size="100%" aria-hidden />
}

export function StackTile({ items, className }: Props) {
  const [active, setActive] = useState<string | null>(null)
  const current = items.find((item) => item.name === active)

  return (
    <article
      className={cn(
        'bento-tile group tile-reveal order-6 col-span-1 flex min-h-[200px] flex-col justify-between p-5 sm:p-6 lg:order-7 lg:col-span-4',
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
          {items.map((item, i) => {
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
                  <span
                    className="anim-icon-float inline-flex size-[42%] max-h-8 max-w-8 items-center justify-center"
                    style={{ animationDelay: `${i * 0.28}s` }}
                  >
                    <StackIcon name={item.name} className="size-full" />
                  </span>
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
            <p className="text-foreground text-sm font-medium">
              {current.name}
            </p>
            <p className="text-muted-foreground mt-0.5 font-mono text-[0.65rem] tracking-wide">
              {current.projects.length > 0
                ? current.projects.join(' · ')
                : 'From resume skills'}
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
