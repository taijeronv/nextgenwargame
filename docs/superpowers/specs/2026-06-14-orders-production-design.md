# Orders Production — Portfolio Page Design

**Date:** 2026-06-14
**Status:** Pending user review
**Spec version:** v1.0

---

## 1. Goal

Add Orders Production as a portfolio project on the website. Surface the full pipeline story — opord-writer → red-team → order-release — in a way that shows system design depth, not just tooling. The primary audience is potential employers who need to understand that AI-assisted orders production requires a governed workflow, not prompts.

**Core framing:** 90% first-draft product for exercise OPORDs at brigade and below. Goal is not a perfect order — it is a first draft credible enough that the unit spends their prep time refining decisions, not building structure from scratch. Techniques are transferable to real-world orders.

---

## 2. Content Changes

### 2a. Repurpose `orders-production.md`
Replace current CPG content entirely with Orders Production pipeline content (see §4).

### 2b. Create `controller-package-generator.md`
Move current `orders-production.md` content (Controller Package Generator) to a new file. Update:
- `title` → "Controller Package Generator"
- `order` → 3 (Orders Production takes order: 2; CPG shifts to 3)

### 2c. Delete `deck-builder.md`
CADE Production Support Tools is already represented in `cade.md` supportingTools list. The standalone file adds no new portfolio value.

---

## 3. Schema Changes — `content.config.ts`

Add one optional field to the `projects` collection:

```ts
pipelineSkills: z.array(z.object({
  name: z.string(),              // skill name (monospace display)
  stage: z.string(),             // e.g. "01 · Authoring"
  crossProject: z.boolean().optional(), // shows "cross-project skill" badge
  whatItDoes: z.string(),
  insightLabel: z.string(),      // e.g. "Guardrail: OPORD writing guide"
  insightText: z.string(),       // the highlight box content
  modes: z.array(z.string()),    // mode/capability chips
})).optional()
```

No other schema changes. Existing projects are unaffected (field is optional).

---

## 4. Orders Production Content (`orders-production.md`)

### Frontmatter fields

```yaml
title: "Orders Production"
role: "AI Systems Designer"
year: 2026
duration: "Active pipeline"
status: "ongoing"
order: 2
featured: false
```

### Key narrative fields

**outcomeSummary:** A three-stage AI pipeline that produces exercise-ready OPORDs for brigade and below — governed by doctrine, adversarially reviewed, and gated before unit release. The goal is not a perfect order. It is a 90% first draft that saves units significant prep time.

**problem:** AI generates plausible OPORD text. Without doctrine-aware constraints it fails structure, loses task coherence across paragraphs, and has no mechanism to catch failures before the order reaches a unit. Most AI-assisted OPORD efforts stop at the prompt. This one did not.

**designMove:** Treat orders production as a governed workflow, not a conversation. Each stage — authoring, adversarial review, release gate — runs inside constraints the model cannot self-impose: an OPORD writing guide, quality standards, skeptic persona definitions, lint rules. AI drafts inside those constraints; human review is the gate.

**systemBuilt:** Three sequenced skills (opord-writer, red-team, order-release) supported by Python scripts (lint, DOCX export, normalize), a shared doctrine reference library (FM 5-0, FM 6-0, NATO-COPD, AJP-5), and a Streamlit GUI with dedicated pages per skill.

**transferableSkill:** This shows AI-assisted staff work approached as a systems design problem — not just what to ask the model, but what constraints govern its output, what checks catch failures, and what pipeline moves draft material to execution-ready products. The techniques apply equally to real-world OPORDs.

### pipelineSkills

```yaml
pipelineSkills:
  - name: "opord-writer"
    stage: "01 · Authoring"
    crossProject: false
    whatItDoes: "Drafts, refactors, expands, and red-teams OPORDs from BN to JTF/Corps. Five modes covering the full authoring cycle. Output: planner-source Markdown exported to DOCX via script."
    insightLabel: "Guardrail: OPORD writing guide"
    insightText: "A dedicated writing guide — not a system prompt — governs structure, task-to-purpose standards, coordination measure rules, and echelon-specific quality checks. The model writes inside this constraint. It cannot substitute generic military language for doctrine-specific structure."
    modes: ["Draft", "Refactor", "Expand", "Align Annex", "Skeptic Sweep"]

  - name: "red-team"
    stage: "02 · Adversarial Review"
    crossProject: true
    whatItDoes: "Runs structured adversarial assessment using domain-specific skeptic personas — CDR, S3, S2 for orders. Every finding is severity-tagged and paragraph-referenced before the order goes further."
    insightLabel: "Why it is a separate skill"
    insightText: "The skeptic framework is not OPORD-specific. The same approach applies anywhere AI produces a product that needs adversarial pressure — plans, briefs, exercise materials, scenario documents. Separating it from opord-writer makes it reusable across projects."
    modes: ["CDR Perspective", "S3 Perspective", "S2 Perspective", "Severity Tagging"]

  - name: "order-release"
    stage: "03 · Release Gate"
    crossProject: false
    whatItDoes: "A sequential, largely automated pre-release workflow. Seven passes in fixed order: lint, planner skeptics, staff skeptics, specialized skeptics, skeptic synthesis, QC Gate against echelon quality standard, annex alignment. Produces a consolidated report and prioritized fix plan. Assessment only — no edits to the source order."
    insightLabel: "Key design decision"
    insightText: "The unit receives an order that has already cleared lint, adversarial review, and an MDMP-sufficiency check against the echelon quality standard. Their time goes into refining the 10%, not rebuilding the 90%."
    modes: ["Lint", "Planner Skeptics", "Staff Skeptics", "QC Gate", "Fix Plan"]
```

