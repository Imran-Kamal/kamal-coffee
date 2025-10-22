import { NextResponse } from 'next/server'
import { z } from 'zod'
import { subscribe } from '@/lib/subscribe'

const Schema = z.object({ email: z.string().email() })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = Schema.parse(body)
    const result = await subscribe(email)
    return NextResponse.json({ ok: true, provider: result.provider })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message || 'Invalid request' }, { status: 400 })
  }
}
