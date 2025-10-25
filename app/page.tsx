// app/page.tsx
'use client';

import Image from "next/image";

// ————————————————————————————————
// Promo Bar (optional)
// ————————————————————————————————
function PromoBar() {
  return (
    <div className="h-9 flex items-center justify-center bg-neutral-100 text-[13px] text-neutral-700">
      Free shipping on US orders $45+
    </div>
  );
}

// ————————————————————————————————
// Header (minimal, clean)
// ————————————————————————————————
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight">Kamal Coffee</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/shop" className="hover:underline underline-offset-4">Shop</a>
          <a href="/subscribe" className="hover:underline underline-offset-4">Subscribe</a>
          <a href="/story" className="hover:underline underline-offset-4">Our Story</a>
          <a href="/brew" className="hover:underline underline-offset-4">Brew Tips</a>
          <a href="/faq" className="hover:underline underline-offset-4">FAQ</a>
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://www.instagram.com/kamal_coffee" className="hover:underline underline-offset-4">IG</a>
          <a href="https://www.tiktok.com/@kamal_coffee" className="hover:underline underline-offset-4">TT</a>
          <a href="/cart" className="rounded-full px-3 py-1 ring-1 ring-neutral-300 hover:bg-neutral-50">Cart</a>
        </div>
      </div>
    </header>
  );
}

