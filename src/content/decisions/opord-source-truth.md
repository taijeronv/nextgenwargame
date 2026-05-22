---
title: "Anchor CADE artifacts to OPORD-quality source truth"
date: 2026-05-20
context: "CADE produces multiple downstream artifacts: scenario materials, turn prompts, controller aids, decision products, briefings, and review structures. Without a governing source layer, AI-assisted production can create drift across products."
decision: "Use OPORD-quality scenario material as the authoritative source truth for downstream CADE products."
alternatives:
  - option: "Generate each product independently from broad scenario notes"
    pros:
      - "Faster first drafts"
      - "Less upfront source preparation"
    cons:
      - "Higher risk of contradiction across artifacts"
      - "Harder to review coherence"
      - "Harder to trace controller prompts back to operational logic"
  - option: "Use a loose narrative scenario as the source"
    pros:
      - "Easier for non-planners to read"
      - "Lower drafting overhead"
    cons:
      - "Too ambiguous to govern executable turns"
      - "Weak support for annexes, control measures, and consequence tracking"
reasoning: "A source-governed workflow turns AI from a collection of disconnected drafting sessions into a controlled production chain. The OPORD-quality source layer gives every downstream artifact something to trace back to."
aiOperatorSkill: "Using source truth to control AI drift"
tags:
  - "Source truth"
  - "AI workflow"
  - "CADE"
relatedProjects:
  - "cade"
relatedDecisions:
  - "ai-as-production-engine-not-design-authority"
---

This decision is central to making CADE repeatable. Source truth is the control surface for a multi-artifact AI workflow.
