---
title: Build Handoff — nextgenwargame client/employer engagement audit
version: v1.0
date: 2026-05-29
source_skill: handoff
source_model: claude-sonnet-4-6
target_model: codex
mode: BUILD
status: complete
---

## Executing Model Orientation

You are a build executor. All design decisions have been made and are documented below.
Do not make design decisions. Do not re-run discovery or planning.
If something is ambiguous, flag it — do not interpret.
Working directory: `/Users/redleg/_repos/ai-workspaces/projects/nextgenwargame`
Read the files listed in §4 before writing any code.

---

## What Was Completed (Do Not Repeat)

- Pareto Project Format transformation: all 7 phases built and audited (see `docs/site-transformation/claude-audit-handover.md`)
- Content collections populated: `src/content/projects/` (3 entries), `src/content/decisions/` (6 entries), `src/content/research/` (4 entries)
- Dynamic routes built: `src/pages/projects/[slug].astro`, `src/pages/decisions/[slug].astro`
- Homepage reworked around operating model claim
- All core pages live: about, purpose, methods, projects, decisions
- Build verified: `npm run build` passed, 16 pages generated

---

## Working Directory

| File/Folder | Status | Notes |
|---|---|---|
| `src/config.ts` | active — MODIFY | Site description outdated; social links empty |
| `src/pages/about.astro` | active — MODIFY | `draft-marker` class needs rename |
| `src/components/StructuredData.astro` | active — MODIFY | Add LinkedIn `sameAs` support |
| `src/components/SEO.astro` | active — READ | Understand OG image handling before touching |
| `src/components/Footer.astro` | active — READ | Verify social link empty-state handling |
| `src/layouts/BaseLayout.astro` | active — READ | Understand theme/head injection |
| `src/content/projects/cade.md` | active — do not touch | Pareto transform complete |
| `src/content/projects/orders-production.md` | active — do not touch | Pareto transform complete |
| `src/content/projects/deck-builder.md` | active — do not touch | Pareto transform complete |
| `src/content/decisions/` | active — do not touch | 6 governance records, complete |
| `docs/site-transformation/` | dev-history | Prior plans and audit records — reference only |
| `backups/` | dev-history | Do not touch |
| `dist/` | build output | Rebuilt by `npm run build` — do not edit manually |

---

## What To Build

### Fix 1: Update site description in config

**File:** `src/config.ts`

**Current value:**
```ts
description: 'A showcase of AI gaming and AI-assisted training design projects, with CADE as the capstone case study.',
```

**Replace with:**
```ts
description: 'TJ Taijeron designs governed AI workflows for military training and exercise production. CADE is the capstone proof.',
```

**Why:** Current description reflects the pre-Pareto framing. The Pareto transformation repositioned the site around the operating model claim. The description is used in SEO meta tags and OG cards — it is what a hiring manager or client sees in a Google result or LinkedIn share preview.

---

### Fix 2: Rename `draft-marker` class in about.astro

**File:** `src/pages/about.astro`

**Problem:** `<div class="draft-marker">Background</div>` uses a class named `draft-marker`. The class is styled identically to `.eyebrow` (accent color, uppercase, small caps). The class name reads as a development artifact to any engineer who inspects the source.

**Action:**
- In the HTML: replace `class="draft-marker"` with `class="eyebrow"`
- In the `<style>` block: remove `.draft-marker` from the selector `.eyebrow, .draft-marker { ... }` — leave `.eyebrow { ... }` only

---

### Fix 3: Add LinkedIn `sameAs` to StructuredData

**File:** `src/components/StructuredData.astro`

**Problem:** `siteConfig.social.linkedin` exists but is empty. When the user adds the LinkedIn URL, it should automatically appear in the Schema.org `Person` structured data as a `sameAs` property. This enables Google to associate the site with the LinkedIn profile — important for employer search visibility.

**Action:**
- Import or access `siteConfig` in `StructuredData.astro`
- In the `Person` schema object, add a `sameAs` array that includes all non-empty social URLs from `siteConfig.social`
- Guard with a conditional: only emit `sameAs` when at least one social URL is non-empty

**Pattern:**
```ts
const socialLinks = Object.values(siteConfig.social).filter(Boolean);
// then in schema JSON:
...(socialLinks.length > 0 && { sameAs: socialLinks }),
```

---

### Fix 4: Verify Footer social link empty-state

**File:** `src/components/Footer.astro`

**Action (verify only, fix if broken):**
- Read Footer.astro
- Confirm that social link entries are conditionally rendered — i.e., a link is not emitted when its URL value is an empty string
- If Footer currently renders empty `<a href="">` anchors for social links, fix it to skip links with empty URLs
- Do not add new social icons or change the Footer layout

---

## Files To Read Before Starting

1. `src/config.ts` — understand current siteConfig shape; all fixes reference it
2. `src/components/StructuredData.astro` — understand current Person schema before adding `sameAs`
3. `src/components/Footer.astro` — verify social link conditional rendering
4. `src/components/SEO.astro` — understand OG tag structure (read-only context)
5. `src/pages/about.astro` — locate `draft-marker` class in HTML and CSS

---

## Do Not Touch

- `src/content/` (any file): content layer is complete and correct
- `docs/site-transformation/`: prior planning and audit records — reference only
- `backups/`: source backups
- `src/config.ts` social URLs: leave all social link values as-is (empty strings) — the user will add LinkedIn manually after receiving the URL

---

## User Actions Required (Codex Cannot Do These)

These are not Codex tasks. Flag completion and note these remain open:

a. Add LinkedIn profile URL to `siteConfig.social.linkedin` in `src/config.ts`

b. Create and place an OG image at `public/og-image.jpg` (1200×630 px recommended) for LinkedIn/Twitter share previews

c. Commit pending git changes: `src/config.ts`, `src/pages/about.astro`, `src/pages/story.astro`, `content.md`, and the untracked `src/pages/purpose.astro`

---

## Acceptance Criteria

1. `npm run check` passes with 0 errors, 0 warnings
2. `npm run build` passes; all 16+ pages build successfully
3. `siteConfig.description` no longer contains the string "AI gaming" or "showcase"
4. No element in `about.astro` uses `class="draft-marker"` in HTML or CSS
5. `StructuredData.astro` emits a `sameAs` array in the Person schema when social URLs are non-empty
6. Footer renders no `<a>` elements with empty `href` values for social links
7. No changes made to any file in `src/content/`

---

## Session Log

Prior session decisions: `docs/site-transformation/claude-audit-handover.md`
Pareto build plan: `docs/site-transformation/pareto-project-format-plan.md`
