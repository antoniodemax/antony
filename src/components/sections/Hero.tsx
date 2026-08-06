import { useState } from 'react'
import { type Variants, motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import Button from '../ui/Button'
import BookingModal from '../ui/BookingModal'

const container: Variants = {
  animate: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const stats = [
  { value: '2+', label: 'Projects Delivered' },
  { value: '2+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: 'Kenya', label: '→ Global' },
]

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  return (
    <section
      id="home"
      onMouseMove={event => {
        const rect = event.currentTarget.getBoundingClientRect()
        setPointer({ x: event.clientX - rect.left, y: event.clientY - rect.top })
      }}
      className="relative min-h-screen overflow-hidden pt-20"
    >
      <div className="absolute inset-0 hero-decor bg-noise opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-br from-bg/90 via-surface/55 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-20 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl opacity-80 pointer-events-none" />
      <div
        className="pointer-events-none absolute h-48 w-48 rounded-full bg-accent/15 blur-3xl opacity-60 transition-transform duration-200"
        style={{ left: pointer.x, top: pointer.y }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] py-24 lg:py-32">
          <motion.div variants={container} initial="initial" animate="animate" className="space-y-10">
            <motion.div variants={item} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-accent shadow-accent/10 backdrop-blur-xl">
              Senior Full Stack Software Engineer • AI Engineer • Aspiring CyberSecurity Analyst
            </motion.div>

            <motion.div variants={item} className="space-y-7 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] leading-tight text-white">
                Building scalable software,
                <br className="hidden xl:block" />
                <span className="text-white/90">intelligent AI solutions,</span>{' '}
                and <span className="text-accent">digital products</span>
                <br className="hidden xl:block" />
                that help ambitious businesses grow.
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-8 text-muted">
                Senior Full Stack Software Engineer • AI Engineer • Aspiring CyberSecurity Analyst
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                as="a"
                href="#work"
                size="lg"
                className="w-full sm:w-auto"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View My Work <ArrowRight size={16} />
              </Button>
              <Button
                as="button"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => setBookingOpen(true)}
              >
                <MessageSquare size={16} />
                Let's Talk
              </Button>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-xl">
              {stats.map(stat => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-[420px] overflow-visible">
            <div className="pointer-events-none absolute left-1/2 top-10 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl opacity-90" />
            <div className="pointer-events-none absolute -right-8 top-20 h-24 w-24 rounded-full border border-cyan-200/20 opacity-60" />
            <div className="pointer-events-none absolute left-6 bottom-12 h-24 w-24 rounded-full border border-white/10 opacity-30" />
            <img
              src="/antony.jpg"
              alt="Antony Peter — Senior Full-Stack Software Engineer"
              loading="lazy"
              decoding="async"
              className="relative hero-portrait mx-auto h-[560px] w-full object-cover object-top shadow-[0_35px_90px_rgba(0,0,0,0.28)]"
            />
          </motion.div>
        </div>
      </div>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  )
}
