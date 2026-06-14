export const siteConfig = {
  url: import.meta.env.SITE_URL ?? 'https://www.nextgenwargame.com',
  language: 'en',
  title: 'NextGen Wargame',
  description:
    'TJ Taijeron built CADE, a practical decision exercise that shows how teams think under pressure and how AI can help build useful training products.',
  author: {
    name: 'Vincent "TJ" Taijeron',
    title: 'AI Operator / AI Integrator',
    bio:
      'I use AI carefully to build practical training and planning products that people can actually run.',
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
    { label: 'Projects', href: '/projects' },
    { label: 'Field Notes', href: '/field-notes' },
    { label: 'About', href: '/about' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];
