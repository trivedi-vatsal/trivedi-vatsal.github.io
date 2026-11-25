import { useEffect, useRef, useState } from 'react'
import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  LinkIcon,
  ShareIcon,
  XIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
  title: string
  /** Absolute permalink of the note. */
  url: string
  /** Same-origin path of the square share image. */
  image: string
  /** Show a labelled outline button instead of the icon-only trigger. */
  label?: string
}

export function NoteShare({ title, url, image, label }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [support, setSupport] = useState({ share: false, copyImage: false })
  // Inline feedback: toasts render under a modal <dialog>'s top layer.
  const [done, setDone] = useState<'link' | 'image' | 'error' | null>(null)
  const fileName = image.split('/').pop()!
  const getBlob = () => fetch(image).then((res) => res.blob())

  useEffect(() => {
    setSupport({
      share: 'share' in navigator,
      copyImage: 'ClipboardItem' in window && !!navigator.clipboard?.write,
    })
  }, [])

  useEffect(() => {
    if (!done) return
    const timer = setTimeout(() => setDone(null), 1600)
    return () => clearTimeout(timer)
  }, [done])

  async function copyImage() {
    try {
      // Promise form keeps Safari's user-gesture requirement happy.
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': getBlob() }),
      ])
      setDone('image')
    } catch {
      setDone('error')
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setDone('link')
    } catch {
      setDone('error')
    }
  }

  async function share() {
    const data: ShareData = { title, url }
    try {
      const file = new File([await getBlob()], fileName, { type: 'image/png' })
      if (navigator.canShare?.({ files: [file] })) data.files = [file]
    } catch {}
    navigator.share(data).catch(() => {})
  }

  return (
    <>
      <Button
        variant={label ? 'outline' : 'ghost'}
        size={label ? 'sm' : 'icon-sm'}
        aria-label={label ? undefined : 'Share note'}
        title="Share"
        className={label ? '' : 'text-muted-foreground hover:text-primary'}
        onClick={() => dialog.current?.showModal()}
      >
        <ShareIcon />
        {label}
      </Button>

      <dialog
        ref={dialog}
        aria-label="Share note"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="bg-card text-card-foreground m-auto w-[min(26rem,calc(100vw-2rem))] rounded-2xl border p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <div className="p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="bento-label">Share note</p>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Close"
              onClick={() => dialog.current?.close()}
            >
              <XIcon />
            </Button>
          </div>

          <img
            src={image}
            alt={`Share image: ${title}`}
            width={1080}
            height={1080}
            loading="lazy"
            className="bg-secondary aspect-square w-full rounded-xl border"
          />

          <Button asChild className="mt-4 w-full">
            <a href={image} download={fileName}>
              <DownloadIcon />
              Download image
            </a>
          </Button>
          <div className="mt-2 flex flex-wrap gap-2 [&>*]:flex-[1_1_7rem]">
            {support.copyImage && (
              <Button variant="outline" onClick={copyImage}>
                {done === 'image' ? <CheckIcon /> : <CopyIcon />}
                {done === 'image' ? 'Copied' : 'Copy image'}
              </Button>
            )}
            <Button variant="outline" onClick={copyLink}>
              {done === 'link' ? <CheckIcon /> : <LinkIcon />}
              {done === 'link' ? 'Copied' : 'Copy link'}
            </Button>
            {support.share && (
              <Button variant="outline" onClick={share}>
                <ShareIcon />
                More…
              </Button>
            )}
          </div>
          <p
            role="status"
            className="text-muted-foreground mt-2 min-h-4 text-center font-mono text-[0.65rem]"
          >
            {done === 'error' ? 'Copy blocked by the browser.' : ''}
          </p>
        </div>
      </dialog>
    </>
  )
}
