import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://vatsal.xyz',
  integrations: [react(), mdx(), sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
})
