# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the top navbar and CADE-centric homepage with a fixed left sidebar and scalable portfolio layout across all pages.

**Architecture:** Fixed 220px sidebar component replaces the `Navigation.astro` header. BaseLayout wraps main+footer in a `.page-body` div that offsets 220px from the sidebar. Homepage switches to a two-column grid (hero+projects left, sticky Field Notes right). Project pages gain a `ProjectTabs` sub-nav with `/decisions` sub-page.

**Tech Stack:** Astro 5, content collections (`projects`, `fieldNotes`), `Astro.url.pathname` for active-link detection, CSS custom properties (`--color-bg`, `--color-border`, `--color-accent`, `--color-text`, `--color-text-secondary`, `--color-text-muted`, `--color-bg-secondary`)

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/components/Sidebar.astro` | Create | Fixed 220px sidebar — identity, nav, LinkedIn, ThemeToggle |
| `src/components/ProjectTabs.astro` | Create | Tab sub-nav for Overview / Decisions on project pages |
| `src/layouts/BaseLayout.astro` | Modify | Swap Navigation header → Sidebar; wrap content in `.page-body` |
| `src/pages/index.astro` | Rewrite | Two-column homepage: hero+callouts+projects left, Field Notes right |
| `src/pages/projects/[slug]/index.astro` | Modify | Add ProjectTabs after case-study-header |
| `src/pages/projects/[slug]/decisions.astro` | Create | Decisions sub-page pulling `keyDecisions` from project data |
| `src/pages/about.astro` | Rewrite | Merged page: who / why / how / what / contact |
| `src/config.ts` | Modify | Nav reduced to Projects, Field Notes, About |
| `src/pages/purpose.astro` | Delete | Content absorbed into about |
| `src/pages/story.astro` | Delete | Content absorbed into about |
| `src/pages/ai-skills.astro` | Delete | Was already a redirect; no real content |
| `src/pages/methods.astro` | Delete | Content absorbed into about |
| `src/pages/decisions/index.astro` | Delete | Top-level decisions retired |
| `src/pages/decisions/[slug].astro` | Delete | Top-level decisions retired |
| `src/pages/model-workbench.astro` | Delete | Retired |
| `src/pages/model-workbench/[slug].astro` | Delete | Retired |
| `src/components/Navigation.astro` | Delete | Replaced by Sidebar |

---

### Task 1: Create `src/components/Sidebar.astro`

**Files:**
- Create: `src/components/Sidebar.astro`

- [ ] **Step 1: Create the file**

```astro
---
import ThemeToggle from './ThemeToggle.astro';
import { siteConfig } from '../config';

const currentPath = Astro.url.pathname;

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Field Notes', href: '/field-notes' },
  { label: 'About', href: '/about' },
];

const isActive = (href: string) => {
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
};
---

