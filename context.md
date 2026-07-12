# NextGen Wargame Context

Quick orientation for future work. Read this file, `content.md`, and `log/2026-07-11-nextgen-redesign-status.qmd` before changing the site.

## Product Boundary

NextGen Wargame is the canonical public home for TJ Taijeron's military decision-training systems and professional body of work.

- `nextgenwargame.com` = domain, systems, evidence, decision records, Field Notes, technical AI Workbench.
- `taijeronv.info` = person, complete biography, career arc, general AI conversation, cross-domain experiments.

Do not duplicate complete content between the sites. Summarize and cross-link.

## Core Promise

> Decision training built for teams under pressure.

The homepage and primary navigation lead with the training problem, product, method, and evidence. TJ remains visible as founder, designer, and author but is not the homepage's primary subject.

## Audience

- Military trainers and exercise planners.
- Wargame and simulation professionals.
- Defense organizations and military AI collaborators.
- Employers evaluating domain-specific systems work.

## Operating Model

AI is a production engine, not design authority.

1. Govern operational source truth.
2. Build bounded production workflows.
3. Design products for controller use under pressure.
4. Validate through live execution.
5. Revise from evidence.

## System Stack

| Layer | System | Role |
|---|---|---|
| Source truth | Orders Production | Produces and validates OPORD-quality source material |
| Decision engine | CADE | Turns context into choices, consequences, and learning |
| Runtime delivery | Controller Package Generator | Produces coherent controller-facing execution packages |

CADE is the capstone system. Orders Production and Controller Package Generator support its production and execution chain.

## Editorial Ownership

- Field Notes: CADE origin, development, execution evidence, mistakes, revisions, and lessons.
- AI Workbench: models, workflow design, verification, maintenance, translation, and tool selection.
- About: NextGen purpose and only the founder credibility relevant to this domain.
- Full personal biography: `taijeronv.info`.

## Current Routes

```text
/
/projects/
/projects/[slug]/
/projects/[slug]/decisions/
/field-notes/
/field-notes/[slug]/
/model-workbench/
/model-workbench/[slug]/
/about/
```

## Source Structure

```text
src/
  components/       # Active shared UI, SEO, schema, navigation, related links
  content/
    projects/       # Three system entries
    decisions/      # Six decision records
    field-notes/    # Two CADE narrative entries
    workbench-notes/# Eight AI-specific entries
    research/       # Four supporting research entries
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    about.astro
    projects/
    field-notes/
    model-workbench/
    404.astro
  styles/
```

## Key Files

| File | Purpose |
|---|---|
| `src/config.ts` | Site metadata, author, social links, navigation |
| `src/content.config.ts` | Content collection schemas |
| `src/pages.config.ts` | Static page metadata |
| `src/layouts/BaseLayout.astro` | Shared document shell and landmarks |
| `src/components/Header.astro` | Responsive primary navigation |
| `src/components/SEO.astro` | Canonical, Open Graph, and Twitter metadata |
| `src/components/StructuredData.astro` | JSON-LD schema output |
| `content.md` | Editorial policy and evidence rules |
| `docs/design/2026-07-11-taijeronv-nextgen-site-separation-summary.md` | Approved site boundary |
| `docs/design/2026-07-11-nextgen-nano-banana-image-prompts.md` | Deferred image-generation pack |
| `log/2026-07-11-nextgen-redesign-status.qmd` | Restart-safe redesign status |

## Public-Evidence Rules

- Use sanitized real artifacts where possible.
- Generated images serve as conceptual covers, never execution evidence.
- Do not publish sensitive operational detail, real unit data, coordinates, or controlled documents.
- Preserve measurable claims already supported by project content: three live CADE executions, about 19 participants per session, one week to first executable version, and four of four first-run validation criteria.
- Keep boundaries explicit: CADE does not replace high-fidelity simulation, certify doctrinal competency, or automate design judgment.

## Visual Direction

- Arcbes-derived editorial layout.
- Product and case-study led.
- Operational, restrained, evidence-focused.
- Warm paper, charcoal green, olive, stone, restrained lime accent.
- Avoid robots, holograms, neon command centers, weapons glamour, and generic defense-marketing spectacle.

## Technology

| Layer | Tool |
|---|---|
| Framework | Astro 6 static site generation |
| Content | Astro Content Collections |
| Language | TypeScript |
| Styling | Tailwind CSS Vite plugin plus Astro/global CSS |
| Deployment | Netlify |
| Node | `>=22.12.0` |

## Commands

```bash
npm run dev -- --host 127.0.0.1
npm run check
npm run build
npm run preview
```

## Current State

As of 2026-07-12:

- Homepage, Systems index, system case studies, and decision records are visually approved.
- About, Field Notes, and AI Workbench are implemented.
- Production build generates 22 routes.
- Arcbes attribution and Urbanist fonts are present.
- Invalid nested main landmarks and confirmed unused legacy components/layouts were removed.
- Image integration remains deferred until approved images or sanitized artifacts exist.
- Final responsive browser approval, link/SEO audit, and selective commit remain.

## Safety

- Preserve unrelated dirty-worktree files.
- Treat `backups/` and historical plans as reference-only.
- Do not use destructive reset or broad cleanup.
- Stage only redesign files when committing.
