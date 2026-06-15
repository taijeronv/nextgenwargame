---
title: Creator Brief — CADE
version: v1.0
status: DFT
date: 2026-06-14
subject: CADE — Combined Arms Decision Exercise
url: https://www.nextgenwargame.com/projects/cade
---

# Creator Brief — CADE

This document gives you everything you need to write about CADE accurately. The Source Brief covers facts and claims. The Interview Kit gives you pre-answered questions in TJ's own voice — quote directly or paraphrase.

Do not invent details not present here. If something is unclear, contact TJ before publishing.

---

## Part 1 — Source Brief

### What It Is

CADE (Combined Arms Decision Exercise) is a structured staff decision exercise built around a fixed turn rhythm. Each turn gives the staff enough context to act, forces a choice under time pressure, captures the reasoning, delivers consequences, and turns those consequences into a review point. It was designed to make staff thinking visible quickly, without heavy simulation equipment or long setup time.

### Who Built It

**Name:** Vincent "TJ" Taijeron
**Role on project:** AI Operator / Design Authority — sole designer and builder
**Background:** Military training and exercise design background; uses AI as a governed production engine to build practical training products.
**LinkedIn:** linkedin.com/in/taijeronv
**Site:** nextgenwargame.com

### The Problem It Solves

Leaders in training events typically see activity: meetings, briefings, products, discussion. What they cannot easily observe is the quality of thinking behind a recommendation. CADE was built to make staff reasoning visible without needing JCATS, DXTRS, or comparable simulation infrastructure — tools that are expensive, require specialist operators, and carry long setup lead times.

### What Was Built

A repeatable controller-facing exercise system consisting of:

- **Turn engine** — fixed decision rhythm with five phases per turn: Situation, Clarification, Deliberation, Decision, Brief to Commander, Adjudication.
- **Source-governed scenario package** — OPORD-quality source material that constrains every downstream exercise artifact.
- **Adjudication model** — observable staff behavior mapped to outcome bands so consequences are consistent without removing controller judgment.
- **Controller Package** — five documents giving controllers the prompts, timing, role aids, adjudication triggers, and review structure needed to run the event independently.
- **Learning capture layer** — structured AAR process tied to each turn, preserving reasoning and coordination gaps before the next cycle.

### Proof It Works

| Metric                                     | Value  |
| ------------------------------------------ | ------ |
| Live executions                            | 3      |
| Average participants per session           | ~19    |
| Time to first executable version           | 1 week |
| Validation criteria met on first execution | 4 of 4 |
| Controller Package documents               | 5      |
| Simulation infrastructure required         | None   |

**Validation criteria confirmed across all three executions:**

- Staff operated inside the framework without designer support during turns.
- Controllers executed with delivered artifacts.
- Consequences created visible decision pressure in later turns.
- Review captured learning before the next cycle.

### Key Claims (Use These — Don't Invent Others)

- TJ built the first executable version of CADE in one week using Claude, ChatGPT, and Gemini as governed production engines.
- CADE has run three times with approximately 19 participants per session.
- All four validation criteria were met on the first execution.
- CADE requires no JCATS, DXTRS, or comparable simulation infrastructure.
- AI accelerated production; human design authority controlled the training logic, source approval, and post-execution decisions.

### What This Is NOT

- CADE is not a universal simulation replacement. It is designed for staff decision practice where the primary training objective is decision behavior under pressure, not platform integration or full-spectrum simulation.
- CADE did not design itself. AI generated drafts inside constraints TJ set. The training problem, source truth, acceptance criteria, and evidence-based changes were all human decisions.
- CADE is not a finished commercial product seeking adoption. It is a governed production proof-of-concept with active iteration.

### Positioning Rules

- AI is a production engine, not the designer. TJ held design authority throughout.
- Tie all claims to execution evidence — don't overclaim from design intent alone.
- Avoid sensitive operational detail; use generalized descriptions of scenario content.
- CADE is a practical fit-for-purpose framework, not a universal model for all training contexts.

---

## Part 2 — Interview Kit

Questions follow a natural narrative arc: origin → build → evidence → AI role → lessons → next. Use answers as direct quotes with attribution, or paraphrase. Do not attribute claims not present here.

---

**Q: What is CADE and why did you build it?**

