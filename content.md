# NextGen Wargame Content Brief

## Purpose

NextGen Wargame is the canonical public home for military decision-training systems, governed exercise-production workflows, and execution evidence. CADE remains the capstone proof point; Orders Production and Controller Package Generator show the supporting operating stack.

## Core Narrative

CADE demonstrates governed AI use in a high-consequence training domain: human design authority frames the design problem, governs source truth, builds supporting workflows, validates execution, and iterates from evidence.

The main claim is not that AI independently designed a training product. The claim is that disciplined AI operations can turn messy training and design problems into credible, repeatable products when the operator controls the problem framing, production system, review gates, and evidence loop.

## Primary Audience

- Military trainers and exercise planners evaluating CADE's fit and credibility.
- Wargame, simulation, and defense professionals evaluating the system stack.
- Military AI collaborators and employers evaluating domain-specific product judgment and execution discipline.

## Site Structure

- `/` introduces decision training, execution evidence, the system stack, and the governed operating method.
- `/projects/cade` is the flagship case study and the clearest explanation of the CADE system.
- `/projects` presents CADE, Orders Production, and Controller Package Generator as one operating stack.
- `/projects/[slug]/decisions` holds the decision record for each system.
- `/field-notes` holds CADE narrative, execution learning, and iteration.
- `/model-workbench` holds AI-specific methods, models, verification, maintenance, translation, and tool-selection notes.
- `/about` explains NextGen's purpose and only the founder credibility relevant to this domain; the full biography lives at `taijeronv.info`.

## Content Model

- `src/content/projects/` contains project and case-study entries.
- `src/content/decisions/` contains decision records tied to AI governance, product architecture, and workflow controls.
- `src/content/research/` contains in-progress research and supporting topics.
- `src/content/field-notes/` contains CADE narrative and execution-learning entries.
- `src/content/workbench-notes/` contains AI-specific technical notes.
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

CADE is a battalion staff decision exercise built around fixed turn rhythm, source-governed scenario material, controller discipline, deterministic adjudication bands, and learning capture. It has run three times with an average of about 19 participants per session. The current public case study emphasizes that TJ developed the first executable version in one week using Claude, ChatGPT, and Gemini as governed production engines.

### Supporting Projects

Supporting projects show the production stack around CADE: OPORD-grounded artifact generation, missing-material completion, briefing and deck workflows, and reusable package production. Each should also stand alone as proof of a transferable product skill, not only as a side note to CADE.

### Decision Records

Decision records explain why the site and CADE workflow prioritize source truth, deterministic adjudication, controller package architecture, controlled evolution, and plain-language delivery. They are the governance layer behind the project claims.

### AI Workbench

AI Workbench is the technical short-notes lane. Entries should remain concise and practical, covering model roles, workflow design, alignment, verification, assessment, maintenance, translation, and tool selection. CADE may appear as evidence, but CADE narrative belongs in Field Notes.

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
