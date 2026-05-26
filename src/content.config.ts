import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    year: z.number(),
    duration: z.string().optional(),
    teamSize: z.number().optional(),
    outcomeSummary: z.string(),
    overview: z.string(),
    problem: z.string(),
    designMove: z.string().optional(),
    systemBuilt: z.string().optional(),
    supportingTools: z.array(z.object({
      name: z.string(),
      purpose: z.string(),
    })).optional(),
    proof: z.array(z.object({
      label: z.string(),
      result: z.string(),
    })).optional(),
    transferableSkill: z.string().optional(),
    constraints: z.array(z.string()),
    approach: z.string(),
    aiOperatorSkills: z.array(z.string()).optional(),
    turnRhythm: z.array(z.object({
      phase: z.string(),
      purpose: z.string(),
    })).optional(),
    architectureModules: z.array(z.object({
      name: z.string(),
      purpose: z.string(),
      operatorSkill: z.string(),
    })).optional(),
    keyDecisions: z.array(z.object({
      decision: z.string(),
      reasoning: z.string(),
      alternatives: z.array(z.string()).optional(),
    })),
    techStack: z.array(z.string()),
    impact: z.object({
      metrics: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional(),
      qualitative: z.string(),
    }),
    learnings: z.array(z.string()),
    evidence: z.array(z.object({
      label: z.string(),
      result: z.string(),
    })).optional(),
    fitCriteria: z.array(z.string()).optional(),
    riskControls: z.array(z.object({
      risk: z.string(),
      control: z.string(),
    })).optional(),
    boundaries: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'ongoing', 'archived']).default('completed'),
    order: z.number().optional(),
    relatedProjects: z.array(z.string()).optional(),
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

const decisions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/decisions' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    context: z.string(),
    decision: z.string(),
    alternatives: z.array(z.object({
      option: z.string(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
    })),
    reasoning: z.string(),
    aiOperatorSkill: z.string().optional(),
    tags: z.array(z.string()).optional(),
    relatedProjects: z.array(z.string()).optional(),
    relatedDecisions: z.array(z.string()).optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    status: z.string(),
  }),
});

export const collections = { projects, decisions, research };