> CADE is a battalion staff decision exercise — a structured way to observe how a staff actually thinks under pressure, not just what products they produce. I built it because I kept seeing the same problem in training events: leaders can watch a briefing happen but can't easily see the reasoning that led to the recommendation. CADE was designed to make that thinking visible, quickly, without needing a full simulation cell and weeks of setup.

---

**Q: Who is it for?**

> Controllers and trainers running staff exercises where the objective is decision quality, not platform proficiency. If you need to see how a staff coordinates under time pressure, how they brief a commander, and how they absorb consequences from earlier decisions — CADE gives you a repeatable structure to observe and capture that. It's designed to work even when you don't have heavy simulation infrastructure or a lot of preparation time.

---

**Q: Walk me through how it actually works.**

> Each turn follows five phases. The staff gets a situation update — operational context and a decision that needs to be made. They have a window to clarify essential uncertainty. Then deliberation: a time-boxed coordination period where cross-functional staff elements have to work through tradeoffs. At the end, they commit to a decision and brief it to the commander. The controller adjudicates based on observable behavior — not gut feel — and the consequences carry forward into the next turn. After each turn, there's a structured review to capture the reasoning before the staff moves on.

---

**Q: What did you actually build? What exists now?**

> The core output is a Controller Package — five documents that give a controller everything they need to run CADE without me in the room. A master turn list, phase documents with situation updates and decision prompts, adjudication triggers tied to observable staff behavior, timing cues, and a review structure for each turn. The scenario is anchored to an OPORD-quality source so every prompt and trigger traces back to the same approved material. The package has supported all three executions.

---

**Q: Has it been tested? What happened?**

> Three live executions, roughly 19 participants each time. I set four validation criteria before the first run: staff operate inside the structure without needing me to manage them, controllers can execute with the delivered artifacts, consequences create real decision pressure, and review captures learning before the next cycle. All four were confirmed on the first execution. What failed on that run was the artifact packaging — I had fragmented documents that required too much controller navigation under pressure. That evidence drove the Controller Package architecture for the next version. The framework improved from execution, not from design speculation.

---

**Q: Where does AI fit in? What did it do and what didn't it do?**

> AI accelerated production: research, drafting scenario material, generating turn content, building controller documents, producing briefing outputs. I used Claude, ChatGPT, and Gemini at different points. What AI didn't do is make any design decisions. It didn't define the training problem, approve source material, set acceptance criteria, or decide what changed after execution. I built constraints into the production workflow — the OPORD as source truth, review gates before anything reached the controller team, acceptance criteria that governed what passed and what got revised. The model generates inside those constraints. The constraint design is the skill.

---

**Q: What surprised you during the build?**

> The packaging problem caught me off guard. The content was solid on the first execution but the controller artifacts were fragmented — too many separate documents without a clear navigation path. Under execution pressure, that's a real failure point. Controllers are busy; if they have to hunt for information during a turn, the exercise loses momentum. That forced a full rethink of how I packaged the runtime materials. The unified Controller Package came directly from watching that failure happen live, not from predicting it in advance.

---

**Q: What does this prove beyond this specific project?**

> That governing AI output is a transferable skill. The CADE production model — frame the problem first, constrain the source layer, generate inside those constraints, review against acceptance criteria, validate in execution, revise from evidence — applies to any domain where you're using AI to produce something that has to hold up under real-world use. The training problem is specific. The production discipline isn't.

---

**Q: What would you do differently?**

> I'd design the Controller Package structure earlier. I built the content first and the packaging came second, which is backwards. The controller's runtime experience should define the artifact structure from the start, not get retrofitted after the first execution. The content is only as good as the ability to use it under pressure.

---

**Q: What's next for CADE?**

> The immediate priority is tightening the adjudication model — making the observable behavior bands more portable so a controller who didn't build the exercise can still apply them consistently. Beyond that, I'm working on expanding the scenario library so the framework can support more echelons and operational contexts without redesigning the turn engine each time.

---

## Usage Notes

- Part 1 is for factual reference — ground your piece here, not in secondary sources.
- Part 2 answers are in TJ's voice — quote with attribution ("TJ Taijeron, creator of CADE") or paraphrase.
- Do not attribute execution claims beyond what is listed in the Proof section.
- For follow-up questions or additional detail: vincent.taijeron@gmail.com
- Site: https://www.nextgenwargame.com/projects/cade
