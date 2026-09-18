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
    id: 'elimu-mtaani',
    title: 'Elimu Mtaani',
    industry: 'EdTech / AI (1st Place, Claude Hackathon)',
    tagline: 'AI-assisted lesson planning and self-directed learning for Kenyan CBC classrooms',
    problem:
      'Kenyan teachers spend hours turning curriculum documents into term plans, daily lessons, quizzes and classroom activities, while students have no safe way to explore topics on their own.',
    outcome:
      'Led development of the first-place Claude Hackathon entry, a platform that turns one curriculum source into a full term timetable, narrated slide lessons, quizzes, classroom games and an AI tutor chat, with role-based teacher and student experiences and no learner data stored.',
    stack: ['Next.js', 'TypeScript', 'Convex', 'Clerk', 'Anthropic Claude API', 'Tailwind CSS', 'Playwright'],
    color: '#F59E0B',
    gradient: 'from-amber-400/30 via-orange-400/20 to-slate-400/30',
    githubUrl: 'https://github.com/jarviswuod/elimuMtaani',
  },
  {
    id: 'sokowise',
    title: 'SokoWise',
    industry: 'Fintech / SMB Operations',
    tagline: 'Simple business management for Kenyan small businesses',
    problem:
      'Kenyan shop owners, food stalls and small retailers run on cash, M-Pesa and customer credit at once, yet most bookkeeping tools are foreign templates with the currency swapped, so sales, stock, debts and expenses end up in notebooks and memory.',
    outcome:
      'A mobile-first PWA where a sale can be split across cash, M-Pesa and credit, stock and customer debts are tracked automatically, M-Pesa confirmation SMSs can be shared straight into the app and matched to sales, supplier receipts are photographed and turned into restocks, and an assistant answers questions about the business in English or Swahili from the owner\'s own records.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'FastAPI', 'PostgreSQL', 'PWA', 'Render'],
    color: '#0B6E4F',
    gradient: 'from-emerald-500/30 via-teal-400/20 to-slate-400/30',
    liveUrl: 'https://sokowise-staging.vercel.app/',
  },
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
    liveUrl: 'https://www.crevia.app/',
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
    id: 'underwrld',
    title: 'UNDERWRLD',
    industry: 'Music Production / Creative Studio',
    tagline: 'A bold digital home for an underground music production studio',
    problem:
      'A music production studio with a growing catalogue needed a website that matched its underground identity, showcased its services and releases, and let artists request sessions without the team chasing emails.',
    outcome:
      'A high-impact marketing site with a Spotify-linked catalogue and session-request form, plus a Google-secured admin dashboard for reviewing and managing every inquiry.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Functions', 'Upstash Redis'],
    color: '#EF4444',
    gradient: 'from-red-500/30 via-rose-400/20 to-slate-400/30',
    liveUrl: 'https://underwrld.vercel.app/',
    githubUrl: 'https://github.com/antoniodemax/underwrld',
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
    liveUrl: 'https://simplyfemininenetwork-42vf.vercel.app/',
    githubUrl: 'https://github.com/antoniodemax/simplyfemininenetwork'
  }
]
