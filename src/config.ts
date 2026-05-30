export const siteConfig = {
  url: import.meta.env.SITE_URL ?? 'https://www.nextgenwargame.com',
  language: 'en',
  title: 'NextGen Wargame',
  description:
    'TJ Taijeron designs governed AI workflows for military training and exercise production. CADE is the capstone proof.',
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
    linkedin: 'https://linkedin.com/in/taijeronv',
    twitter: '',
    mastodon: '',
    bluesky: '',
  },
  nav: [
    { label: 'About', href: '/about' },
    { label: 'Purpose', href: '/purpose' },
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
