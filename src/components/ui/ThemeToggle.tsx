import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ThemeProvider, useTheme } from 'next-themes'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
        'shrink-0',
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  )
}

export function ModeToggle() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      <ThemeToggleButton />
    </ThemeProvider>
  )
}
