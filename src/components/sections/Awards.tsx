import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { awards } from '../../data/awards'

export default function Awards() {
  return (
    <section aria-labelledby="awards-heading" className="pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-[2rem] glass-surface p-6 sm:p-8"
        >
          <h2
            id="awards-heading"
            className="text-xs uppercase tracking-[0.35em] text-accent/80 font-semibold"
          >
            Awards &amp; Hackathons
          </h2>
          <ul className="mt-2 divide-y divide-white/5">
            {awards.map(({ id, project, host, position, certificateUrl }) => (
              <li
                key={id}
                className="flex flex-col gap-3 py-5 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Award size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-white">{position}</p>
                    <p className="mt-1 text-sm text-muted">
                      <span className="text-white/90">{project}</span>
                      <span className="mx-2 text-accent/50">·</span>
                      {host}
                    </p>
                  </div>
                </div>
                {certificateUrl && (
                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project} hackathon certificate (opens in a new tab)`}
                    className="inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded-full border border-white/10 bg-bg/70 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-accent/20 hover:text-accent sm:self-auto"
                  >
                    <Award size={12} />
                    Certificate
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
