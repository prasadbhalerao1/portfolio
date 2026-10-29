# Prasad Bhalerao · Portfolio

Personal site: [prasadbhalerao.vercel.app](https://prasadbhalerao.vercel.app)

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion. Light (cream) and dark themes.

## Run

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # builds and regenerates public/sitemap.xml
```

## Editing content

Everything on the site comes from `src/data/`:

| File | What |
| ---- | ---- |
| `profile.ts` | Intro, CGPA, stack, education, roles, socials |
| `projects.ts` | Selected work and "also built" list |
| `achievements.ts` | Hackathons, organised events, courses and certificates |

Achievements: add an object to `entries` with a unique `slug`. Optional fields:

- `cert`: slug of an image in `public/certs/` (full size) and `public/certs/thumb/` (≈640px)
- `original`: link to the original PDF/PNG in `public/certs/originals/`
- `photos`: paths in `public/events/`
- `result`: one or two words (`Winner`, `Finalist`, `Organiser`)

In the grid view, tile size comes from the content: winners and finalists with photos get a large tile, entries with photos get tall or wide tiles, certificate-only entries get small ones.

## Structure

```text
src/
├── components/
│   ├── home/           Hero, Work, Stack, LogTeaser, About, Contact
│   └── achievements/   LogView (list), Bento (grid), EntryBody, EntryDialog, Lightbox
├── data/               Site content
└── pages/              Index, Achievements, NotFound
```

SEO: meta and JSON-LD (`Person`, `WebSite`) in `index.html`; the achievements page adds `Event` and `EducationalOccupationalCredential` data; the sitemap includes every certificate image.
