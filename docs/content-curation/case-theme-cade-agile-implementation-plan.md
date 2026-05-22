# Case Theme + CADE Agile Implementation Plan

This plan migrates `taijeronv-info` to the Case Astro theme and uses the curated CADE content to build a case-study-first showcase. The implementation should treat Case as the target theme architecture, not merely visual inspiration.

## Project Goal

Create a CADE-focused website that uses the Case theme's strengths: structured case studies, decision records, measurable outcomes, and explicit tradeoff documentation. The site should showcase CADE while demonstrating TJ's AI management/operator skills through the structure of the content.

## Technical Context

Current site:

- Astro `^6.3.5`
- Tailwind CSS `^4.2.2`
- TypeScript `^5.9.3`
- Existing content collections: `projects`, `research`

Case theme:

- Astro `^5.16.7`
- MDX content collections
- Case-study-first IA: `projects`, `decisions`, `journey`, `writing`, `uses`, `speaking`, `testimonials`
- Useful components/layouts: `CaseStudyLayout`, `ProjectCard`, `DecisionCard`, `ImpactMetrics`, `PageStats`, `TableOfContents`, `RelatedContent`, `SEO`, `Navigation`, `Footer`
- MIT licensed

Recommended strategy:

- Use Case as the target site architecture.
- Migrate current CADE content into Case content collections.
- Keep the current repo history, domain configuration, and any useful existing content.
- Replace the current resume-style homepage/components with Case layouts, routes, and content model.
- Re-skin the Case theme toward the CADE command-and-control visual direction, not the default Case demo identity.

## Product Backlog

### Epic 1: Theme Adoption Foundation

Objective:

- Establish the Case theme as the target foundation without losing current repo configuration or CADE content.

User story:

- As the site owner, I want the site to use the Case theme structure so that CADE is showcased through decisions, constraints, and outcomes instead of resume sections.

Scope:

- Bring Case theme architecture into this repo.
- Add Case dependencies and MDX support.
- Add Case route structure for projects/case studies and decisions.
- Preserve existing deploy/build behavior and domain configuration.

Acceptance criteria:

- `npm run build` passes.
- Case theme routes render in this repo.
- Current deploy configuration is preserved.
- Old content is either migrated, archived, or intentionally removed.

Implementation tasks:

- Import Case theme dependencies: `@astrojs/mdx`, `@astrojs/sitemap`, and `sharp` if image optimization is retained.
- Update `astro.config.mjs` for MDX, sitemap, and current site URL.
- Bring over Case layouts: `BaseLayout`, `PageLayout`, `ArticleLayout`, `CaseStudyLayout`.
- Bring over Case components needed for MVP: `SEO`, `Navigation`, `Footer`, `ProjectCard`, `DecisionCard`, `ImpactMetrics`, `ForwardLink`, `BackLink`, `RelatedContent`.
- Bring over Case styles as the baseline, then customize them for CADE.
- Remove or archive old homepage section components after the Case homepage is live.

### Epic 2: Content Model For CADE

Objective:

- Convert curated CADE material into structured content that supports the Case theme approach.

User story:

- As a visitor, I want to read CADE as a case study with problem, constraints, approach, decisions, metrics, and outcomes so that I understand both the product and the AI operator skill behind it.

Recommended collections:

- `projects`: Case's project/case-study collection, with CADE as the primary featured project.
- `decisions`: AI/design decision records.
- `writing` optional later: essays about CADE, AI operations, exercise design, or lessons learned.
- `uses` optional later: AI/operator toolchain and workflow stack.
- `testimonials` optional later if credible external quotes are available.

CADE case-study schema:

- `title`
- `subtitle`
- `role`
- `year`
- `duration`
- `teamSize`
- `outcomeSummary`
- `problem`
- `constraints`
- `approach`
- `aiOperatorSkills`
- `keyDecisions`
- `architectureModules`
- `impact.metrics`
- `impact.qualitative`
- `learnings`
- `status`
- `featured`
- `order`

Acceptance criteria:

- CADE content is represented as one primary case study.
- AI management/operator skill is present in the schema, not tacked on as a separate generic skills block.
- Decision records can be cross-linked from the CADE case study.
- Sensitive content decisions remain flagged before publication.

Implementation tasks:

- Replace current `src/content.config.ts` with a Case-compatible content model, adapted for CADE.
- Create `src/content/projects/cade.mdx` as the primary Case project.
- Create initial decision records:
  - `ai-as-production-engine-not-design-authority`
  - `opord-source-truth`
  - `controller-package-over-runbook`
  - `deterministic-adjudication-over-controller-judgment`
  - `plain-language-visual-forward-delivery`
  - `evidence-driven-controlled-evolution`
- Move existing lightweight project cards into archive, writing, or secondary projects only if still useful.

### Epic 3: Homepage Rebuild

Objective:

- Replace the resume-style homepage with a Case-theme homepage centered on CADE.

User story:

- As a first-time visitor, I want to understand what CADE is, why it matters, what AI did, what TJ governed, and what evidence proves it works within 30 seconds.

Homepage sections:

- Hero: CADE as AI capstone and replicable training framework.
- Case snapshot: proof chips and outcome summary.
- Constraint problem: compressed time, uneven doctrine, language friction, deliverable pressure.
- AI operating model: AI production engine vs human design authority.
- Featured decisions: key AI/operator decisions.
- Product architecture: five CADE modules.
- Evidence preview: live validation and design response.
- CTA: talk about CADE or AI operations.

Acceptance criteria:

- Hero clearly says CADE is the site focus.
- Homepage has at least one explicit AI operator section.
- Homepage links to the CADE case study and decision records.
- Page is responsive on mobile.
- Build passes.

Implementation tasks:

- Replace `src/pages/index.astro` with a Case-derived homepage.
- Create `CadeHero.astro`.
- Create `CaseSnapshotGrid.astro`.
- Create `AiOperatingModel.astro`.
- Create `FeaturedDecisionRecords.astro`.
- Create `ArchitecturePreview.astro`.
- Create `EvidencePreview.astro`.
- Create `CadeCTA.astro`.

### Epic 4: CADE Case Study Detail Page

Objective:

- Build the deep-dive CADE page using Case's project/case-study route and layout.

User story:

- As a technical or military stakeholder, I want a deeper CADE case study so that I can understand the product architecture, decisions, constraints, proof, and lessons learned.

Recommended case-study structure:

- Overview.
- Problem.
- Constraints.
- Approach.
- AI operating model.
- Product architecture.
- Key decisions.
- Impact and evidence.
- What changed after live execution.
- Boundaries and fit.
- Learnings.

Acceptance criteria:

- CADE detail route exists at `/projects/cade` unless we intentionally rename Case routes.
- Case study has readable narrative flow and table of contents if page length warrants it.
- Key decisions render as structured cards.
- Metrics/proof render as dedicated impact modules.
- Boundary/out-of-scope language is included.

Implementation tasks:

- Use Case's `src/pages/projects/[slug].astro` pattern.
- Use Case `CaseStudyLayout.astro`.
- Use Case `ImpactMetrics.astro`.
- Use Case `RelatedContent.astro`.
- Add case study content from live doc and plan.
- Link related decision records.

### Epic 5: AI Decision Records

Objective:

- Use Case's decision-record collection and route pattern to showcase AI management and operator judgment.

User story:

- As a hiring/collaboration audience member, I want to see the decisions behind CADE so that I can evaluate how TJ thinks, manages AI, handles tradeoffs, and governs outputs.

Decision record structure:

- Context.
- Decision.
- Alternatives considered.
- Reasoning.
- Outcome or expected outcome.
- Related CADE module.
- AI operator skill demonstrated.

Initial decision pages:

- AI as production engine, not design authority.
- OPORD-quality source truth as drift control.
- Unified Controller Package over fragmented runbook artifacts.
- Deterministic adjudication over controller judgment.
- Plain-language and visual-forward delivery for multilingual execution.
- Controlled evolution only when evidence justifies change.

Acceptance criteria:

