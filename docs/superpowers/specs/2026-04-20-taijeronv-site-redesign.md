# Site Redesign Spec: taijeronv.info
**Date:** 2026-04-20  
**Author:** Vincent "TJ" Taijeron  
**Status:** Approved

---

## Goal

Rebuild taijeronv.info as a single-page landing page targeting AI-friendly employers who offer remote work. The site must clearly communicate TJ's identity as an AI-Integrator with real, deployable tools — not a skills list, but a portfolio of proof.

---

## Phase 1: Content

### Positioning Statement
TJ is a Field Artillery veteran and AI-Integrator who builds AI-assisted planning tools for multinational military training. He is available for remote roles at companies that value AI-native work.

### Target Audience
AI-forward companies (defense-adjacent or otherwise) that offer remote work and competitive compensation. Tone: professional but direct — not military formal, not startup casual.

### Page Sections

#### 1. Hero
- **Name:** Vincent "TJ" Taijeron
- **Title:** AI-Integrator
- **Tagline:** "I build AI systems that make military planning faster, clearer, and executable under pressure."
- **CTAs:** `View My Work` (anchor to Projects) | `Get In Touch` (anchor to Contact)

#### 2. About
3–4 sentences drawn from existing bio, updated:
- Field Artillery veteran, 38+ years of service
- Relocated to Ukraine in 2013; has lived and worked there since
- Currently serving as AI-Integrator at JMTG-U, building AI-assisted exercise planning tools for multinational military training audiences
- Available for remote roles beginning Fall 2026

#### 3. AI Skills
Three-column layout:

| Column | Tool | What TJ Uses It For |
|--------|------|---------------------|
| 1 | Claude Code / Cowork | Auditing, mission-critical planning, content writing, deck generation |
| 2 | Gemini / NotebookLM | Document conversion, deep research, synthesis, initial project planning, build specs |
| 3 | Python + Streamlit + Claude API | GUI tool development, automation pipelines, structured document generation |

#### 4. Projects
Three cards. Each card: title, one-line description, 2–3 bullet points of what was built/done/delivered.

**CADE — Combined Arms Decision Exercise**
- Designed a consequence-based decision exercise for Ukrainian staff officer training under real constraints: short window, language barriers, uneven doctrinal baseline
- Built the full AI pipeline (scenario → OPORD → runbook → controller package) using Claude, Gemini, and NotebookLM
- Validated on 29–30 January 2026; exercise earned institutional approval for repeat execution

**Deck Builder**
- AI-powered briefing generator for military planning products
- Input: Markdown slide script. Output: mission-ready PPTX and HTML briefings
- Includes AI skills for scripting content and brand-standard templates for JMTG-U

**Orders Production**
- Streamlit GUI backed by the Claude API for drafting OPORDs, scenario narratives, and decision support matrices
- Includes AI skills (OPORD Writer, Narrative Writer, DBD Matrix) and linting/validation scripts
- Built against US Army doctrine (FM 5-0, FM 6-0) and NATO standards (AJP-5, NATO-COPD)

#### 5. Contact
- Email: vincent.taijeron@gmail.com
- Brief note: open to remote roles globally; available Fall 2026

---

## Phase 2: Tech Stack Decision

**Framework:** Astro (static output, no client-side JS framework)  
**Styling:** Tailwind CSS  
**Hosting:** Netlify (existing account, same deploy pipeline)  
**Content model:** Astro content collections — projects defined as individual `.md` files with frontmatter; skills defined in a YAML data file

**Rationale for Astro over alternatives:**
- Hugo: overkill for a single landing page; Academic theme is abandoned
- Plain HTML/CSS: no templating, becomes unmaintainable for 5 sections
- Astro: purpose-built for content-heavy static sites, zero framework lock-in, Netlify-native

---

## Phase 3: Build & Deploy

### Project Structure
```
src/
  components/
    Hero.astro
    About.astro
    Skills.astro
    Projects.astro
    Contact.astro
  content/
    projects/
      cade.md
      deck-builder.md
      orders-production.md
  data/
    skills.yaml
  pages/
    index.astro
  styles/
    global.css
public/
  avatar.jpg          # reuse existing photo from current site
netlify.toml
astro.config.mjs
```

### Netlify Config Changes
Two changes to `netlify.toml`:
- `command`: `astro build`
- `publish`: `dist`

### Build Sequence
1. Scaffold Astro project (`npm create astro@latest`)
2. Install Tailwind CSS via Astro integration
3. Configure Netlify
4. Build Hero and About components with real copy
5. Build Skills component from `skills.yaml`
6. Build Projects component from content collection
7. Build Contact component
8. Mobile/responsive review
9. SEO: meta title, description, OG tags
10. Deploy to Netlify and verify live

### Definition of Done
- Site renders correctly on mobile and desktop
- All five sections present with real copy (no placeholder text)
- Contact email is live and correct
- Netlify deploy is green
- Page load time under 2 seconds

---

## Out of Scope
- Blog / post section (existing content not migrated)
- CV / publications / talks sections (existing content not migrated)
- LinkedIn (needs separate update, excluded from site)
- Dark mode toggle
- CMS integration
