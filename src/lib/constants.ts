import type { Site, Page } from './types'
import { EXPERIENCE, WORK_EXPERIENCES } from './resume'

export { EXPERIENCE, WORK_EXPERIENCES }

export const LINKS = {
  github: 'https://github.com/trivedi-vatsal',
  linkedin: 'https://linkedin.com/in/trivedi-vatsal',
  mail: 'mailto:trivedivatsal005@gmail.com',
  instagram: 'https://www.instagram.com/trivedivatsal_/',
  behance: 'https://behance.net/trivedivatsal',
  dribbble: 'https://dribbble.com/trivedivatsal',
  devto: 'https://dev.to/trivedivatsal',
  resume: 'https://resume.vatsal.xyz',
}

export const NAV_LINKS = [
  { label: 'About', href: '/about/' },
  { label: 'Work', href: '/work/' },
  { label: 'Experiments', href: '/experiments/' },
  { label: 'Journal', href: '/blog/' },
]

// Global
export const SITE: Site = {
  TITLE: 'Vatsal Trivedi',
  DESCRIPTION:
    'Engineer in Bengaluru. AI platforms, enterprise integrations, and small tools that ship.',
  AUTHOR: 'trivedi-vatsal',
}

export const EXPERIMENTS_PAGE: Page = {
  TITLE: 'Experiments',
  DESCRIPTION:
    'Open source tools, design studies, writing, and creative outlets.',
}

export const ABOUT: Page = {
  TITLE: 'About',
  DESCRIPTION:
    'Engineer in Bengaluru. Bio, experience, stack, and life outside code.',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION:
    'Phamax, Comviva, and TCS. AI platforms, enterprise SaaS, and integration-heavy systems.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Journal',
  DESCRIPTION: 'Notes on AI, engineering, and integrations.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Bachelor of Engineering - Computer Engineering',
    institution:
      'Birla Vishvakarma Mahavidyalaya Engineering College, Vallabh Vidyanagar',
    link: 'https://bvmengineering.ac.in/',
    date: '2014 - 2018',
  },
]
