import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Option = { value: string; label: string; count: number }

type Props = {
  /** Filter key in the notes page state (and URL param). */
  name: 'status' | 'tag'
  label: string
  options: Option[]
}

/**
 * Filter dropdown for the notes page. The page script owns the filter state:
 * it publishes it on the `[data-notes]` root (`data-state` + a `notes:state`
 * event) and listens for `notes:set` to change it.
 */
export function FilterDropdown({ name, label, options }: Props) {
  const trigger = useRef<HTMLButtonElement>(null)
  const [value, setValue] = useState('all')
  const root = () => trigger.current?.closest<HTMLElement>('[data-notes]')

  useEffect(() => {
    const el = root()
    if (!el) return
    const sync = () =>
      setValue(JSON.parse(el.dataset.state ?? '{}')[name] ?? 'all')
    sync()
    el.addEventListener('notes:state', sync)
    return () => el.removeEventListener('notes:state', sync)
  }, [name])

  const choose = (next: string) =>
    root()?.dispatchEvent(
      new CustomEvent('notes:set', { detail: { key: name, value: next } }),
    )

  const items = [{ value: 'all', label: 'All', count: -1 }, ...options]
  const current = items.find((o) => o.value === value) ?? items[0]

  return (
    <div className="min-w-0">
      <span className="bento-label mb-1 block" aria-hidden="true">
        {label}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            ref={trigger}
            type="button"
            aria-label={`${label}: ${current.label}`}
            className="group/dd bg-card hover:border-foreground/30 data-[state=open]:border-primary focus-visible:ring-ring flex h-8 w-full min-w-0 items-center gap-2 rounded-md border px-2.5 text-left text-sm transition-colors outline-none focus-visible:ring-2"
          >
            <span
              className={
                value === 'all'
                  ? 'text-muted-foreground flex-1 truncate'
                  : 'text-primary flex-1 truncate'
              }
            >
              {current.label}
            </span>
            <ChevronDownIcon
              aria-hidden="true"
              className="text-muted-foreground size-3.5 shrink-0 transition-transform group-data-[state=open]/dd:rotate-180"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          collisionPadding={12}
          className="max-h-72 w-[var(--radix-dropdown-menu-trigger-width)] min-w-44"
        >
          <DropdownMenuRadioGroup value={value} onValueChange={choose}>
            {items.map((o) => (
              <DropdownMenuRadioItem
                key={o.value}
                value={o.value}
                className="gap-3"
              >
                <span className="flex-1 truncate">{o.label}</span>
                {o.count >= 0 && (
                  <span className="text-muted-foreground font-mono text-xs">
                    {o.count}
                  </span>
                )}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
