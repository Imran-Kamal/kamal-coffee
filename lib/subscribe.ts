import Mailchimp from '@mailchimp/mailchimp_marketing'
import { Resend } from 'resend'

export async function subscribe(email: string): Promise<{ ok: boolean; provider: 'mailchimp'|'resend'; message: string }>{ 
  // Try Mailchimp first
  const mcKey = process.env.MAILCHIMP_API_KEY
  const mcPrefix = process.env.MAILCHIMP_SERVER_PREFIX
  const mcList = process.env.MAILCHIMP_AUDIENCE_ID

  if (mcKey && mcPrefix && mcList) {
    try {
      Mailchimp.setConfig({ apiKey: mcKey, server: mcPrefix })
      await Mailchimp.lists.addListMember(mcList, { email_address: email, status: 'subscribed' })
      return { ok: true, provider: 'mailchimp', message: 'Added via Mailchimp' }
    } catch (e: any) {
      // fall through to Resend
    }
  }

  // Fallback: Resend to send you an email with the subscriber address
  const resendKey = process.env.RESEND_API_KEY
  const inbox = process.env.NEWSLETTER_INBOX
  if (resendKey && inbox) {
    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Kamal Coffee <no-reply@kamal.coffee>',
      to: [inbox],
      subject: 'New subscriber',
      text: `Please add to list: ${email}`
    })
    return { ok: true, provider: 'resend', message: 'Forwarded via Resend' }
  }

  throw new Error('No email provider configured. Set MAILCHIMP_* or RESEND_API_KEY & NEWSLETTER_INBOX.')
}
