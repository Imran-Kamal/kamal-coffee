// components/SiteHeader.tsx
'use client';

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import MiniCart from "@/components/MiniCart";
import { useCart } from "@/components/CartProvider";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/allulose", label: "Allulose" },
];

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Kamal Coffee
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:underline underline-offset-4">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/kamal_coffee"
              className="hidden sm:inline hover:underline underline-offset-4 text-sm"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@kamal_coffee"
              className="hidden sm:inline hover:underline underline-offset-4 text-sm"
              aria-label="TikTok"
            >
              TikTok
            </a>

            {/* Cart button */}
            <button
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
              className="relative inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-neutral-300 hover:bg-neutral-50 transition"
            >
              <ShoppingCart className="w-5 h-5 text-neutral-700" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-neutral-900 text-white text-[11px] leading-[18px] text-center">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-neutral-300"
            >
              {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {navOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 text-sm">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setNavOpen(false)}
                  className="py-1"
                >
                  {l.label}
                </Link>
              ))}
              <a href="https://www.instagram.com/kamal_coffee" className="py-1">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@kamal_coffee" className="py-1">
                TikTok
              </a>
              {/* Mobile cart open */}
              <button
                onClick={() => {
                  setNavOpen(false);
                  setCartOpen(true);
                }}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium"
              >
                View Cart {count > 0 ? `(${count})` : ""}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* MiniCart Drawer */}
      <MiniCart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