- `/decisions` index exists.
- Individual decision pages exist.
- Homepage previews the strongest 2-3 decisions.
- CADE case study links to relevant decisions.
- Each decision explicitly names the AI/operator skill demonstrated.

Implementation tasks:

- Add/adapt Case `decisions` collection schema.
- Bring over Case `src/pages/decisions/index.astro`.
- Bring over Case `src/pages/decisions/[slug].astro`.
- Use/adapt Case `DecisionCard.astro`.
- Draft decision records from curated source doc.

### Epic 6: Visual System And Theming

Objective:

- Customize the Case theme into a distinctive CADE command-and-control visual language.

User story:

- As a visitor, I want the site to feel like an intentional CADE product showcase rather than a generic Astro portfolio.

Visual direction:

- Keep Case's case-study clarity.
- Use dark operational base with grid/map-like texture.
- Use blue for AI workflow, amber for decision pressure, green for validation/proof.
- Use structured panels, proof chips, decision cards, and architecture diagrams.
- Avoid generic SaaS styling and resume blocks.

Acceptance criteria:

- Site has a consistent visual language.
- Typography and spacing are readable on mobile.
- Diagrams work without JS.
- Case theme CSS remains coherent after CADE customization.

Implementation tasks:

- Adopt Case's CSS variable and utility approach as the theme baseline.
- Remove Tailwind dependency later if no longer needed, or leave it temporarily during migration.
- Customize Case global CSS variables for CADE.
- Build responsive five-module architecture diagram.
- Build AI vs human governance visual.
- Build validation/evidence cards.

Recommended decision:

- Use Case CSS as the long-term baseline. Tailwind may remain during migration, but the final theme should not depend on the old Tailwind section components.

### Epic 7: Evidence And Artifact Layer

Objective:

- Add credibility through proof, thresholds, and approved artifacts.

User story:

- As a skeptical visitor, I want to see evidence that CADE worked in execution, not just polished claims.

Potential content:

- January 2026 validation checklist.
- Observed issue -> design response table.
- Success metrics.
- Controller Package preview.
- Sanitized OPORD/source truth excerpt.
- Turn rhythm diagram.
- AAR capture preview.

Acceptance criteria:

- Evidence section uses only approved public claims.
- Any sensitive operational detail is generalized or omitted.
- Artifact previews are sanitized before use.
- Claims are traceable to the live curation doc.

Implementation tasks:

- Create `src/data/cadeEvidence.ts`.
- Create `EvidenceChecklist.astro`.
- Create `IssueResponseTable.astro`.
- Create `ArtifactPreview.astro`.
- Add placeholders if artifacts are not yet approved.

### Epic 8: Quality, Review, And Release

Objective:

- Ensure the CADE site is accurate, performant, responsive, and publishable.

User story:

- As the site owner, I want the final site to be clear, defensible, and technically clean before publishing.

Acceptance criteria:

- `npm run build` passes.
- `npm run check` passes if available after MDX/content changes.
- No unresolved sensitive claims are published accidentally.
- Mobile view is readable.
- Links and routes work.
- Metadata/SEO reflects CADE focus.

Implementation tasks:

- Run build/check.
- Review all public claims against open decisions.
- Test homepage and case study on mobile widths.
- Verify no broken links.
- Update README if build/development changes.

## Sprint Plan

### Sprint 0: Discovery And Decisions

Duration:

- 0.5-1 day.

Goal:

- Lock implementation direction and publication constraints.

Backlog:

- Review Case theme components and schemas.
- Decide MDX vs Markdown for CADE case study.
- Resolve public content decisions:
  - "Ukrainian officer training" vs generalized wording.
  - "two-person team" and "one week" in hero or not.
  - exact validation dates or generalized execution evidence.
  - exact thresholds such as 80% adjudication consistency and 60-second retrieval.
- Decide whether artifact previews are allowed.

Definition of done:

- Implementation direction approved.
- Open decisions are documented as publish/block/generalize.

### Sprint 1: Foundation And Content Model

Duration:

- 1-2 days.

Goal:

- Add the Case theme content architecture.

Backlog:

