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
    id: 'pos-supermarket',
    title: 'POS Supermarket System',
    industry: 'Retail / Point-of-Sale',
    tagline: 'Streamlining supermarket operations with a full-stack POS',
    problem: 'A full-stack point-of-sale system for managing sales, products, inventory, and day-to-day supermarket operations.',
    outcome: 'A robust POS system that manages sales, inventory, and customer transactions efficiently, improving operational accuracy and speed.',
    stack: ['PHP', 'PostgreSQL', 'Blade', 'Tailwind CSS', 'TypeScript'],
    color: '#10B981',
    gradient: 'from-emerald-400/30 via-green-400/20 to-slate-400/30',
    liveUrl: 'https://github.com/flavian-jumba/POS-supermarket',
  },
  {
    id: 'crevia',
    title: 'Crevia',
    industry: 'B2B SaaS / Creative Economy',
    tagline: 'The all-in-one business OS for creative professionals',
    problem:
      'Creative agencies and independent consultants lacked a unified platform to manage contracts, invoicing, client communication, and compliance — relying on fragmented, expensive tools.',
    outcome:
      'Full-stack SaaS with real-time workspaces, cryptographic e-signatures, AI-assisted deal structuring, and white-label client portals.',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    color: '#D4AF37',
    gradient: 'from-amber-400/30 via-yellow-400/20 to-stone-400/30',
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
    gradient: 'from-violet-400/30 via-purple-400/20 to-slate-400/30',
    image: '/millux.png',
    liveUrl: 'https://milluxcollections.vercel.app/',
  },

  {
    id: 'simply-feminine-network',
    title: 'Simply Feminine Network',
    industry: 'NGO / Women Empowerment',
    tagline: 'Empowering women, advocating for social causes, and uplifting vulnerable communities through mentorship, health campaigns, and charitable outreach.',
    problem: 'The organization needed a digital presence to amplify its mission, showcase initiatives, and facilitate outreach and donations.',
    outcome: 'A responsive website that highlights programs, impact stories, and enables community engagement and support.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    color: '#EC4899',
    gradient: 'from-rose-400/30 via-pink-400/20 to-slate-400/30',
    liveUrl: 'https://simplyfemininenetwork-2rh3.vercel.app/',
    githubUrl: 'https://github.com/antoniodemax/simplyfemininenetwork'
  }
]
