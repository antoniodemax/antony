import { motion } from 'framer-motion'
import { MapPin, Calendar, Target, Lightbulb } from 'lucide-react'

import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const pillars = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To help ambitious startups, organisations, and businesses build digital products that create real value — software that grows revenue, saves time, and positions them as leaders in their markets.',
  },
  {
    icon: Lightbulb,
    title: 'Philosophy',
    text: 'Great software is the intersection of clear thinking and strong execution. I believe in building less, building right, and iterating with intention. Complexity is the enemy of scale.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Profile image */}
            <div className="relative mx-auto w-48 sm:w-64 lg:w-full lg:max-w-sm">
              <div className="aspect-[3/4] rounded-2xl bg-card border border-white/8 overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
                <img
                  src="/antony.jpg"
                  alt="Antony Peter — Senior Full-Stack Software Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                {/* Subtle gold gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-card border border-white/8 rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                  <MapPin size={12} className="text-accent" />
                  Nairobi, Kenya
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-muted mt-1">
                  <Calendar size={11} />
                  Available for projects
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right: Story + Mission + Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="space-y-10"
          >
            <SectionHeader
              label="About Me"
              title="Engineering at the intersection of product and impact."
              align="left"
            />

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I'm Antony Peter — a Senior Full-Stack Software Engineer based in Nairobi, Kenya,
                building scalable digital products for organizations that treat technology as a
                competitive advantage.
              </p>
              <p>
                Over the past 2 years, I've gone from shipping my first production app to
                architecting and delivering complex SaaS platforms, e-commerce systems, real-time
                dashboards, and AI-integrated products for clients across Kenya.
              </p>
              <p>
                My edge isn't just technical depth — it's the ability to understand your business
                model, align technology decisions with your goals, and execute with the discipline
                of an engineer who's seen what happens when shortcuts are taken.
              </p>
              <p>
                As the Lead Developer at Crevia, I am building a B2B SaaS platform for business
                professionals involving invoicing, client workspaces, and AI-assisted deal
                structuring. It's the product I'm most proud of, and it reflects exactly how I
                approach every client engagement.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted/50">Education</p>
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-accent/60 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Software Engineering Certificate</p>
                  <p className="text-xs text-muted">Moringa School</p>
                </div>
              </div>
            </div>

            {/* Mission + Philosophy cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="p-5 rounded-xl border border-white/5 bg-card space-y-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon size={15} className="text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <Button as="a" href="#contact" size="md"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let's Build Together
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