// ————————————————————————————————
// Hero — Single Product (Kamal Coffee Hero Section)
// ————————————————————————————————
function HeroSingle() {
  return (
    <section className="relative isolate">
      {/* soft neutral tan background with gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_70%_0%,rgba(0,0,0,0.06),transparent),linear-gradient(#efe8de,#f6f2eb)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-24 grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
        
        {/* Copy Section */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-neutral-600">
            Vietnamese Iced Coffee
          </p>
          <h1 className="mt-2 text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-semibold tracking-tight text-neutral-950">
            Bold. Silky. Unapologetically smooth.
          </h1>
          <p className="mt-4 max-w-xl text-neutral-600">
            A modern take on cà phê sữa đá—deep robusta-forward character, kissed with sweetness, brewed cold and canned fresh.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/shop"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-neutral-900 hover:opacity-95 transition"
            >
              Shop now
            </a>
            <a
              href="/subscribe"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-neutral-900 bg-white/70 ring-1 ring-black/10 hover:bg-white transition"
            >
              Subscribe & save
            </a>
          </div>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-xs text-neutral-700">
            <div className="rounded-xl bg-white/60 ring-1 ring-black/5 p-3 text-center">
              Real coffee • No gums
            </div>
            <div className="rounded-xl bg-white/60 ring-1 ring-black/5 p-3 text-center">
              Silky-smooth
            </div>
            <div className="rounded-xl bg-white/60 ring-1 ring-black/5 p-3 text-center">
              Serve over ice
            </div>
          </div>
        </div>

        {/* Can Visual — with glow and shadow */}
        <div className="relative flex flex-col items-center">
          {/* soft glow behind can */}
          <div className="pointer-events-none absolute -z-10 top-1/2 -translate-y-1/2 w-[min(620px,92vw)] h-[min(620px,92vw)] rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.10),transparent_70%)]" />

          {/* can image */}
          <div
            className="select-none"
            style={{
              filter:
                "drop-shadow(0 12px 30px rgba(0,0,0,.12)) drop-shadow(0 2px 6px rgba(0,0,0,.06))",
            }}
          >
            <Image
              src="/images/kamal-coffee-simple-image-first-sketch-front-of-can.jpeg"
              alt="Kamal Coffee — Vietnamese Iced Coffee"
              width={480}
              height={980}
              className="h-[clamp(280px,40vw,560px)] w-auto select-none"
              priority
              sizes="(min-width: 1024px) 480px, 60vw"
            />
          </div>
 
          {/* tabletop shadow */}
          <div className="pointer-events-none mt-8 h-10 w-[min(560px,90%)] rounded-[100%] bg-black/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}


// ————————————————————————————————
// Why Kamal (3-up value props)
// ————————————————————————————————
function WhyKamal() {
  const items = [
    { t: "Authentic Profile", d: "Built on the bold intensity Vietnamese coffee is known for—balanced, deep, and addictive." },
    { t: "Clean Ingredients", d: "No gums or weird thickeners. Just coffee, milk options, and balanced sweetness." },
    { t: "Cold-Brewed & Canned Fresh", d: "Brewed cold for low bitterness and sealed for peak flavor." },
  ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Why Kamal?</h2>
        <p className="mt-3 max-w-2xl mx-auto text-neutral-600">
          A crisp, modern can with a soul from Saigon street cafés.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((x, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition text-left">
              <h3 className="font-medium text-lg text-neutral-900">{x.t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————
// How to serve (simple steps)
// ————————————————————————————————
function HowToServe() {
  const steps = [
    { t: "Chill", d: "Refrigerate can for at least 2 hours." },
    { t: "Ice", d: "Fill a glass with big cubes (melts slower)." },
    { t: "Pour", d: "Crack open and pour smooth over ice." },
    { t: "Optional", d: "Adjust sweetness or add a splash of milk of choice." },
  ];
  return (
    <section className="bg-[#F7F7F5] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 text-center">Serve it perfectly</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white ring-1 ring-neutral-200">
              <div className="text-sm font-medium text-neutral-900">{i + 1}. {s.t}</div>
              <div className="mt-1 text-sm text-neutral-600">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————
// Social proof (ratings + microquotes)
// ————————————————————————————————
function SocialProof() {
  const quotes = [
    { q: "As silky as café sữa đá from my favorite spot.", a: "— Amina" },
    { q: "Sweetness dialed just right. Instant favorite.", a: "— Marco" },
    { q: "Zero bitterness. Pour over ice and bliss.", a: "— Linh" },
  ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="text-2xl">★★★★★</div>
          <div className="text-sm text-neutral-600">4.9/5 • 1,200+ sips</div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
          {quotes.map((c, i) => (
            <blockquote key={i} className="p-6 rounded-2xl bg-neutral-50 ring-1 ring-neutral-200">
              <p className="text-sm text-neutral-800">“{c.q}”</p>
              <footer className="mt-3 text-xs text-neutral-600">{c.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————
// FAQ (lean)
// ————————————————————————————————
function FAQ() {
  const faqs = [
    { q: "Is it super sweet?", a: "Balanced. Vietnamese iced coffee has signature sweetness, but we keep it smooth—not cloying." },
    { q: "Dairy-free option?", a: "Yes—plant-based variants are in the works. Join the list to be notified." },
    { q: "How long does it last?", a: "Cans are shelf-stable. Best chilled and enjoyed within the date on the bottom." },
  ];
  return (
    <section className="bg-[#F7F7F5] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 text-center">FAQ</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl bg-white ring-1 ring-neutral-200 open:ring-neutral-300 transition">
              <summary className="cursor-pointer list-none p-5 text-sm font-medium text-neutral-900 flex items-center justify-between">
                {f.q}
                <span className="text-neutral-400 group-open:rotate-45 transition">＋</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-neutral-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ————————————————————————————————
// Footer (simple)
// ————————————————————————————————
function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Kamal Coffee. All rights reserved.</p>
        <div className="mt-3 flex justify-center gap-4">
          <a href="https://www.instagram.com/kamal_coffee" className="hover:text-neutral-900 transition">Instagram</a>
          <a href="https://www.tiktok.com/@kamal_coffee" className="hover:text-neutral-900 transition">TikTok</a>
          <a href="/contact" className="hover:text-neutral-900 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ————————————————————————————————
// Page
// ————————————————————————————————
export default function Page() {
  return (
    <main className="bg-white text-neutral-900">
      <PromoBar />
      <Header />
      <HeroSingle />
      <WhyKamal />
      <HowToServe />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
