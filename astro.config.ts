import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import tailwindcss from '@tailwindcss/vite'
import { rehypeMermaidPre } from './src/lib/rehype-mermaid-pre'
import { rehypeLinksNewTab } from './src/lib/rehype-links-new-tab'

// https://astro.build/config
export default defineConfig({
  site: 'https://vatsal.xyz',
  integrations: [react(), mdx(), sitemap(), robotsTxt()],
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    rehypePlugins: [rehypeMermaidPre, rehypeLinksNewTab],
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['mermaid'],
    },
  },
})
