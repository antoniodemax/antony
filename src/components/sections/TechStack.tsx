import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { techStack } from '../../data/techStack'

export default function TechStack() {
  const [active, setActive] = useState(techStack[0].id)
  const activeCategory = techStack.find(c => c.id === active)!

  return (
    <section className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionHeader
            label="Technology Stack"
            title="Tools I use to build with"
            description="A curated set of modern, battle-tested technologies that I've used in real production environments."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {techStack.map(cat => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                active === cat.id
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-white/10 bg-bg/70 text-muted hover:border-accent/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active ?? 'tech-stack'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {(activeCategory?.items ?? []).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="rounded-full border border-white/10 bg-bg/70 px-4 py-3 text-center text-sm font-semibold text-white shadow-card transition-all duration-200"
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
