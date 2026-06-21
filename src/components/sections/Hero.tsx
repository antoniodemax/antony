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
        <div className="flex justify-center py-16 lg:py-32">
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-6 max-w-3xl text-center items-center"
          >
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] font-bold leading-[1.05] tracking-tight"
            >
              Building digital products,
              <span className="block text-gradient"> web applications,</span>
              and{' '}
              <span className="text-gradient-gold">AI&#8209;powered</span>
              {' '}experiences.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl"
            >
              Senior Full-Stack Software Engineer specializing in scalable systems, modern
              web technologies, product development, and digital transformation. I help
              ambitious businesses build software that actually moves the needle.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2 justify-center">
              <Button
                as="a"
                href="#work"
                size="lg"
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
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <MessageSquare size={16} />
                Let's Talk
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-8 pt-4 border-t border-white/5"
            >
              {[
                { value: '10+', label: 'Projects Delivered' },
                { value: '3+', label: 'Years Experience' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xl font-bold text-accent">{stat.value}</span>
                  <span className="text-xs text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
