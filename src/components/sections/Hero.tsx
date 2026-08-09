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

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 hero-decor bg-noise opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-950/15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] py-20 lg:py-28">
          <motion.div variants={container} initial="initial" animate="animate" className="space-y-8 sm:space-y-10">
            <motion.div variants={item} className="space-y-6 max-w-xl sm:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight sm:leading-[1.05] text-white">
                Building scalable software and <span className="text-white/90">intelligent AI solutions</span>
                <br className="hidden lg:block" />
                for ambitious businesses.
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-8 text-muted">
                Senior Full Stack Software Engineer • AI Engineer • Aspiring CyberSecurity Analyst
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                as="a"
                href="#work"
                size="lg"
                className="w-full"
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
                className="w-full mt-4 sm:mt-0 sm:w-auto"
                onClick={() => setBookingOpen(true)}
              >
                <MessageSquare size={16} />
                Let's Talk
              </Button>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-[2rem] glass-surface p-5">
              {stats.map(stat => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-muted/80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-[320px] overflow-visible sm:max-w-[360px] md:max-w-[420px]">
            <img
              src="/portrait.png"
              alt="Antony Peter — Senior Full-Stack Software Engineer"
              loading="lazy"
              decoding="async"
              className="hero-portrait mx-auto h-[320px] w-auto object-top sm:h-[420px] lg:h-[500px]"
            />
          </motion.div>
        </div>
      </div>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  )
}