<aside class="sidebar" aria-label="Site navigation">
  <div class="sidebar-identity">
    <p class="sidebar-name">Vincent "TJ" Taijeron</p>
    <p class="sidebar-role">AI Practitioner / Military Systems</p>
  </div>

  <nav aria-label="Main navigation">
    <ul class="sidebar-nav">
      {navItems.map((item) => (
        <li>
          <a
            href={item.href}
            class:list={['sidebar-link', { 'sidebar-link--active': isActive(item.href) }]}
            aria-current={isActive(item.href) ? 'page' : undefined}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>

  <div class="sidebar-footer">
    <div class="sidebar-social">
      <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <ThemeToggle />
  </div>
</aside>

<script>
  function updateSidebarNav() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll<HTMLAnchorElement>('.sidebar-link');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      const active = href === '/' ? currentPath === '/' : !!href && currentPath.startsWith(href);
      link.classList.toggle('sidebar-link--active', active);
      if (active) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
  document.addEventListener('astro:page-load', updateSidebarNav);
</script>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 220px;
    background: var(--color-bg-secondary);
    border-right: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1.75rem;
    z-index: 100;
    overflow-y: auto;
  }

  .sidebar-identity {
    margin-bottom: 3rem;
  }

  .sidebar-name {
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.01em;
    margin-bottom: 0.35rem;
    line-height: 1.3;
  }

  .sidebar-role {
    font-size: 0.72rem;
    color: var(--color-accent);
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: 0.01em;
    margin: 0;
  }

  .sidebar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }

  .sidebar-link {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    text-decoration: none;
    border-radius: 6px;
    transition: color 0.15s, background 0.15s;
    font-weight: 400;
  }

  .sidebar-link:hover {
    color: var(--color-text);
    background: color-mix(in srgb, var(--color-accent) 8%, transparent);
  }

  .sidebar-link--active {
    color: var(--color-text);
    font-weight: 600;
    background: color-mix(in srgb, var(--color-accent) 10%, transparent);
  }

  .sidebar-footer {
    border-top: 1px solid var(--color-border);
    padding-top: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .sidebar-social a {
    font-size: 0.75rem;
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.15s;
  }

  .sidebar-social a:hover {
    opacity: 0.8;
  }
</style>
```

- [ ] **Step 2: Verify file exists**

```bash
ls src/components/Sidebar.astro
```

Expected: file listed with no error.

- [ ] **Step 3: Commit**

```bash
git add src/components/Sidebar.astro
git commit -m "feat: add Sidebar component with identity, nav, LinkedIn, and ThemeToggle"
```

---

### Task 2: Update `src/layouts/BaseLayout.astro`

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Replace Navigation import with Sidebar**

In `src/layouts/BaseLayout.astro`, line 43:

Old:
```astro
import Navigation from '../components/Navigation.astro';
```

New:
```astro
import Sidebar from '../components/Sidebar.astro';
```

- [ ] **Step 2: Replace body structure**

Old (lines 106–113):
```astro
  <body>
    <header class="site-header" transition:persist>
      <Navigation />
    </header>
    <main>
      <slot />
    </main>
    <Footer />
  </body>
```

New:
```astro
  <body>
    <Sidebar />
    <div class="page-body">
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </body>
```

- [ ] **Step 3: Replace body CSS**

Old `<style>` block (lines 88–104):
```css
    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    main {
      flex: 1;
    }
    
    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
    }
```

New:
```css
    body {
      min-height: 100vh;
    }

    .page-body {
      margin-left: 220px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }
```

- [ ] **Step 4: Start dev server and verify sidebar appears**

```bash
npm run dev
```

Open `http://localhost:4321` — confirm sidebar visible on left, content offset 220px right, ThemeToggle and LinkedIn link in sidebar footer.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: swap top nav header for fixed left Sidebar in BaseLayout"
```

---

### Task 3: Rewrite `src/pages/index.astro`

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace the entire file**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SEO from '../components/SEO.astro';
import StructuredData from '../components/StructuredData.astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config';

const allProjects = await getCollection('projects');
const cadeProject = allProjects.find((p) => p.id === 'cade');

const fieldNotes = await getCollection('fieldNotes');
const recentNotes = fieldNotes
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
  .slice(0, 4);

const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
---

<BaseLayout>
  <SEO
    slot="head"
    title={siteConfig.title}
    description={siteConfig.description}
    type="website"
    noSuffix
  />
  <StructuredData type="WebSite" />
  <StructuredData type="Person" />

  <div class="home-content">
    <!-- Left column -->
    <div class="main-left">

      <!-- Hero -->
      <section class="hero">
        <p class="hero-eyebrow">AI PRACTITIONER · MILITARY SYSTEMS</p>
        <h1 class="hero-headline">
          I build real systems.<br />
          <em>Not experiments.</em>
        </h1>
        <p class="hero-sub">
          AI-powered tools for military training and simulation — governed workflows,
          repeatable outputs, real deployments.
        </p>
        <div class="hero-ctas">
          <a href="/projects" class="btn-primary">See Projects →</a>
          <a href="/field-notes" class="btn-ghost">Read Field Notes</a>
        </div>
      </section>

      <!-- Capability callouts -->
      <section class="capabilities">
        <div class="capability-grid">
          <div class="capability-item">
            <p class="capability-title">Governed AI Workflows</p>
            <p class="capability-desc">Structured prompting with auditable, repeatable outputs — not black-box generation.</p>
          </div>
          <div class="capability-item">
            <p class="capability-title">Military Exercise Design</p>
            <p class="capability-desc">OPORD-driven systems built for controller usability under field conditions.</p>
          </div>
          <div class="capability-item">
            <p class="capability-title">Production AI Pipelines</p>
            <p class="capability-desc">From prompt to deployable package — traceable, versioned, and operator-ready.</p>
          </div>
        </div>
      </section>

      <!-- Featured project: CADE -->
      {cadeProject && (
        <section class="featured-section">
          <p class="section-label">Featured Project</p>
          <div class="featured-card">
            <div class="featured-card-header">
              <span class="featured-title">{cadeProject.data.title}</span>
              <span class="featured-badge">Capstone</span>
            </div>
            <p class="featured-meta">{cadeProject.data.year} · {cadeProject.data.role}</p>
            <p class="featured-desc">{cadeProject.data.outcomeSummary}</p>
            <div class="featured-links">
              <a href={`/projects/${cadeProject.id}/`} class="featured-link-primary">View case study →</a>
              <a href={`/projects/${cadeProject.id}/decisions`} class="featured-link-secondary">Decisions</a>
            </div>
          </div>
        </section>
      )}

      <!-- More projects placeholder -->
      <section class="more-projects">
        <p class="section-label">More Projects</p>
        <div class="placeholder-cards">
          <div class="placeholder-card">
            <p class="placeholder-label">Project 2</p>
            <p class="placeholder-status">Coming soon</p>
          </div>
          <div class="placeholder-card">
            <p class="placeholder-label">Project 3</p>
            <p class="placeholder-status">Coming soon</p>
          </div>
          <div class="placeholder-card">
            <p class="placeholder-label">Project 4</p>
            <p class="placeholder-status">Coming soon</p>
          </div>
        </div>
        <a href="/projects" class="all-projects-link">See all projects →</a>
      </section>

    </div><!-- /.main-left -->

    <!-- Right column: Field Notes -->
    <aside class="main-right">
      <div class="field-notes-panel">
        <div class="field-notes-header">
          <p class="section-label">Field Notes</p>
          <a href="/field-notes" class="all-notes-link">All notes →</a>
        </div>
        {recentNotes.map((note) => (
          <a href={`/field-notes/${note.id}`} class="note-item">
            <span class="note-title">{note.data.title}</span>
            <span class="note-date">{formatDate(note.data.date)}</span>
          </a>
        ))}
      </div>
    </aside>

  </div><!-- /.home-content -->

  <style>
    .home-content {
      display: grid;
      grid-template-columns: 1fr 280px;
      gap: 3rem;
      align-items: start;
      padding: 4rem 3rem 4rem 4rem;
      max-width: 1280px;
    }

    .main-left {
      min-width: 0;
    }

    .main-right {
      position: sticky;
      top: 3rem;
    }

    /* Hero */
    .hero {
      margin-bottom: 4rem;
      padding-bottom: 4rem;
      border-bottom: 1px solid var(--color-border);
    }

    .hero-eyebrow {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-accent);
      margin-bottom: 1.25rem;
    }

    .hero-headline {
      font-size: clamp(2.25rem, 5vw, 3.5rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: var(--color-text);
      margin-bottom: 1.25rem;
    }

    .hero-headline em {
      font-style: normal;
      color: var(--color-accent);
    }

    .hero-sub {
      font-size: 1.0625rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
      max-width: 480px;
      margin-bottom: 2rem;
    }

    .hero-ctas {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      background: var(--color-accent);
      color: #fff;
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0.6rem 1.25rem;
      border-radius: 8px;
      text-decoration: none;
      transition: opacity 0.15s;
    }

    .btn-primary:hover { opacity: 0.88; }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.6rem 1.25rem;
      border-radius: 8px;
      border: 1px solid var(--color-border);
      text-decoration: none;
      transition: color 0.15s, border-color 0.15s;
    }

    .btn-ghost:hover {
      color: var(--color-text);
      border-color: var(--color-text-muted);
    }

    /* Shared label */
    .section-label {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-text-muted);
      margin-bottom: 1.25rem;
    }

    /* Capability callouts */
    .capabilities {
      margin-bottom: 4rem;
    }

    .capability-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .capability-item {
      padding: 1.25rem;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      background: var(--color-bg-secondary);
    }

    .capability-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 0.5rem;
    }

    .capability-desc {
      font-size: 0.85rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
    }

    /* Featured card */
    .featured-section {
      margin-bottom: 3rem;
    }

    .featured-card {
      background: linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 8%, transparent), color-mix(in srgb, #fbbf24 4%, transparent));
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 1.75rem 2rem;
      transition: border-color 0.2s;
    }

    .featured-card:hover { border-color: var(--color-accent); }

    .featured-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .featured-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--color-text);
    }

    .featured-badge {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0.25rem 0.6rem;
      border-radius: 4px;
      background: color-mix(in srgb, var(--color-accent) 15%, transparent);
      color: var(--color-accent);
    }

    .featured-meta {
      font-size: 0.825rem;
      color: var(--color-text-muted);
      margin-bottom: 0.85rem;
    }

    .featured-desc {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: var(--color-text-secondary);
      margin-bottom: 1.25rem;
    }

    .featured-links {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .featured-link-primary {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-accent);
      text-decoration: none;
    }

    .featured-link-primary:hover { text-decoration: underline; }

    .featured-link-secondary {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      text-decoration: none;
    }

    .featured-link-secondary:hover { color: var(--color-text-secondary); }

    /* More projects */
    .more-projects {
      margin-bottom: 3rem;
    }

    .placeholder-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .placeholder-card {
      padding: 1.25rem;
      border: 1px dashed var(--color-border);
      border-radius: 12px;
      opacity: 0.5;
    }

    .placeholder-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-text-muted);
      margin-bottom: 0.25rem;
    }

    .placeholder-status {
      font-size: 0.78rem;
      color: var(--color-text-muted);
    }

    .all-projects-link {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-accent);
      text-decoration: none;
    }

    .all-projects-link:hover { text-decoration: underline; }

    /* Field Notes panel */
    .field-notes-panel {
      border: 1px solid var(--color-border);
      border-radius: 12px;
      background: var(--color-bg-secondary);
      padding: 1.25rem 1.5rem;
    }

    .field-notes-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .field-notes-header .section-label {
      margin-bottom: 0;
    }

    .all-notes-link {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-accent);
      text-decoration: none;
    }

    .all-notes-link:hover { text-decoration: underline; }

    .note-item {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      padding: 0.85rem 0;
      border-bottom: 1px solid var(--color-border);
      text-decoration: none;
    }

    .note-item:last-child { border-bottom: none; }

    .note-item:hover .note-title { color: var(--color-text); }

    .note-title {
      font-size: 0.875rem;
      line-height: 1.45;
      color: var(--color-text-secondary);
      transition: color 0.15s;
    }

    .note-date {
      font-size: 0.72rem;
      color: var(--color-text-muted);
    }
  </style>
</BaseLayout>
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:4321` — confirm:
- Left column: hero with "I build real systems. / Not experiments." (Not experiments. in accent blue)
- Capability callouts in 3-column grid below hero
- CADE featured card below callouts
- Right column: sticky Field Notes panel with 4 recent posts

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite homepage with two-column layout and sticky Field Notes panel"
```

---

### Task 4: Create `src/components/ProjectTabs.astro`

**Files:**
- Create: `src/components/ProjectTabs.astro`

- [ ] **Step 1: Create the file**

```astro
---
interface Props {
  projectSlug: string;
}

const { projectSlug } = Astro.props;
const currentPath = Astro.url.pathname;

const overviewHref = `/projects/${projectSlug}/`;
const decisionsHref = `/projects/${projectSlug}/decisions`;

const isDecisions = currentPath.endsWith('/decisions');
const isOverview = !isDecisions;
---

<nav class="project-tabs" aria-label="Project sections">
  <a
    href={overviewHref}
    class:list={['tab', { 'tab--active': isOverview }]}
    aria-current={isOverview ? 'page' : undefined}
  >
    Overview
  </a>
  <a
    href={decisionsHref}
    class:list={['tab', { 'tab--active': isDecisions }]}
    aria-current={isDecisions ? 'page' : undefined}
  >
    Decisions
  </a>
</nav>

<style>
  .project-tabs {
    display: flex;
    gap: 0;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 2rem;
  }

  .tab {
    display: block;
    padding: 0.65rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-muted);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color 0.15s, border-color 0.15s;
  }

  .tab:hover {
    color: var(--color-text-secondary);
  }

  .tab--active {
    color: var(--color-text);
    font-weight: 600;
    border-bottom-color: var(--color-accent);
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProjectTabs.astro
git commit -m "feat: add ProjectTabs component for Overview/Decisions sub-nav on project pages"
```

---

### Task 5: Update `src/pages/projects/[slug]/index.astro` — add ProjectTabs

**Files:**
- Modify: `src/pages/projects/[slug]/index.astro`

- [ ] **Step 1: Add import**

After line 40 (`import { getCollection, getEntry, render } from 'astro:content';`), add:

```astro
import ProjectTabs from '../../../components/ProjectTabs.astro';
```

- [ ] **Step 2: Insert ProjectTabs into template**

Find the closing `</header>` of `.case-study-header` (line 207 in current file, after `<p class="outcome-summary">{outcomeSummary}</p>`). Insert `<ProjectTabs projectSlug={slug!} />` immediately after:

Old:
```astro
      <p class="outcome-summary">{outcomeSummary}</p>
    </header>

    <section class="portfolio-context"
```

New:
```astro
      <p class="outcome-summary">{outcomeSummary}</p>
    </header>

    <ProjectTabs projectSlug={slug!} />

    <section class="portfolio-context"
```

- [ ] **Step 3: Verify in browser**

Open `http://localhost:4321/projects/cade/` — confirm Overview | Decisions tab bar appears below the case-study header, with Overview tab active (accent underline).

- [ ] **Step 4: Commit**

```bash
git add src/pages/projects/[slug]/index.astro
git commit -m "feat: add ProjectTabs sub-nav to project case study page"
```

---

### Task 6: Create `src/pages/projects/[slug]/decisions.astro`

**Files:**
- Create: `src/pages/projects/[slug]/decisions.astro`

- [ ] **Step 1: Create the file**

```astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import SEO from '../../../components/SEO.astro';
import ProjectTabs from '../../../components/ProjectTabs.astro';
import BackLink from '../../../components/BackLink.astro';
import { getCollection, getEntry } from 'astro:content';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.id },
  }));
}

const { slug } = Astro.params;
const project = await getEntry('projects', slug!);

if (!project) {
  return Astro.redirect('/404');
}

const { title, outcomeSummary, keyDecisions } = project.data;
---

<BaseLayout>
  <SEO
    slot="head"
    title={`${title} — Decisions`}
    description={`Design decisions behind ${title}: ${outcomeSummary}`}
    type="article"
  />

  <main class="decisions-page">
    <header class="decisions-header">
      <h1>{title}</h1>
      <p class="decisions-subtitle">{outcomeSummary}</p>
    </header>

    <ProjectTabs projectSlug={slug!} />

    <section class="decisions-list" aria-labelledby="decisions-heading">
      <h2 id="decisions-heading" class="sr-only">Key Design Decisions</h2>
      {keyDecisions.map((decision) => (
        <article class="decision-item">
          <h3 class="decision-title">{decision.decision}</h3>
          <div class="decision-reasoning">
            <strong>Reasoning</strong>
            <p>{decision.reasoning}</p>
          </div>
          {decision.alternatives && decision.alternatives.length > 0 && (
            <div class="decision-alternatives">
              <strong>Alternatives considered</strong>
              <ul>
                {decision.alternatives.map((alt) => (
                  <li>{alt}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </section>

    <BackLink href={`/projects/${slug}/`} text="Back to overview" />
  </main>

  <style>
    .decisions-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }

    .decisions-header {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--color-border);
    }

    .decisions-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }

    .decisions-subtitle {
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .decisions-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .decision-item {
      padding: 1.5rem;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      background: var(--color-bg-secondary);
    }

    .decision-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--color-text);
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    .decision-reasoning,
    .decision-alternatives {
      margin-top: 0.75rem;
    }

    .decision-reasoning strong,
    .decision-alternatives strong {
      display: block;
      font-size: 0.8125rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--color-text-muted);
      margin-bottom: 0.5rem;
    }

    .decision-reasoning p {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
    }

    .decision-alternatives ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .decision-alternatives li {
      font-size: 1rem;
      line-height: 1.65;
      padding: 0.35rem 0 0.35rem 1.25rem;
      position: relative;
      color: var(--color-text-secondary);
    }

    .decision-alternatives li::before {
      content: "·";
      position: absolute;
      left: 0;
      color: var(--color-accent);
      font-weight: 700;
    }
  </style>
</BaseLayout>
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:4321/projects/cade/decisions` — confirm:
- Header shows CADE title and summary
- Decisions tab in ProjectTabs is active (accent underline)
- Each `keyDecision` from CADE's project data renders as a card with reasoning and alternatives

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/[slug]/decisions.astro
git commit -m "feat: add /projects/[slug]/decisions sub-page with ProjectTabs"
```

---

### Task 7: Rewrite `src/pages/about.astro`

**Files:**
- Modify: `src/pages/about.astro`

This page absorbs Purpose, Story, Methods, and AI Skills into five sections: who / why / how / what / contact.

- [ ] **Step 1: Replace the entire file**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import SEO from '../components/SEO.astro';
import { siteConfig } from '../config';
---

<BaseLayout>
  <SEO
    slot="head"
    title="About"
    description="Vincent 'TJ' Taijeron — AI practitioner and military systems designer. Background, purpose, methods, and what I can do."
    type="profile"
  />

  <main class="about-page">

    <!-- 1. Who I am -->
    <section class="about-hero">
      <p class="eyebrow">About</p>
      <h1>I grew up on the island of Guam. I ended up in Mariupol. Everyone just calls me TJ.</h1>
      <p class="lead">
        Twenty years of Army service, seven years in Ukraine, and self-taught AI work aimed at one thing: making military training better.
      </p>
    </section>

    <!-- 2. Why this work -->
    <section class="about-section">
      <p class="eyebrow">Background</p>
      <h2>How I got here</h2>
      <div class="prose">
        <p>
          After 20 years in the U.S. Army, I retired and joined Northrop Grumman as a simulations specialist at the Command and General Staff College. From there I moved to West Point as a Department of the Army civilian, serving nearly seven years as deputy for the simulations center.
        </p>
        <p>
          I trained Afghan uniformed police in Khowst, then relocated to Odesa, Ukraine to develop NATO curriculum at the Ground Forces Academy. When Russia annexed Crimea, I stayed. I joined the OSCE Special Monitoring Mission Ukraine and spent seven years in-country — first leading patrols out of the Mariupol Hub, then serving as Monitor and Operations Officer with the Odessa Monitoring Team.
        </p>
        <p>
          Today I'm at the Joint Multinational Simulations Center, Mission Training Command-Graf, Germany, planning brigade and below exercises for U.S. Army units and supporting the Joint Multinational Training Group-Ukraine.
        </p>
        <p>
          Everything I know about AI, I taught myself. No courses, no certifications — just real problems that needed solving. Self-taught doesn't mean surface-level. It means I learned by doing, and the work proves it.
        </p>
      </div>
    </section>

    <!-- 3. How I approach AI -->
    <section class="about-section about-methods">
      <p class="eyebrow">Methods</p>
      <h2>A repeatable process for AI-assisted work.</h2>
      <p class="section-intro">
        AI helps me move faster, but it does not decide what the product should be. My role is to frame the problem, govern the source material, and validate the output against real acceptance criteria.
      </p>
      <div class="methods-grid">
        <article class="method-step">
          <span>01</span>
          <h3>Frame the problem before using the model</h3>
          <p>The model can't define what the product needs to do. I do that first.</p>
        </article>
        <article class="method-step">
          <span>02</span>
          <h3>Govern the source</h3>
          <p>Inputs are locked, versioned, and traceable. The model never touches the source of truth directly.</p>
        </article>
        <article class="method-step">
          <span>03</span>
          <h3>Build the workflow</h3>
          <p>Prompts are structured, tested, and repeatable — not ad hoc generation.</p>
        </article>
        <article class="method-step">
          <span>04</span>
          <h3>Review against acceptance criteria</h3>
          <p>Every output is checked against defined standards before it becomes a product.</p>
        </article>
        <article class="method-step">
          <span>05</span>
          <h3>Validate in execution</h3>
          <p>The product is tested with real people in real conditions, not just in the lab.</p>
        </article>
        <article class="method-step">
          <span>06</span>
          <h3>Iterate from evidence</h3>
          <p>Changes come from what happened in the room, not from opinion or assumption.</p>
        </article>
      </div>
    </section>

    <!-- 4. What I can do -->
    <section class="about-section">
      <p class="eyebrow">Capabilities</p>
      <h2>What I can do for you</h2>
      <div class="capabilities-list">
        <div class="capability">
          <h3>Governed AI Workflows</h3>
          <p>Structured prompting with auditable, repeatable outputs. I build pipelines where the human stays in control of every decision gate.</p>
        </div>
        <div class="capability">
          <h3>Military Exercise Design</h3>
          <p>OPORD-driven training systems built for controller usability under field conditions — from concept to executable product.</p>
        </div>
        <div class="capability">
          <h3>Production AI Pipelines</h3>
          <p>From prompt to deployable package: traceable, versioned, and operator-ready. Not demos — products that survive handoff.</p>
        </div>
        <div class="capability">
          <h3>Problem Framing</h3>
          <p>I reduce vague, high-pressure problems to clear requirements before any AI tool is involved. The framing is the hard work.</p>
        </div>
      </div>
    </section>

    <!-- 5. Contact -->
    <section class="about-cta">
      <h2>Work with me</h2>
      <p>
        I'm interested in teams that need plain explanations, careful AI use, and working products that hold up outside a demo.
      </p>
      <div class="cta-links">
        <a href={`mailto:${siteConfig.author.email}`} class="btn-primary">
          {siteConfig.author.email}
        </a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" class="btn-ghost">
          LinkedIn
        </a>
      </div>
    </section>

  </main>

  <style>
    .about-page {
      max-width: 860px;
      margin: 0 auto;
      padding: 2rem 1.5rem 4rem;
    }

    .eyebrow {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-accent);
      margin-bottom: 0.75rem;
    }

    .about-hero {
      padding: 2.5rem 0 3rem;
      border-bottom: 1px solid var(--color-border);
      margin-bottom: 3rem;
    }

    .about-hero h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      letter-spacing: -0.04em;
      line-height: 1.08;
      margin-bottom: 1.25rem;
    }

    .lead {
      font-size: clamp(1.05rem, 2vw, 1.25rem);
      line-height: 1.65;
      color: var(--color-text-secondary);
      max-width: 60ch;
    }

    .about-section {
      margin-bottom: 3.5rem;
      padding-bottom: 3.5rem;
      border-bottom: 1px solid var(--color-border);
    }

    .about-section h2 {
      font-size: clamp(1.5rem, 3.5vw, 2.25rem);
      letter-spacing: -0.025em;
      margin-bottom: 1.25rem;
    }

    .prose p {
      font-size: 1.0625rem;
      line-height: 1.75;
      color: var(--color-text-secondary);
      max-width: 68ch;
    }

    .prose p + p { margin-top: 1rem; }

    .section-intro {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
      max-width: 64ch;
      margin-bottom: 2rem;
    }

    /* Methods grid */
    .about-methods {
      background:
        linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 6%, transparent), transparent 40%),
        var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 18px;
      padding: 2rem;
    }

    .methods-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .method-step {
      padding: 1.25rem;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      background: color-mix(in srgb, var(--color-bg) 70%, transparent);
    }

    .method-step span {
      display: block;
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: var(--color-accent);
      margin-bottom: 0.75rem;
    }

    .method-step h3 {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-text);
      margin-bottom: 0.5rem;
      line-height: 1.35;
    }

    .method-step p {
      font-size: 0.875rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
    }

    /* Capabilities */
    .capabilities-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .capability {
      padding: 1.5rem;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      background: var(--color-bg-secondary);
    }

    .capability h3 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 0.6rem;
    }

    .capability p {
      font-size: 0.9375rem;
      line-height: 1.65;
      color: var(--color-text-secondary);
    }

    /* CTA */
    .about-cta {
      padding: 2rem;
      border: 1px solid var(--color-border);
      border-radius: 14px;
      background: var(--color-bg-secondary);
    }

    .about-cta h2 {
      font-size: 1.5rem;
      letter-spacing: -0.02em;
      margin-bottom: 0.75rem;
    }

    .about-cta p {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--color-text-secondary);
      max-width: 60ch;
      margin-bottom: 1.5rem;
    }

    .cta-links {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      background: var(--color-accent);
      color: #fff;
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0.6rem 1.25rem;
      border-radius: 8px;
      text-decoration: none;
      transition: opacity 0.15s;
    }

    .btn-primary:hover { opacity: 0.88; }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.6rem 1.25rem;
      border-radius: 8px;
      border: 1px solid var(--color-border);
      text-decoration: none;
      transition: color 0.15s, border-color 0.15s;
    }

    .btn-ghost:hover {
      color: var(--color-text);
      border-color: var(--color-text-muted);
    }

    @media (max-width: 760px) {
      .methods-grid,
      .capabilities-list {
        grid-template-columns: 1fr;
      }
    }
  </style>
</BaseLayout>
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:4321/about` — confirm 5 sections render, sidebar shows About link as active.

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: rewrite about page with merged who/why/how/what/contact sections"
```

---

### Task 8: Update config and retire old routes

**Files:**
- Modify: `src/config.ts`
- Delete: `src/pages/purpose.astro`, `src/pages/story.astro`, `src/pages/ai-skills.astro`, `src/pages/methods.astro`
- Delete: `src/pages/decisions/index.astro`, `src/pages/decisions/[slug].astro`
- Delete: `src/pages/model-workbench.astro`, `src/pages/model-workbench/[slug].astro`
- Delete: `src/components/Navigation.astro`

- [ ] **Step 1: Update `src/config.ts` nav**

Old `nav` array (lines 22–32):
```ts
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Purpose', href: '/purpose' },
    { label: 'Methods', href: '/methods' },
    { label: 'Workbench', href: '/model-workbench' },
    { label: 'CADE', href: '/projects/cade' },
    { label: 'Field Notes', href: '/field-notes' },
    { label: 'Decisions', href: '/decisions' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/#contact' },
  ],
```

New:
```ts
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Field Notes', href: '/field-notes' },
    { label: 'About', href: '/about' },
  ],
