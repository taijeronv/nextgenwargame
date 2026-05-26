---
title: "CADE Controller Package Generator"
role: "AI Planning Workflow Designer"
year: 2026
duration: "Core production pipeline"
outcomeSummary: "Built the core production pipeline that turns an OPORD into the five-document Controller Package used to run CADE, with source traceability and trainer review preserved across every turn."
overview: "The Controller Package Generator is the production pipeline behind CADE. It takes an approved OPORD and produces the runtime documents controllers need: a master turn list and phase documents with situation updates, decision prompts, adjudication triggers, and consequence carry-forward. The workflow keeps drafting fast without allowing each document to drift from the source order or from the other phases."
problem: "An OPORD-grounded exercise needs a repeatable way to turn source documents into controller-ready runtime materials. Manual drafting was slow, but speed was not the main risk. The harder problem was coherence: every turn had to trace to the same source, carry consequences forward, and remain usable by trainers and controllers under execution pressure."
designMove: "I made the OPORD the governing source layer and generated the package in sequence, not as disconnected documents. That let AI accelerate drafting while human review checked source fidelity, phase continuity, and trainer fit before anything reached execution."
systemBuilt: "I built an OPORD-to-controller-package workflow that produces a master turn list plus phase-level turn cards. Each output includes situation context, decision prompts, option frames, adjudication triggers, and review-ready structure for trainer approval."
supportingTools:
  - name: "Master turn list generator"
    purpose: "Converts the OPORD into a sequenced exercise map organized by phase and turn."
  - name: "Phase document workflow"
    purpose: "Builds four to five turns per phase while preserving consequence state from earlier decisions."
  - name: "Source-traceability review"
    purpose: "Checks generated prompts, triggers, and situation updates against the OPORD before controller use."
  - name: "Trainer revision loop"
    purpose: "Routes trainer feedback back into the model-assisted drafting workflow without rebuilding the package from scratch."
proof:
  - label: "Reusable package format"
    result: "The workflow produces five controller documents: one master turn list and up to four phase documents."
  - label: "Supported live execution"
    result: "The same production pattern supported all three CADE executions."
  - label: "Source coherence preserved"
    result: "Turns, prompts, and adjudication triggers stayed anchored to one OPORD-quality source instead of drifting independently."
  - label: "Architecture improved from evidence"
    result: "Execution feedback pushed CADE away from fragmented runbook logic and toward a unified Controller Package."
transferableSkill: "This project shows I can design an AI-assisted production pipeline that preserves source truth, coherence, review gates, and runtime usability across a multi-document product."
constraints:
  - "Every turn must trace back to the OPORD — no independent invention of scenario logic."
  - "Consequence state must carry forward across phases, not reset between turns."
  - "Controller documents must be usable under time pressure without designer support."
  - "All outputs require trainer review before execution."
approach: "I anchored the workflow to the OPORD as the sole source layer. AI generates draft turn content inside that constraint. I review each document for operational coherence and source fidelity before it goes to the trainer team. Trainer feedback comes back to me; I revise using the model and return updated documents. The workflow has produced Controller Package materials for all three CADE executions."
aiOperatorSkills:
  - "Used the OPORD as a hard constraint on AI generation — output that contradicted the source was rejected and regenerated."
  - "Structured the generation workflow to produce phase documents in sequence so consequence state carried forward correctly."
  - "Maintained human review as the gate between AI output and execution-ready documents."
  - "Revised based on trainer feedback using the model, keeping the iteration cycle fast without bypassing review."
keyDecisions:
  - decision: "Generate the Controller Package from the OPORD, not from freestanding scenario notes"
    reasoning: "Freestanding scenario notes drift. An OPORD-quality source layer forces internal consistency and gives reviewers a fixed reference for checking each turn against source intent. Downstream products that contradict the OPORD can be identified and corrected before execution."
    alternatives:
      - "Draft turn content from a loose scenario summary"
      - "Let each phase document evolve independently"
  - decision: "Keep trainers in the review loop before any document reaches execution"
    reasoning: "AI generation produces operationally plausible content, but only trainers can confirm that the exercise logic is sound for this unit in this context. Review is not a formality — trainer changes fed directly into subsequent runs."
    alternatives:
      - "Deliver documents directly to controllers and collect feedback after execution"
      - "Run a single design review at the end of production rather than per-document"
techStack:
  - "Claude"
  - "ChatGPT"
  - "Markdown"
  - "OPORD-grounded planning workflows"
impact:
  metrics:
    - label: "Documents per package"
      value: "5 (master turn list + up to 4 phase documents)"
    - label: "Turns per phase"
      value: "4–5"
    - label: "Executions supported"
      value: "3"
    - label: "Review gate"
      value: "Trainer-reviewed before every execution"
  qualitative: "The Controller Package Generator made CADE reproducible as a production system. The same pipeline can regenerate, revise, and improve the runtime package without restarting from a blank page."
learnings:
  - "The OPORD is not just reference material — it is the constraint that makes AI-generated exercise content coherent across a multi-document package."
  - "Trainer review is a production input, not a sign-off step. Changes from the first execution improved the workflow for the second."
  - "A five-document package generated in sequence preserves consequence logic better than generating all documents simultaneously."
evidence:
  - label: "One source governs multiple runtime documents"
    result: "The workflow kept the master turn list and phase documents aligned to one OPORD-quality source instead of allowing each phase to drift independently."
  - label: "Trainer feedback loops stayed fast"
    result: "Documents could be revised against trainer input without rebuilding the package structure from scratch, which made repeated executions practical."
  - label: "Controller-facing runtime artifact emerged"
    result: "The generator helped move CADE away from fragmented runbook logic and toward a usable Controller Package architecture."
fitCriteria:
  - "An exercise already has an OPORD or source order that can govern downstream generation."
  - "Controllers need a runtime package that preserves state, sequencing, and consequence logic."
  - "The main challenge is multi-document coherence under time pressure."
riskControls:
  - risk: "Phase documents contradict each other."
    control: "Generation stays sequenced and source-governed so consequence state carries forward correctly."
  - risk: "AI invents plausible but unsupported scenario content."
    control: "Output that cannot be traced back to the OPORD is rejected and regenerated before review."
  - risk: "Controller products become unusable in execution."
    control: "Trainer review remains a mandatory gate before any package reaches live facilitation."
boundaries:
  - "The workflow does not replace trainer review."
  - "The workflow is only as strong as the source order that governs it."
  - "The workflow supports controller execution; it does not automate adjudication authority."
featured: false
status: "ongoing"
order: 3
relatedProjects:
  - "cade"
relatedDecisions:
  - "opord-source-truth"
  - "controller-package-over-runbook"
---
