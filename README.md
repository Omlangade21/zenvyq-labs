# Zenvyq Labs website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide icons.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
npm run typecheck  # optional TypeScript check
```
Requires Node 18.17 or newer. Fonts (Inter, Space Grotesk) are fetched by `next/font` at build time, so the first build needs internet access.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repo (framework: Next.js, defaults are fine).
3. Add environment variables (see below) under **Settings → Environment Variables**, then redeploy.
4. Add your domain under **Settings → Domains**.

## Configuration (all in one place)
Edit `src/config/site.ts`, or set environment variables (copy `.env.example` to `.env.local`):
| What | Where |
|---|---|
| Business name, tagline, founder, email, portfolio, GitHub | `src/config/site.ts` |
| Production URL (canonical, sitemap, Open Graph) | `NEXT_PUBLIC_SITE_URL` |
| WhatsApp button | `NEXT_PUBLIC_WHATSAPP_URL` e.g. `https://wa.me/91XXXXXXXXXX`. Empty hides the button. |
| Enquiry forms backend | `NEXT_PUBLIC_FORM_ENDPOINT` |

## Enquiry forms
Both forms (home "Free Audit" and Contact) share `src/components/LeadForm.tsx` and `src/lib/submit.ts`.
- With `NEXT_PUBLIC_FORM_ENDPOINT` set (for example a Formspree URL), submissions are POSTed there as JSON and the success state says they were sent.
- With it empty, the form opens the visitor's email app with the details pre-filled, and the success state says so. Nothing is claimed as sent.
- To use Resend, Supabase or another provider, change only `submitLead()` in `src/lib/submit.ts`; the UI stays the same. Field lists live in `src/data/forms.ts`.

## Editing content
- Services, industries, process steps and projects: `src/data/content.ts`.
- **Add a project:** add an object to `projects` (set `visual` to `graph`, `wire`, `route` or `wave`). It appears on Home and Work automatically. Add `url` only when a real link exists.
- Colours: `accent` in `tailwind.config.ts` (currently electric lime `#c6ff3d`).
- Logo mark: `src/components/Logo.tsx` (`ZMark`) and `src/app/icon.svg` (favicon).

## Content rules
No invented clients, testimonials, statistics or logos. The projects are labelled as personal projects by the founder.

## Experience layer (v2)
Background and cursor glow: `components/Backdrop.tsx`. Hero: `Hero.tsx` + `HeroSystem.tsx`. Scroll story: `ProblemStory.tsx`, `BuildProcess.tsx`. Interactive sections: `ServicesExplorer.tsx`, `AIWorkflow.tsx`, `IndustriesExplorer.tsx`. Their copy and diagram data live in `src/data/story.ts`. With reduced motion enabled, the pinned scroll sections render as plain static content.
