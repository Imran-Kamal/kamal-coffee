import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kamal Coffee',
  description: 'Authentic Vietnamese Iced Coffee, reimagined with oat milk condensed milk and allulose.',
  openGraph: {
    title: 'Kamal Coffee',
    description: 'Authentic Vietnamese Iced Coffee, reimagined with oat milk condensed milk and allulose.',
    images: ['/og.png'],
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
