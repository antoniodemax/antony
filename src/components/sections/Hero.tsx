import { useState } from 'react'
import { type Variants, motion } from 'framer-motion'
import type { ReactNode, ButtonHTMLAttributes } from 'react'
import { ArrowRight, MessageSquare } from 'lucide-react'
import BookingModal from '../ui/BookingModal'

const container: Variants = {
  animate: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

interface HeroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  as?: 'button' | 'a'
  href?: string
}

// HeroButton component with asymmetric cut-corner shape
function HeroButton({
  variant = 'primary',
  size = 'lg',
  children,
  className = '',
  as,
  href,
  onClick,
}: HeroButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  } as const

  const variants = {
    primary:
      'bg-accent text-black hover:bg-accent-light shadow-sm shadow-black/15',
    secondary:
      'border border-accent/30 bg-transparent text-white hover:border-accent/30 hover:bg-accent/10 hover:text-accent',
    ghost: 'text-muted hover:text-accent hover:bg-accent/5',
  } as const

  // Asymmetric cut-corner shape: clip-path to cut top-left corner
  const shapeClass =
    'border-0 rounded-none [clip-path:polygon(8px_0,0_8px,0_100%,100%_100%,100%_0)]'

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className} ${shapeClass}`

  if (as === 'a') {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export default function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 hero-decor bg-noise opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-950/15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] py-20 lg:py-28">
          <motion.div variants={container} initial="initial" animate="animate" className="space-y-10 sm:space-y-12">
            <motion.div variants={item} className="space-y-8 max-w-xl sm:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-[-0.02em] leading-tight sm:leading-[1.1] text-white">
                Engineering threat-resistant, scalable software and intelligent AI solutions
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted">
                Senior Full Stack Software Engineer • AI  • CyberSecurity Analyst
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-6">
              <HeroButton
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
              </HeroButton>
              <HeroButton
                as="button"
                variant="secondary"
                size="lg"
                className="w-full mt-6 sm:mt-0 sm:w-auto"
                onClick={() => setBookingOpen(true)}
              >
                <MessageSquare size={16} />
                Let's Talk
              </HeroButton>
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