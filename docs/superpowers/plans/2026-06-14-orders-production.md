# Orders Production Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Orders Production as a portfolio project — three-stage AI pipeline (opord-writer → red-team → order-release) — with a Pipeline Skills section on the detail page.

**Architecture:** Six discrete changes across content, schema, and page templates. Each task is independently committable. No new routes or components — the Pipeline Skills section is inline in `[slug]/index.astro`. `pipelineSkills` is a new optional schema field; all existing projects are unaffected.

**Tech Stack:** Astro content collections, Zod schema, Astro template (`.astro`), YAML frontmatter

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/content.config.ts` | Modify | Add `pipelineSkills` optional field to projects schema |
| `src/content/projects/orders-production.md` | Rewrite | Replace CPG content with Orders Production pipeline |
| `src/content/projects/controller-package-generator.md` | Create | CPG content moved from old `orders-production.md` |
| `src/content/projects/deck-builder.md` | Delete | Redundant — already in CADE supportingTools |
| `src/pages/projects/[slug]/index.astro` | Modify | Add Goal callout + Pipeline Skills section |
| `src/pages/projects/index.astro` | Modify | Update portfolio-frame to reflect new project structure |

---

### Task 1: Add `pipelineSkills` to schema

**Files:**
- Modify: `src/content.config.ts:62-68` (after `relatedDecisions`, before closing `}`)

- [ ] **Step 1: Open `src/content.config.ts` and add the `pipelineSkills` field**

  Insert after the `relatedDecisions` field (line 67) and before the closing `})` of the schema object:

  ```ts
    pipelineSkills: z.array(z.object({
      name: z.string(),
      stage: z.string(),
      crossProject: z.boolean().optional(),
      whatItDoes: z.string(),
      insightLabel: z.string(),
      insightText: z.string(),
      modes: z.array(z.string()),
    })).optional(),
  ```

  The `relatedDecisions` block at lines 66–67 currently reads:
  ```ts
      relatedDecisions: z.array(z.string()).optional(),
    }),
  ```
  After edit it should read:
  ```ts
      relatedDecisions: z.array(z.string()).optional(),
      pipelineSkills: z.array(z.object({
        name: z.string(),
        stage: z.string(),
        crossProject: z.boolean().optional(),
        whatItDoes: z.string(),
        insightLabel: z.string(),
        insightText: z.string(),
        modes: z.array(z.string()),
      })).optional(),
    }),
  ```

- [ ] **Step 2: Verify the build accepts the schema change**

  Run: `npx astro check`
  Expected: No type errors. If errors, they will be in `content.config.ts` — recheck braces.

- [ ] **Step 3: Commit**

  ```bash
  git add src/content.config.ts
  git commit -m "feat: add pipelineSkills optional field to projects schema"
  ```

---

### Task 2: Create `controller-package-generator.md`

**Files:**
- Create: `src/content/projects/controller-package-generator.md`
- Source: current `src/content/projects/orders-production.md` (CPG content — do not modify original yet)

- [ ] **Step 1: Create `controller-package-generator.md` with the CPG content**

  Copy the entire contents of `src/content/projects/orders-production.md` into the new file, then change two fields:
  - `title: "CADE Controller Package Generator"` → `title: "Controller Package Generator"`
  - `order: 3` (already correct — keep as-is)

  The new file's frontmatter header should start:
  ```yaml
  ---
  title: "Controller Package Generator"
  role: "AI Planning Workflow Designer"
  year: 2026
  duration: "Core production pipeline"
  ```
  All other fields remain identical to the current `orders-production.md`.

- [ ] **Step 2: Verify the new file appears in the build**

  Run: `npx astro check`
  Expected: No errors. The new slug `controller-package-generator` will be available.

- [ ] **Step 3: Commit**

  ```bash
  git add src/content/projects/controller-package-generator.md
  git commit -m "feat: add controller-package-generator project content (moved from orders-production)"
  ```

---

### Task 3: Rewrite `orders-production.md`

**Files:**
- Modify: `src/content/projects/orders-production.md` (full replacement)

- [ ] **Step 1: Replace the entire contents of `orders-production.md`**

  Write the following complete file (frontmatter only — no body content after `---`):

  ```yaml
  ---
  title: "Orders Production"
  role: "AI Systems Designer"
  year: 2026
  duration: "Active pipeline"
  status: "ongoing"
  order: 2
  featured: false
  outcomeSummary: "A three-stage AI pipeline that produces exercise-ready OPORDs for brigade and below — governed by doctrine, adversarially reviewed, and gated before unit release. The goal is not a perfect order. It is a 90% first draft that saves units significant prep time."
  overview: "Orders Production is a three-stage AI pipeline — opord-writer → red-team → order-release — that produces exercise-ready OPORDs for brigade and below. Each stage runs inside constraints AI cannot self-impose: an OPORD writing guide, adversarial skeptic personas, and a formal quality gate. The result is a first draft that has been validated before it reaches the unit."
  problem: "AI generates plausible OPORD text. Without doctrine-aware constraints it fails structure, loses task coherence across paragraphs, and has no mechanism to catch failures before the order reaches a unit. Most AI-assisted OPORD efforts stop at the prompt. This one did not."
  designMove: "Treat orders production as a governed workflow, not a conversation. Each stage — authoring, adversarial review, release gate — runs inside constraints the model cannot self-impose: an OPORD writing guide, quality standards, skeptic persona definitions, lint rules. AI drafts inside those constraints; human review is the gate."
  approach: "Each stage of the pipeline has a fixed job and runs in sequence. opord-writer drafts inside a doctrine-aware writing guide. red-team applies adversarial pressure from CDR, S3, and S2 perspectives, tagging every finding by severity and paragraph. order-release runs seven automated passes — lint, skeptic sweeps, QC gate, annex alignment — and produces a consolidated fix plan before the order goes to the unit."
  systemBuilt: "Three sequenced skills (opord-writer, red-team, order-release) supported by Python scripts (lint, DOCX export, normalize), a shared doctrine reference library (FM 5-0, FM 6-0, NATO-COPD, AJP-5), and a Streamlit GUI with dedicated pages per skill."
  transferableSkill: "This shows AI-assisted staff work approached as a systems design problem — not just what to ask the model, but what constraints govern its output, what checks catch failures, and what pipeline moves draft material to execution-ready products. The techniques apply equally to real-world OPORDs."
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
  relatedProjects:
    - "cade"
    - "controller-package-generator"
  ---
  ```

- [ ] **Step 2: Verify the content loads cleanly**

  Run: `npx astro check`
  Expected: No errors. If you see a schema validation error, check that all required fields (`overview`, `approach`, `constraints`, `keyDecisions`, `techStack`, `impact`, `learnings`) are present and correctly indented.

- [ ] **Step 3: Commit**

  ```bash
  git add src/content/projects/orders-production.md
  git commit -m "feat: rewrite orders-production with pipeline content (opord-writer, red-team, order-release)"
  ```

---

### Task 4: Delete `deck-builder.md`

**Files:**
- Delete: `src/content/projects/deck-builder.md`

- [ ] **Step 1: Remove the file via git**

  ```bash
  git rm src/content/projects/deck-builder.md
  ```

- [ ] **Step 2: Verify the build still passes**

  Run: `npx astro check`
  Expected: No errors. The deck-builder slug will no longer be generated.

- [ ] **Step 3: Commit**

  ```bash
  git commit -m "chore: remove deck-builder project (represented in cade supportingTools)"
  ```

---

### Task 5: Add Goal callout and Pipeline Skills section to `[slug]/index.astro`

**Files:**
- Modify: `src/pages/projects/[slug]/index.astro`

This task has three parts: (a) extract `pipelineSkills` from project data, (b) add a `skillColor` helper, (c) insert the Goal callout and Pipeline Skills section into the template, (d) add CSS.

- [ ] **Step 1: Add `pipelineSkills` to the destructure block**

  In the frontmatter (around line 74–104), find the destructure block:
  ```ts
  const {
    title,
    role,
    ...
    relatedDecisions,
    status,
  } = project.data;
  ```

  Add `pipelineSkills` to this list (before `status`):
  ```ts
    relatedDecisions,
    pipelineSkills,
    status,
  } = project.data;
  ```

- [ ] **Step 2: Add the `skillColor` helper function**

  After the destructure block (around line 105), add:
  ```ts
  function skillColor(name: string): string {
    const colors: Record<string, string> = {
      'opord-writer': '#3b82f6',
      'red-team': '#ef4444',
      'order-release': '#22c55e',
    };
    return colors[name] ?? 'var(--color-accent)';
  }
  ```

- [ ] **Step 3: Insert the Goal callout and Pipeline Skills section into the template**

  Find the closing tag of the `project-proof` section (around line 300):
  ```html
    </section>

    <section class="case-study-section">
      <h2>Deeper Detail</h2>
  ```

  Insert the following block between `</section>` (end of project-proof) and `<section class="case-study-section">` (Deeper Detail):

  ```astro
    {pipelineSkills && pipelineSkills.length > 0 && (
      <>
        <section class="goal-callout" aria-label="Pipeline goal">
          <div class="goal-stat">90%</div>
          <div class="goal-detail">
            <strong>first-draft target</strong>
            <div class="goal-chips">
              <span>Exercise OPORDs</span>
              <span>Brigade and below</span>
              <span>FM 5-0 / FM 6-0 aligned</span>
              <span>Techniques apply to real-world orders</span>
            </div>
          </div>
        </section>

        <section class="pipeline-skills" aria-labelledby="pipeline-skills-heading">
          <div class="pipeline-skills-intro">
            <span>Pipeline Skills</span>
            <h2 id="pipeline-skills-heading">Three stages. One governed workflow.</h2>
            <p>Each skill has a specific job in the sequence. None is a prompt wrapper — each enforces constraints AI generation cannot self-impose without them.</p>
          </div>

          {pipelineSkills.map((skill, index) => (
            <>
              <div class="skill-card" style={`border-left-color: ${skillColor(skill.name)}`}>
                <div class="skill-card__left">
                  <span class="skill-stage">{skill.stage}</span>
                  <h3 class="skill-name">{skill.name}</h3>
                  {skill.crossProject && (
                    <span class="cross-project-badge">cross-project skill</span>
                  )}
                  <p class="skill-what">{skill.whatItDoes}</p>
                  <div class="skill-modes">
                    {skill.modes.map((mode) => (
                      <span class="mode-chip">{mode}</span>
                    ))}
                  </div>
                </div>
                <div class="skill-card__right">
                  <span class="insight-label">{skill.insightLabel}</span>
                  <p class="insight-text">{skill.insightText}</p>
                </div>
                <div class="skill-card__action">
                  <button class="brief-btn" aria-disabled="true" disabled>Brief ↓</button>
                </div>
              </div>
              {index < pipelineSkills.length - 1 && (
                <div class="skill-arrow" aria-hidden="true">↓</div>
              )}
            </>
          ))}
        </section>
      </>
    )}
  ```

- [ ] **Step 4: Add CSS for the new sections**

  In the `<style>` block, before the closing `</style>` tag, append:

  ```css
    /* Goal callout */
    .goal-callout {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
      padding: 1.25rem 1.5rem;
      border: 1px solid var(--color-border);
      border-radius: 14px;
      background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), transparent),
        var(--color-bg-secondary);
    }

    .goal-stat {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: #22c55e;
      line-height: 1;
      flex-shrink: 0;
    }

    .goal-detail strong {
      display: block;
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--color-text-muted);
      margin-bottom: 0.6rem;
    }

    .goal-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .goal-chips span {
      font-size: 0.8rem;
      padding: 0.2rem 0.6rem;
      border: 1px solid var(--color-border);
      border-radius: 999px;
      color: var(--color-text-secondary);
      background: var(--color-bg);
    }

    /* Pipeline Skills section */
    .pipeline-skills {
      margin-bottom: 3.5rem;
    }

    .pipeline-skills-intro {
      max-width: 640px;
      margin-bottom: 1.75rem;
    }

    .pipeline-skills-intro > span {
      display: inline-block;
      color: var(--color-accent);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .pipeline-skills-intro h2 {
      font-size: 1.75rem;
      margin-bottom: 0.65rem;
      font-weight: 700;
      letter-spacing: -0.01em;
    }

    .pipeline-skills-intro p {
      font-size: 1rem;
      color: var(--color-text-secondary);
      line-height: 1.65;
    }

    .skill-card {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 1.5rem;
      padding: 1.5rem 1.5rem 1.5rem 1.75rem;
      border: 1px solid var(--color-border);
      border-left-width: 4px;
      border-radius: 14px;
      background: var(--color-bg-secondary);
      align-items: start;
    }

    .skill-stage {
      display: inline-block;
      color: var(--color-accent);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
    }

    .skill-name {
      font-family: monospace;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 0.5rem;
    }

    .cross-project-badge {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      background: rgba(251, 191, 36, 0.15);
      color: #fbbf24;
      margin-bottom: 0.6rem;
    }

    .skill-what {
      font-size: 0.975rem;
      line-height: 1.65;
      color: var(--color-text-secondary);
      margin-bottom: 0.85rem;
    }

    .skill-modes {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
    }

    .mode-chip {
      font-size: 0.78rem;
      padding: 0.2rem 0.6rem;
      border: 1px solid var(--color-border);
      border-radius: 999px;
      color: var(--color-text-secondary);
      background: var(--color-bg);
    }

    .skill-card__right {
      border-left: 1px solid var(--color-border);
      padding-left: 1.5rem;
    }

    .insight-label {
      display: block;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-text-muted);
      margin-bottom: 0.5rem;
    }

    .insight-text {
      font-size: 0.95rem;
      line-height: 1.65;
      color: var(--color-text-secondary);
    }

    .skill-card__action {
      display: flex;
      align-items: flex-start;
      padding-top: 0.25rem;
    }

    .brief-btn {
      font-size: 0.82rem;
      font-weight: 600;
      padding: 0.45rem 0.9rem;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      background: var(--color-bg);
      color: var(--color-text-muted);
      cursor: not-allowed;
      opacity: 0.45;
      white-space: nowrap;
    }

    .skill-arrow {
      text-align: center;
      font-size: 1.5rem;
      color: var(--color-text-muted);
      padding: 0.25rem 0;
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      .goal-callout {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }

      .skill-card {
        grid-template-columns: 1fr;
      }

      .skill-card__right {
        border-left: none;
        border-top: 1px solid var(--color-border);
        padding-left: 0;
        padding-top: 1rem;
      }

      .skill-card__action {
        padding-top: 0;
      }
    }
  ```

- [ ] **Step 5: Verify the page builds and renders**

  Run: `npx astro check`
  Expected: No type errors.

  Then start the dev server and open `/projects/orders-production`:
  ```bash
  npm run dev
  ```
  Check that:
  - Goal callout (90%) appears between the Project Proof section and Pipeline Skills
  - Three skill cards render in vertical stack (opord-writer → red-team → order-release)
  - Blue left border on opord-writer, red on red-team, green on order-release
  - "cross-project skill" badge appears on red-team card only
  - Mode chips appear on each card
  - Brief button renders greyed-out and is not clickable
  - ↓ arrows appear between cards
  - All other project pages (cade, controller-package-generator) are unaffected — no Goal callout or Pipeline Skills appear

- [ ] **Step 6: Commit**

  ```bash
  git add src/pages/projects/[slug]/index.astro
  git commit -m "feat: add goal callout and pipeline skills section to project detail page"
  ```

---

### Task 6: Update portfolio-frame in `projects/index.astro`

**Files:**
- Modify: `src/pages/projects/index.astro:81–97`

- [ ] **Step 1: Replace the portfolio-frame section content**

  Find the current `portfolio-frame` section (lines 81–97):
  ```html
    <section class="portfolio-frame" aria-label="Portfolio structure">
      <article>
        <span>Capstone</span>
        <strong>CADE</strong>
        <p>The flagship exercise product: governed AI workflows turned into a repeatable training system.</p>
      </article>
      <article>
        <span>Core pipeline</span>
        <strong>Controller Package Generator</strong>
        <p>The OPORD-to-runtime-package workflow that keeps turns, prompts, and adjudication traceable.</p>
      </article>
      <article>
        <span>Support tooling</span>
        <strong>CADE Production Support Tools</strong>
        <p>Gap-filling workflows for op-boards, annexes, briefings, and reviewable presentation outputs.</p>
      </article>
    </section>
  ```

  Replace with:
  ```html
    <section class="portfolio-frame" aria-label="Portfolio structure">
      <article>
        <span>Capstone</span>
        <strong>CADE</strong>
        <p>The flagship exercise product: governed AI workflows turned into a repeatable training system.</p>
      </article>
      <article>
        <span>Core pipeline</span>
        <strong>Orders Production</strong>
        <p>AI-governed OPORD pipeline — three skills, doctrine constraints, adversarial review, and a formal quality gate before unit release.</p>
      </article>
      <article>
        <span>Supporting system</span>
        <strong>Controller Package Generator</strong>
        <p>The OPORD-to-runtime-package workflow that keeps turns, prompts, and adjudication traceable.</p>
      </article>
    </section>
  ```

- [ ] **Step 2: Verify the projects index renders correctly**

  Run: `npm run dev` and open `/projects`.
  Check that:
  - Three-column portfolio frame shows: CADE / Orders Production / Controller Package Generator
  - "Deck Builder" is not listed in the project cards below
  - Order Production card appears in the card list (order 2, between CADE and CPG)

- [ ] **Step 3: Commit**

  ```bash
  git add src/pages/projects/index.astro
  git commit -m "feat: update portfolio-frame to reflect orders production pipeline"
  ```

---

## Verification Checklist

After all tasks are complete, run a full build to confirm no regressions:

```bash
npx astro build
```

Expected: Build completes with no errors. Site output includes:
- `/projects/orders-production` — full detail page with Goal callout and three Pipeline Skills cards
- `/projects/controller-package-generator` — CPG detail page (same content as old orders-production)
- `/projects/cade` — unchanged
- `/projects` — updated portfolio frame, no deck-builder card
- `/projects/deck-builder` — does not exist (route removed)
