import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent">
          <span className="w-4 h-px bg-accent/60" />
          {label}
          <span className="w-4 h-px bg-accent/60" />
        </span>
      </motion.div>

      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-lg text-muted leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
