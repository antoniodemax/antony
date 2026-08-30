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
    id: 'basic-websites',
    title: 'Basic Websites',
    description: 'Professional, responsive websites for individuals, startups, and small businesses.',
    kes: '',
    usd: '',
    pricingType: 'starting',
    buttonLabel: 'Learn More',
    features: [],
    timeline: '',
    recommended: false,
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces and web applications built with a focus on performance and usability.',
    kes: '',
    usd: '',
    pricingType: 'starting',
    buttonLabel: 'Learn More',
    features: [],
    timeline: '',
    recommended: false,
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Secure APIs, databases, authentication, business logic, and reliable backend systems.',
    kes: '',
    usd: '',
    pricingType: 'starting',
    buttonLabel: 'Learn More',
    features: [],
    timeline: '',
    recommended: false,
  },
  {
    id: 'custom-web-development',
    title: 'Custom Web Development',
    description: 'Purpose-built web applications tailored to specific business requirements and workflows.',
    kes: '',
    usd: '',
    pricingType: 'starting',
    buttonLabel: 'Learn More',
    features: [],
    timeline: '',
    recommended: false,
  },
  {
    id: 'cybersecurity-services',
    title: 'Cybersecurity Services',
    description: 'Threat analysis, system safeguards, network defense, resource security, and other cybersecurity services.',
    kes: '',
    usd: '',
    pricingType: 'starting',
    buttonLabel: 'Learn More',
    features: [],
    timeline: '',
    recommended: false,
  },
  {
    id: 'ai-integrations',
    title: 'AI Integrations',
    description: 'Practical AI capabilities integrated into applications and workflows to automate processes and create smarter experiences.',
    kes: '',
    usd: '',
    pricingType: 'starting',
    buttonLabel: 'Learn More',
    features: [],
    timeline: '',
    recommended: false,
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    description: 'Technical guidance covering architecture, technology decisions, product development, and digital solutions.',
    kes: '',
    usd: '',
    pricingType: 'starting',
    buttonLabel: 'Learn More',
    features: [],
    timeline: '',
    recommended: false,
  },
]