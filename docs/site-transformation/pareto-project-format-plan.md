# Pareto Project Format Transformation Plan

## Goal

Transform NextGen Wargame from a CADE-dense showcase into a repeatable project portfolio format that proves a clear professional claim:

> I am not playing with AI. I know how to frame a design problem, govern AI as a production system, build supporting tools, validate the result, and turn it into a usable product.

CADE remains the flagship proof point, but the site should establish a reusable format for future projects.

## Auditor Assessment

The current site has strong raw material but the presentation is too dense and too CADE-specific. It explains CADE in detail, but it does not yet make the repeatable operating model obvious enough.

Current strengths:

- CADE has real proof: three executions, average of about 19 participants, one-week first executable version, controller package evolution.
- The repo already separates projects, decisions, research, methods, and content curation.
- Supporting project entries already exist for CADE production tools and controller package generation.
- Decision records already support the credibility story: source truth, AI as production engine, deterministic adjudication, controller package architecture.

Current weaknesses:

- Project pages use a traditional long case-study structure instead of a compact proof format.
- CADE content explains the exercise more than it explains the designer/operator skill.
- Supporting tools are underplayed, even though they are strong evidence of product development ability.
- Homepage leads with CADE as subject matter; it should lead with the operating model and use CADE as proof.
- Future projects do not yet have a stable editorial template.

## Strategic Move

Adopt a standard "Project Proof" format across the site:

1. Problem
2. Design Move
3. System Built
4. Supporting Tools
5. Proof
6. Transferable Skill

Every project should be readable in roughly two minutes. Longer details can exist below the fold or in decision records, but the top half of each project must carry the 80/20 value.

## Content Rules

- Prefer one strong paragraph over three explanatory paragraphs.
- Use evidence before explanation when possible.
- Treat CADE details as support for the professional claim, not as the main attraction.
- Highlight artifacts and tools created, not just AI tools used.
- Avoid repeating "AI as production engine" unless the sentence adds new proof.
- Keep military context sufficient for credibility but not so detailed that non-military readers lose the thread.
- Every project must answer: what did TJ design, build, govern, and prove?

## Phase 1: Establish The Project Proof Model

Objective: Create the reusable content model before rewriting pages.

Build tasks:

- Update `content.md` with the Project Proof structure.
- Update `src/content.config.ts` to support compact project fields.
- Keep existing fields temporarily if needed to avoid breaking existing pages during migration.
- Add fields for `designMove`, `systemBuilt`, `supportingTools`, `proof`, and `transferableSkill`.
- Decide whether `techStack` remains visible or becomes secondary metadata.

Suggested project schema additions:

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

Audit gate after Phase 1:

- Can a future project be added without CADE-specific fields?
- Does the schema support concise pages without requiring long sections?
- Does `npm run check` pass?

## Phase 2: Redesign The Project Detail Template

Objective: Make `/projects/[slug]` enforce the concise proof format.

Build tasks:

- Rework the top of `src/pages/projects/[slug].astro` around the Project Proof model.
- Replace the long default sequence with compact sections:
  - The Problem
  - The Design Move
  - What I Built
  - Supporting Tools
  - Proof It Worked
  - What This Shows
- Keep optional deep-detail sections lower on the page for CADE-specific mechanics, decisions, risks, or architecture.
- Make supporting tools a first-class section, not hidden in the body text.
- Keep related decisions and related projects, but move them after the proof content.

Audit gate after Phase 2:

- Can a reader understand the project in the first screen plus one scroll?
- Does the page prove design/product ability before explaining domain complexity?
- Does the template work for CADE and non-CADE projects?
- Does `npm run check` pass?

## Phase 3: Rewrite CADE As The Flagship Proof

Objective: Reduce CADE density while making the professional claim stronger.

Build tasks:

