# Portfolio — Souparno Nag

Personal portfolio site. SvelteKit, prerendered to static HTML, deployed on Netlify.

Live: https://souparno-nag.netlify.app

## Stack

| Piece | Choice |
| --- | --- |
| Framework | SvelteKit 2 (Svelte 5 runes) |
| Output | `@sveltejs/adapter-static` — every route prerendered, no server |
| Styling | Plain CSS: shared tokens and pieces in `src/app.css`, the rest scoped per component |
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

- `site.ts` — name, tagline, intro, availability stamp, subjects, email, phone, CV path,
  social links, canonical URL
- `skills.ts` — the six skill groups; `tone` picks the card colour
- `experience.ts` — employer, position, dates, bullet points
- `projects.ts` — the project cards; add `repo` to get a "View on GitHub" link
- `achievements.ts` — the publication, rank and degree cards

Adding a project is one object in `projects.ts`. Give it a `callNumber`: the Dewey
Decimal class for its subject (004.36 is distributed processing, 332.7 is credit,
and so on), then three letters from the title, as in `004.36 DIS`. To swap the CV, replace `static/Souparno-Nag-CV.pdf` (keep the
filename, or update `site.cv`).

## The design

The site is a library card index. The page is a green desk; every piece of
content is a catalogue card in coloured card stock, grouped under manila tab
dividers and sitting slightly askew. Cards are typed in Courier Prime, with Zilla
Slab for the printed parts.

It follows catalogue conventions where they fit: a call number on each project,
the name filed surname first, technologies listed as numbered subject tracings,
and the contact form as a request slip.

`src/app.css` holds the tokens (desk, ink, card stock, fonts) and the pieces every
section shares: `.btn`, `.card`, the ruled card body `.ru`, `.tabrow` and `.grid`.
`Card.svelte` and `Section.svelte` wrap those so a section is mostly content.
Change a token there and the whole site follows.

Card text is set on a fixed line height (`--lh`) so it sits on the ruled lines. If
you change the card font size, change `--lh` with it.

## The terminal

The Terminal button in the nav, or the backtick key, opens a small terminal;
Escape closes it. It is an extra way to read the site, not a replacement for it.

Its commands live in `src/lib/components/Terminal.svelte` and read from the same
files in `src/lib/data/`, so they never go out of date. To add a command, add a
function to `commands` and a line to `help`.

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
