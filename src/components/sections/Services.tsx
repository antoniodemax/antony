import { motion } from 'framer-motion'
import { Check, Clock } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { services } from '../../data/services'

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex flex-col rounded-2xl border border-white/5 bg-card hover:border-white/10 p-6 transition-all duration-300"
    >

      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white">{service.title}</h3>
          <p className="text-sm text-muted mt-2 leading-relaxed">{service.description}</p>
        </div>

        {/* Price */}
        <div>
          {service.pricingType === 'custom' ? (
            <div>
              <p className="text-2xl font-bold text-white">Custom Quote</p>
              <p className="text-xs text-muted mt-1">Scoped to your requirements</p>
            </div>
          ) : (
            <div>
              <p className="text-xs text-muted/60 uppercase tracking-wider mb-1">Starting at</p>
              <p className="text-2xl font-bold text-white">
                {service.kes}
              </p>
              <p className="text-sm text-muted">{service.usd}</p>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="rounded-lg bg-accent/5 border border-accent/15 px-3 py-2.5 space-y-1">
          <div className="flex items-center gap-1.5">
            <Clock size={11} className="text-accent flex-shrink-0" />
            <span className="text-xs font-semibold text-accent">{service.timeline}</span>
          </div>
          <p className="text-[11px] text-muted leading-relaxed">{service.timelineNote}</p>
        </div>

        <div className="border-t border-white/5 pt-4">
          <ul className="space-y-2.5">
            {service.features.map(feature => (
              <li key={feature} className="flex items-start gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    service.recommended ? 'bg-accent/20' : 'bg-white/8'
                  }`}
                >
                  <Check
                    size={9}
                    className={service.recommended ? 'text-accent' : 'text-muted'}
                  />
                </div>
                <span className="text-sm text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <Button
          as="a"
          href="#contact"
          onClick={e => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          variant="secondary"
          className="w-full"
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
    <section id="services" className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <SectionHeader
            label="Services & Investment"
            title="Transparent pricing, exceptional value"
            description="Premium digital products built with the same care and craft you'd expect from an in-house team — without the overhead."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted/60 mt-8"
        >
          Every project is unique. Final investment depends on scope, integrations, timelines,
          and business requirements. All prices are estimates. Book a consultation for an exact quote.
        </motion.p>
      </div>
    </section>
  )
}