- Rewrite `src/content/projects/cade.md` around the Project Proof model.
- Lead with the design problem and the product outcome, not the exercise mechanics.
- Add explicit supporting tools and workflows created around CADE.
- Keep the strongest evidence:
  - Three executions.
  - Average of about 19 participants per session.
  - First executable version in one week.
  - Four validation criteria met on first execution.
  - Evolution toward a unified Controller Package.
- Move detailed turn rhythm, architecture modules, risk controls, and boundaries below the concise proof structure.

CADE target narrative:

> I turned a compressed staff-training problem into a usable, repeatable exercise product by governing AI outputs, building supporting production workflows, validating execution, and iterating the system into a controller-facing package.

Audit gate after Phase 3:

- Does CADE prove TJ can approach a design problem and develop it into a usable product?
- Are supporting tools visible enough to change the reader's perception from "AI user" to "AI operator/product builder"?
- Is at least 30 percent of redundant CADE explanation removed or pushed lower?
- Does `npm run check` pass?

## Phase 4: Reframe Supporting Projects

Objective: Make supporting projects feel like reusable systems, not side notes.

Build tasks:

- Rewrite `src/content/projects/orders-production.md` as a core production pipeline.
- Rewrite `src/content/projects/deck-builder.md` as support tooling that removes production blockers.
- Use the same Project Proof structure as CADE.
- Ensure each project has a clear "transferable skill" statement.
- Make the projects index communicate a portfolio system:
  - Capstone: CADE.
  - Core pipeline: Controller Package Generator.
  - Support tooling: CADE Production Support Tools.

Audit gate after Phase 4:

- Does each project stand alone as evidence of skill?
- Does each project also support the broader CADE system?
- Can the same format accept a future non-CADE project?
- Does `npm run check` pass?

## Phase 5: Rework Homepage Around The Operating Model

Objective: Make the homepage sell the repeatable method first and CADE second.

Build tasks:

- Update `src/pages/index.astro` hero copy.
- Replace "AI gaming showcase" framing with a sharper product/design claim.
- Use CADE as the flagship proof card, not the entire premise.
- Add a compact "How I Build" section:
  - Frame the problem.
  - Govern the source.
  - Build the tool/workflow.
  - Validate in execution.
  - Iterate from evidence.
- Add a "Project Proof Format" section or visual that previews the standard format.
- Reduce duplicated CADE mechanics already covered on the CADE page.

Homepage target headline options:

- "I turn AI-assisted design work into usable training products."
- "I build governed AI workflows that become real training systems."
- "From ambiguous training problem to usable product, with AI governed as the production engine."

Audit gate after Phase 5:

- Does the homepage make the professional claim within 10 seconds?
- Does CADE support the claim instead of overwhelming it?
- Is there a clear path to projects, methods, and decisions?
- Does `npm run check` pass?

## Phase 6: Methods And About Alignment

Objective: Align supporting pages without expanding them.

Build tasks:

- Tighten `src/pages/methods.astro` around the repeatable process.
- Tighten `src/pages/about.astro` so it reinforces the design/product/operator identity.
- Avoid adding more CADE detail to these pages.
- Link Methods to the Project Proof format and decision archive.

Audit gate after Phase 6:

- Does Methods explain the repeatable approach without duplicating project pages?
- Does About explain why TJ is credible without becoming a resume?
- Does `npm run check` pass?

## Phase 7: Final Auditor Pass

Objective: Confirm the site now supports future projects and the intended credibility claim.

Audit checklist:

- A reader can state what TJ does after reading the homepage hero.
- A reader can understand any project through the same six-section proof format.
- CADE is still the capstone but no longer the only organizing concept.
- Supporting tools are visible as product/system evidence.
- The site uses concise content and pushes detail below the proof layer.
- The decisions archive remains useful as a governance layer.
- No project depends on CADE-specific template assumptions.
- `npm run check` and `npm run build` pass.

## Definition Of Done

The transformation is complete when the site communicates this in less than two minutes:

> TJ takes messy training/design problems, imposes structure, uses AI under governance, builds supporting tools and workflows, validates the output, and turns the result into a usable product.
