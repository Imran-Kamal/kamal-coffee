'use client'
import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'err'>('idle')
  const [msg, setMsg] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setStatus('ok')
      setMsg("You're on the list!")
      setEmail('')
    } catch (err: any) {
      setStatus('err')
      setMsg(err.message || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-md items-center gap-2">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-2xl border border-brand-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button disabled={status==='loading'} className="btn btn-primary min-w-28">
        {status==='loading' ? 'Submitting…' : 'Notify me'}
      </button>
      {msg && <p className={`text-sm ml-2 ${status==='err' ? 'text-red-600' : 'text-green-700'}`}>{msg}</p>}
    </form>
  )
}
