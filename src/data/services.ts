export interface Service {
  id: string
  title: string
  description: string
  kes: string
  usd?: string
  pricingType: 'starting' | 'custom'
  buttonLabel: string
  features: string[]
  timeline: string
  timelineNote?: string
  recommended?: boolean
}

export const services: Service[] = [
  {
    id: 'business-website',
    title: 'Business Website',
    description:
      'A conversion-optimised, high-performance business website that establishes authority, generates leads, and scales with your brand.',
    kes: 'KES 85,000',
    usd: 'Approx. USD 650',
    pricingType: 'starting',
    buttonLabel: 'Request Proposal',
    features: [
      'Custom UI/UX Design',
      'Responsive Website',
      'Up to 8 Pages',
      'Contact Form',
      'Basic SEO Setup',
      'Google Analytics Integration',
      'CMS Integration (Optional)',
      'Domain & Hosting Setup Assistance',
    ],
    timeline: '4–6 Weeks',
    timelineNote: 'Includes discovery, planning, design, and launch readiness.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with payment integration, inventory management, and a seamless checkout experience built for conversion.',
    kes: 'KES 150,000',
    usd: 'Approx. USD 1,150',
    pricingType: 'starting',
    buttonLabel: 'Start Your Store',
    features: [
      'Custom UI/UX Design',
      'Product Catalogue',
      'Shopping Cart',
      'Secure Checkout',
      'Payment Gateway Integration',
      'Order Management',
      'Customer Accounts',
      'Basic SEO Setup',
    ],
    timeline: '8–12 Weeks',
    timelineNote: 'Includes commerce architecture, payment setup, and conversion-focused checkout design.',
  },
  {
    id: 'web-application',
    title: 'Custom Web Application',
    description:
      'Bespoke, scalable web applications built to solve complex business problems — from internal tools to full SaaS products.',
    kes: 'KES 250,000',
    usd: 'Approx. USD 1,920',
    pricingType: 'starting',
    buttonLabel: 'Discuss Your Project',
    features: [
      'Discovery & Planning',
      'Custom UI/UX Design',
      'Secure Authentication',
      'Admin Dashboard',
      'API Integrations',
      'Database Design',
      'Deployment Support',
      'Technical Documentation',
    ],
    timeline: '12–20 Weeks',
    timelineNote: 'Includes product architecture, secure access, and scalable system design.',
  },
  {
    id: 'ai-consulting',
    title: 'AI Solutions & Consulting',
    description:
      'Strategic AI integration and technical consulting to help your business leverage AI where it creates measurable business value.',
    kes: 'Custom Quote',
    pricingType: 'custom',
    buttonLabel: 'Book a Consultation',
    features: [
      'AI Strategy Consultation',
      'AI Workflow Automation',
      'Custom AI Integrations',
      'AI Assistants & Chatbots',
      'Business Process Automation',
      'AI Solution Development',
      'Integration Support',
      'Deployment & Testing',
    ],
    timeline: 'Project Dependent',
    timelineNote: 'Investment and timeline are defined after discovery based on your goals and requirements.',
  },
]
