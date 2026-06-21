import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { techStack } from '../../data/techStack'

const levelColors = {
  expert: 'bg-accent/20 text-accent border-accent/25',
  proficient: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  familiar: 'bg-white/5 text-muted border-white/8',
}

const levelDots = {
  expert: 'bg-accent',
  proficient: 'bg-blue-400',
  familiar: 'bg-muted',
}

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

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techStack.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'bg-accent text-black'
                  : 'border border-white/8 text-muted hover:text-white hover:border-white/20 bg-card'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border text-center cursor-default transition-all duration-200 ${levelColors[item.level]}`}
              >
                {/* Level indicator */}
                <div className="flex gap-1">
                  {(['expert', 'proficient', 'familiar'] as const).map((l, li) => (
                    <div
                      key={l}
                      className={`w-1.5 h-1.5 rounded-full ${
                        ['expert', 'proficient', 'familiar'].indexOf(item.level) <= li
                          ? 'bg-white/15'
                          : levelDots[item.level]
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold leading-tight">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6 mt-8"
        >
          {[
            { level: 'expert', label: 'Expert', color: 'bg-accent' },
            { level: 'proficient', label: 'Proficient', color: 'bg-blue-400' },
            { level: 'familiar', label: 'Familiar', color: 'bg-muted' },
          ].map(l => (
            <div key={l.level} className="flex items-center gap-2 text-xs text-muted">
              <div className={`w-2 h-2 rounded-full ${l.color}`} />
              {l.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
