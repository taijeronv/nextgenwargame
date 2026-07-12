# Taijeron and NextGen Wargame Redesign Summary

## Problem Identified

Both sites were answering nearly the same questions:

- Who is TJ?
- How does he use AI?
- What is CADE?
- What military training systems has he built?
- How does he approach governed AI workflows?

Both contained biography, AI capabilities, CADE, Orders Production, controller systems, wargaming, notes, case studies, and contact information. Different visual templates would not resolve this content overlap.

## Separation Principle

The agreed boundary is:

- **`taijeronv.info` = person + conversation**
- **`nextgenwargame.com` = domain + products + publication**

Each subject gets one canonical home. The other site may summarize and link, but should not duplicate the complete content.

## taijeronv.info

### Purpose

TJ's personal front door.

### Audience

- People with practical AI questions
- Professional network
- Recruiters and potential employers
- People exploring collaboration
- People curious but skeptical about AI

### Core Promise

> Bring me one focused AI question, messy workflow, or half-formed idea.

### Content Ownership

- Personal biography and career arc
- General practical AI help
- Ask / Diagnose / Experiment
- Tool and prompt questions
- Workflow diagnosis
- Small, bounded AI experiments
- Privacy and collaboration boundaries
- Personal working notes
- Cross-domain AI lessons
- Current questions and failed experiments
- Personal wargaming origin
- Resume, LinkedIn, and contact
- Short selected-work summaries linking to NextGen

### Primary Calls To Action

- Ask TJ
- Email TJ
- Connect on LinkedIn

### Wargaming Boundary

Taijeron explains why wargaming matters personally:

- Commercial wargaming origin
- How games shaped TJ's thinking
- Relationship between decisions, constraints, and consequences

Detailed military application belongs at NextGen Wargame.

### Notes Boundary

Taijeron Notes cover:

- Personal learning
- Cross-domain AI experiments
- Tools tried and dropped
- Changed assumptions
- Career reflections
- Questions still being tested

## nextgenwargame.com

### Purpose

Canonical home for TJ's military training systems and professional body of work.

### Audience

- Military trainers
- Exercise planners
- Wargame designers
- Simulation professionals
- Defense organizations
- Military AI collaborators
- Employers evaluating domain-specific work

### Core Promise

Recommended framing:

> Decision training built for teams under pressure.

### Content Ownership

- CADE
- Orders Production
- Controller Package Generator
- Military exercise design
- Scenario-design methods
- OPORD-grounded workflows
- Adjudication systems
- Source-truth governance
- Controller products
- Decision records
- Execution evidence
- Military systems Field Notes
- Technical AI Workbench articles related to production and governance

### Primary Calls To Action

- Explore CADE
- Review systems and evidence
- Read Field Notes
- Discuss a military training or exercise problem

### TJ's Role

TJ remains visible as founder, designer, and author. He should not be NextGen's primary subject. The homepage should lead with the training problem, product, method, and evidence.

## Cross-Site Rules

1. Full CADE case studies live only on NextGen Wargame.
2. Full Orders Production material lives only on NextGen Wargame.
3. Decision records live only on NextGen Wargame.
4. Taijeron Selected Work contains short summaries and external links.
5. Taijeron's About page owns the complete personal biography.
6. NextGen About contains only relevant founder credibility.
7. Taijeron Notes are personal and cross-domain.
8. NextGen Field Notes are military-system and CADE-specific.
9. Old Taijeron project URLs redirect to canonical NextGen pages.
10. Both sites cross-link explicitly.

## Visual Direction

### taijeronv.info

- Trevane-based
- Personal and approachable
- Conversation-led
- Green, red, gold, cool-white, and charcoal palette
- Generated practical AI-workbench hero
- TJ's portrait appears later, not first
- Minimal military imagery

### nextgenwargame.com

- Arcbes recommended
- Product and case-study-led
- Operational and evidence-focused
- Real sanitized artifacts where possible
- Generated conceptual images only for mood and section covers
- Avoid generic robots, holograms, and defense-marketing spectacle

## Current Taijeron Implementation

Completed on the `trevane-redesign` branch:

- Trevane-derived private design foundation
- Repository changed to private for license compliance
- Homepage rebuilt
- About, AI Help, Notes, Contact, Wargaming, Selected Work, and 404 rebuilt
- NextGen handoffs added throughout
- Duplicate project and decision routes removed
- Old URLs redirected to NextGen Wargame
- New identity assets and Open Graph image generated
- Automated checks and production build pass

## Remaining Work

1. Generate the approved Higgsfield image set.
2. Replace the temporary portrait homepage background.
3. Integrate supporting images into AI Help, Notes, Wargaming, and optional privacy sections.
4. Complete desktop and mobile visual review.
5. Review and approve responsive image crops, headline contrast, navigation, spacing, and text fit.
6. Decide whether to remove now-unrouted legacy components and duplicated content collections.
7. Commit, push, and merge after visual approval.

