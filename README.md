# NextGen Wargame

## Purpose
`nextgenwargame` is an Astro site for AI-assisted gaming and training design work. The public-facing position is:

- `CADE` is the capstone project.
- Supporting projects show the workflow stack around it.
- Decision records explain the governance model behind the outputs.
- Methods explain how AI is being used as a production engine without handing over design authority.

## Site Structure

Key folders:

```text
/
├── docs/content-curation/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── decisions/
│   │   ├── projects/
│   │   └── research/
│   ├── layouts/
│   └── pages/
│       ├── decisions/
│       ├── projects/
│       ├── methods.astro
│       └── index.astro
├── package.json
└── netlify.toml
```

Important routes:

- `/` — homepage framed as the NextGen Wargame showcase.
- `/projects/cade` — CADE capstone case study.
- `/projects` — project portfolio and supporting workflow stack.
- `/decisions` — AI governance and product decision archive.
- `/methods` — operating method behind the site’s governed AI workflows.
- `/ai-skills` — legacy route redirected to `/methods`.

## Content Model

- `src/content/projects/` stores project and case-study entries.
- `src/content/decisions/` stores decision records tied to projects and workflow choices.
- `src/content/research/` stores in-progress research/supporting topics.
- `docs/content-curation/` stores planning and curation material that supports the CADE showcase narrative.

## Commands

Run from the repo root:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run check` | Run Astro content and TypeScript checks |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Migration Note

This repo was migrated from an older Hugo-based `nextgenwargame` site into the current Astro implementation. The prior local site snapshot was preserved under `backups/` before replacement.
