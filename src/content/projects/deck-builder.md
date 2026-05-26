---
title: "CADE Production Support Tools"
role: "AI Workflow Designer"
year: 2026
duration: "Supporting toolset"
outcomeSummary: "Built support workflows that remove CADE production blockers when units arrive without complete graphics, annexes, or briefing materials."
overview: "CADE depends on a complete, coherent source package. In practice, production can stall when operational graphics, annexes, or briefing materials are missing or difficult to revise. This support toolset closes those gaps with reviewed workflows for op-boards, annexes, and briefing/deck output so the production chain keeps moving without weakening source-truth discipline."
problem: "A governed exercise pipeline fails if required inputs are missing or if presentation updates consume the production cycle. Support tooling was needed to fill bounded artifact gaps, keep outputs reviewable, and prevent formatting work from blocking higher-value design review."
designMove: "I separated each blocker into a bounded workflow with its own input, output, and human acceptance gate. The tools support the source package; they do not bypass it or redefine scenario logic."
systemBuilt: "I built a support toolset for op-board generation, annex drafting, and Markdown-based briefing production with PPTX and HTML outputs. Each workflow produces reviewable artifacts that can enter the CADE source package only after operator approval."
supportingTools:
  - name: "Op-board generator"
    purpose: "Produces operational graphics when a unit does not provide usable boards."
  - name: "Annex generator"
    purpose: "Drafts bounded supporting annexes when missing material would block downstream package generation."
  - name: "Markdown briefing builder"
    purpose: "Keeps briefing content editable, reviewable, and versionable before exporting to PPTX or HTML."
  - name: "PPTX/HTML export workflow"
    purpose: "Moves slide production out of manual formatting cycles and into repeatable output generation."
  - name: "Source-entry review gate"
    purpose: "Prevents generated support artifacts from entering the source layer without human approval."
proof:
  - label: "Production blockers removed"
    result: "Missing graphics, annexes, and briefing materials no longer have to stop CADE package production."
  - label: "Revision cycle tightened"
    result: "Briefing updates moved from slide-by-slide formatting work to content revisions that can be regenerated and exported."
  - label: "Source discipline preserved"
    result: "Generated support artifacts remain draft material until operator review clears them for source-package use."
transferableSkill: "This project shows I can identify production bottlenecks, build targeted support tools, and protect quality gates while accelerating artifact delivery."
constraints:
  - "Op-boards and annexes must be coherent with the OPORD before they enter the source package."
  - "Briefings must remain easy to revise as CADE evolves."
  - "AI output in all three workflows requires operator review before use."
  - "No workflow is allowed to introduce drift into the source layer."
approach: "I treated each workflow as a distinct production problem with its own input, output, and review gate. The op-board generator takes scenario and operational context and produces graphics to spec. The annex generator builds supporting annexes when the unit has not produced them. The briefing builder keeps slide content in editable Markdown and handles PPTX and HTML output, so revision effort stays on content rather than formatting."
aiOperatorSkills:
  - "Identified where the production chain was most likely to stall and built targeted workflows for each gap."
  - "Kept AI output at draft status until operator review cleared it for the source package."
  - "Separated content authoring from formatting so revision cycles stayed fast."
  - "Designed each workflow to feed the source layer, not bypass it."
keyDecisions:
  - decision: "Build gap-filling tools rather than require complete unit inputs"
    reasoning: "Waiting for a unit to produce missing op-boards or annexes before exercise production could begin would block CADE adoption. Controlled AI generation with operator review is faster and doesn't sacrifice source integrity."
    alternatives:
      - "Require units to supply complete inputs before production starts"
      - "Let controllers improvise missing materials at execution time"
  - decision: "Use Markdown as the briefing source layer"
    reasoning: "Markdown keeps slide content readable, reviewable, and version-controlled before it hits any presentation format. Revisions stay fast because content and formatting are separate."
    alternatives:
      - "Author directly in PowerPoint"
      - "Maintain separate scripts for each output format"
techStack:
  - "Claude"
  - "ChatGPT"
  - "Markdown"
  - "PPTX"
  - "HTML"
impact:
  metrics:
    - label: "Support workflows"
      value: "3"
    - label: "Source-layer rule"
      value: "Operator-reviewed before entry"
    - label: "Formatting targets"
      value: "Markdown, PPTX, HTML"
  qualitative: "These tools made the CADE production chain less brittle. Missing inputs and briefing revisions became bounded workflow problems instead of blockers that stopped package generation."
learnings:
  - "The most valuable AI production work is often in the gaps — the inputs no one thinks to provide until the chain is already blocked."
  - "Operator review at the edge of each workflow, not at the end, is what keeps AI output from drifting into the source layer unchecked."
  - "Briefing automation pays for itself in the second revision, not the first."
evidence:
  - label: "Source package can be completed on demand"
    result: "When units arrived without graphics, annexes, or briefing artifacts, the support workflows kept production moving without abandoning source-truth discipline."
  - label: "Revision speed improved"
    result: "The briefing workflow shifted updates away from slide-by-slide formatting work and into content revisions that could be reviewed, regenerated, and re-exported quickly."
  - label: "Operator review stayed at the edge"
    result: "None of the support tools were allowed to write directly into the source layer without a human acceptance gate."
fitCriteria:
  - "A unit's source package is incomplete but the exercise still needs to move forward."
  - "Operational graphics, annexes, or briefing outputs are missing or underdeveloped."
  - "The production bottleneck is artifact preparation, not exercise design logic."
riskControls:
  - risk: "AI-generated support products drift from the scenario."
    control: "Every workflow stays subordinate to the OPORD-quality source package and requires operator review before entry."
  - risk: "Formatting convenience overrides content review."
    control: "Markdown remains the editable source layer, with PPTX and HTML treated as output formats rather than authoring environments."
  - risk: "Gap-filling tools become a substitute for design judgment."
    control: "The workflows fill missing artifacts only; they do not redefine scenario logic or controller intent."
boundaries:
  - "These workflows do not replace the need for an approved source package."
  - "These workflows are support tools, not standalone exercise generators."
  - "These workflows are strongest when the missing artifact is clear, bounded, and reviewable."
featured: false
status: "ongoing"
order: 2
relatedProjects:
  - "cade"
  - "orders-production"
---
