import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const googleAnalyticsDestinationId = 'G-S5L9LJDESQ'

export const LINKS = {
  github: 'https://github.com/trivedi-vatsal',
  linkedin: 'https://www.linkedin.com/in/trivedi-vatsal/',
  mail: 'mailto:trivedivatsal005@gmail.com',
  instagram: 'https://www.instagram.com/trivedivatsal_/',
  behance: 'https://behance.net/trivedivatsal',
  dribbble: 'https://dribbble.com/trivedivatsal',
  resume: 'https://resume.vatsal.xyz',
}

// Global
export const SITE: Site = {
  TITLE: 'Vatsal Trivedi',
  DESCRIPTION:
    'Portfolio, Projects, CV, About Me, Contact, Timezone, Now, Experience',
  AUTHOR: 'Vatsal Trivedi',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Comviva',
    location: 'Benguluru, India',
    position: 'Technical Lead',
    start: '2020',
    link: 'https://comviva.com/',
    end: 'Current',
    tasks: [],
  },
  {
    company: 'TCS',
    location: 'Gandhinagar, India',
    position: 'Software Enginner',
    link: 'https://tcs.com',
    start: '2018',
    end: '2020',
    tasks: [],
  },
]
