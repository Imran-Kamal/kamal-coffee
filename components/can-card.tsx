'use client'
import { motion } from 'framer-motion'

export default function CanCard({ title, subtitle, note, tint = '#0f172a' }: { title: string, subtitle: string, note?: string, tint?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="rounded-3xl border border-brand-200 p-4 md:p-6 bg-white"
    >
      <div className="aspect-[3/4] w-full can-shell" style={{
        background: `linear-gradient(180deg, #fff 0%, ${tint}0d 100%)`,
      }}></div>
      <div className="pt-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-brand-600">{subtitle}</p>
        {note && <p className="text-xs text-brand-500 mt-1">{note}</p>}
      </div>
    </motion.article>
  )
}
