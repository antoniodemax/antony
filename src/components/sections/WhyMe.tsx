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
      'Every technology decision is made with your business goals in mind. I focus on building solutions that improve efficiency, support growth, and deliver measurable long-term value—not just technically impressive software.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'I design software with scalability, reliability, and maintainability at its core, ensuring your solution is built to support future growth as your business evolves.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description:
      'I build with modern, industry-standard technologies selected to match your project requirements — including React, TypeScript, Next.js, Python, Flask, PostgreSQL, Supabase, and AI frameworks where appropriate.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'I integrate AI solutions that automate workflows, improve decision-making, and enhance user experiences. Every implementation is driven by practical business value, ensuring AI solves real problems rather than adding unnecessary complexity.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description:
      'Launching your software is just the beginning. I provide ongoing support, maintenance, feature enhancements, and technical guidance to help your product continue evolving alongside your business.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description:
      'Performance is built into every project from the start. I optimise for fast load times, responsive user experiences, and modern web standards to ensure your software performs reliably across devices.',
  },
]

export default function WhyMe() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeader
            label="HOW I WORK"
            title="Engineering excellence meets business strategy"
            description="I combine technical expertise with a business-focused approach to build secure, scalable, and high-performing software that delivers measurable results."
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
