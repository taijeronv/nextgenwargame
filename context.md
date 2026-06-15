# context.md — NextGen Wargame

Quick-reference brief for AI sessions. Read this first. For editorial/content decisions see `content.md`. For site setup see `README.md`.

---

## Owner

**Vincent "TJ" Taijeron** (`taijeronv`) — AI Operator / AI Integrator, military training and exercise design background. Contact: vincent.taijeron@gmail.com, LinkedIn: taijeronv.

---

## What This Is

Astro portfolio site at `https://www.nextgenwargame.com`. Public showcase of AI-assisted training design work. Deployed on Netlify via `netlify.toml`.

Primary claim: disciplined AI operations — not autonomous AI — turn messy training problems into credible, repeatable products.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Astro 6.x (SSG) |
| Styling | Tailwind CSS v4 (Vite plugin) |
| Content | Astro Content Collections (MDX optional) |
| Deploy | Netlify |
| Node | >=22.12.0 (see `.nvmrc`) |
| Lang | TypeScript |

Key config files: `astro.config.mjs`, `src/config.ts`, `src/content.config.ts`, `src/pages.config.ts`.

---

## Site Structure

```
src/
  components/       # Astro components (BaseCard, ProjectCard, SEO, etc.)
  content/
    projects/       # CADE, orders-production, controller-package-generator
    decisions/      # AI governance decision records (6 entries)
    field-notes/    # Personal narrative pieces (2 entries)
    research/       # In-progress research (4 entries)
    workbench-notes/# Short AI field notes (8 entries)
  layouts/          # BaseLayout, PageLayout, ArticleLayout, CaseStudyLayout
  pages/            # index, about, projects/[slug], field-notes/[slug], 404
  styles/           # global.css, typography.css, utilities.css
  config.ts         # siteConfig (title, author, nav, social)
```

Public routes: `/` · `/projects` · `/projects/[slug]` · `/field-notes` · `/field-notes/[slug]` · `/about`

---

## Projects (Content Entries)

| Slug | Title | Status |
|---|---|---|
| `cade` | CADE — Combined Arms Decision Exercise | Capstone, active |
| `orders-production` | Orders Production | Ongoing pipeline |
| `controller-package-generator` | Controller Package Generator | Core pipeline |

All projects use a **Project Proof Format**: Problem → Design Move → System Built → Supporting Tools → Proof → Transferable Skill. Fields map directly to frontmatter keys.

---

## Content Collections Schema

Defined in `src/content.config.ts`. Collections: `projects`, `decisions`, `fieldNotes`, `workbenchNotes`, `research`. Schema JSON in `.astro/collections/`.

---

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview dist/
npm run check     # Astro + TS type check
```

---

## Key Constraints

- AI is a **production engine, not design authority**. All site copy reflects this.
- OPORD-quality source truth governs generated exercise artifacts.
- No sensitive operational detail in public content — use generalized descriptions.
- Controllers and trainers are primary end-users of CADE artifacts; site visitors are secondary.
- `content.md` (root) is the editorial map — do not overwrite, it is maintained separately.
- `backups/` holds the pre-migration Hugo snapshot — read-only, do not touch.

---

## Current State (as of 2026-06-14)

- Site is live and building cleanly.
- Three projects published; decision records and field notes populated.
- CADE has run three times (~19 participants/session); evidence claims are current.
- Recent git work: home page badge labels fixed, About CTA added, project cards unified.
- Untracked: `.DS_Store`, `.superpowers/`, `docs/linkedin-campaign/`, `log/`.

---

## Files to Know

| File | Purpose |
|---|---|
| `src/config.ts` | Site-wide metadata, nav, author info |
| `src/content.config.ts` | Collection schemas |
| `src/pages.config.ts` | Page-level config/metadata |
| `content.md` | Editorial map — content narrative and positioning rules |
| `README.md` | Setup, commands, migration note |
| `netlify.toml` | Deploy config |
