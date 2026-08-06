import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeader
            label="Client Testimonials"
            title="Words from the people I've built for"
            description="Building long-term relationships through consistent delivery, clear communication, and engineering that actually serves the business."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/20"
            >
              <div className="absolute right-6 top-6 opacity-10">
                <Quote size={36} className="text-accent" />
              </div>

              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, si) => (
                  <span key={si} className="h-2 w-2 rounded-full bg-accent/70" />
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed italic flex-1">
                "{t.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-black"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
