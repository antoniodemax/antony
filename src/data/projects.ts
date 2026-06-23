export interface Project {
  id: string
  title: string
  industry: string
  tagline: string
  problem: string
  outcome: string
  stack: string[]
  color: string
  gradient: string
  image?: string
  liveUrl?: string
  caseStudyUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'crevia',
    title: 'Crevia',
    industry: 'B2B SaaS / Creative Economy',
    tagline: 'The all-in-one business OS for creative professionals',
    problem:
      'Creative agencies and independent consultants lacked a unified platform to manage contracts, invoicing, client communication, and compliance — relying on fragmented, expensive tools.',
    outcome:
      'Full-stack SaaS with real-time workspaces, cryptographic e-signatures, KRA eTIMS tax compliance, AI-assisted deal structuring, and white-label client portals.',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    color: '#D4AF37',
    gradient: 'from-amber-900/40 via-yellow-900/20 to-stone-900/40',
    image: '/project-crevia.png',
    liveUrl: 'https://crevia.app/',
  },
  {
    id: 'millux',
    title: 'Millux Collections',
    industry: 'E-Commerce / Fashion & Luxury',
    tagline: 'A premium digital storefront for a luxury fashion brand',
    problem:
      'A luxury fashion brand needed a high-end online presence that matched the prestige of its physical collections — fast, elegant, and built to convert discerning shoppers.',
    outcome:
      'Delivered a sleek, performance-optimized e-commerce experience with smooth product browsing, a refined UI, and a checkout flow designed to reduce friction and drive sales.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    color: '#8B5CF6',
    gradient: 'from-violet-900/40 via-purple-900/20 to-slate-900/40',
    image: '/project-millux.png',
    liveUrl: 'https://milluxcollections.vercel.app/',
  },
]
