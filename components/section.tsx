import { cn } from '@/lib/utils'

export default function Section({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <section id={id} className={cn('relative', className)}>
      {children}
    </section>
  )
}
