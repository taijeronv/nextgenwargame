export const siteConfig = {
  url: import.meta.env.SITE_URL ?? 'https://www.nextgenwargame.com',
  language: 'en',
  title: 'NextGen Wargame',
  description:
    'Decision training systems for military teams under pressure: CADE, governed exercise workflows, controller products, and execution evidence.',
  ogImage: '/og/social-share.jpg',
  author: {
    name: 'Vincent "TJ" Taijeron',
    title: 'AI Operator / AI Integrator',
    bio:
      'I use AI carefully to build practical training and planning products that people can actually run.',
    email: 'vincent.r.taijeron@gmail.com',
    url: 'https://taijeronv.info',
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
    { label: 'Systems', href: '/projects' },
    { label: 'Field Notes', href: '/field-notes' },
    { label: 'Workbench', href: '/model-workbench' },
    { label: 'About', href: '/about' },
    { label: 'CADE App', href: 'https://app.nextgenwargame.com' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];
