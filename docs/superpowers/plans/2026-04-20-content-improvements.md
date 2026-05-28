# Content Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve the site's content to more compellingly communicate TJ's value as an AI-Integrator — adding a "What I Do" section, rewriting the About copy, and sharpening the Projects section with outcome-focused language.

**Architecture:** Four targeted edits to existing Astro components plus one new component (`WhatIDo.astro`), wired into `index.astro` between About and Skills. All content changes are self-contained within component files — no data files or schemas change.

**Tech Stack:** Astro, Tailwind CSS v4

---

## File Map

| File | Change |
|------|--------|
| `src/components/About.astro` | Rewrite bio copy — compelling narrative, not chronological history |
| `src/components/WhatIDo.astro` | New section: AI-Integrator role explained in 3 capability pillars |
| `src/pages/index.astro` | Add `WhatIDo` between `About` and `Skills` |
| `src/components/Projects.astro` | Update project bullets with outcome-focused language |
| `src/pages/index.astro` | Add `og:image` meta tag |

---

## Task 1: Rewrite About Copy

**Files:**
- Modify: `src/components/About.astro`

- [ ] **Step 1: Replace About component content**

Overwrite `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/components/About.astro` with:

```astro
---
---
<section id="about" class="py-24 px-6 bg-gray-900 text-white">
  <div class="max-w-3xl mx-auto">
    <div class="flex flex-col sm:flex-row items-start gap-8 mb-8">
      <img
        src="/avatar.jpg"
        alt="Vincent TJ"
        class="w-28 h-28 rounded-full object-cover shrink-0 border-2 border-gray-700"
      />
      <div>
        <h2 class="text-3xl font-bold mb-4 text-white">About</h2>
        <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            I spent 38 years in the US Army as a Field Artillery officer — the last decade of it living and working in Ukraine, teaching at the Odessa Military Academy and monitoring the conflict in Eastern Ukraine for the OSCE.
          </p>
          <p>
            In 2025 I became the AI-Integrator for a multinational military training team. My job is to make AI operationally useful under real constraints: short timelines, language barriers, high stakes, and no second chances. I design the workflows, build the tools, and hold the process together so the team can move faster without losing judgment.
          </p>
          <p class="text-blue-400 font-medium">
            Available for remote roles beginning Fall 2026.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && npm run build
```
Expected: clean build, no errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && git add src/components/About.astro && git commit -m "content: rewrite About with narrative bio"
```

---

## Task 2: Add "What I Do" Section

**Files:**
- Create: `src/components/WhatIDo.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create WhatIDo component**

Create `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/components/WhatIDo.astro`:

```astro
---
const pillars = [
  {
    title: "Technical Literacy",
    body: "I know when AI output is plausible but wrong. I constrain, validate, and govern outputs at each stage so speed doesn't displace judgment. AI accelerates the work — I determine what's usable.",
  },
  {
    title: "Systems Thinking",
    body: "I see AI-assisted workflows as pipelines, not isolated tasks. Each product depends on the one before it. I design the chain, hold it together through iteration, and make sure nothing downstream breaks when something upstream changes.",
  },
  {
    title: "Domain & Delivery",
    body: "AI cannot assess what an organization truly needs or manage the risk of a first attempt. I can. Operational literacy, requirements translation, and the ability to maintain institutional confidence under a one-shot timeline — that's the work AI can't do.",
  },
];
---
<section id="what-i-do" class="py-24 px-6 bg-gray-900 text-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">What I Do</h2>
    <p class="text-gray-400 text-lg mb-12 max-w-2xl">
      The AI-Integrator role sits at the intersection of three capabilities that are each necessary and none individually sufficient.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pillars.map((pillar) => (
        <div class="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-blue-400 mb-3">{pillar.title}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">{pillar.body}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add WhatIDo to index.astro between About and Skills**

Overwrite `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/pages/index.astro`:

```astro
---
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import WhatIDo from '../components/WhatIDo.astro';
import Skills from '../components/Skills.astro';
import Projects from '../components/Projects.astro';
import Contact from '../components/Contact.astro';
import '../styles/global.css';
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Vincent 'TJ' Taijeron — AI-Integrator building AI systems for military planning. Available for remote roles beginning Fall 2026."
    />
    <meta property="og:title" content='Vincent "TJ" Taijeron — AI-Integrator' />
    <meta
      property="og:description"
      content="I build AI systems that make military planning faster, clearer, and executable under pressure."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/avatar.jpg" />
    <title>Vincent "TJ" Taijeron — AI-Integrator</title>
  </head>
  <body class="bg-gray-950 antialiased">
    <Hero />
    <About />
    <WhatIDo />
    <Skills />
    <Projects />
    <Contact />
  </body>
</html>
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && npm run build
```
Expected: clean build, no errors.

- [ ] **Step 4: Commit**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && git add src/components/WhatIDo.astro src/pages/index.astro && git commit -m "feat: add What I Do section with AI-Integrator capability pillars"
```

---

## Task 3: Sharpen Projects with Outcome-Focused Language

**Files:**
- Modify: `src/content/projects/cade.md`
- Modify: `src/content/projects/deck-builder.md`
- Modify: `src/content/projects/orders-production.md`

- [ ] **Step 1: Update CADE project file**

Overwrite `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/projects/cade.md`:

```markdown
---
title: "CADE — Combined Arms Decision Exercise"
description: "A consequence-based staff decision exercise built from scratch for Ukrainian officer training — designed, pipelined, and validated in under 8 weeks."
order: 1
bullets:
  - "Designed the exercise concept and built the full AI pipeline: scenario → OPORD with annexes → runbook → controller package"
  - "Validated on first attempt (29–30 January 2026) with a mixed-language, mixed-experience audience — earned institutional approval for repeat execution"
  - "Demonstrated that a single AI-Integrator with the right toolchain can deliver what previously required a full planning team"
---
```

- [ ] **Step 2: Update Deck Builder project file**

Overwrite `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/projects/deck-builder.md`:

```markdown
---
title: "Deck Builder"
description: "AI-powered briefing generator that turns Markdown slide scripts into mission-ready PPTX and HTML briefings."
order: 2
bullets:
  - "Eliminated manual slide formatting — planners write content, the pipeline handles production"
  - "Supports decision briefs, instruction briefs, and OPORD briefings with brand-standard templates"
  - "Includes AI skills for scripting slide content directly from source documents"
---
```

- [ ] **Step 3: Update Orders Production project file**

Overwrite `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/projects/orders-production.md`:

```markdown
---
title: "Orders Production"
description: "A Streamlit GUI backed by the Claude API for drafting military planning documents grounded in US Army and NATO doctrine."
order: 3
bullets:
  - "Replaced manual OPORD drafting with an AI-assisted pipeline — OPORD Writer, Narrative Writer, and Decision Support Matrix in one tool"
  - "Built against US Army doctrine (FM 5-0, FM 6-0) and NATO standards (AJP-5, NATO-COPD) with linting scripts to enforce formatting"
  - "Puts professional-grade planning document production within reach of teams without a dedicated plans officer"
---
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && npm run build
```
Expected: clean build, no errors.

- [ ] **Step 5: Commit and push**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && git add src/content/projects/ && git commit -m "content: outcome-focused project descriptions" && git push
```

---

## Definition of Done

- [ ] About section tells a story, not a timeline
- [ ] "What I Do" section appears between About and Skills with three capability pillars
- [ ] All three project descriptions lead with outcomes, not just features
- [ ] `og:image` meta tag is set
- [ ] Build is clean and changes are pushed to GitHub
