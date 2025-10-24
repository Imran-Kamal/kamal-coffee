// components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 bg-[linear-gradient(180deg,#fbf7f2_0%,#f4ece4_100%)] text-[#3c2e23] border-t border-[#eadfd3]">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-extrabold tracking-wide">Kamal Coffee</h3>
          <p className="mt-3 text-sm text-[#6b5c4a] leading-relaxed">
            Vietnamese iced coffee — reimagined with oat milk condensed milk and allulose.
            Bold flavor, smooth finish.
          </p>
          <p className="mt-4 text-xs text-[#9c8d7d]">Made with allulose 🍃</p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/story" className="hover:underline">Our Story</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Help</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:underline" href="mailto:hello@kamalcoffee.com">Email support</a></li>
            <li><a className="hover:underline" href="#">Shipping & returns</a></li>
            <li><a className="hover:underline" href="#">Privacy & terms</a></li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Follow us</h4>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 border border-[#e7dfd6] hover:shadow-md transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#3c2e23" strokeWidth="1.6"/>
                <circle cx="12" cy="12" r="4" stroke="#3c2e23" strokeWidth="1.6"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="#3c2e23"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 border border-[#e7dfd6] hover:shadow-md transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 3c1.2 1.7 2.6 2.6 4.3 2.8v3.2c-1.6-.1-3-.6-4.3-1.5v6.3a6.5 6.5 0 1 1-5.6-6.4v3.3a3.3 3.3 0 1 0 2.3 3.1V3h3.3z" fill="#3c2e23"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 border border-[#e7dfd6] hover:shadow-md transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 12s0-3.5-.4-5a3 3 0 0 0-2.1-2.1C18 4.4 12 4.4 12 4.4s-6 0-7.5.5A3 3 0 0 0 2.4 7C2 8.5 2 12 2 12s0 3.5.4 5a3 3 0 0 0 2.1 2.1c1.5.5 7.5.5 7.5.5s6 0 7.5-.5a3 3 0 0 0 2.1-2.1c.4-1.5.4-5 .4-5z" stroke="#3c2e23" strokeWidth="1.6"/>
                <path d="M10 8.8v6.4l5.2-3.2L10 8.8z" fill="#3c2e23"/>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-xs text-[#9c8d7d]">Tag us @KamalCoffee — we’d love to feature your pour.</p>
        </div>
      </div>

      <div className="border-t border-[#eadfd3]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-[#877766] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Kamal Coffee. All rights reserved.</p>
          <p>Vietnamese coffee, refined.</p>
        </div>
      </div>
    </footer>
  );
}
