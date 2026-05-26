# Codex Builder Handover: Pareto Project Format Redesign

## Mission

Refactor the site so it becomes a repeatable proof portfolio, not only a CADE explanation site.

Primary user goal:

> CADE should show that I am not "playing" with AI. It should prove that I know how to approach a design problem and develop it into a usable product. The site should also establish a concise format for future projects.

Use the plan in `docs/site-transformation/pareto-project-format-plan.md` as the controlling plan.

## Build Principles

- Apply Pareto 80/20: surface the highest-value proof first and push details lower.
- Do not remove CADE's credibility; reduce repeated explanation.
- Make tools and workflows visible as product evidence.
- Keep future projects in mind. Avoid CADE-only layout assumptions.
- Preserve existing visual language unless a focused layout change is needed.
- Do not invent sensitive operational details.
- Keep copy concise and direct.

## Core Project Format

Every project page should support this structure:

1. The Problem
2. The Design Move
3. What I Built
4. Supporting Tools
5. Proof It Worked
6. What This Shows

Recommended field meanings:

- `problem`: The real problem, not just background.
- `designMove`: The key structuring insight or design decision.
- `systemBuilt`: The usable product, workflow, artifact, or system created.
- `supportingTools`: Reusable tools, scripts, templates, workflows, packages, or production aids created to support the project.
- `proof`: Evidence that the work functioned or improved something.
- `transferableSkill`: The general capability the project demonstrates.

## Likely Files To Edit

- `content.md`
- `src/content.config.ts`
- `src/content/projects/cade.md`
- `src/content/projects/orders-production.md`
- `src/content/projects/deck-builder.md`
- `src/pages/projects/[slug].astro`
- `src/pages/projects/index.astro`
- `src/pages/index.astro`
- `src/pages/methods.astro`
- `src/pages/about.astro`

Optional component extraction if useful:

- `src/components/ProjectProof.astro`
- `src/components/SupportingTools.astro`
- `src/components/ProofGrid.astro`

## Schema Guidance

Add optional fields first to avoid breaking migration:

```ts
designMove: z.string().optional(),
systemBuilt: z.string().optional(),
supportingTools: z.array(z.object({
  name: z.string(),
  purpose: z.string(),
})).optional(),
proof: z.array(z.object({
  label: z.string(),
  result: z.string(),
})).optional(),
transferableSkill: z.string().optional(),
```

Keep existing fields during the first build unless you intentionally migrate all content and confirm pages still pass checks.

## Project Page Requirements

The top half of `/projects/[slug]` should be concise and repeatable.

Required top sections:

- Header with role, year, status, and a short outcome.
- "The Problem" using `problem`.
- "The Design Move" using `designMove`.
- "What I Built" using `systemBuilt`.
- "Supporting Tools" using `supportingTools`.
- "Proof It Worked" using `proof` or existing `evidence`.
- "What This Shows" using `transferableSkill`.

Optional lower sections:

- Product architecture.
- Turn rhythm.
- Key decisions.
- Risk controls.
- Boundaries.
- Related projects and decisions.

Do not let optional lower sections dominate the initial read.

## CADE Rewrite Requirements

CADE must clearly say:

> I turned a compressed staff-training problem into a usable, repeatable exercise product by governing AI outputs, building supporting production workflows, validating execution, and iterating the system into a controller-facing package.

Make these proof points visible near the top:

- First executable version produced in one week.
- Three live executions.
- Average of about 19 participants per session.
- Four validation criteria met on first execution.
- Unified Controller Package emerged from execution evidence.

Make these supporting tools/workflows explicit:

- Controller Package Generator.
- OPORD-to-turn-package workflow.
- Source-truth review workflow.
- Adjudication support model.
- Briefing/deck workflow.
- Gap-filling workflows for op-boards, annexes, and briefing outputs.

Cut or move down:

- Repeated explanation of "AI as production engine."
- Excessive turn-mechanics detail above the fold.
- Long military context that does not directly prove design/product ability.

## Supporting Project Rewrite Requirements

`orders-production.md` should become:

- Core pipeline proof.
- Shows OPORD-to-controller-package workflow.
- Emphasizes multi-document coherence, source traceability, and trainer review.

`deck-builder.md` should become:

- Support tooling proof.
- Shows how production blockers were removed.
- Emphasizes op-board, annex, briefing, Markdown-to-PPTX/HTML, and review-gate workflows.

Each supporting project needs:

- One clear design problem.
- One clear system/tool built.
- One clear proof section.
- One transferable skill statement.

## Homepage Requirements

Homepage should establish the professional claim before CADE detail.

Target hero idea:

> I turn AI-assisted design work into usable training products.

Alternative:

> I build governed AI workflows that become real training systems.

Add or rework sections so the homepage has:

- The professional claim.
- CADE as flagship proof.
- A compact "How I Build" process.
- Featured project cards that map to the repeatable Project Proof model.
- Links to Methods and Decisions as supporting evidence.

Avoid making the homepage another CADE case study.

## Methods And About Requirements

Methods should explain the repeatable process:

- Frame the problem.
- Govern the source.
- Build the tool/workflow.
- Review against acceptance criteria.
- Validate in execution.
- Iterate from evidence.

About should explain why this site exists and why TJ's background supports the work. Keep it short.

## Acceptance Criteria

Functional:

- `npm run check` passes.
- `npm run build` passes.
- Existing routes still render.
- Project pages work for all existing project entries.

Content:

- Homepage communicates the professional claim in the hero.
- CADE page proves design/product ability before explaining CADE mechanics.
- Supporting tools are visible on CADE and supporting project pages.
- Each project follows the same proof structure.
- No future project needs CADE-specific fields to fit the template.

Audit:

- Pause after each phase in `pareto-project-format-plan.md`.
- Provide a short audit note before moving to the next phase.
- If a phase makes the site longer or denser, stop and simplify before continuing.

## Suggested Build Sequence

1. Add schema fields and update `content.md`.
2. Refactor project detail template to use the Project Proof format while keeping existing fallback content.
3. Rewrite CADE content.
4. Rewrite supporting project content.
5. Refactor homepage.
6. Tighten Methods and About.
7. Run `npm run check` and `npm run build`.
8. Provide an audit summary against the acceptance criteria.

## Non-Goals

- Do not redesign the entire visual system.
- Do not add a blog.
- Do not expand the decision archive unless needed for links.
- Do not add unsourced metrics.
- Do not remove existing CADE detail unless it is duplicated or better moved below the concise proof layer.
