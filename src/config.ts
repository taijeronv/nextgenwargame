export const siteConfig = {
  url: import.meta.env.SITE_URL ?? 'https://www.nextgenwargame.com',
  language: 'en',
  title: 'NextGen Wargame',
  description:
    'A showcase of AI gaming and AI-assisted training design projects, with CADE as the capstone case study.',
  author: {
    name: 'Vincent "TJ" Taijeron',
    title: 'AI Operator / AI Integrator',
    bio:
      'I design governed AI workflows for military training, planning, and exercise production.',
    email: 'vincent.taijeron@gmail.com',
    location: '',
  },
  social: {
    github: '',
    linkedin: '',
    twitter: '',
    mastodon: '',
    bluesky: '',
  },
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Story', href: '/story' },
    { label: 'Methods', href: '/methods' },
    { label: 'CADE', href: '/projects/cade' },
    { label: 'Decisions', href: '/decisions' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/#contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];
