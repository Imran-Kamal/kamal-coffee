# Kamal Coffee — Website

Minimal, modern, and fast. Built with Next.js App Router, Tailwind, and a pluggable email capture.

## Quick start
```bash
npm i
cp .env.example .env.local
# Fill env keys
npm run dev
```

### Providers
- **Mailchimp**: create an API key, find your server prefix (e.g., `us21`), and Audience ID. Fill `MAILCHIMP_*`.
- **Resend fallback**: set `RESEND_API_KEY` and `NEWSLETTER_INBOX`. The API will email you each new subscriber.

### Socials
Set public envs so the links auto-populate:
```
NEXT_PUBLIC_TIKTOK_HANDLE=@kamal_coffee
NEXT_PUBLIC_INSTAGRAM_HANDLE=@kamal_coffee
```

### Design tokens
- Typeface: Inter
- Corners: `--radius: 1rem`
- Palette: neutral grayscale with deep accents (brand-900 for text)

### Where to add more
- Add real can images in the `CanCard` component or drop assets in `/public` and swap the `.can-shell` div for an `<img/>`.
- Add sections or pages in `app/` as needed (e.g., `/stockists`, `/story`).

### Deploy
- Vercel/Cloudflare Pages: add the same env vars in the project settings. Build command `next build`.
