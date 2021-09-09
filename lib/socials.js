import GitHubIcon from '../components/GitHubIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import TwitterIcon from '../components/TwitterIcon';

export function getSocials() {
  return [
    {
      title: 'Email',
      href: 'mailto:agarunov.aaron@gmail.com',
      copy: true,
      color: '#ea4335',
    },
    {
      title: 'Résumé',
      href: 'https://agarun.com/Aaron-Agarunov-Resume.pdf',
      color: '#270ab6',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/agarun',
      color: '#333333',
      icon: GitHubIcon,
      footer: true,
    },
    {
      title: 'LinkedIn',
      href: 'https://linkedin.com/in/agarunov/',
      color: '#0077b5',
      icon: LinkedInIcon,
      footer: true,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/agarunov',
      color: '#833ab4',
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/agarune',
      color: '#1da1f2',
      icon: TwitterIcon,
      footer: true,
    },
    {
      title: 'Last.fm',
      href: 'http://last.fm/user/aeroecho',
      description: "music I'm listening to",
      color: '#d51007',
    },
    {
      title: 'WhatPulse',
      href: 'https://whatpulse.org/intentional',
      description: 'counts my keystrokes and clicks',
      color: '#58607c',
    },
    {
      title: 'Letterboxd',
      href: 'https://letterboxd.com/agarunov/films/',
      description: 'film diary',
      color: '#00e054',
      disabled: true,
    },
    {
      title: 'Keybase',
      href: 'https://keybase.io/agarun',
      description: 'secret messages',
      color: '#4c8eff',
      disabled: true,
    },
  ];
}
