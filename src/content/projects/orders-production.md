---
title: "Orders Production"
heroImage: "../../assets/orders-production-header.png"
heroImageAlt: "Soldier annotating an acetate map overlay at a field command post table, rugged laptop and radio under camouflage netting"
role: "AI Systems Designer"
year: 2026
duration: "Active pipeline"
status: "ongoing"
order: 2
featured: false
outcomeSummary: "A three-stage AI pipeline that produces exercise-ready OPORDs for brigade and below — governed by doctrine, adversarially reviewed, and gated before unit release. The goal is not a perfect order. It is a 90% first draft that saves units significant prep time."
overview: "Orders Production is a three-stage AI pipeline — opord-writer → red-team → order-release — that produces exercise-ready OPORDs for brigade and below. Each stage runs inside constraints AI cannot self-impose: an OPORD writing guide, adversarial skeptic personas, and a formal quality gate. The result is a first draft that has been validated before it reaches the unit."
problem: "AI generates plausible OPORD text. Without doctrine-aware constraints it fails structure, loses task coherence across paragraphs, and has no mechanism to catch failures before the order reaches a unit. Most AI-assisted OPORD efforts stop at the prompt. This one did not."
designMove: "Treat orders production as a governed workflow, not a conversation. Each stage — authoring, adversarial review, release gate — runs inside constraints the model cannot self-impose: an OPORD writing guide, quality standards, skeptic persona definitions, lint rules. AI drafts inside those constraints; human review is the gate."
approach: "Each stage of the pipeline has a fixed job and runs in sequence. opord-writer drafts inside a doctrine-aware writing guide. red-team applies adversarial pressure from CDR, S3, and S2 perspectives, tagging every finding by severity and paragraph. order-release runs seven automated passes — lint, skeptic sweeps, QC gate, annex alignment — and produces a consolidated fix plan before the order goes to the unit."
systemBuilt: "Three sequenced skills (opord-writer, red-team, order-release) supported by Python scripts (lint, DOCX export, normalize), a shared doctrine reference library (FM 5-0, FM 6-0, NATO-COPD, AJP-5), and a Streamlit GUI with dedicated pages per skill."
transferableSkill: "This shows AI-assisted staff work approached as a systems design problem — not just what to ask the model, but what constraints govern its output, what checks catch failures, and what pipeline moves draft material to execution-ready products. The techniques apply equally to real-world OPORDs."
pipelineSkills:
  - name: "opord-writer"
    stage: "01 · Authoring"
    crossProject: false
    whatItDoes: "Drafts, refactors, expands, and red-teams OPORDs from BN to JTF/Corps. Five modes covering the full authoring cycle. Output: planner-source Markdown exported to DOCX via script."
    insightLabel: "Guardrail: OPORD writing guide"
    insightText: "A dedicated writing guide — not a system prompt — governs structure, task-to-purpose standards, coordination measure rules, and echelon-specific quality checks. The model writes inside this constraint. It cannot substitute generic military language for doctrine-specific structure."
    modes: ["Draft", "Refactor", "Expand", "Align Annex", "Skeptic Sweep"]
  - name: "red-team"
    stage: "02 · Adversarial Review"
    crossProject: true
    whatItDoes: "Runs structured adversarial assessment using domain-specific skeptic personas — CDR, S3, S2 for orders. Every finding is severity-tagged and paragraph-referenced before the order goes further."
    insightLabel: "Why it is a separate skill"
    insightText: "The skeptic framework is not OPORD-specific. The same approach applies anywhere AI produces a product that needs adversarial pressure — plans, briefs, exercise materials, scenario documents. Separating it from opord-writer makes it reusable across projects."
    modes: ["CDR Perspective", "S3 Perspective", "S2 Perspective", "Severity Tagging"]
  - name: "order-release"
    stage: "03 · Release Gate"
    crossProject: false
    whatItDoes: "A sequential, largely automated pre-release workflow. Seven passes in fixed order: lint, planner skeptics, staff skeptics, specialized skeptics, skeptic synthesis, QC Gate against echelon quality standard, annex alignment. Produces a consolidated report and prioritized fix plan. Assessment only — no edits to the source order."
    insightLabel: "Key design decision"
    insightText: "The unit receives an order that has already cleared lint, adversarial review, and an MDMP-sufficiency check against the echelon quality standard. Their time goes into refining the 10%, not rebuilding the 90%."
    modes: ["Lint", "Planner Skeptics", "Staff Skeptics", "QC Gate", "Fix Plan"]
techStack:
  - "Claude"
  - "Python (lint, DOCX export, normalize scripts)"
  - "Streamlit"
  - "Markdown"
  - "FM 5-0 / FM 6-0 / NATO-COPD / AJP-5"
constraints:
  - "Orders must be FM 5-0 / FM 6-0 compliant at the declared echelon."
  - "AI generation is constrained by doctrine files — output that contradicts the writing guide is rejected and regenerated."
  - "order-release is assessment only — no automated edits to the source order."
  - "Current scope: exercise OPORDs at brigade and below. Techniques apply to real-world orders."
keyDecisions:
  - decision: "Build a pipeline, not a prompt"
    reasoning: "Prompts produce plausible text. A governed pipeline — with writing guide guardrails, adversarial review, and a formal quality gate — produces a product the unit can actually use. The constraints are what make the output credible."
    alternatives:
      - "Prompt engineering with increasingly detailed system prompts"
      - "Single-pass generation with manual human review"
  - decision: "Separate red-team as a cross-project skill"
    reasoning: "Skeptic-based adversarial review is not specific to orders. Keeping it separate makes it reusable across any AI-produced artifact — plans, briefs, exercise materials. The orders pipeline calls the red-team skill; the red-team skill does not depend on orders."
    alternatives:
      - "Embed skeptic sweep directly in opord-writer"
      - "Run adversarial review only within order-release"
  - decision: "Target 90% first-draft quality, not 100%"
    reasoning: "A 100% ready order is not an achievable or honest target for AI generation at the current state of the art. A 90% first draft that has been validated and gated saves the unit the most time — they spend prep time on decisions, not structure."
    alternatives:
      - "Present the output as complete and require unit to identify gaps"
      - "Require full human rewrite of AI output before delivery"
impact:
  qualitative: "Units receive a first-draft OPORD that has passed lint, adversarial review from multiple staff perspectives, and a formal quality gate — before it reaches them. Prep time shifts from building structure to refining decisions."
learnings:
  - "Doctrine files are constraints, not references. The writing guide works because the model is required to write inside it, not consult it."
  - "A separate quality gate before release is not redundant with in-process review — it catches different failure modes and provides a formal record of what was checked."
  - "Red-team personas must be domain-specific to be useful. Generic adversarial prompts produce generic findings. CDR, S3, and S2 each see the order through a different operational lens."
relatedProjects:
  - "cade"
  - "controller-package-generator"
---
