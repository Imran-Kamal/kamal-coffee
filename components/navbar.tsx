'use client'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition shadow-none', scrolled && 'bg-white/80 backdrop-blur shadow-sm')}> 
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="Kamal" className="h-6"/>
          <span className="font-medium tracking-tight">Kamal Coffee</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#flavors" className="hover:underline">Flavors</a>
          <a href="#notify" className="hover:underline">Notify me</a>
        </nav>
      </div>
    </header>
  )
}
