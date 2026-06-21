import { type Variants, motion } from 'framer-motion'
import { ArrowRight, MessageSquare, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'

const container: Variants = {
  animate: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-md lg:max-w-lg mx-auto animate-float"
    >
      {/* Glow behind card */}
      <div className="absolute inset-0 bg-accent/8 rounded-3xl blur-3xl scale-110" />

      {/* Browser card */}
      <div className="relative bg-card rounded-2xl border border-white/8 overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.6)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 bg-white/5 rounded-md px-3 py-1 mx-2">
            <span className="text-[11px] text-muted">app.crevia.io/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-4">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: 'Revenue', value: 'KES 2.4M', change: '+18%' },
              { label: 'Projects', value: '24', change: '+4' },
              { label: 'Clients', value: '18', change: '+2' },
            ].map((m, i) => (
              <div key={i} className="bg-surface rounded-xl p-3">
                <p className="text-[10px] text-muted mb-1">{m.label}</p>
                <p className="text-sm font-semibold text-white">{m.value}</p>
                <p className="text-[10px] text-green-400 mt-0.5">{m.change}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-surface rounded-xl p-3">
            <p className="text-[10px] text-muted mb-2">Monthly Revenue</p>
            <div className="flex items-end gap-1 h-14">
              {[35, 52, 44, 68, 55, 78, 62, 88, 70, 95, 80, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background: i === 11 ? '#D4AF37' : `rgba(212,175,55,${0.1 + i * 0.025})`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="space-y-2">
            {[
              { dot: 'bg-green-400', text: 'Contract signed — Elevate Digital', time: '2m ago' },
              { dot: 'bg-accent', text: 'Invoice KES 85K sent', time: '1h ago' },
              { dot: 'bg-blue-400', text: 'New project started', time: '3h ago' },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.dot}`} />
                <p className="text-[11px] text-muted flex-1 truncate">{row.text}</p>
                <p className="text-[10px] text-muted/50 flex-shrink-0">{row.time}</p>
              </div>
            ))}
          </div>

          {/* Bottom stat */}
          <div className="flex items-center justify-between pt-1 border-t border-white/5">
            <div className="flex items-center gap-1.5 text-green-400">
              <TrendingUp size={12} />
              <span className="text-[11px] font-medium">+34% conversion this month</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -top-4 -right-4 bg-card border border-white/10 rounded-xl px-3 py-2 shadow-lg"
      >
        <p className="text-[11px] text-white font-medium">AI-powered ✦</p>
        <p className="text-[10px] text-muted">Kira just structured a deal</p>
      </motion.div>

      {/* Second floating badge */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-4 -left-4 bg-card border border-white/10 rounded-xl px-3 py-2 shadow-lg"
      >
        <p className="text-[11px] text-green-400 font-medium">● Live</p>
        <p className="text-[10px] text-muted">Production • 99.9% uptime</p>
      </motion.div>
    </motion.div>
  )
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center py-16 lg:py-24">
          {/* Left: Text */}
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-6 max-w-2xl"
          >
            <motion.div variants={item} className="flex items-center gap-3">
              <img
                src="/antony.jpg"
                alt="Antony Peter"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-accent/30"
              />
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.05] tracking-tight"
            >
              Building digital products,
              <span className="block text-gradient"> web applications,</span>
              and{' '}
              <span className="text-gradient-gold">AI&#8209;powered</span>
              {' '}experiences.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl"
            >
              Senior Full-Stack Software Engineer specializing in scalable systems, modern
              web technologies, product development, and digital transformation. I help
              ambitious businesses build software that actually moves the needle.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
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
              className="flex items-center gap-6 pt-4 border-t border-white/5"
            >
              {[
                { value: '10+', label: 'Projects Delivered' },
                { value: '3+', label: 'Years Experience' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-bold text-accent">{stat.value}</span>
                  <span className="text-xs text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <div className="hidden lg:flex justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
