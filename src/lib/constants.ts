import type { ExperienceItemType } from '@/components/work-experience'
import type { Site, Page } from './types'

export const googleAnalyticsDestinationId = 'G-S5L9LJDESQ'

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
    'AI engineer, full-stack builder, and designer in Bengaluru. Intelligent products, developer tools, and digital experiences.',
  AUTHOR: 'Vatsal Trivedi',
}

export const EXPERIMENTS_PAGE: Page = {
  TITLE: 'Experiments',
  DESCRIPTION: 'Design studies, open source, writing, and creative outlets.',
}

export const ABOUT: Page = {
  TITLE: 'About',
  DESCRIPTION:
    'AI engineer, full-stack builder, and designer in Bengaluru — bio, experience, stack, and life outside code.',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Journal',
  DESCRIPTION: 'Thinking, documented. Writing on AI, engineering, integrations, and product craft.',
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

/** Flat role rows — used by homepage / portfolio derived content. */
export const EXPERIENCE = [
  {
    company: 'AI Platform for Pharma',
    location: 'Bengaluru, India',
    position: 'Principal Engineer',
    start: 'May 2025',
    end: 'Current',
    link: '',
    current: true,
    stack: ['TypeScript', 'React', 'LLM', 'Veeva CRM', 'Python', 'Postgres'],
    tasks: [
      'Ship an AI platform that automates pharma content creation and workflows.',
      'Build Content Wizard with Veeva CRM for brand-compliant end-to-end production.',
      'Cut content timelines with generation pipelines under regulatory constraints.',
      'Stand up shared engineering practices and a unified content lifecycle.',
    ],
  },
  {
    company: 'Comviva',
    location: 'Bengaluru, India',
    position: 'Technical Lead',
    start: 'Dec 2021',
    end: 'Mar 2025',
    link: 'https://www.comviva.com/',
    stack: [
      'TypeScript',
      'React',
      'FeatherJS',
      'Delta Lake',
      'Postgres',
      'Vector DB',
    ],
    tasks: [
      'Modernize MR into a cloud-agnostic SaaS with AI/ML baked in.',
      'Own architecture across TypeScript, React, FeatherJS, Delta Lake, and vectors.',
      'Lift scale, performance, and engagement with data-driven personalization.',
    ],
  },
  {
    company: 'Comviva',
    location: 'Bengaluru, India',
    position: 'Senior Engineer',
    start: 'Jun 2020',
    end: 'Nov 2021',
    link: 'https://www.comviva.com/',
    stack: [
      'Shopify',
      'HubSpot',
      'BigQuery',
      'GoodData',
      'AWS',
      'CDN',
    ],
    tasks: [
      'Ship 14+ integrations across commerce, CRM, analytics, and editors.',
      'Drive campaign personalization with BigQuery and GoodData ML insights.',
      'Raise performance via query tuning, caching, and CDN.',
      'Unblock hard integration work on scale, security, and latency.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    location: 'Gandhinagar, India',
    position: 'Assistant System Engineer',
    start: 'Sep 2018',
    end: 'May 2020',
    link: 'https://www.tcs.com/',
    stack: [
      'React',
      'Angular',
      'Node.js',
      'Express',
      'Microsoft 365',
      'GA360',
    ],
    tasks: [
      'Deliver full-stack apps in React, Angular, Node, and Express.',
      'Enable collaboration with SharePoint, Teams, Power Automate, and Power BI.',
      'Stand up GA360 analytics with Tag Manager and Data Studio.',
      'Ship digital solutions that feed data-driven decisions.',
    ],
  },
]

/** Company-grouped experience for the Work Experience component. */
export const WORK_EXPERIENCES: ExperienceItemType[] = [
  {
    id: 'ai-platform-for-pharma',
    companyName: 'AI Platform for Pharma',
    isCurrentEmployer: true,
    positions: [
      {
        id: 'ai-platform-principal',
        title: 'Principal Engineer',
        employmentPeriod: { start: '05.2025' },
        employmentType: 'Full-time',
        isExpanded: true,
        description: [
          '- Ship an AI platform that automates pharma content creation and workflows.',
          '- Build Content Wizard with Veeva CRM for brand-compliant end-to-end production.',
          '- Cut content timelines with generation pipelines under regulatory constraints.',
          '- Stand up shared engineering practices and a unified content lifecycle.',
        ].join('\n'),
        skills: ['TypeScript', 'React', 'LLM', 'Veeva CRM', 'Python', 'Postgres'],
      },
    ],
  },
  {
    id: 'comviva',
    companyName: 'Comviva',
    companyWebsite: 'https://www.comviva.com/',
    positions: [
      {
        id: 'comviva-tech-lead',
        title: 'Technical Lead',
        employmentPeriod: { start: '12.2021', end: '03.2025' },
        employmentType: 'Full-time',
        description: [
          '- Modernize MR into a cloud-agnostic SaaS with AI/ML baked in.',
          '- Own architecture across TypeScript, React, FeatherJS, Delta Lake, and vectors.',
          '- Lift scale, performance, and engagement with data-driven personalization.',
        ].join('\n'),
        skills: [
          'TypeScript',
          'React',
          'FeatherJS',
          'Delta Lake',
          'Postgres',
          'Vector DB',
        ],
      },
      {
        id: 'comviva-senior',
        title: 'Senior Engineer',
        employmentPeriod: { start: '06.2020', end: '11.2021' },
        employmentType: 'Full-time',
        description: [
          '- Ship 14+ integrations across commerce, CRM, analytics, and editors.',
          '- Drive campaign personalization with BigQuery and GoodData ML insights.',
          '- Raise performance via query tuning, caching, and CDN.',
          '- Unblock hard integration work on scale, security, and latency.',
        ].join('\n'),
        skills: ['Shopify', 'HubSpot', 'BigQuery', 'GoodData', 'AWS', 'CDN'],
      },
    ],
  },
  {
    id: 'tcs',
    companyName: 'Tata Consultancy Services (TCS)',
    companyWebsite: 'https://www.tcs.com/',
    positions: [
      {
        id: 'tcs-ase',
        title: 'Assistant System Engineer',
        employmentPeriod: { start: '09.2018', end: '05.2020' },
        employmentType: 'Full-time',
        description: [
          '- Deliver full-stack apps in React, Angular, Node, and Express.',
          '- Enable collaboration with SharePoint, Teams, Power Automate, and Power BI.',
          '- Stand up GA360 analytics with Tag Manager and Data Studio.',
          '- Ship digital solutions that feed data-driven decisions.',
        ].join('\n'),
        skills: [
          'React',
          'Angular',
          'Node.js',
          'Express',
          'Microsoft 365',
          'GA360',
        ],
      },
    ],
  },
]
