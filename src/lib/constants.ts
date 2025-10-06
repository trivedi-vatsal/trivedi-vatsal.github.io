import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

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

// Global
export const SITE: Site = {
  TITLE: 'Vatsal Trivedi',
  DESCRIPTION:
    'Full Spectrum Engineer | Integration Specialist | UI/UX Enthusiast - With over 8 years of experience building innovative web applications and scalable SaaS platforms.',
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
    title: 'Bachelor of Engineering - Computer Engineering',
    institution: 'Birla Vishvakarma Mahavidyalaya Engineering College, Vallabh Vidyanagar',
    link: 'https://bvmengineering.ac.in/',
    date: '2014 - 2018',
  },
]

export const EXPERIENCE = [
  {
    company: 'AI Platform for Pharma',
    location: 'Bengaluru, India',
    position: 'Principal Engineer',
    start: 'May 2025',
    end: 'Current',
    link: '',
    tasks: [
      'Leading the development of an AI-powered platform that transforms pharmaceutical content creation and workflow automation.',
      'Architecting an AI Content Wizard integrated with Veeva CRM for end-to-end pharmaceutical workflow automation and brand-compliant content creation.',
      'Implementing automated content generation and repurposing pipelines that reduce production timelines while ensuring regulatory compliance.',
      'Establishing cross-functional engineering best practices and centralized content lifecycle management covering creation, approval, and distribution.'
    ],
  },
  {
    company: 'Comviva',
    location: 'Bengaluru, India',
    position: 'Technical Lead',
    start: 'Dec 2021',
    end: 'Mar 2025',
    link: 'https://www.comviva.com/',
    tasks: [
      'Leading the modernization of the MR platform into a cloud-agnostic SaaS product with AI/ML integration.',
      'Driving architecture and feature development using TypeScript, React, FeatherJS, Delta Lake, Postgres, and vector databases.',
      'Delivering major improvements in scalability, performance, and user engagement through data-driven personalization.'
    ],
  },
  {
    company: 'Comviva',
    location: 'Bengaluru, India',
    position: 'Senior Engineer',
    start: 'Jun 2020',
    end: 'Nov 2021',
    link: 'https://www.comviva.com/',
    tasks: [
      'Delivered 14+ integrations including Shopify Public App, Seatgeek, HubSpot, AWS QuickSight, GoodData, Matomo, WooCommerce, WordPress, Batch Push, and Unlayer Editor.',
      'Implemented ML-driven insights using Google BigQuery and GoodData for personalized campaign optimization.',
      'Enhanced performance through query optimization, caching, and CDN strategies.',
      'Addressed complex integration challenges related to scalability, data security, and performance optimization.'
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    location: 'Gandhinagar, India',
    position: 'Assistant System Engineer',
    start: 'Sep 2018',
    end: 'May 2020',
    link: 'https://www.tcs.com/',
    tasks: [
      'Developed and delivered full-stack applications using ReactJS, Angular, NodeJS, and ExpressJS.',
      'Enabled business collaboration using Microsoft 365 suite including SharePoint, Teams, Power Automate, and Power BI.',
      'Implemented GA360-based analytics solutions using Google Analytics, Tag Manager, and Data Studio.',
      'Contributed to scalable, data-driven decision-making through end-to-end digital solutions.'
    ],
  },
]