```

- [ ] **Step 2: Delete retired pages**

```bash
rm src/pages/purpose.astro
rm src/pages/story.astro
rm src/pages/ai-skills.astro
rm src/pages/methods.astro
rm src/pages/decisions/index.astro
rm src/pages/decisions/[slug].astro
rm src/pages/model-workbench.astro
rm "src/pages/model-workbench/[slug].astro"
rm src/components/Navigation.astro
```

- [ ] **Step 3: Verify no build errors**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes without errors. If any component still imports `Navigation`, fix the import.

- [ ] **Step 4: Verify 404 on retired routes**

With dev server running (`npm run dev`), confirm these return 404:
- `http://localhost:4321/purpose`
- `http://localhost:4321/story`
- `http://localhost:4321/methods`
- `http://localhost:4321/decisions`
- `http://localhost:4321/model-workbench`

- [ ] **Step 5: Commit**

```bash
git add src/config.ts
git rm src/pages/purpose.astro src/pages/story.astro src/pages/ai-skills.astro src/pages/methods.astro
git rm src/pages/decisions/index.astro src/pages/decisions/[slug].astro
git rm src/pages/model-workbench.astro "src/pages/model-workbench/[slug].astro"
git rm src/components/Navigation.astro
git commit -m "feat: retire old routes and simplify nav to Projects/Field Notes/About"
```

