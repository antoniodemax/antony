import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Clock } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { services } from '../../data/services'

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [showInvestment, setShowInvestment] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex h-full flex-col rounded-[2rem] glass-surface overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:border-accent/30"
    >
      <div className="absolute left-0 top-0 h-16 w-2 rounded-tr-full bg-accent/80" />

      <div className="flex flex-col flex-1 p-8 gap-6 z-10 relative">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white tracking-[-0.03em] group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed min-h-[3.5rem]">{service.description}</p>
        </div>

        <motion.div
          key={showInvestment ? 'shown' : 'hidden'}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {showInvestment ? (
            <>
              <div className="rounded-[1.5rem] border border-accent/20 bg-bg/70 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                {service.pricingType === 'custom' ? (
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-muted/60">Investment</p>
                    <p className="text-3xl font-bold text-white tracking-tight">{service.kes}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">Custom Quote</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-muted/60">Starting From</p>
                    <p className="text-3xl font-bold text-white tracking-tight">{service.kes}</p>
                    <p className="text-sm text-muted">{service.usd}</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowInvestment(false)}
                className="mt-2 text-sm text-accent/80 hover:text-accent underline"
                aria-label="Hide investment"
              >
                Hide Investment
              </button>
            </>
          ) : (
            <Button
              as="button"
              variant="secondary"
              size="sm"
              onClick={() => setShowInvestment(true)}
              className="w-auto self-start"
              aria-expanded={false}
              aria-controls="investment-details"
            >
              View Investment →
            </Button>
          )}
        </motion.div>

        <div className="inline-flex items-center gap-3 rounded-[1.5rem] border border-accent/15 bg-accent/10 px-4 py-3">
          <Clock size={16} className="text-accent" />
          <div>
            <p className="text-sm font-semibold text-accent">{service.timeline}</p>
            {service.timelineNote ? (
              <p className="text-xs text-muted mt-1 leading-relaxed">{service.timelineNote}</p>
            ) : null}
          </div>
        </div>

        <ul className="space-y-3 flex-1">
          {service.features.map(feature => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                <Check size={10} className="text-accent" />
              </div>
              <span className="text-sm text-muted leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <SectionHeader
            label="Investment"
            title="Investment"
            description="Every project is unique. The pricing below represents the typical starting investment for each service. Following a discovery session, you'll receive a detailed proposal outlining the final scope, timeline, investment, and delivery schedule."
          />
        </div>

        <div className="mb-8 rounded-[2rem] glass-surface px-6 py-6 sm:px-8 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Discovery First</p>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
              Every successful project begins with a discovery session where we discuss your business goals, technical requirements, project scope, timeline, and budget before preparing a detailed proposal.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-3xl mx-auto text-center"
        >
          <p className="text-sm text-muted/60 leading-relaxed">
            Every project is unique. The prices above represent starting estimates and may vary depending on project scope, complexity, integrations, timelines, and business requirements. Following the discovery session, you'll receive a detailed proposal outlining the final investment and delivery schedule.
          </p>
          <p className="mt-4 text-sm text-muted/60 leading-relaxed">
            Need something beyond these packages? Custom software solutions are quoted individually based on your requirements.{' '}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-accent font-semibold hover:text-white"
            >
              Book a consultation
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
