---
title: "What Models I Use And Why"
description: "I do not use one model for everything. I use a stack, and each tool has a job."
collection: "Model Workbench"
order: 3
tags:
  - Model stack
  - AI workflow
relatedProject: "cade"
---

I do not use one AI model for everything.

I use a stack.

That sounds more complicated than it is. The point is not to chase every new model or argue over benchmarks. The point is to give the right part of the work to the right tool.

Most of my work runs through Claude and Codex CLI.

Claude is where I do most of the thinking work.

I use it for discovery, planning, critique, review, and turning rough ideas into something coherent. When a problem is complex, I want the model to help me slow down and think through assumptions, constraints, risks, and options.

I use Opus when I need more reasoning depth. I use Sonnet for a lot of day-to-day work. I even use Haiku in narrow cases, usually when the workflow is mostly scripted and I do not need a heavier model.

Document conversion is a good example. If I am running a skill that relies mostly on Python scripts to convert a PDF into markdown, I do not need the strongest model in the stack. I need the workflow to run cleanly.

Codex is where I build.

That usually means command-line work: writing scripts, building tools, modifying files, running checks, and fixing the things that break along the way.

My build workflow often has a loop.

Codex helps create the build plan and spec.

Claude audits the plan.

Codex builds from the handoff.

Claude reviews the result.

Codex fixes what the review finds.

That loop is not fancy. It works because each model has a job, and the payoff is speed. I iterate faster because no model is stuck doing work it is weak at. Codex is strong when the work needs files, tools, commands, and iteration. Claude is strong when I want another pass on the logic, structure, or quality of the output.

For harder problems, I use a longer discovery process.

I may start in Claude with a rough discovery session. That produces a source document: what I think the problem is, what constraints matter, what I am unsure about, and what the final product needs to do.

Then I may run that through an LLM Council workflow. In plain terms, it gives the problem to several separate advisors, compares the feedback, and produces a synthesized recommendation.

That is useful because I am not asking one model for a single answer. I am using several passes to find weak logic, missing assumptions, and disagreement.

I use Gemini indirectly through NotebookLM. I like it for source-specific work: podcasts, slide decks, custom reports, and fast ways to explore a body of material without pretending it is the final answer.

I also experiment with local models through LM Studio and Ollama. Most recently I have been working with a Hermes agent locally and on a Mac Mini. I tried OpenClaw, but I spent more time trying to get it working than doing useful work with it.

That is part of the process too.

Some tools earn a place in the workflow.

Some do not.

Most of this happens in the command line. I have experimented with desktop and UI-based tools, and some of them are good. But for the work I do most often, the CLI gives me the control, visibility, and repeatability I want.

So when someone asks what model I use, the honest answer is:

It depends what part of the work I am doing.

The model matters.

But the workflow matters more.
