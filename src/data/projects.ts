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
  liveUrl?: string
  caseStudyUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'crevia',
    title: 'Crevia Platform',
    industry: 'B2B SaaS / Creative Economy',
    tagline: 'The all-in-one business OS for creative professionals',
    problem:
      'Creative agencies and independent consultants lacked a unified platform to manage contracts, invoicing, client communication, and compliance — relying on fragmented, expensive tools.',
    outcome:
      'Full-stack SaaS with real-time workspaces, cryptographic e-signatures, KRA eTIMS tax compliance, AI-assisted deal structuring, and white-label client portals.',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    color: '#D4AF37',
    gradient: 'from-amber-900/40 via-yellow-900/20 to-stone-900/40',
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'shopflow',
    title: 'ShopFlow Commerce',
    industry: 'E-Commerce / Retail Technology',
    tagline: 'High-converting e-commerce with AI-powered recommendations',
    problem:
      'A regional retail chain needed to move from legacy spreadsheet management to a scalable digital storefront that could handle 10,000+ SKUs and real-time inventory sync across 5 branches.',
    outcome:
      'Increased online conversion rate by 34% and reduced cart abandonment by 28% within 3 months of launch through performance optimization and personalized product flows.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    color: '#6366F1',
    gradient: 'from-indigo-900/40 via-violet-900/20 to-slate-900/40',
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'datapulse',
    title: 'DataPulse Analytics',
    industry: 'Business Intelligence / FinTech',
    tagline: 'Real-time financial analytics dashboard for SMEs',
    problem:
      'A fintech startup needed a white-label analytics dashboard that could aggregate data from 7 different payment providers and display live business metrics to their 200+ merchant clients.',
    outcome:
      'Delivered a real-time dashboard processing 50,000+ daily transactions with sub-200ms query response times, enabling merchants to make data-driven decisions instantly.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'WebSockets'],
    color: '#10B981',
    gradient: 'from-emerald-900/40 via-teal-900/20 to-slate-900/40',
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'healthlink',
    title: 'HealthLink Pro',
    industry: 'Healthcare / HealthTech',
    tagline: 'Smart appointment and patient management system',
    problem:
      'A network of private clinics operated on paper-based patient records and manual scheduling, causing appointment conflicts, lost patient history, and significant revenue leakage.',
    outcome:
      'Digitized operations for 12 clinic branches, reducing no-show rates by 41% through automated SMS reminders and cutting administrative overhead by 6 hours per clinic per day.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Twilio', 'AWS'],
    color: '#3B82F6',
    gradient: 'from-blue-900/40 via-sky-900/20 to-slate-900/40',
    liveUrl: '#',
    caseStudyUrl: '#',
    githubUrl: '#',
  },
]
