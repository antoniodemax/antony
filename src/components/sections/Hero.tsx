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

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Directional gradient — dark on left for text, image visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/40 to-transparent" />
        {/* Bottom fade into site background */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
        {/* Subtle gold tint */}
        <div className="absolute inset-0 bg-accent/[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center py-20 lg:py-32">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-7 w-full max-w-6xl
                       text-left items-start
                       lg:text-center lg:items-center"
          >
            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-[2.1rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]
                         font-bold leading-[1.1] tracking-[-0.03em] w-full"
            >
              Building scalable software,{' '}
              <br className="hidden lg:block" />
              <span className="text-white">intelligent AI solutions,</span>
              {' '}and{' '}
              <span className="text-gradient-gold">digital products</span>
              <br className="hidden lg:block" />
              {' '}that help ambitious businesses grow.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-[0.95rem] sm:text-lg text-white/90 leading-relaxed max-w-lg"
            >
              Senior Full Stack Software Engineer • AI Engineer • Founder of Vertex Labs
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto lg:justify-center"
            >
              <Button
                as="a"
                href="#work"
                size="lg"
                className="w-full sm:w-auto justify-center"
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
                className="w-full sm:w-auto justify-center"
                onClick={() => setBookingOpen(true)}
              >
                <MessageSquare size={16} />
                Let's Talk
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex items-center gap-6 sm:gap-10 pt-4 border-t border-white/5 w-full lg:justify-center"
            >
              {[
                { value: '2+', label: 'Projects Delivered' },
                { value: '2+', label: 'Years Experience' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: 'Kenya', label: '→ Global' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-accent">{stat.value}</span>
                  <span className="text-[11px] sm:text-xs text-white/80">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  )
}
