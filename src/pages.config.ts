/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'CADE is a case study in managed AI production, human design authority, and evidence-driven training design.',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects',
    description: 'AI gaming and AI-assisted training design projects, with CADE as the capstone case study.',
    heading: 'Projects',
    intro: 'CADE is the capstone project, but the portfolio also tracks the surrounding generators, controller aids, and production workflows that make the broader NextGen Wargame approach work.',
  },
  
  /**
   * Decisions listing page (/decisions)
   */
  decisions: {
    title: 'AI Operating Decisions',
    description: 'Decision records documenting the AI management and product design choices behind CADE.',
    heading: 'AI Operating Decisions',
    intro: 'The CADE story is told through decisions: what AI produced, what remained human-governed, what alternatives were rejected, and how execution evidence shaped the system.',
  },
  
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