### Supporting fields

```yaml
techStack:
  - "Claude"
  - "Python (lint, DOCX export, normalize scripts)"
  - "Streamlit"
  - "Markdown"
  - "FM 5-0 / FM 6-0 / NATO-COPD / AJP-5"

constraints:
  - "Orders must be FM 5-0 / FM 6-0 compliant at the declared echelon."
  - "AI generation is constrained by doctrine files — output that contradicts the writing guide is rejected and regenerated."
  - "order-release is assessment only — no automated edits to the source order."
  - "Current scope: exercise OPORDs at brigade and below. Techniques apply to real-world orders."

keyDecisions:
  - decision: "Build a pipeline, not a prompt"
    reasoning: "Prompts produce plausible text. A governed pipeline — with writing guide guardrails, adversarial review, and a formal quality gate — produces a product the unit can actually use. The constraints are what make the output credible."
    alternatives:
      - "Prompt engineering with increasingly detailed system prompts"
      - "Single-pass generation with manual human review"

  - decision: "Separate red-team as a cross-project skill"
    reasoning: "Skeptic-based adversarial review is not specific to orders. Keeping it separate makes it reusable across any AI-produced artifact — plans, briefs, exercise materials. The orders pipeline calls the red-team skill; the red-team skill does not depend on orders."
    alternatives:
      - "Embed skeptic sweep directly in opord-writer"
      - "Run adversarial review only within order-release"

  - decision: "Target 90% first-draft quality, not 100%"
    reasoning: "A 100% ready order is not an achievable or honest target for AI generation at the current state of the art. A 90% first draft that has been validated and gated saves the unit the most time — they spend prep time on decisions, not structure."
    alternatives:
      - "Present the output as complete and require unit to identify gaps"
      - "Require full human rewrite of AI output before delivery"

impact:
  qualitative: "Units receive a first-draft OPORD that has passed lint, adversarial review from multiple staff perspectives, and a formal quality gate — before it reaches them. Prep time shifts from building structure to refining decisions."

learnings:
  - "Doctrine files are constraints, not references. The writing guide works because the model is required to write inside it, not consult it."
  - "A separate quality gate before release is not redundant with in-process review — it catches different failure modes and provides a formal record of what was checked."
  - "Red-team personas must be domain-specific to be useful. Generic adversarial prompts produce generic findings. CDR, S3, and S2 each see the order through a different operational lens."
```

---

## 5. Project Detail Page Changes — `[slug]/index.astro`

### New section: Pipeline Skills

Render when `pipelineSkills` is present. Position: after the Project Proof block, before "Deeper Detail."

**Layout: Option A — vertical stack, full-width rows**

Each skill card:
- Full page width
- Left column: stage badge, skill name (monospace), cross-project badge (if applicable), "What it does" body text, mode chips
- Right column (border-left divider): insightLabel + insightText in a left-bordered highlight box
- Far right: "Brief" download button (inactive until documents ready — renders as disabled state)
- Left color stripe: blue (opord-writer), red (red-team), green (order-release)
- ↓ arrow between cards

Download button states:
- **Inactive (now):** Button renders but is visually muted, no href, `aria-disabled="true"`. No tooltip or "coming soon" text — just grey and unclickable.
- **Active (when ready):** Href points to `/downloads/{skill-name}-technical-brief.pdf`. Web page link added separately when the deep dive page exists.

**Section header:**
```
[label tag] Pipeline Skills
[h2] Three stages. One governed workflow.
[p] Each skill has a specific job in the sequence. None is a prompt wrapper — each enforces constraints AI generation cannot self-impose without them.
```

**Goal callout** (above Pipeline Skills section, below the proof block):
A highlighted stat block showing "90% first draft" with scope chips: Exercise OPORDs · Brigade and below · FM 5-0/FM 6-0 aligned · Techniques apply to real-world orders.

---

## 6. Projects Index Page Changes — `projects/index.astro`

Update the `portfolio-frame` section (currently: Capstone / Core pipeline / Support tooling) to reflect the new project structure:

```
Capstone          → CADE
Core pipeline     → Orders Production  (updated: AI-governed OPORD pipeline, 3 skills)
Supporting system → Controller Package Generator  (updated: OPORD-to-runtime-package workflow)
```

Remove the Deck Builder reference entirely.

---

## 7. Technical Briefs — Future State

Per-skill technical deep-dive documents. Not ready at launch — UI scaffolding is in place.

**Per skill:**
- PDF: `/public/downloads/{skill-name}-technical-brief.pdf`
- Web page: `/projects/orders-production/{skill-name}` (new dynamic sub-route)

**Web page sub-route** (`/projects/orders-production/[skill].astro`):
- New page template, separate from the project detail template
- Covers: architecture, design decisions, guardrail system, workflow mechanics
- Has a "Download PDF" button linking to the PDF version
- Linked from the skill card on the Orders Production project page

Implementation of the sub-route and PDFs is deferred — the download buttons render in disabled state until ready.

---

## 8. Out of Scope

- Generating the technical brief documents (separate effort, per-skill)
- The red-team skill's own project page (separate project entry, future)
- Adding other orders-production skills (dbd-matrix, narrative-writer, scenario-oe) — those can slot into the pipeline when ready
- Any changes to the CADE project content
