# Zenvyq Labs

**Build Better. Automate Smarter.**

The official website for Zenvyq Labs — a founder-led technology and digital solutions studio helping businesses strengthen their digital presence, build useful software, apply AI and automate repetitive workflows.

**Live website:** https://zenvyqlabs.com  
**Enquiries:** hello@zenvyqlabs.com  
**WhatsApp:** +91 92267 34874

---

## Technology stack

- **Framework:** Next.js 15.5.28 (App Router)
- **Language:** TypeScript
- **UI:** React 18
- **Styling:** Tailwind CSS 3
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Hanken Grotesk Variable and Fraunces Variable
- **Deployment:** Vercel

Node.js 18.17 or newer is required.

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Omlangade21/zenvyq-labs.git
cd zenvyq-labs
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build locally |

Before submitting changes, run:

```bash
npm run typecheck
npm run build
```

## Website structure

The site uses the Next.js App Router. Main routes include:

| Route | Description |
|---|---|
| `/` | Homepage and service overview |
| `/services` | Website development, AI solutions, business automation and custom software |
| `/projects` | Selected project work |
| `/projects/[slug]` | Individual project case studies |
| `/about` | Company and founder information |
| `/careers` | Internship information and role status |
| `/contact` | Project enquiry form |
| `/privacy` | Privacy information |

The repository also includes generated metadata routes such as the sitemap, robots file and site icon.

## Project organization

Most editable website content is kept separate from the page components:

| Path | Responsibility |
|---|---|
| `src/config/site.ts` | Business identity, tagline, contact details, links and site URL |
| `src/data/content.ts` | Services, industries, technology stack, process, projects and careers roles |
| `src/data/forms.ts` | Enquiry form field definitions |
| `src/components/` | Shared UI, navigation, forms, visuals and page components |
| `src/app/` | App Router pages, layouts, metadata and global styles |
| `src/lib/submit.ts` | Enquiry form submission logic |
| `tailwind.config.ts` | Tailwind theme extensions |
| `next.config.mjs` | Next.js configuration |

### Updating company information

Edit `src/config/site.ts` to update the business name, tagline, description, founder details, email, WhatsApp link, GitHub profile and portfolio URL.

The production URL defaults to `https://zenvyqlabs.com`. Set `NEXT_PUBLIC_SITE_URL` when building for a different environment so canonical metadata and generated site URLs use the correct origin.

### Updating services and other content

Edit `src/data/content.ts` to maintain:

- Services and their descriptions, deliverables and technology lists
- Industries and example business use cases
- Technology stack and delivery process
- Project case studies
- Careers roles and their current status

### Adding or editing a project

Add or update an item in the `projects` array in `src/data/content.ts`. Follow the existing `Project` TypeScript type and provide a unique `slug`, title, category, summary, overview, problem, approach, build details and technologies.

The current project visual kinds are `profiles`, `route` and `assistant`. The project list and individual case-study routes are generated from this data. Only add a public project URL when a real, working link exists.

Projects must be labelled honestly. The projects currently shown are founder/team projects, not paid client engagements. Do not add client names, testimonials, performance figures, logos or outcomes unless they are genuine and can be substantiated.

### Careers role status

Careers role definitions are maintained in the `roles` array in `src/data/content.ts`. The status type is `open` or `previous`. Change a role to `open` only when recruitment is genuinely active and the published terms have been confirmed.

## Environment variables

Copy the example file to create a local environment file:

```bash
cp .env.example .env.local
```

Available public environment variables:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site origin used for canonical URLs and generated metadata |
| `NEXT_PUBLIC_WHATSAPP_URL` | WhatsApp destination URL; the site configuration also contains the current business contact link |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional override for the enquiry form submission endpoint |

These variables are embedded into the client-side application where used. Do not put private API keys, passwords or server secrets in variables prefixed with `NEXT_PUBLIC_`.

## Enquiry forms

The homepage audit form and Contact page form share:

- `src/components/LeadForm.tsx` — form UI and submission state
- `src/data/forms.ts` — field definitions
- `src/lib/submit.ts` — submission implementation

The current implementation submits form data to Formspree. The endpoint can be overridden with `NEXT_PUBLIC_FORM_ENDPOINT`; the default endpoint is configured in `src/lib/submit.ts`.

The UI displays a sent confirmation only when the configured endpoint returns a successful response. A successful local build does not verify that the form provider is accepting submissions. Test the form after changing its endpoint or deployment configuration.

To integrate another provider, update `submitLead()` in `src/lib/submit.ts` and preserve the expected `SubmitResult` behaviour used by the form component.

## Design and branding

The V3 design uses a responsive, theme-aware visual system with navy, blue, cyan and violet accents, shared design tokens and motion effects.

- Global theme styles and CSS variables: `src/app/globals.css`
- Tailwind theme extensions: `tailwind.config.ts`
- Logo component: `src/components/Logo.tsx`
- Browser/site icon: `src/app/icon.svg`

Use the approved Zenvyq Labs logo assets. Do not recreate or approximate the logo with unrelated icons. Keep contrast, responsive layouts, keyboard access and reduced-motion preferences in mind when changing the interface.

## Deploying to Vercel

The production site is deployed on Vercel from the GitHub repository.

For a new Vercel project:

1. Import [Omlangade21/zenvyq-labs](https://github.com/Omlangade21/zenvyq-labs) into Vercel.
2. Select **Next.js** as the framework. The standard Next.js build settings are used by this project.
3. Set the required environment variables in **Project Settings → Environment Variables**.
4. Add and verify the production domain in **Project Settings → Domains**.
5. Deploy the production branch.

For the existing project, Git-connected deployments are used: pushes and pull requests can generate deployments according to the Vercel project's Git settings. Review the Vercel deployment and its build logs before promoting changes to production.

## Contribution and change checklist

1. Create a feature or documentation branch; avoid editing production directly.
2. Make the change and keep content accurate.
3. Run `npm run typecheck` and `npm run build`.
4. Review the Vercel preview on desktop and mobile.
5. Check navigation, project routes, forms and accessibility-sensitive interactions.
6. Open a pull request and merge only after review.

## Content and credibility principles

- Do not invent clients, testimonials, statistics, partnerships or customer logos.
- Clearly distinguish founder-built or team projects from paid client work.
- Do not describe an internship role as open unless recruitment is active.
- Keep service descriptions, project details, contact information and published claims accurate.
- Do not claim that an enquiry was delivered unless the form provider confirms a successful submission.

---

© Zenvyq Labs. All rights reserved.
