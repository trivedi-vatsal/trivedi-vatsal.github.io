import { useState } from 'react'
import { Check, Code, Copy, Eye, WrapText } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Button } from '@/components/ui/button'
import { rehypeLinksNewTab } from '@/lib/rehype-links-new-tab'
import { cn } from '@/lib/utils'

interface MarkdownBlockProps {
  source: string
  title?: string
  defaultMode?: 'preview' | 'markdown'
  className?: string
}

export function MarkdownBlock({
  source,
  title,
  defaultMode = 'preview',
  className,
}: MarkdownBlockProps) {
  const [preview, setPreview] = useState(defaultMode === 'preview')
  const [wrap, setWrap] = useState(true)
  const [copied, setCopied] = useState(false)

  async function copy() {
    let ok = false
    try {
      await navigator.clipboard.writeText(source)
      ok = true
    } catch {
      const area = document.createElement('textarea')
      area.value = source
      area.setAttribute('readonly', '')
      area.style.position = 'fixed'
      area.style.left = '-9999px'
      document.body.append(area)
      area.select()
      ok = document.execCommand('copy')
      area.remove()
    }
    if (!ok) return
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className={cn('my-8 overflow-hidden rounded-md border', className)}>
      <div className="not-prose bg-muted/50 flex items-center justify-between gap-2 border-b px-3 py-1.5">
        <div className="text-muted-foreground flex min-w-0 items-center gap-2 text-sm">
          {preview ? <Eye aria-hidden="true" className="size-4 shrink-0" /> : <Code aria-hidden="true" className="size-4 shrink-0" />}
          {title && <span className="text-foreground truncate font-medium">{title}</span>}
          {title && <span aria-hidden="true">·</span>}
          <span className="shrink-0">{preview ? 'Preview' : 'Markdown'}</span>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => setPreview(!preview)}
          >
            {preview ? <Code aria-hidden="true" /> : <Eye aria-hidden="true" />}
            {preview ? 'Markdown' : 'Preview'}
          </Button>
          {!preview && (
            <Button
              type="button"
              size="icon-sm"
              variant={wrap ? 'default' : 'outline'}
              aria-label="Word wrap"
              aria-pressed={wrap}
              title="Word wrap"
              onClick={() => setWrap(!wrap)}
            >
              <WrapText aria-hidden="true" />
            </Button>
          )}
          <Button
            type="button"
            size="icon-sm"
            variant="outline"
            aria-label={copied ? 'Copied' : 'Copy'}
            title={copied ? 'Copied' : 'Copy'}
            onClick={copy}
          >
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          </Button>
        </div>
      </div>
      <div className="h-96 overflow-auto">
        {preview ? (
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none px-4 py-3 break-words">
            <ReactMarkdown rehypePlugins={[rehypeLinksNewTab]}>{source}</ReactMarkdown>
          </div>
        ) : (
          <pre
            className={cn(
              'not-prose text-foreground m-0 bg-transparent px-4 py-3 font-mono text-xs leading-relaxed sm:text-sm',
              wrap ? 'break-words whitespace-pre-wrap' : 'w-max whitespace-pre',
            )}
          >
            {source}
          </pre>
        )}
      </div>
    </div>
  )
}
