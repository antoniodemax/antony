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

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col bg-card border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote size={32} className="text-accent fill-accent" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <div key={si} className="w-3 h-3 rounded-sm bg-accent/70" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-muted leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
