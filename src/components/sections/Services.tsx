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
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-card overflow-hidden hover:border-accent/30 transition-all duration-500"
    >
      {/* Gold top accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-accent/80 via-accent to-accent/20" />

      <div className="flex flex-col flex-1 p-8 gap-6">

        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{service.description}</p>
        </div>

        {/* Price */}
        <div className="pb-6 border-b border-white/5">
          {service.pricingType === 'custom' ? (
            <div>
              <p className="text-3xl font-bold text-white tracking-tight">Custom Quote</p>
              <p className="text-xs text-muted mt-1.5 uppercase tracking-widest">Scoped to your requirements</p>
            </div>
          ) : (
            <div>
              <p className="text-[11px] text-muted/50 uppercase tracking-widest mb-2">Starting at</p>
              <p className="text-3xl font-bold text-white tracking-tight">{service.kes}</p>
              <p className="text-sm text-muted mt-1">{service.usd}</p>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-accent/5 border border-accent/15">
          <Clock size={14} className="text-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-accent">{service.timeline}</p>
            <p className="text-xs text-muted mt-0.5 leading-relaxed">{service.timelineNote}</p>
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
          variant={service.recommended ? 'primary' : 'secondary'}
          className="w-full mt-2"
          size="md"
        >
          {service.pricingType === 'custom' ? 'Discuss Your Project' : 'Get Started'}
        </Button>

      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center">
          <SectionHeader
            label="Services & Investment"
            title="Transparent pricing, exceptional value"
            description="Premium digital products built with the same care and craft you'd expect from an in-house team — without the overhead."
          />
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted/50 mt-10 max-w-2xl mx-auto"
        >
          Every project is unique. Final investment depends on scope, integrations, timelines,
          and business requirements. All prices are estimates.{' '}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="text-accent hover:text-white transition-colors underline underline-offset-2"
          >
            Book a consultation
          </a>{' '}
          for an exact quote.
        </motion.p>

      </div>
    </section>
  )
}
