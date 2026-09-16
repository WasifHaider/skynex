# Truck Dispatch Marketing Site — Implementation Plan

> **For Hermes:** Build phase-by-phase via Claude Code CLI (plain chat-approval
> flow, no TICKETBOARD). Verify after each phase, report progress, no
> per-phase approval gate once this plan is approved. Never commit/push —
> user commits.

**Goal:** A Next.js marketing + lead-capture site for a US truck dispatch
company (owner-operators / small fleets), single job: get a carrier to call
or submit the "Get a dispatcher" form. Rebrandable via one content file
(`src/content/site.ts`).

**Architecture:** Next.js (App Router, TypeScript, `src/`), Tailwind CSS,
server components by default. Only the hero's lane-drawing SVG needs any
client-side touch (CSS animation via `prefers-reduced-motion`, no client JS
required even there — pure CSS). Form uses a Server Action + `zod` validation
+ `resend` for email, with console-log fallback if no API key. US map is
precomputed to static SVG paths at build/render time via `d3-geo` +
`topojson-client` + `us-atlas`, rendered server-side only.

**Tech Stack:** Next.js (latest stable) · TypeScript · Tailwind CSS ·
`next/font/google` (Overpass) · `lucide-react` · `d3-geo` + `topojson-client`
+ `us-atlas` · `zod` · Server Actions · `resend`

**Repo:** `D:\Personal\truck-dispatch-site` (fresh git repo, initialized empty)

---

## Design plan (produced before Phase 1 code, per spec's "before writing code"
requirement — Claude Code must post this and get it right before scaffolding)

Tokens:
- `--color-highway-green: #0B5D3B` — strong bands, hero sign panel
- `--color-asphalt: #2B2F33` — body text, dark surfaces
- `--color-road-yellow: #F2B705` — primary CTAs, lane lines only
- `--color-reflective-white: #F7F7F2` — page background
- `--color-concrete: #C9CCC6` — borders, muted UI
- Font: Overpass (via `next/font/google`), heavy weight headlines / regular body
- Body line length < 75ch, sentence case, no all-caps eyebrow labels

ASCII wireframe — Hero:
```
+----------------------------------------------------------+
| [LOGO]      Services  How it works  About  Contact  [Call]|
|                                              [Get a dispatcher]|
+----------------------------------------------------------+
|                                                            |
|   +------------------------------------------+            |
|   |  (rounded green highway sign, white inset |            |
|   |   border)                                 |            |
|   |   Loaded miles. Less paperwork.           |            |
|   |   Dispatch for owner-operators and small  |            |
|   |   fleets across the lower 48.             |            |
|   |   [Call dispatch]  [Get a dispatcher]     |            |
|   +------------------------------------------+            |
|                                                            |
|        (muted US map, lower 48, geoAlbersUsa,             |
|         6-8 yellow dashed lane lines animating in          |
|         via stroke-dashoffset on load)                     |
+----------------------------------------------------------+
```

ASCII wireframe — "What we handle" (two-column spec-sheet list):
```
+----------------------------------------------------------+
|  What we handle                                           |
|                                                            |
|  [icon] Load sourcing & rate negotiation                   |
|  [icon] Broker setup packets                                |
|  [icon] Rate cons, BOLs, invoicing/factoring submission     |
|                                                            |
|  [icon] Detention, lumper, TONU follow-up                   |
|  [icon] Lane & route planning around home time              |
|  [icon] Broker credit checks before booking                 |
+----------------------------------------------------------+
```

Alignment sentence: the palette and Overpass type root the site in real
interstate signage rather than generic navy/orange logistics-template
visuals, and the single animated hero lane-map keeps motion restrained and
purposeful instead of decorative.

---

## Phase 1 — Scaffold, tokens, fonts, layout shell, content file

**Objective:** `create-next-app` project boots, Tailwind configured with the
5 design tokens, Overpass loaded via `next/font/google`, `src/content/site.ts`
typed content object exists exactly per spec shape, header/footer layout
shell renders with nav + phone link + CTA + mobile sticky bar.

**Files:**
- Create: whole Next.js scaffold (`package.json`, `next.config.ts`,
  `tsconfig.json`, `tailwind.config.ts`, `src/app/layout.tsx`,
  `src/app/globals.css`)
- Create: `src/content/site.ts` (typed `site` object, matches spec's shape
  exactly incl. empty `stats`/`testimonials`/`brokers`/`proposalPdf`)
