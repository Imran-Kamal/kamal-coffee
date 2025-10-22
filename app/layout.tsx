// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kamalcoffee.com'),
  title: {
    default: 'Kamal Coffee — Vietnamese Iced Coffee, Reimagined',
    template: '%s · Kamal Coffee',
  },
  description:
    'Vietnamese iced coffee with a modern twist — oat milk condensed milk and allulose for bold flavor and a smooth, clean finish.',
  openGraph: {
    title: 'Kamal Coffee — Vietnamese Iced Coffee, Reimagined',
    description:
      'Vietnamese iced coffee with a modern twist — oat milk condensed milk and allulose for bold flavor and a smooth, clean finish.',
    url: 'https://kamalcoffee.com',
    siteName: 'Kamal Coffee',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamal Coffee — Vietnamese Iced Coffee, Reimagined',
    description:
      'Vietnamese iced coffee with a modern twist — oat milk condensed milk and allulose for bold flavor and a smooth, clean finish.',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