- Add MDX integration.
- Replace/update content collections with Case-compatible schemas.
- Create case study and decision record content folders.
- Draft CADE case study frontmatter.
- Draft initial six decision records.
- Create base layouts/components needed for routes.

Definition of done:

- Case routes can load content collections.
- Build passes.
- CADE case study exists as structured content.

### Sprint 2: Homepage Case-Study Landing

Duration:

- 1-2 days.

Goal:

- Replace the current homepage with the CADE-focused landing experience.

Backlog:

- Build `CadeHero`.
- Build constraint/problem section.
- Build AI operating model section.
- Build featured decision records section.
- Build architecture preview.
- Build evidence preview and CTA.
- Update metadata.

Definition of done:

- Homepage clearly showcases CADE.
- AI management/operator skill is woven into the page.
- Mobile layout works.
- Build passes.

### Sprint 3: Deep CADE Case Study

Duration:

- 1-2 days.

Goal:

- Publish the full CADE project/case-study route.

Backlog:

- Build case study detail route.
- Adapt CaseStudyLayout.
- Render impact metrics.
- Render key decisions.
- Add related decision links.
- Add table of contents if useful.

Definition of done:

- `/projects/cade` or intentionally renamed equivalent route is publishable.
- Case study reads as problem -> approach -> decisions -> evidence -> learnings.
- Build passes.

### Sprint 4: Decision Records

Duration:

- 1 day.

Goal:

- Publish AI/design decision records.

Backlog:

- Build decisions index.
- Build decision detail route.
- Adapt DecisionCard.
- Add cross-links between CADE and decisions.
- Ensure each decision names the AI operator skill demonstrated.

Definition of done:

- `/decisions` works.
- Decision records demonstrate AI governance and tradeoff thinking.
- Homepage and CADE case study link to decisions.

### Sprint 5: Visual Polish And Evidence Layer

Duration:

- 1-2 days.

Goal:

- Make the site feel intentional and add proof-oriented visuals.

Backlog:

- Apply CADE visual language.
- Add architecture diagram.
- Add turn rhythm diagram.
- Add evidence checklist.
- Add issue -> response table.
- Add approved artifact previews or placeholders.

Definition of done:

- Site no longer feels like a generic template.
- Visuals clarify the system instead of decorating it.
- Build passes.

### Sprint 6: QA And Release

Duration:

- 0.5-1 day.

Goal:

- Prepare for publication.

Backlog:

- Run `npm run build`.
- Run `npm run check`.
- Review sensitive claims.
- Review mobile.
- Verify links.
- Update docs/README if dependencies changed.

Definition of done:

- Site is publishable.
- Known unresolved content questions are not present as public claims.

## Recommended MVP

If we want a fast first version, build only:

- CADE homepage landing page.
- One deep CADE case study page.
- Three decision records:
  - AI as production engine, not design authority.
  - Controller Package over runbook-centered execution.
  - OPORD source truth as AI drift control.
- Basic evidence checklist.
- No artifact previews until approved.

This gives a strong case-study site without getting blocked by every content decision.

## Risks

- MDX migration adds dependency/config complexity.
- Keeping legacy Tailwind components alongside Case CSS for too long can create styling conflicts.
- Publishing exact military/training details may require review.
- Long-form content can become too dense if not visually structured.
- The site may drift back into a resume if AI operator skills are separated instead of woven into CADE decisions.

## Mitigations

- Use this repo as the migration target to preserve history/config.
- Use Case layouts/routes/styles as the final baseline.
- Treat sensitive claims as placeholders until approved.
- Use decision records to show AI operator skill in context.
- Keep homepage tight and push depth into case study/decision pages.

## Definition Of Done For The Whole Project

- The site presents CADE as the primary capstone project.
- The site uses the Case theme structure: problem, constraints, approach, decisions, outcomes.
- AI management/operator skills are visible throughout the CADE story.
- At least one CADE case study and three decision records are published.
- Visitors can understand CADE, the AI operating model, and the proof of execution quickly.
- Build/check pass.
- Public claims are reviewed for sensitivity and accuracy.