- Create: `src/components/layout/Header.tsx`, `Footer.tsx`,
  `MobileStickyBar.tsx`
- Create: `.env.example` (placeholder, filled out fully in Phase 4)
- Create: `.gitignore`, `README.md` (stub, filled out in Phase 5)

**Acceptance criteria:**
- `npm run lint` — no errors
- `npm run build` — no type or lint errors
- Header renders logo (from `site.name`), nav (Services / How it works /
  About / Contact), tap-to-call `tel:` link, primary "Get a dispatcher" CTA
- Mobile sticky bottom bar with Call + Get a dispatcher, hidden ≥ tablet width
- Tailwind theme exposes the 5 palette tokens as named colors
- No lorem ipsum anywhere

**Complexity:** Medium

---

## Phase 2 — Hero with animated US lane map

**Objective:** Build the signature hero: highway guide-sign panel (green,
rounded corners, white inset border, Overpass headline) over a static-SVG US
map (lower 48, `geoAlbersUsa`) with 6–8 yellow dashed freight lanes between
major freight cities, drawn once on load via `stroke-dashoffset`, respecting
`prefers-reduced-motion` (lanes render fully drawn, no animation).

**Files:**
- Create: `src/components/hero/Hero.tsx` (server component)
- Create: `src/components/hero/UsLaneMap.tsx` (server component, computes SVG
  paths from `us-atlas` + `topojson-client` + `d3-geo` at render time — zero
  client JS)
- Create: `src/app/globals.css` additions for the `@keyframes` dash animation
  gated behind `@media (prefers-reduced-motion: no-preference)`
- Modify: `src/app/page.tsx` to mount Hero

**Acceptance criteria:**
- `npm run lint` && `npm run build` pass
- Map renders as static server-rendered SVG (verify no client bundle growth
  from map libs — check build output)
- Lanes animate in once on load; with reduced-motion emulated, lanes appear
  fully drawn immediately with no animation
- Hero headline/support line/CTAs come from spec's tone examples (fresh copy,
  no invented stats)
- Visible keyboard focus on both hero CTAs

**Complexity:** Large (most technically novel phase — d3-geo/topojson server-side rendering)

---

## Phase 3 — Remaining home page sections

**Objective:** Build all remaining home sections in spec order 3–12 (Equipment,
What we handle, How it works, Pricing, Stats [conditional], Testimonials
[conditional], FAQ, Brokers [conditional], Get a dispatcher form placeholder,
Footer), and wire `/services`, `/about`, `/contact` to reuse these section
components rather than duplicating markup.

**Files:**
- Create: `src/components/sections/Equipment.tsx`, `WhatWeHandle.tsx`,
  `HowItWorks.tsx`, `Pricing.tsx`, `Stats.tsx`, `Testimonials.tsx`, `Faq.tsx`,
  `Brokers.tsx`
- Modify: `src/app/page.tsx` (assemble sections in spec order)
- Create: `src/app/services/page.tsx`, `src/app/about/page.tsx`
- Create: `src/app/contact/page.tsx` (form mounted in Phase 4, page shell now)

**Acceptance criteria:**
- `npm run lint` && `npm run build` pass
- Sections with empty content arrays (`stats`, `testimonials`, `brokers`)
  render nothing — verify by checking DOM output, not just conditional code
- FAQ uses native `<details>`/`<summary>`, starter questions from spec present
- "What we handle" renders as two-column spec-sheet list with small icons
  (`lucide-react`), not shadowed cards
- Pricing section shows "Download our proposal" link only when
  `site.proposalPdf` is set — verify both states (empty and set) manually
- Voice check: no hype words ("game-changer", "seamless", "top-notch")
  anywhere in copy

**Complexity:** Medium-Large (most files, but mechanical — no new tech)

---

## Phase 4 — Form and Server Action

**Objective:** "Get a dispatcher" lead form: zod-validated Server Action,
`useActionState` for pending/success states, Resend email send (console-log
fallback if `RESEND_API_KEY` missing), honeypot spam field, field-level
plain-language errors.

**Files:**
- Create: `src/components/form/LeadForm.tsx` (client component boundary,
  minimal — form + `useActionState`)
- Create: `src/lib/actions/submitLead.ts` (Server Action, zod schema, Resend
  call, honeypot check)
- Create: `src/lib/validation/leadSchema.ts` (zod schema, field-level error
  messages in plain language, e.g. "Enter a 6 or 7 digit MC number")
