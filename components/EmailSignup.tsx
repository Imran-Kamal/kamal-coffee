'use client';

import * as React from 'react';

export default function EmailSignup() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [msg, setMsg] = React.useState<{ ok: boolean; text: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch(() => null);

      if (!res) throw new Error('Network error');
      const data = (await res.json().catch(() => ({}))) as { message?: string };

      if (res.ok)
        setMsg({ ok: true, text: data?.message ?? 'Thanks—check your inbox soon.' });
      else
        setMsg({
          ok: false,
          text: data?.message ?? 'Could not subscribe. Please try again.',
        });
    } catch {
      setMsg({ ok: false, text: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="email-signup"
      className="relative isolate bg-gradient-to-b from-[#fdfaf7] via-[#fbf6f1] to-[#f6efe8] py-16 sm:py-24 text-center overflow-hidden"
    >
      {/* Optional background texture (add /public/texture.png if you want it) */}
      <div className="absolute inset-0 -z-10 bg-[url('/texture.png')] opacity-10 mix-blend-soft-light"></div>

      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#3c2e23] tracking-tight">
          Stay in the loop.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#6b5c4a] leading-relaxed">
          Join the Kamal Coffee circle for product launches, behind-the-scenes stories,
          and early access to new drops. No spam — just the good stuff.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            required
            placeholder="you@email.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 rounded-full border border-[#e7dfd6] bg-white/70 px-5 py-3 text-sm text-[#3c2e23] placeholder-[#9c8d7d] focus:outline-none focus:ring-2 focus:ring-[#c7a987] transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#c7a987] px-8 py-3 font-medium text-white shadow-md hover:bg-[#b99673] active:scale-95 transition disabled:opacity-70"
          >
            {loading ? 'Joining…' : 'Join the list'}
          </button>
        </form>

        {msg && (
          <p
            role="status"
            className={`mt-4 text-sm font-medium ${
              msg.ok ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {msg.text}
          </p>
        )}
      </div>
    </section>
  );
}
