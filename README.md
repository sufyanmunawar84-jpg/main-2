# Northstar Connect

Call-only landing page for an independent UK telecom comparison and advisory service. The primary conversion path is freephone — no lead forms.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checklist

1. Replace all values in `.env.local` with the verified production domain, phone number and contact email.
2. Confirm the business identity, contact details, opening hours and legal text with the operator and legal adviser.
3. Only add customer counts, savings claims, satisfaction scores or testimonials when documentary evidence is available.
4. If adding analytics or advertising tags, implement a UK-compliant consent platform and update the cookie policy before activation.
5. Run `npm run lint` and `npm run build` before deployment.

## Architecture

- `app/` — Next.js App Router pages, metadata, sitemap and robots
- `components/` — landing-page sections and call conversion tools
- `lib/site.ts` — central business and contact configuration
- `public/` — visual assets including the full-bleed hero photograph

The site intentionally uses no provider logos, copied brand assets, fabricated reviews or unsubstantiated performance statistics.
