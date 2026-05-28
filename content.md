# NextGen Wargame Content Brief

## Purpose

NextGen Wargame is an Astro site that presents AI-assisted design work as usable product evidence. CADE, the Combined Arms Decision Exercise, remains the capstone proof point, while supporting projects, decision records, and methods pages show the repeatable operating model behind it.

## Core Narrative

CADE demonstrates governed AI use in a high-consequence training domain: human design authority frames the design problem, governs source truth, builds supporting workflows, validates execution, and iterates from evidence.

The main claim is not that AI independently designed a training product. The claim is that disciplined AI operations can turn messy training and design problems into credible, repeatable products when the operator controls the problem framing, production system, review gates, and evidence loop.

## Primary Audience

- AI and product readers evaluating practical AI workflow governance.
- Military training and exercise-design readers evaluating CADE's fit and credibility.
- Hiring or collaboration readers looking for evidence of AI integration, product judgment, and execution discipline.

## Site Structure

- `/` introduces the repeatable product/design operating model and routes visitors toward CADE, projects, decisions, and methods.
- `/projects/cade` is the flagship case study and the clearest explanation of the CADE system.
- `/projects` lists CADE and supporting workflow projects using a repeatable Project Proof format.
- `/decisions` archives AI governance and product architecture decisions.
- `/methods` explains the repeatable operating model behind the work.
- `/about` explains why the site exists and how the work fits TJ's training, simulation, and exercise-delivery background.
- `/story` holds TJ's short personal introduction, background, and path into the work.

## Content Model

- `src/content/projects/` contains project and case-study entries.
- `src/content/decisions/` contains decision records tied to AI governance, product architecture, and workflow controls.
- `src/content/research/` contains in-progress research and supporting topics.
- `docs/content-curation/` contains planning and source-curation material that informed the public CADE narrative.

### Project Proof Format

Every project should be readable in roughly two minutes through the same proof structure:

1. Problem: the real design or production problem.
2. Design Move: the key structuring decision that made the work tractable.
3. System Built: the usable product, workflow, artifact, or operating system created.
4. Supporting Tools: reusable tools, scripts, templates, workflows, or review aids that made the system work.
5. Proof: evidence that the work functioned, improved, or survived execution.
6. Transferable Skill: the broader capability the project proves beyond its domain.

Project entries support compact fields for this proof layer:

- `problem`
- `designMove`
- `systemBuilt`
- `supportingTools`
- `proof`
- `transferableSkill`

Existing long-form fields remain available for deeper detail and migration safety. `techStack` should be treated as secondary metadata unless a specific tool choice is part of the proof.

## Featured Content

### CADE

CADE is a battalion staff decision exercise built around fixed turn rhythm, source-governed scenario material, controller discipline, deterministic adjudication bands, and learning capture. It has run three times with an average of about 19 participants per session. The current public case study emphasizes that a two-person team produced the first executable version in one week using Claude, ChatGPT, and Gemini as governed production engines.

### Supporting Projects

Supporting projects show the production stack around CADE: OPORD-grounded artifact generation, missing-material completion, briefing and deck workflows, and reusable package production. Each should also stand alone as proof of a transferable product skill, not only as a side note to CADE.

### Decision Records

Decision records explain why the site and CADE workflow prioritize source truth, deterministic adjudication, controller package architecture, controlled evolution, and plain-language delivery. They are the governance layer behind the project claims.

### Methods

The methods page should keep explaining the operating pattern: frame the product, constrain the source layer, generate bounded outputs, review against acceptance criteria, and revise from execution evidence.

## Positioning Rules

- Present AI as a production engine, not design authority.
- Keep CADE framed as a fit-for-purpose training framework, not a universal simulation replacement.
- Emphasize controller usability and runtime pressure, not document polish alone.
- Tie claims to execution evidence where possible.
- Preserve the distinction between OPORD-quality source truth, generated artifacts, and approved runtime products.
- Avoid sensitive operational detail; use generalized descriptions when needed.

## Current Content Gaps

- Add sanitized artifact previews if approved screenshots or excerpts become available.
- Keep evidence claims current as additional CADE executions occur.
- Expand supporting project pages only when they clearly strengthen the CADE system narrative.
- Consider a short visual explanation of the CADE turn rhythm and consequence loop for readers unfamiliar with staff exercises.

## Maintenance Notes

This file is an editorial map for humans and agents. It is not consumed by Astro at build time. Update it when the public narrative, route structure, content model, or CADE evidence base changes.
