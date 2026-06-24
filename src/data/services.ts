export interface Service {
  id: string
  title: string
  description: string
  kes: string
  usd: string
  pricingType: 'starting' | 'custom' | 'hourly'
  features: string[]
  timeline: string
  timelineNote: string
  recommended?: boolean
}

export const services: Service[] = [
  {
    id: 'business-website',
    title: 'Business Website',
    description:
      'A conversion-optimised, high-performance business website that establishes authority, generates leads, and scales with your brand.',
    kes: 'KES 85,000+',
    usd: 'USD 650+',
    pricingType: 'starting',
    features: [
      'Custom design & branding',
      'Mobile-first responsive layout',
      'SEO & performance optimised',
      'CMS integration',
      'Contact & lead capture forms',
      'Analytics setup',
    ],
    timeline: '3–5 Weeks',
    timelineNote: 'Includes strategy, custom UI/UX design, mobile optimization, and CMS integration.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with payment integration, inventory management, and a seamless checkout experience built for conversion.',
    kes: 'KES 140,000+',
    usd: 'USD 1,070+',
    pricingType: 'starting',
    features: [
      'Product catalogue & inventory',
      'Secure payment integration',
      'Order management system',
      'Customer accounts & history',
      'Discount & promotions engine',
      'Mobile-optimised checkout',
    ],
    timeline: '6–8 Weeks',
    timelineNote: 'Includes secure payment routing, custom product architecture, and checkout optimization.',
  },
  {
    id: 'web-application',
    title: 'Custom Web Application',
    description:
      'Bespoke, scalable web applications built to solve complex business problems — from internal tools to full SaaS products.',
    kes: 'KES 200,000+',
    usd: 'USD 1,530+',
    pricingType: 'starting',
    features: [
      'Custom architecture design',
      'User authentication & RBAC',
      'Database design & optimisation',
      'Third-party API integrations',
      'Real-time features',
      'Deployment & DevOps setup',
    ],
    timeline: '8–12+ Weeks',
    timelineNote: 'Includes bespoke system architecture, database design, user authentication, and DevOps setup.',
  },
  {
    id: 'ai-consulting',
    title: 'AI Solutions & Consulting',
    description:
      'Strategic AI integration and technical consulting to help your business leverage AI where it creates measurable business value.',
    kes: 'Custom Quote',
    usd: 'Custom Quote',
    pricingType: 'custom',
    features: [
      'AI strategy & roadmap',
      'LLM & RAG implementation',
      'Custom AI agent development',
      'Model fine-tuning & evaluation',
      'Legacy system modernisation',
      'Technical due diligence',
    ],
    timeline: '6–16+ Weeks',
    timelineNote: 'Highly variable. From a simple API integration to a full RAG system with custom embeddings and production deployment.',
  },
]
