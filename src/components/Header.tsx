'use client'

import { Separator } from '@/components/ui/separator'
import FilterMenu from '@/components/FilterMenu'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <div className="flex justify-between py-5">
        <div className="ms-8">
          <FilterMenu></FilterMenu>
        </div>
        <div className="w-full text-center">
          <h1 className="underline bold text-xl">fight tracker</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Theme"
          className="me-8"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </div>
      <Separator></Separator>
    </header>
  )
}
