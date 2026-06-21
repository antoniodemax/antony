import { motion } from 'framer-motion'
import { Code2, Globe, Layers, Star } from 'lucide-react'

const stats = [
  {
    icon: Layers,
    value: '4+',
    label: 'Projects Delivered',
    sub: 'Across diverse industries',
  },
  {
    icon: Star,
    value: '2+',
    label: 'Years Experience',
    sub: 'Production-grade engineering',
  },
  {
    icon: Code2,
    value: 'Full-Stack',
    label: 'Engineer',
    sub: 'Frontend to infrastructure',
  },
  {
    icon: Globe,
    value: 'Kenya → Global',
    label: 'Reach',
    sub: 'Working with clients worldwide',
  },
]

export default function Credibility() {
  return (
    <section className="py-8 border-y border-white/5 bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center gap-3 px-4 sm:px-6 py-5 ${
                i < stats.length - 1 ? 'border-r border-white/5' : ''
              } ${i >= 2 ? 'border-t border-white/5 lg:border-t-0' : ''}`}
            >
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-accent" />
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base leading-tight">
                  {value}
                </p>
                <p className="text-[11px] text-accent font-medium">{label}</p>
                <p className="text-[10px] text-muted mt-0.5 hidden sm:block">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
