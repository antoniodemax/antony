import { motion } from 'framer-motion'
import { Check, Clock } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { services } from '../../data/services'

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
    >
      {/* Gold top accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-accent/80 via-accent to-accent/20" />

      <div className="flex flex-col flex-1 p-8 gap-6">

        {/* Header */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{service.description}</p>
        </div>

        {/* Price */}
        <div className="pb-6 border-b border-white/5">
          {service.pricingType === 'custom' ? (
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-muted/50">Investment</p>
              <p className="text-3xl font-bold text-white tracking-tight">{service.kes}</p>
              <p className="text-xs text-muted uppercase tracking-[0.22em]">Custom Quote</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[11px] text-muted/50 uppercase tracking-widest">Starting From</p>
              <p className="text-3xl font-bold text-white tracking-tight">{service.kes}</p>
              <p className="text-sm text-muted">{service.usd}</p>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="inline-flex items-center gap-3 rounded-2xl border border-accent/15 bg-white/5 px-4 py-3">
          <Clock size={16} className="text-accent" />
          <div>
            <p className="text-sm font-semibold text-accent">{service.timeline}</p>
            {service.timelineNote ? (
              <p className="text-xs text-muted mt-1 leading-relaxed">{service.timelineNote}</p>
            ) : null}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-1">
          {service.features.map(feature => (
            <li key={feature} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={10} className="text-accent" />
              </div>
              <span className="text-sm text-muted leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          as="a"
          href="#contact"
          onClick={e => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          variant={service.pricingType === 'custom' ? 'primary' : 'secondary'}
          className="w-full mt-2"
          size="md"
        >
          {service.buttonLabel}
        </Button>

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

        <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.15)] sm:px-8 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Discovery First</p>
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
              Every successful project begins with a discovery session where we discuss your business goals, technical requirements, project scope, timeline, and budget before preparing a detailed proposal.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
