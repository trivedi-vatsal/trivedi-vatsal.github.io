import { ThemeProvider } from 'next-themes'

import { ThemeToggleButton } from '@/components/ui/skiper-ui/skiper26'

export function ModeToggle() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      <ThemeToggleButton variant="circle" start="top-right" />
    </ThemeProvider>
  )
}
