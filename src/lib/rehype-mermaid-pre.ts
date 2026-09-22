type HastNode = {
  type?: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

function collectText(node: HastNode | undefined): string {
  if (!node) return ''
  if (node.type === 'text') return node.value ?? ''
  if (!node.children) return ''
  return node.children.map(collectText).join('')
}

function classList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String)
  if (typeof value === 'string') return value.split(/\s+/)
  return []
}

function languageOf(node: HastNode | undefined): string {
  if (!node?.properties) return ''
  const fromData =
    node.properties.dataLanguage ?? node.properties['data-language']
  if (typeof fromData === 'string') return fromData
  return (
    classList(node.properties.className).find(
      (name) => name === 'mermaid' || name.startsWith('language-'),
    ) ?? ''
  )
    .replace(/^language-/, '')
    .trim()
}

function isMermaidPre(node: HastNode | undefined): boolean {
  if (!node || node.tagName !== 'pre') return false
  if (languageOf(node) === 'mermaid') return true
  const code = node.children?.find((child) => child.tagName === 'code')
  return languageOf(code) === 'mermaid'
}

function toMermaidFigure(node: HastNode): void {
  const source = collectText(node).replace(/^\n+|\n+$/g, '')
  node.tagName = 'figure'
  node.properties = {
    className: ['mermaid-figure'],
  }
  node.children = [
    {
      type: 'element',
      tagName: 'pre',
      properties: {
        className: ['mermaid'],
        dataSource: source,
      },
      children: [],
    },
  ]
}

function walk(node: HastNode): void {
  if (isMermaidPre(node)) {
    toMermaidFigure(node)
    return
  }

  node.children?.forEach(walk)
}

export function rehypeMermaidPre() {
  return (tree: HastNode) => {
    walk(tree)
  }
}
