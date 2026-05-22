---
title: "CADE Controller Package Generator"
role: "AI Planning Workflow Designer"
year: 2026
duration: "Core production pipeline"
outcomeSummary: "Built an AI workflow that turns a unit OPORD into the five-document Controller Package that runs a CADE exercise, keeping every phase and decision prompt traceable to the source order."
overview: "The OPORD is the source of truth for a CADE exercise. Everything the controller uses during execution — the turn sequence, the situation updates, the decision prompts, the adjudication triggers — has to trace back to it. This workflow takes a unit-provided OPORD, or one I design for the exercise, and uses AI to generate a five-document Controller Package: a master turn list organized by phase, and one turn document per phase with four to five turns each. Controllers and trainers review all documents before execution. If changes are needed, I revise using the model."
problem: "Manually drafting a Controller Package from an OPORD is time-intensive and prone to consistency errors across phases. Turns written independently can contradict each other, drift from the source scenario, or miss operational logic that should carry consequences forward. The governing challenge isn't drafting speed — it's keeping a multi-document output coherent and traceable to one source."
constraints:
  - "Every turn must trace back to the OPORD — no independent invention of scenario logic."
  - "Consequence state must carry forward across phases, not reset between turns."
  - "Controller documents must be usable under time pressure without designer support."
  - "All outputs require trainer review before execution."
approach: "I anchored the workflow to the OPORD as the sole source layer. AI generates draft turn content — situation updates, decision prompts, option frames, adjudication triggers — inside that constraint. I review each document for operational coherence and source fidelity before it goes to the trainer team. Trainer feedback comes back to me; I revise using the model and return updated documents. The workflow has produced the Controller Package for all three CADE executions."
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
  qualitative: "The Controller Package Generator made CADE reproducible. The same workflow that produced the first execution produced the third — with trainer feedback incorporated at each cycle. No execution required starting from scratch."
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
