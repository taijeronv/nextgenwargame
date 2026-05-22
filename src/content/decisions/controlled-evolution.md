---
title: "Change CADE only when evidence justifies changing the system"
date: 2026-05-20
context: "A reusable training framework needs stability. If every execution creates ad hoc changes, the core training effect erodes and future adopters cannot tell which parts are canonical."
decision: "Treat structural change as controlled evolution: update CADE only when live evidence, better training research, or stakeholder requirements justify a specific change."
alternatives:
  - option: "Continuously revise the framework after every preference or comment"
    pros:
      - "Highly responsive"
      - "Captures many ideas quickly"
    cons:
      - "Creates churn"
      - "Weakens the baseline"
      - "Makes the training effect harder to preserve"
  - option: "Freeze the framework completely"
    pros:
      - "Maximum stability"
      - "Easy to teach and repeat"
    cons:
      - "Ignores execution evidence"
      - "Prevents improvement when real failure modes appear"
reasoning: "CADE needs deliberate stability, not stagnation. Evidence-driven change preserves the framework while allowing it to mature from what actually happens in execution."
aiOperatorSkill: "Using evidence to govern iteration instead of optimizing for polish"
tags:
  - "Governance"
  - "Evidence"
  - "CADE"
relatedProjects:
  - "cade"
relatedDecisions:
  - "ai-as-production-engine-not-design-authority"
---

This decision keeps CADE from becoming a pile of one-off improvements. The point is to improve the system without losing the system.
