export interface Service {
  id: string
  title: string
  description: string
  kes: string
  usd: string
  pricingType: 'starting' | 'custom' | 'hourly'
  features: string[]
  recommended?: boolean
}

export const services: Service[] = [
  {
    id: 'basic-website',
    title: 'Basic Website',
    description:
      'A clean, professional web presence for individuals and small businesses — fast to launch, mobile-friendly, and built to impress.',
    kes: 'KES 30,000+',
    usd: 'USD 230+',
    pricingType: 'starting',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      'Social media links',
      'Fast delivery (1–2 weeks)',
    ],
  },
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
  },
]
