import type { ReactNode } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LayoutGrid, List, Search } from 'lucide-react'

export type BlogView = 'category' | 'date'
export type BlogLayout = 'list' | 'grid'

type Props = {
  view: BlogView
  layout: BlogLayout
  search: string
  onViewChange: (view: BlogView) => void
  onLayoutChange: (layout: BlogLayout) => void
  onSearchChange: (search: string) => void
  hideViewToggle?: boolean
}

function ToggleGroup({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: { value: string; label: string; icon?: ReactNode }[]
  value: string
  onChange: (value: string) => void
  ariaLabel: string
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="border-border bg-muted/40 inline-flex rounded-md border p-0.5"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={value === option.value}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'sm' }),
            'h-8 gap-1.5 px-3',
            value === option.value &&
              'bg-background text-foreground hover:bg-background shadow-sm',
          )}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  )
}

export function BlogToolbar({
  view,
  layout,
  search,
  onViewChange,
  onLayoutChange,
  onSearchChange,
  hideViewToggle = false,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {!hideViewToggle && (
          <ToggleGroup
            ariaLabel="Group posts by"
            value={view}
            onChange={(value) => onViewChange(value as BlogView)}
            options={[
              { value: 'category', label: 'Category' },
              { value: 'date', label: 'Date' },
            ]}
          />
        )}
        <ToggleGroup
          ariaLabel="Post layout"
          value={layout}
          onChange={(value) => onLayoutChange(value as BlogLayout)}
          options={[
            {
              value: 'list',
              label: 'List',
              icon: <List className="size-3.5" aria-hidden="true" />,
            },
            {
              value: 'grid',
              label: 'Grid',
              icon: <LayoutGrid className="size-3.5" aria-hidden="true" />,
            },
          ]}
        />
      </div>

      <label className="relative block">
        <span className="sr-only">Search posts</span>
        <Search
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
          aria-hidden="true"
        />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search"
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border py-2 pr-3 pl-9 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        />
      </label>
    </div>
  )
}
