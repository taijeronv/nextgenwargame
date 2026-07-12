# NextGen Wargame

Astro site for military decision-training systems, governed exercise-production workflows, and execution evidence.

## Site Boundary

- `nextgenwargame.com` owns CADE, Orders Production, Controller Package Generator, decision records, military-system Field Notes, and the technical AI Workbench.
- `taijeronv.info` owns TJ's complete biography, career arc, general AI help, cross-domain experiments, and personal contact front door.

## Primary Routes

| Route | Purpose |
|---|---|
| `/` | Product-led homepage and execution evidence |
| `/projects/` | Systems index and operating-stack relationship |
| `/projects/[slug]/` | System case study |
| `/projects/[slug]/decisions/` | System decision record |
| `/field-notes/` | CADE narrative, execution learning, and iteration |
| `/field-notes/[slug]/` | Individual CADE Field Note |
| `/model-workbench/` | AI methods, models, tooling, verification, and maintenance |
| `/model-workbench/[slug]/` | Individual AI Workbench note |
| `/about/` | NextGen purpose and relevant founder credibility |

## Content Collections

Defined in `src/content.config.ts`:

- `src/content/projects/` — CADE, Orders Production, Controller Package Generator.
- `src/content/decisions/` — decision records tied to system design and governance.
- `src/content/field-notes/` — CADE narrative and execution-learning articles.
- `src/content/workbench-notes/` — AI-specific technical notes.
- `src/content/research/` — supporting research entries not directly routed.

## Design Foundation

The current visual system adapts the licensed Arcbes 1.0.1 Astro template while preserving this repository's content model and routes. Arcbes attribution is recorded in `THIRD_PARTY_NOTICES.md`.

Generated images are conceptual covers only. Real sanitized artifacts should be used for evidence wherever possible. Image-generation prompts live in `docs/design/2026-07-11-nextgen-nano-banana-image-prompts.md`.

## Technology

- Astro 6 static site generation.
- Astro Content Collections.
- TypeScript.
- Tailwind CSS Vite plugin plus component-scoped and global CSS.
- Netlify deployment configuration.
- Node `>=22.12.0`.

## Commands

Run from the repository root:

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev -- --host 127.0.0.1` | Start local development server |
| `npm run check` | Run Astro and TypeScript checks |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build |

## Verification Baseline

Current non-image redesign baseline:

- 22 static pages.
- `npm run check` passes with zero diagnostics.
- `npm run build` passes.
- Homepage, Systems, system case studies, and decision records visually approved.
- About, Field Notes, and AI Workbench implemented; final responsive approval remains.

See `log/2026-07-11-nextgen-redesign-status.qmd` for the restart-safe implementation status.

## Repository Safety

- `backups/` contains the pre-migration Hugo snapshot; treat it as read-only.
- The worktree may contain unrelated user documents and exports. Stage redesign files explicitly; do not use broad cleanup or destructive reset commands.

## Migration Note

This repository was migrated from an older Hugo site into the current Astro implementation. The prior local snapshot remains under `backups/`.
