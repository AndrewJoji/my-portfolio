import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';

import { CMSLink } from 'edit-me/types/CMSLink';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/AndrewJoji',
    icon: faGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/andrewjoji',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'mailto:andrewjoji71@gmail.com',
    icon: faEnvelopeOpen,
    title: 'Email',
  },
];
