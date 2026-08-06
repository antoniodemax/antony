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
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl overflow-hidden sm:p-8"
          >
            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full border border-accent/15 opacity-60" />
            <div className="absolute right-8 top-20 h-16 w-16 rounded-full bg-accent/10 blur-2xl opacity-70" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
              <img
                src="/antony.jpg"
                alt="Antony Peter — Senior Full-Stack Software Engineer"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-bg/80 p-5 backdrop-blur-xl">
              <div className="flex flex-col gap-2 text-sm sm:text-base text-white">
                <div className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-[0.24em]">
                  <MapPin size={14} /> Nairobi, Kenya
                </div>
                <div className="inline-flex items-center gap-2 text-muted">
                  <Calendar size={14} /> Available for projects
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="space-y-10"
          >
            <SectionHeader
              label="About Me"
              title="Engineering at the intersection of product and impact."
              align="left"
            />

            <div className="space-y-5 text-muted leading-8 text-sm sm:text-base">
              <p>
                I'm <strong>Antony Peter</strong> — a <strong>Software Engineer, AI Engineer, and Founder of Antopier Technologies</strong>, based in Nairobi, Kenya. I build scalable digital products for businesses and organizations that view technology as a competitive advantage.
              </p>
              <p>
                Over the past two years, I've progressed from building my first production applications to designing and developing modern web applications, SaaS platforms, e-commerce systems, real-time dashboards, and AI-powered solutions. Every project is built with a strong focus on performance, scalability, security, and long-term maintainability.
              </p>
              <p>
                My strength extends beyond writing code. I take the time to understand each client's business, identify the challenges that matter most, and build technology solutions that align with their goals. I believe exceptional software should do more than function—it should solve real problems, create measurable value, and support sustainable business growth.
              </p>
              <p>
                I lead a digital solutions studio focused on designing and developing premium web applications, mobile applications, AI-powered solutions, enterprise software, and custom digital products. Guided by the mission to build the future, one solution at a time, my work is committed to delivering secure, scalable, and high-quality software that helps businesses innovate, grow, and succeed with confidence.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-accent/80 font-semibold">Education</p>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <div>
                    <p className="text-sm font-semibold text-white">Software Engineering</p>
                    <p className="text-xs text-muted">Moringa School</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 mb-4 text-accent">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <Button
              as="a"
              href="#contact"
              size="md"
              className="mt-2"
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
