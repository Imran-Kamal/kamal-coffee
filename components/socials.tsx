import { cn } from '@/lib/utils'
import { Instagram, Music2 } from 'lucide-react'

export default function Socials({ className }: { className?: string }) {
  const tt = process.env.NEXT_PUBLIC_TIKTOK_HANDLE || '@kamal_coffee'
  const ig = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || '@kamal_coffee'
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <a className="inline-flex items-center gap-2 text-sm hover:underline" href={`https://www.tiktok.com/${tt.replace('@','@')}`} target="_blank" rel="noreferrer">
        <Music2 className="h-4 w-4" /> {tt}
      </a>
      <a className="inline-flex items-center gap-2 text-sm hover:underline" href={`https://www.instagram.com/${ig.replace('@','')}`} target="_blank" rel="noreferrer">
        <Instagram className="h-4 w-4" /> {ig}
      </a>
    </div>
  )
}
