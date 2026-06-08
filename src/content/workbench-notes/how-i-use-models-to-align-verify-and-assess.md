---
title: "How I Use Models To Align, Verify, And Assess"
description: "I split review into alignment, verification, assessment, and skeptic passes instead of asking a model to grade itself."
collection: "Model Workbench"
order: 4
tags:
  - Verification
  - AI review
  - CADE
relatedProject: "cade"
---

Asking a model if its own answer is correct is a waste of time.

It will agree with you.

That is the trap. You get a clean draft, you ask "is this right?", and the model reassures you. Nothing new comes back. The confidence goes up. The quality does not.

So I stopped asking models to grade themselves.

Instead, I split the work into three passes: align, verify, assess. Different job each time. Often a different model.

Align is first.

Does the output actually match what I asked for, and the intent behind it? Models drift. They answer a slightly different question than the one you meant, and they do it confidently. The align pass catches drift before it compounds.

Verify is second.

This is the one people skip. Verification is not "do you think this is right." It is checking the output against something outside the model: a source, a standard, a hard requirement.

In CADE, that meant concrete checks. Do the turns map to the phases? Does adjudication carry forward, so ammunition spent in phase one is gone in phase four? Do the controller notes match the training effect they are supposed to support?

Those are facts. They are checkable. They do not care how confident the model sounds.

Assess is third.

Is the output actually good enough to use? That is a judgment call, and it stays with me. This is where subject-matter expertise earns its keep. A model can tell you something is complete. It cannot tell you it is good.

I also run a skeptic pass.

A second model is better at attacking the first model's output than the first model is at defending it. I built a skeptic skill for this, and a validation skill to check the result against standards.

A second set of eyes finds weak logic. It does not have to be human eyes to find some of it.

But here is the honest part.

These models are not independent. They share training, they share blind spots, and they can be confidently wrong together. More passes reduce blind spots. They do not remove them. And none of it removes the need to know the subject.

The model can run the passes.

It cannot own the verdict.
