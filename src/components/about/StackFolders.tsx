import { useState } from 'react'
import { cn } from '@/lib/utils'

export type StackFolder = {
  id: string
  category: string
  tools: string[]
}

type Props = {
  folders: StackFolder[]
  className?: string
}

export function StackFolders({ folders, className }: Props) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className={cn('space-y-10', className)} aria-label="Stack">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">
          Stack / {String(folders.length).padStart(2, '0')} folders
        </p>
        <p className="text-muted-foreground font-mono text-[0.65rem] tracking-[0.14em] uppercase">
          <span className="hidden sm:inline">
            Hover a folder to peek inside
          </span>
          <span className="sm:hidden">Tap a folder to peek inside</span>
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
        {folders.map((folder, index) => {
          const isOpen = open === folder.id
          return (
            <li key={folder.id}>
              <button
                type="button"
                onClick={() =>
                  setOpen((prev) => (prev === folder.id ? null : folder.id))
                }
                onMouseEnter={() => setOpen(folder.id)}
                onFocus={() => setOpen(folder.id)}
                onMouseLeave={() => setOpen(null)}
                onBlur={() => setOpen(null)}
                aria-pressed={isOpen}
                aria-label={`Folder ${folder.id} ${folder.category}`}
                className={cn(
                  'relative flex w-full flex-col text-left outline-none',
                  'focus-visible:ring-foreground/40 focus-visible:ring-2 focus-visible:ring-offset-2',
                )}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {/* Tab */}
                <span
                  className={cn(
                    'relative ml-3 h-3.5 w-[42%] rounded-t-[3px] transition-colors duration-300',
                    isOpen
                      ? 'bg-[#c4a574] dark:bg-[#8a7350]'
                      : 'bg-[#d6c4a3] dark:bg-[#6b5a42]',
                  )}
                  aria-hidden="true"
                />

                {/* Body */}
                <span
                  className={cn(
                    'relative -mt-px flex min-h-[11.5rem] flex-col justify-between overflow-hidden rounded-sm rounded-tl-none px-3.5 pt-4 pb-3.5 transition-all duration-300 sm:min-h-[13rem]',
                    isOpen
                      ? 'translate-y-[-6px] bg-[#e8d7b5] text-[#2a2218] shadow-[0_18px_40px_-28px_rgba(0,0,0,0.55)] dark:bg-[#9a8160] dark:text-[#1a140e]'
                      : 'bg-[#f3e6cc] text-[#3a3126] dark:bg-[#7a664c] dark:text-[#f5ecdc]',
                  )}
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase opacity-55">
                      {folder.id}
                    </span>
                    <span
                      className={cn(
                        'font-mono text-[0.6rem] tracking-wide uppercase opacity-40 transition-opacity',
                        isOpen && 'opacity-70',
                      )}
                    >
                      {isOpen ? 'open' : ''}
                    </span>
                  </span>

                  <span className="space-y-3">
                    <span
                      className={cn(
                        'block font-mono text-[0.7rem] leading-relaxed tracking-wide transition-all duration-300',
                        isOpen
                          ? 'translate-y-0 opacity-90'
                          : 'pointer-events-none translate-y-3 opacity-0',
                      )}
                    >
                      {folder.tools.join(' · ')}
                      <span className="opacity-50"> · {folder.category}</span>
                    </span>
                    <span className="block text-[1.35rem] leading-none font-semibold tracking-tight capitalize sm:text-2xl">
                      {folder.category}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
