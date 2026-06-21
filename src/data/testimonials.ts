export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  initials: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'TechVentures Africa',
    initials: 'SC',
    color: '#6366F1',
    quote:
      "Antony doesn't just write code — he thinks about the business problem first. He challenged our assumptions early, refactored our data model before we'd built ourselves into a corner, and delivered a platform that's handled 10x our projected load without a single incident. That kind of engineering judgment is rare.",
  },
  {
    id: '2',
    name: 'Marcus Williams',
    role: 'CEO',
    company: 'Elevate Digital',
    initials: 'MW',
    color: '#10B981',
    quote:
      "We'd worked with three developers before Antony. None of them had the communication skills, the technical depth, and the product instinct he brings. He delivered our e-commerce platform in 6 weeks, under budget, and it's been our single biggest revenue driver since launch. I won't work with anyone else.",
  },
  {
    id: '3',
    name: 'Amina Osei',
    role: 'Co-Founder',
    company: 'GreenPath Solutions',
    initials: 'AO',
    color: '#D4AF37',
    quote:
      "What impressed me most was Antony's ability to translate complex technical concepts into clear business decisions. He helped us modernise a decade-old system without any downtime, integrated two AI workflows that reduced our manual processing by 70%, and left us with clean, documented code our team could actually maintain.",
  },
]
