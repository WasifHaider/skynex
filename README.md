# Truck Dispatch Site

Marketing and lead-capture site for a US truck dispatch company. Built with
Next.js (App Router, TypeScript), Tailwind CSS. One job: get a carrier to
call dispatch or submit the "Get a dispatcher" form.

## Rebranding for a different dispatch company

All business content lives in one file: `src/content/site.ts`. Components
never hardcode business text, so rebranding the whole site is a matter of
editing this one object:

- `name` — company name, used in the header, footer, metadata, and JSON-LD
- `phone` — shown as a tap-to-call link; keep it in `+1 (555) 010-0199` format
- `email` — used for `mailto:` links and JSON-LD contact info
- `hours` — shown near the phone number and lead form
- `pricing` / `contract` — plain-language pricing and contract terms
- `proposalPdf` — path to a PDF in `public/` (e.g. `/proposal.pdf`); leave
  empty to hide the "Download our proposal" link
- `equipment` — array of equipment types offered; also populates the form's
  equipment select
- `stats` — array of `{ value, label }`; leave empty to hide the stats
  section (only use real numbers)
- `testimonials` — array of `{ quote, name, fleet }`; leave empty to hide the
  testimonials section (only use real carrier quotes)
- `brokers` — array of `{ name, logo }`; leave empty to hide the brokers
  section (only use logos you have permission to show)
- `faqs` — array of `{ question, answer }` shown in the FAQ accordion

Do not invent statistics, testimonials, or broker partnerships — those
sections are designed to disappear cleanly when the arrays are empty.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — API key from [resend.com](https://resend.com). Used to
  send lead form submissions by email. If unset, submissions are logged to
  the server console instead of emailed (useful for local development).
- `CONTACT_TO_EMAIL` — the inbox that should receive lead form submissions.

Optional:

- `NEXT_PUBLIC_SITE_URL` — the site's public URL (e.g.
  `https://www.example.com`), used to build absolute URLs in the sitemap,
  robots.txt, and page metadata. Defaults to `http://localhost:3000` if
  unset.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In the [Vercel dashboard](https://vercel.com/new), import the repository.
   Vercel detects the Next.js framework automatically — no build settings to
   change.
3. Before the first deploy, add the environment variables under
   **Project Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (set to your production domain once you have one)
4. Deploy. Vercel rebuilds automatically on every push to the connected
   branch.
