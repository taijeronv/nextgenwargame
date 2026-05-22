---
title: "Use deterministic adjudication bands tied to observable behavior"
date: 2026-05-20
context: "CADE depends on consequences that feel credible to participants and repeatable to controllers. If outcomes depend too heavily on individual controller judgment, different controllers can produce different results from the same observed behavior."
decision: "Use deterministic outcome bands tied to observable staff integration behavior rather than open-ended controller discretion."
alternatives:
  - option: "Judgment-led controller adjudication"
    pros:
      - "Flexible for experienced controllers"
      - "Can account for nuance quickly"
    cons:
      - "Creates controller-to-controller variance"
      - "Harder to scale across mixed experience levels"
      - "Weakens confidence in repeated execution"
  - option: "Fully scripted outcomes"
    pros:
      - "Very predictable"
      - "Easy to prepare"
    cons:
      - "Disconnects consequences from staff decisions"
      - "Reduces the training effect of decision pressure"
reasoning: "The useful middle ground is structured adjudication. Controllers still observe and apply the model, but the model constrains them to outcome bands based on visible integration behavior."
aiOperatorSkill: "Converting qualitative behavior into governed evaluation logic"
tags:
  - "Adjudication"
  - "Decision pressure"
  - "CADE"
relatedProjects:
  - "cade"
relatedDecisions:
  - "controller-package-over-runbook"
---

This decision protects CADE from becoming either arbitrary controller judgment or a scripted exercise where staff decisions do not matter.