- Modify: `.env.example` — add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`
- Modify: `src/app/contact/page.tsx`, home page's "Get a dispatcher" section
  to mount `LeadForm`
- Add dependency: `resend`

**Acceptance criteria:**
- `npm run lint` && `npm run build` pass
- Submitting with missing/invalid fields shows field-level errors next to
  each input, plain language, no page reload
- Button reads "Get a dispatcher" -> "Sending…" -> confirmation message
  ("Thanks. Dispatch will call you within one business day.")
- Honeypot field: filling it silently discards submission (no error shown,
  no email sent) — verify by manually setting the hidden field via devtools
- With `RESEND_API_KEY` unset, submission logs payload to server console
  instead of throwing
- MC number validation matches "6 or 7 digit" rule from spec

**Complexity:** Medium

---

## Phase 5 — Other pages, SEO, polish

**Objective:** `/privacy` page, Metadata API per-page titles/descriptions,
`opengraph-image.tsx` (green guide-sign OG image), `sitemap.ts`, `robots.ts`,
JSON-LD business schema from `site.ts`, responsive check at 375/768/1280px,
keyboard nav check, Lighthouse pass, final README.

**Files:**
- Create: `src/app/privacy/page.tsx`
- Create: `src/app/opengraph-image.tsx`
- Create: `src/app/sitemap.ts`, `src/app/robots.ts`
- Modify: `src/app/layout.tsx` — JSON-LD script tag (business schema from
  `site.ts`: name, phone, email, service area "United States")
- Modify: every `page.tsx` — add per-page `metadata` export (title/description)
- Modify: `README.md` — full instructions (edit `site.ts`, set env vars,
  deploy to Vercel)
- Footer copyright year computed at build/render time (`new Date().getFullYear()`)

**Acceptance criteria:**
- `npm run lint` && `npm run build` pass with zero type/lint errors
- Layout holds at 375px, 768px, 1280px (check via browser tool if available;
  otherwise responsive Tailwind classes + manual reasoning, flagged in report)
- Keyboard navigation reaches every interactive element with visible focus
- Lighthouse (if runnable locally via `npx lighthouse` or Chrome devtools) —
  target 90+ performance/accessibility/SEO on home page; report actual scores
  or explain if not runnable in this environment
- README explains: editing `site.ts` to rebrand, required env vars
  (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`), Vercel deploy steps
- No lorem ipsum, no invented stats/testimonials, no third-party content
  copied anywhere in the final build

**Complexity:** Medium

---

## Phase Status

- [x] Phase 1 — Scaffold, tokens, fonts, layout shell, content file (done, verified: lint clean, build passes)
- [x] Phase 2 — Hero with animated US lane map (done, verified: lint/build clean, zero client JS for map confirmed via chunk grep, reduced-motion default correct)
- [x] Phase 3 — Remaining home page sections (done, verified: lint/build clean, all sections/anchors/conditionals confirmed against served HTML, no hype words/lorem ipsum)
- [x] Phase 4 — Form and Server Action (done, verified: lint/build clean, field errors render without reload, MC regex validated, honeypot silently discards with no log/email, RESEND_API_KEY-unset path logs payload to console, button idle->Sending…->confirmation confirmed via Playwright)
- [x] Phase 5 — Other pages, SEO, polish (done, verified: lint/build clean, sitemap.xml/robots.txt confirmed 200 with correct content, JSON-LD/OG/per-page metadata confirmed; found and fixed a real bug — privacy page title was double-appending site name due to layout's title template, now shows "Privacy policy | Redline Dispatch" correctly)
- [ ] Phase 6 — Truck imagery, card-based FAQ/Services, scroll/hover effects (client-requested revision, overrides original spec restraint rules)

## Notes / risks

- Server-side SVG generation from `d3-geo`/`topojson-client`/`us-atlas` at
  render time (not build time via static export) needs verification that no
  client JS bundle is produced for the map — will check build output size
  and "use client" boundaries explicitly in Phase 2 verification.
- Voice/content is hand-written fresh copy per spec's hard rule (no
  scraping/copying any existing dispatch site) — will read back the final
  copy for hype-word violations as an explicit verification step, not just
  trust Claude Code's generation.
- Never commits/pushes on the user's behalf — all phases leave changes
  uncommitted; user runs `git add`/`git commit` themselves.
