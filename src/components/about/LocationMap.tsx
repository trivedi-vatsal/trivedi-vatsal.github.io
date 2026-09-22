import { useState } from 'react'
import { cn } from '@/lib/utils'

export type LocationPlace = {
  id: string
  code: string
  label: string
  city: string
  region: string
  note: string
  coords: string
  embed: string
  link: string
}

type Props = {
  places: LocationPlace[]
  className?: string
}

export function LocationMap({ places, className }: Props) {
  const [activeId, setActiveId] = useState(places[0]?.id ?? '')
  const active = places.find((p) => p.id === activeId) ?? places[0]

  if (!active) return null

  return (
    <section
      id="place"
      className={cn('mt-6 w-full scroll-mt-24', className)}
      aria-labelledby="place-heading"
    >
      <div className="bg-muted relative h-[min(52vh,420px)] w-full overflow-hidden">
        {/* pointer-events-none blocks zoom, pan, and other iframe interaction */}
        <iframe
          key={active.id}
          title={`Map of ${active.city}`}
          src={active.embed}
          className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] opacity-90 contrast-[1.15] grayscale"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="absolute top-5 left-5 z-10 flex flex-col gap-2 sm:flex-row sm:gap-3">
          {places.map((place) => {
            const selected = place.id === active.id
            return (
              <button
                key={place.id}
                type="button"
                onClick={() => setActiveId(place.id)}
                aria-pressed={selected}
                className={cn(
                  'inline-flex items-center gap-2 px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.12em] uppercase transition-colors',
                  'focus-visible:ring-foreground/40 focus-visible:ring-2 focus-visible:outline-none',
                  selected
                    ? 'bg-background text-foreground shadow-sm'
                    : 'bg-background/75 text-muted-foreground hover:bg-background hover:text-foreground',
                )}
              >
                {selected && (
                  <span
                    className="bg-foreground h-1.5 w-1.5 rounded-full"
                    aria-hidden="true"
                  />
                )}
                {place.code} · {place.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-5 py-6 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h2
            id="place-heading"
            className="text-xl font-medium tracking-tight sm:text-2xl"
          >
            {active.note}
          </h2>
          <p className="text-muted-foreground mt-1 font-mono text-xs tracking-wide">
            {active.coords}
          </p>
        </div>
        <a
          href={active.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground font-mono text-[0.65rem] tracking-[0.12em] uppercase transition-colors"
        >
          OpenStreetMap ↗
        </a>
      </div>
    </section>
  )
}
