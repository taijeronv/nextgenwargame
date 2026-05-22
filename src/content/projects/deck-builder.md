---
title: "CADE Production Support Tools"
role: "AI Workflow Designer"
year: 2026
duration: "Supporting toolset"
outcomeSummary: "Designed three AI-assisted support workflows that fill gaps in the CADE source package so exercise production does not stall when a unit arrives with incomplete graphics, annexes, or briefing materials."
overview: "CADE requires an OPORD-quality source package before anything else can be produced. In practice, units don't always arrive with complete operational graphics, annexes, or briefing materials. I built three supporting workflows to close those gaps: an op-board generator that produces operational graphics when none exist, an annex generator that builds annexes on demand, and a briefing builder that turns Markdown slide scripts into PPTX and HTML outputs. Each workflow is AI-assisted and operator-reviewed before the output enters the source package."
problem: "CADE's source-truth discipline depends on having complete, coherent inputs before downstream products are generated. When a unit doesn't have operational graphics or annexes, the entire artifact chain stalls. When briefing materials need frequent revision, manual formatting slows the iteration cycle. These gaps needed filling without bypassing human review or degrading source integrity."
constraints:
  - "Op-boards and annexes must be coherent with the OPORD before they enter the source package."
  - "Briefings must remain easy to revise as CADE evolves."
  - "AI output in all three workflows requires operator review before use."
  - "No workflow is allowed to introduce drift into the source layer."
approach: "I treated each workflow as a distinct production problem with its own input, output, and review gate. The op-board generator takes scenario and operational context and produces graphics to spec. The annex generator builds supporting annexes when the unit hasn't produced them. The briefing builder keeps slide content in editable Markdown and handles PPTX and HTML output, so revision effort stays on content rather than formatting."
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
  qualitative: "These tools removed the production blockers that would otherwise stall CADE when unit inputs are incomplete. The briefing builder reduced revision cycles from format-heavy editing to content-only changes. The op-board and annex generators gave the design authority the ability to complete a source package on demand rather than waiting on the unit."
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