---

### Task 9: Final verification walkthrough

**Files:** None (read-only verification)

- [ ] **Step 1: Full build check**

```bash
npm run build
```

Expected: zero errors, zero warnings about missing files or broken imports.

- [ ] **Step 2: Sidebar active-link check**

Visit each route and confirm the correct sidebar link highlights:

| URL | Active link |
|---|---|
| `/` | Home |
| `/projects` | Projects |
| `/projects/cade/` | Projects |
| `/projects/cade/decisions` | Projects |
| `/field-notes` | Field Notes |
| `/field-notes/[any-slug]` | Field Notes |
| `/about` | About |

- [ ] **Step 3: ProjectTabs active-tab check**

- `/projects/cade/` → Overview tab has accent underline, Decisions tab is muted
- `/projects/cade/decisions` → Decisions tab has accent underline, Overview tab is muted

- [ ] **Step 4: Homepage columns check**

- Left column: hero → capability callouts → CADE card → placeholder cards
- Right column: Field Notes panel with 4 recent posts (sticky while scrolling)
- No content bleeds into wrong column

- [ ] **Step 5: About page sections check**

Five sections visible: Who I am / How I got here / Methods grid / Capabilities grid / Contact CTA

- [ ] **Step 6: Commit final verification marker**

```bash
git commit --allow-empty -m "chore: portfolio redesign complete — sidebar, homepage, project tabs, about merge"
```
