import type { Article } from '../types/article'

const articles: Article[] = [
  {
    id: 'ai-era',
    slug: 'building-products-in-the-ai-era',
    title: 'Building Products in the AI Era',
    subtitle: 'Designing useful, safe and valuable AI-first products',
    excerpt: 'A pragmatic guide to building responsible and defensible AI products.',
    description: '',
    author: 'Antony Peter',
    authorRole: 'Senior Full-Stack Software Engineer',
    publishDate: '2026-07-03',
    readingTime: '8 min',
    category: 'AI',
    tags: ['AI', 'Product', 'ML', 'Architecture'],
    featuredImage: '/hero-bg.jpg',
    featured: true,
    content: `
      <h2 id="intro">Introduction</h2>
      <p>This article explains how to think about products built with AI at their core.</p>
      <h3 id="principles">Principles</h3>
      <ul>
        <li>Start with user value</li>
        <li>Measure and iterate</li>
      </ul>
      <h3 id="ops">Operational considerations</h3>
      <p>Productionizing ML requires observability, data contracts and cost controls.</p>
    `,
    relatedArticles: ['software-architecture', 'full-stack'],
  },

  {
    id: 'software-architecture',
    slug: 'why-great-software-architecture-still-wins',
    title: 'Why Great Software Architecture Still Wins',
    subtitle: 'Timeless engineering principles that scale',
    excerpt: 'Architecture decisions are product decisions. Here is why they matter.',
    description: '',
    author: 'Antony Peter',
    authorRole: 'Senior Full-Stack Software Engineer',
    publishDate: '2026-07-01',
    readingTime: '7 min',
    category: 'Architecture',
    tags: ['Architecture', 'Systems', 'Design'],
    featuredImage: '/project-crevia.png',
    featured: false,
    content: `
      <h2 id="overview">Overview</h2>
      <p>Good architecture reduces cognitive load, increases velocity, and limits technical debt.</p>
      <h3 id="principles">Principles</h3>
      <ol>
        <li>Encapsulation</li>
        <li>Separation of concerns</li>
      </ol>
    `,
    relatedArticles: ['full-stack'],
  },

  {
    id: 'b2b-lessons',
    slug: 'lessons-from-building-b2b-saas-in-africa',
    title: 'Lessons from Building B2B SaaS in Africa',
    subtitle: 'Country-specific product and go-to-market lessons',
    excerpt: 'What I learned building enterprise SaaS for African customers.',
    description: '',
    author: 'Antony Peter',
    authorRole: 'Senior Full-Stack Software Engineer',
    publishDate: '2025-11-12',
    readingTime: '6 min',
    category: 'Product',
    tags: ['SaaS', 'Africa', 'Product'],
    featuredImage: '/project-millux.png',
    featured: false,
    content: `
      <h2 id="intro">Intro</h2>
      <p>Distribution and pricing are different — adapt to your context.</p>
    `,
    relatedArticles: ['software-architecture'],
  },

  {
    id: 'full-stack',
    slug: 'modern-full-stack-from-idea-to-production',
    title: 'Modern Full-Stack: From Idea to Production',
    subtitle: 'A pragmatic end-to-end checklist for launching products',
    excerpt: 'A checklist covering idea validation, engineering, and delivery.',
    description: '',
    author: 'Antony Peter',
    authorRole: 'Senior Full-Stack Software Engineer',
    publishDate: '2024-09-05',
    readingTime: '9 min',
    category: 'Engineering',
    tags: ['Full-Stack', 'DevOps', 'Delivery'],
    featuredImage: '/antony.jpg',
    featured: false,
    content: `
      <h2 id="start">Start</h2>
      <p>Validate ideas quickly, build a minimal delightful experience, and ship.</p>
    `,
    relatedArticles: ['ai-era'],
  },
]

export function getAllArticles() {
  return articles
}

export function getArticleBySlug(slug: string) {
  return articles.find(a => a.slug === slug)
}

export default articles
