# Portfolio Site Redesign — Design Spec

**Date:** 2026-06-14  
**Status:** Approved  
**Audience:** Hiring managers and technical peers in AI/defense space

---

## 1. Goal

Redesign the site from a CADE-centric single-project showcase into a scalable portfolio that positions Vincent "TJ" Taijeron as an AI practitioner who builds real systems — not experiments. The site must grow cleanly as new projects are added without requiring structural changes.

---

## 2. Positioning

Every page communicates one thing:

> "I build real systems. Not experiments."

This is the hero statement on the homepage and the lens through which all content is framed.

---

## 3. Layout — Fixed Left Sidebar

All pages share a fixed left sidebar. Main content scrolls on the right.

### Sidebar contents (top to bottom)

- **Name:** `Vincent "TJ" Taijeron`
- **Role:** `AI Practitioner / Military Systems`
- **Nav links:** Home · Projects · Field Notes · About
- **Social (pinned to bottom):** LinkedIn only

Active nav item is highlighted (detected via current route in Astro). Sidebar width: 220px fixed. Background slightly darker than main content area.

---

## 4. Site Structure

### Routes kept

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/projects` | All projects index |
| `/projects/[slug]/` | Project case study (index) |
| `/projects/[slug]/decisions` | Project design decisions |
| `/field-notes` | Field notes index |
| `/field-notes/[slug]` | Individual field note |
| `/about` | Merged about page |

### Routes retired

The following top-level routes are removed. Their content is absorbed into `/about` or project sub-pages:

- `/decisions` — content moves to `/projects/[slug]/decisions`
- `/model-workbench` — absorbed into project pages
- `/ai-skills` — becomes a section in `/about`
- `/purpose` — becomes a section in `/about`
- `/story` — becomes a section in `/about`
- `/methods` — becomes a section in `/about`

---

## 5. Homepage

Two-column layout inside the main content area.

### Left column (primary)

1. **Hero section**
   - Eyebrow: `AI PRACTITIONER · MILITARY SYSTEMS`
   - Headline: `I build real systems. / Not experiments.` ("Not experiments." in accent blue)
   - Subtext: one sentence describing the work
   - CTAs: `See Projects →` (primary button) + `Read Field Notes` (ghost button)

2. **Capability callouts** — 3-column grid, 3 items (copy below is placeholder — confirm wording before implementation):
   - Governed AI Workflows
   - Military Exercise Design
   - Production AI Pipelines

3. **Featured project** — CADE card with title, meta (year · role), description, links to case study and decisions

4. **More projects** — placeholder cards for incoming projects + "See all projects →" link

### Right column (sticky)

- **Field Notes** — labeled section with 3-4 most recent posts (title + date), "All notes →" link at top

---

## 6. Project Pages

Each project lives in its own subfolder: `/projects/[slug]/`

### `/projects/[slug]/` (index)

Tab sub-nav within the page: **Overview** | Decisions  
*(New `ProjectTabs.astro` component needed — renders tab bar and highlights active tab based on current route)*

Content sections (existing structure preserved):
- Project Proof (Problem · Design Move · What I Built · Supporting Tools · Proof It Worked · What This Shows)
- Deeper detail, constraints, approach, architecture, key decisions, tech stack, impact, learnings

### `/projects/[slug]/decisions`

Focused page for design decisions only. Same tab sub-nav with "Decisions" active. Pulls from the existing `keyDecisions` field in project content.

---

## 7. About Page

Single merged page absorbing: Purpose · Story · About · AI Skills · Methods

Sections:
1. Who I am
2. Why this work (purpose + story)
3. How I approach AI (methods)
4. What I can do (AI skills)
5. Contact / LinkedIn

---

## 8. BaseLayout Changes

The current `BaseLayout.astro` top navbar is replaced with the fixed sidebar component. All pages use the updated `BaseLayout`.

A new `Sidebar.astro` component encapsulates the sidebar markup and active-link logic.

---

## 9. Content Changes

- Existing project `.md` files are unchanged
- Existing field note `.md` files are unchanged
- `/decisions` content collection entries are not deleted — they are linked from project decisions pages
- `pages.config.ts` updated to reflect new route structure
- Navigation component replaced by sidebar

---

## 10. Out of Scope

- Mobile/responsive layout (future iteration)
- Dark/light mode toggle changes
- New project content
- Animation or transition effects
- CMS integration
