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

      if (res.ok) setMsg({ ok: true, text: data?.message ?? 'Thanks—check your inbox soon.' });
      else setMsg({ ok: false, text: data?.message ?? 'Could not subscribe. Please try again.' });
    } catch {
      setMsg({ ok: false, text: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="signup-wrap fade-in"
      aria-labelledby="signup-title"
      style={{
        margin: '4rem auto',
        maxWidth: 880,
        padding: '2rem',
        background: 'rgba(255,255,255,0.5)',
        borderRadius: 16,
        boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div className="signup-inner" style={{ display: 'grid', gap: '1rem' }}>
        <h2 id="signup-title" style={{ fontSize: '1.75rem', fontWeight: 800 }}>
          Join the list
        </h2>

        <p style={{ color: '#6B5538' }}>
          Launch news & drops—just the good stuff.
        </p>

        <form onSubmit={onSubmit} className="signup-form" style={{ display: 'flex', gap: '0.75rem' }}>
          <input
            type="email"
            required
            placeholder="you@email.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              padding: '0.9rem 1rem',
              borderRadius: 12,
              border: '1px solid #e7e2dc',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.9rem 1.25rem',
              borderRadius: 12,
              background: '#8B6F47',
              color: '#fff',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Joining…' : 'Join the list'}
          </button>
        </form>

        {msg && (
          <p
            role="status"
            style={{
              marginTop: '0.5rem',
              color: msg.ok ? '#2e7d32' : '#b00020',
              fontWeight: 600,
            }}
          >
            {msg.text}
          </p>
        )}
      </div>
    </section>
  );
}
