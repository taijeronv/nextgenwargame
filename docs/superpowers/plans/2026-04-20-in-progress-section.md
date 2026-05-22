# In Progress Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an "In Progress" section below Projects that showcases TJ's active research and experimental AI work, distinct from delivered projects.

**Architecture:** One new `InProgress.astro` component reading from a new `src/content/research/` content collection. Each research item is a Markdown file with frontmatter. The section uses a lighter card design than Projects to signal "exploratory" vs "delivered." Wire into `index.astro` between Projects and Contact.

**Tech Stack:** Astro content collections, Tailwind CSS v4

---

## File Map

| File | Change |
|------|--------|
| `src/content/config.ts` | Add `research` collection schema |
| `src/content/research/wikillm.md` | WikiLLM exercise knowledge base |
| `src/content/research/adjudication-model.md` | LLM-driven staffex adjudication |
| `src/content/research/skill-development.md` | Custom skill.md library |
| `src/content/research/military-sme.md` | Military SME agent / experience capture |
| `src/components/InProgress.astro` | New section component |
| `src/pages/index.astro` | Add InProgress between Projects and Contact |

---

## Task 1: Add Research Collection Schema

**Files:**
- Modify: `src/content/config.ts`

- [ ] **Step 1: Update content collection config**

Overwrite `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    bullets: z.array(z.string()),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    status: z.string(),
  }),
});

export const collections = { projects, research };
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && npm run build
```
Expected: clean build, no errors.

- [ ] **Step 3: Commit**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && git add src/content/config.ts && git commit -m "feat: add research content collection schema"
```

---

## Task 2: Create Research Content Files

**Files:**
- Create: `src/content/research/wikillm.md`
- Create: `src/content/research/adjudication-model.md`
- Create: `src/content/research/skill-development.md`
- Create: `src/content/research/military-sme.md`

- [ ] **Step 1: Create WikiLLM file**

Create `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/research/wikillm.md`:

```markdown
---
title: "Exercise WikiLLM"
description: "Exploring Andrej Karpathy's WikiLLM architecture as a locally hosted knowledge base for military exercise design — a purpose-built alternative to general-purpose retrieval."
order: 1
status: "Exploring"
---
```

- [ ] **Step 2: Create Adjudication Model file**

Create `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/research/adjudication-model.md`:

```markdown
---
title: "LLM Adjudication Model"
description: "An LLM-driven adjudication engine for staff exercises — replacing fixed outcome rules with a model that evaluates staff decisions against doctrine and context. Designed to link with the Exercise WikiLLM as its knowledge base."
order: 2
status: "In Development"
---
```

- [ ] **Step 3: Create Skill Development file**

Create `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/research/skill-development.md`:

```markdown
---
title: "Custom AI Skills Library"
description: "An ongoing personal library of skill.md files that encode repeatable workflows for military planning, exercise design, and document production — reusable across Claude Code, Gemini, and Codex."
order: 3
status: "Ongoing"
---
```

- [ ] **Step 4: Create Military SME file**

Create `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/content/research/military-sme.md`:

```markdown
---
title: "Military SME Agent"
description: "A domain expert agent that can plan, advise, execute, and educate across warfighting functions. Built around per-function LLM wikis and an experience capture layer that pairs tacit operational knowledge with official Army doctrine — a complete operational brain, not just a document retriever."
order: 4
status: "Research"
---
```

- [ ] **Step 5: Verify build**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && npm run build
```
Expected: clean build, no errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && git add src/content/research/ && git commit -m "feat: add in-progress research content files"
```

---

## Task 3: Build InProgress Component + Wire into index.astro

**Files:**
- Create: `src/components/InProgress.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create InProgress component**

Create `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/components/InProgress.astro`:

```astro
---
import { getCollection } from 'astro:content';
const allResearch = await getCollection('research');
const items = allResearch.sort((a, b) => a.data.order - b.data.order);

const statusColor: Record<string, string> = {
  "Exploring": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "In Development": "text-blue-400 bg-blue-400/10 border-blue-400/20",
  "Ongoing": "text-green-400 bg-green-400/10 border-green-400/20",
  "Research": "text-purple-400 bg-purple-400/10 border-purple-400/20",
};
---
<section id="in-progress" class="py-24 px-6 bg-gray-950 text-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">In Progress</h2>
    <p class="text-gray-400 text-lg mb-12 max-w-2xl">
      Active research and experiments — work that isn't shipped yet but shapes where I'm headed.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <div class="border border-gray-800 rounded-xl p-6 bg-gray-900/50">
          <div class="flex items-start justify-between gap-4 mb-3">
            <h3 class="text-lg font-semibold text-white">{item.data.title}</h3>
            <span class={`text-xs font-medium px-2 py-1 rounded-full border shrink-0 ${statusColor[item.data.status] ?? 'text-gray-400 bg-gray-400/10 border-gray-400/20'}`}>
              {item.data.status}
            </span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">{item.data.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Wire InProgress into index.astro**

Overwrite `/Users/redleg/_repos/ai-workspaces/taijeronv-info/src/pages/index.astro`:

```astro
---
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import WhatIDo from '../components/WhatIDo.astro';
import Skills from '../components/Skills.astro';
import Projects from '../components/Projects.astro';
import InProgress from '../components/InProgress.astro';
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
    <InProgress />
    <Contact />
  </body>
</html>
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && npm run build
```
Expected: clean build, no errors.

- [ ] **Step 4: Commit and push**

```bash
cd /Users/redleg/_repos/ai-workspaces/taijeronv-info && git add src/components/InProgress.astro src/pages/index.astro && git commit -m "feat: In Progress section with research items" && git push
```

---

## Definition of Done

- [ ] Four research items render in a 2-column grid below Projects
- [ ] Each card shows title, status badge (color-coded), and description
- [ ] Section appears between Projects and Contact
- [ ] Build is clean and pushed to GitHub
