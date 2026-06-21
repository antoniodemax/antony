import { motion } from 'framer-motion'
import {
  Brain,
  Layers,
  Cpu,
  Bot,
  HeartHandshake,
  Zap,
} from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const reasons = [
  {
    icon: Brain,
    title: 'Strategic Thinking',
    description:
      'I connect technology decisions to business outcomes. Every architectural choice is made with your growth trajectory in mind, not just what\'s technically interesting.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'Systems built to handle 100 users today should be ready for 100,000 tomorrow. I design with scale, reliability, and maintainability as non-negotiables.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description:
      'I work exclusively with proven, modern tools — React, TypeScript, Supabase, Next.js — so your codebase stays clean, performant, and easy to hand off.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'I have hands-on experience integrating LLMs, RAG systems, and AI agents into production products. I know where AI adds value and where it creates noise.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description:
      'I don\'t disappear after launch. I offer ongoing support, feature development, and technical advisory so your product keeps improving with your business.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description:
      'Speed is a feature. I optimise for Lighthouse scores above 95, sub-second loads, and Core Web Vitals that make both users and search engines happy.',
  },
]

export default function WhyMe() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeader
            label="Why Work With Me"
            title="Engineering excellence meets business strategy"
            description="I combine deep technical expertise with a product mindset — building software that works beautifully and delivers measurable results."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-white/5 bg-card hover:border-accent/15 hover:bg-accent/3 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
