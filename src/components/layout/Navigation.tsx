import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import Button from '../ui/Button'
import BookingModal from '../ui/BookingModal'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const measureRef = useRef<HTMLDivElement>(null) // hidden, always in DOM

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') as 'dark' | 'light' | null
    const preferredTheme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferredTheme)
    document.documentElement.setAttribute('data-theme', preferredTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const checkFit = () => {
      if (!containerRef.current) return
      const available = containerRef.current.offsetWidth
      const logoW = logoRef.current?.offsetWidth ?? 180
      const linksW = measureRef.current?.scrollWidth ?? 520
      const ctaW = 200 // "Book a Consultation" button is ~200px
      const padding = 96  // breathing room between sections
      setCompact(logoW + linksW + ctaW + padding > available)
    }

    const ro = new ResizeObserver(checkFit)
    if (containerRef.current) ro.observe(containerRef.current)
    checkFit()
    return () => ro.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 250)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5'
              : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/70'
            : 'bg-transparent'
        }`}
      >
        <div ref={containerRef} className="w-full px-6 sm:px-10 lg:px-16">
          <div className="flex items-center h-20">

            {/* Logo — always hard left */}
            <a
              ref={logoRef}
              href="#home"
              onClick={e => { e.preventDefault(); handleNavClick('#home') }}
              className="flex-shrink-0"
              aria-label="Antony Peter — Home"
            >
              <img
                src="/logo.jpg"
                alt="Antony Peter"
                className="h-11 lg:h-14 w-auto object-contain brightness-110"
              />
            </a>

            {/* Hidden measurement clone — always in DOM so ResizeObserver can read real link widths */}
            <div
              ref={measureRef}
              aria-hidden="true"
              className="absolute invisible pointer-events-none flex items-center gap-14 text-xs font-medium tracking-widest"
            >
              {navLinks.map(link => (
                <span key={link.href} className="text-base font-medium tracking-widest whitespace-nowrap">
                  {link.label}
                </span>
              ))}
            </div>

            {/* Desktop nav links — absolutely centered, hidden when compact */}
            {!compact && (
              <div className="flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-xs font-medium tracking-widest text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Right side — CTA or hamburger */}
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                className={`flex h-11 w-11 items-center justify-center rounded-full border-2 shadow-sm transition-all duration-200 ${
                  theme === 'dark'
                    ? 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white shadow-black/20'
                    : 'border-slate-300 bg-white/95 text-slate-800 hover:bg-white hover:text-slate-950 shadow-slate-200/70'
                }`}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              {!compact ? (
                <Button size="sm" onClick={() => setBookingOpen(true)}>
                  Book a Consultation
                </Button>
              ) : (
                <button
                  type="button"
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white shadow-black/20'
                      : 'border-slate-300 bg-white/95 text-slate-800 hover:bg-white hover:text-slate-950 shadow-slate-200/70'
                  }`}
                  onClick={() => setMobileOpen(v => !v)}
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              )}
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Compact / mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && compact && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 ${theme === 'dark' ? 'bg-bg/98' : 'bg-white/98'} backdrop-blur-xl pt-24 px-8 flex flex-col`}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`py-4 text-lg font-medium border-b tracking-wide ${theme === 'dark' ? 'text-white border-white/5' : 'text-slate-800 border-slate-200'}`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8">
              <Button
                size="lg"
                className="w-full"
                onClick={() => { setMobileOpen(false); setBookingOpen(true) }}
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
