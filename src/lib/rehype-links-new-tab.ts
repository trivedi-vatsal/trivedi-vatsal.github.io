type HastNode = {
  tagName?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

function walk(node: HastNode): void {
  const href = node.properties?.href
  if (
    node.tagName === 'a' &&
    typeof href === 'string' &&
    !href.startsWith('#')
  ) {
    node.properties!.target = '_blank'
    node.properties!.rel = ['noopener', 'noreferrer']
  }

  node.children?.forEach(walk)
}

export function rehypeLinksNewTab() {
  return (tree: HastNode) => {
    walk(tree)
  }
}
