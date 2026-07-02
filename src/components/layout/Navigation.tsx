import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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

  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const measureRef = useRef<HTMLDivElement>(null) // hidden, always in DOM

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div ref={containerRef} className="w-full px-6 sm:px-10 lg:px-16">
          <div className="flex items-center h-24">

            {/* Logo — always hard left */}
            <a
              ref={logoRef}
              href="#home"
              onClick={e => { e.preventDefault(); handleNavClick('#home') }}
              className="flex-shrink-0"
              aria-label="Antony Peter — Home"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="Antony Peter"
                  className="h-20 lg:h-24 w-auto object-contain brightness-110"
                />
                <span className="hidden sm:inline text-base lg:text-lg font-semibold tracking-[0.22em] text-white uppercase">
                  Antony Peter
                </span>
              </div>
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
              <div className="flex items-center gap-16 absolute left-1/2 -translate-x-1/2">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    className="text-sm lg:text-base font-semibold tracking-[0.2em] text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Right side — CTA or hamburger */}
            <div className="ml-auto flex items-center">
              {!compact ? (
                <Button size="sm" onClick={() => setBookingOpen(true)}>
                  Book a Consultation
                </Button>
              ) : (
                <button
                  className="p-2 text-white hover:text-white/70 transition-colors"
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
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl pt-24 px-8 flex flex-col"
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
                  className="py-4 text-lg font-medium text-white border-b border-white/5 tracking-wide"
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
