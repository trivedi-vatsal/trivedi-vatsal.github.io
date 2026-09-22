import { useEffect, useId, useState, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  email: string
  className?: string
  /** Trigger label in the footer / page chrome */
  label?: string
}

export function ContactNote({ email, className, label = 'Contact' }: Props) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const mail = email.replace(/^mailto:/, '')

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const from = String(data.get('from') || '').trim()
    const message = String(data.get('message') || '').trim()
    const subject = encodeURIComponent(
      name ? `Note from ${name}` : 'Note from vatsal.xyz',
    )
    const body = encodeURIComponent(
      [message, '', from ? `- ${from}` : '', name ? name : '']
        .filter(Boolean)
        .join('\n'),
    )
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`
    setOpen(false)
  }

  return (
    <div className={cn(className)}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground text-xs tracking-wide underline-offset-4 transition-colors hover:underline"
      >
        {label}
      </button>

      {open && (
        <>
          <button
            type="button"
            className="bg-background/50 fixed inset-0 z-40 backdrop-blur-[2px]"
            aria-label="Close contact"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="border-border bg-background fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-3">
              <h2
                id={titleId}
                className="text-2xl font-semibold tracking-tight"
              >
                Send a note
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground font-mono text-sm"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <form
              className="mt-10 flex flex-1 flex-col gap-5"
              onSubmit={onSubmit}
            >
              <label className="block space-y-2">
                <span className="text-muted-foreground font-mono text-[0.65rem] tracking-wide uppercase">
                  Name
                </span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="border-border/80 focus:border-foreground w-full border-0 border-b bg-transparent px-0 py-2 text-base outline-none"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-muted-foreground font-mono text-[0.65rem] tracking-wide uppercase">
                  Email
                </span>
                <input
                  name="from"
                  type="email"
                  required
                  autoComplete="email"
                  className="border-border/80 focus:border-foreground w-full border-0 border-b bg-transparent px-0 py-2 text-base outline-none"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-muted-foreground font-mono text-[0.65rem] tracking-wide uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="border-border/80 focus:border-foreground w-full resize-none border-0 border-b bg-transparent px-0 py-2 text-base outline-none"
                />
              </label>

              <button
                type="submit"
                className="bg-foreground text-background mt-auto w-full py-3 text-sm font-medium transition-[opacity,transform] duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                Send the note
              </button>
            </form>

            <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
              Rather write directly?{' '}
              <a
                href={`mailto:${mail}`}
                className="text-foreground decoration-foreground/25 hover:decoration-foreground underline underline-offset-4"
              >
                {mail}
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  )
}
