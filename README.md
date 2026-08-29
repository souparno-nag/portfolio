# Portfolio — Souparno Nag

Personal portfolio site. SvelteKit, prerendered to static HTML, deployed on Netlify.

Live: https://souparno-nag.netlify.app

## Stack

| Piece | Choice |
| --- | --- |
| Framework | SvelteKit 2 (Svelte 5 runes) |
| Output | `@sveltejs/adapter-static` — every route prerendered, no server |
| Styling | Tailwind CSS v4, themed with the Organic design tokens |
| Hosting | Netlify, auto-deploy from `main` |
| Contact form | Netlify Forms |

## Running it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static site into build/
npm run preview   # serve the built site
npm run check     # svelte-check + TypeScript
```

## Editing the content

All copy lives in `src/lib/data/` — nothing is hardcoded in markup:

- `site.ts` — name, tagline, intro, email, phone, CV path, social links, canonical URL
- `skills.ts` — the six skill groups and their tag colour tone
- `experience.ts` — roles, dates, bullet points
- `projects.ts` — the project cards; add `repo` to get a "View on GitHub" link
- `achievements.ts` — the sage panel near the bottom

Adding a project is one object in `projects.ts`. To swap the CV, replace
`static/Souparno-Nag-CV.pdf` (keep the filename, or update `site.cv`).

## The design system

The look comes from the exported **Organic** design system: a cream ground with a
terracotta accent and a sage second accent, Caprasimo headings over Figtree.

Rather than eyeballing utility classes, its tokens are declared in the Tailwind
theme in `src/app.css`, so the generated utilities resolve to the design's own
values:

- `--color-accent-100…900` (terracotta) and `--color-accent2-100…900` (sage — the
  design system calls this role `accent-2`), plus a neutral ramp
- `--spacing: 4.4px`, which reproduces the system's 1.10× density scale, so `p-3`
  is exactly its `--space-3` (13.2px)
- `--radius-sm/md/lg` at 8/16/28px, plus `--radius-tag` (12px) and
  `--radius-panel` (56px) for the two derived radii the design uses
- `--shadow-sm/md/lg`, tuned for the warm ground

Change a token there and the whole site follows.

## Deploying

Netlify builds from `netlify.toml`: `npm run build`, publish `build/`.

First-time setup: create a site on Netlify from this repo — the build command and
publish directory are picked up automatically. Pushes to `main` deploy; pull
requests get preview URLs.

### Contact form

The form in `src/lib/components/Contact.svelte` is a real one, handled by Netlify
Forms. It works because the page is prerendered, so Netlify's build step finds the
`data-netlify="true"` form in the deployed HTML and registers it. Submissions
POST natively and redirect to `/thanks/`.

Two things to do once, in the Netlify dashboard:

1. **Forms → enable form detection** (on by default for new sites).
2. **Forms → Form notifications** → add an email notification, otherwise
   submissions only pile up in the dashboard and nothing reaches your inbox.

The free tier covers 100 submissions/month. A `bot-field` honeypot is already
wired up for spam.

### Custom domain

Netlify → Domain management → add the domain, point DNS at Netlify, and it
provisions TLS. Then update `site.url` in `src/lib/data/site.ts` and the
`Sitemap:` line in `static/robots.txt` so the canonical URL, Open Graph tags and
sitemap point at the real domain.
