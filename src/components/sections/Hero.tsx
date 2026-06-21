import { type Variants, motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'
import Button from '../ui/Button'

const container: Variants = {
  animate: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/4 rounded-full blur-[100px]"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
              Building digital products,{' '}
              <br className="hidden lg:block" />
              <span className="text-gradient">web applications,</span>
              {' '}and{' '}
              <span className="text-gradient-gold">AI&#8209;powered</span>
              <br className="hidden lg:block" />
              {' '}experiences.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-[0.95rem] sm:text-lg text-muted leading-relaxed max-w-lg"
            >
              Senior Full-Stack Engineer — I help ambitious businesses design,
              build, and ship scalable software products that move the needle.
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
                as="a"
                href="#contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
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
                { value: '4+', label: 'Projects Delivered' },
                { value: '2+', label: 'Years Experience' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-accent">{stat.value}</span>
                  <span className="text-[11px] sm:text-xs text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
