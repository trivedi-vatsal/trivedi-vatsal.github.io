import { ChevronDownIcon, TextIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { TOCItemType } from '@/components/toc-minimap'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

export function TOCInline({
  items,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible> & {
  items: TOCItemType[]
}) {
  if (!items.length) {
    return null
  }

  return (
    <Collapsible
      className={cn(
        'bg-card not-prose group/inline-toc rounded-xl border font-sans',
        className,
      )}
      {...props}
    >
      <CollapsibleTrigger className="hover:bg-muted/50 focus-visible:ring-ring/50 inline-flex w-full items-center gap-2 rounded-xl py-2.5 pr-2 pl-4 text-sm font-medium transition-colors outline-none group-data-[state=open]/inline-toc:rounded-b-none focus-visible:ring-2 [&_svg]:size-4">
        <TextIcon className="-translate-x-0.5" />
        {children ?? 'On this page'}
        <div className="text-muted-foreground ml-auto shrink-0">
          <ChevronDownIcon className="transition-transform duration-150 group-data-[state=open]/inline-toc:rotate-180" />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <ul className="flex flex-col px-4 pb-2">
          {items.map((item) => (
            <li key={item.url} className="flex py-1">
              <a
                href={item.url}
                data-depth={item.depth}
                className="text-muted-foreground hover:text-accent-foreground text-sm transition-colors data-[depth=3]:pl-4 data-[depth=4]:pl-8"
                onClick={handleItemClick}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

function handleItemClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const url = e.currentTarget.getAttribute('href') ?? ''
  history.pushState(null, '', url)
  document.getElementById(url.replace('#', ''))?.scrollIntoView({
    behavior: 'smooth',
  })
}
