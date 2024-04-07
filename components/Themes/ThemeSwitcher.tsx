'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@nextui-org/button'
import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex gap-4'>
      {theme !== 'light' && (
        <Button size='sm'  variant='flat' onClick={() => setTheme('light')}>
          <SunIcon />
        </Button>
      )}
      {theme !== 'dark' && (
        <Button size='sm' variant='flat' onClick={() => setTheme('dark')}>
        <MoonIcon />
      </Button>
      
      )}
      
    </div>
  )
}