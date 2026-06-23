import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="flex items-center h-20">
            {/* Logo — hard left */}
            <a
              href="#home"
              onClick={e => { e.preventDefault(); handleNavClick('#home') }}
              className="flex-shrink-0 mr-auto"
              aria-label="Antony Peter — Home"
            >
              <img
                src="/logo.jpg"
                alt="Antony Peter"
                className="h-11 md:h-14 w-auto object-contain brightness-110"
              />
            </a>

            {/* Desktop Links — truly centered */}
            <div className="hidden md:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-sm tracking-wide text-muted hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA — hard right */}
            <div className="hidden md:flex items-center ml-auto">
              <Button
                as="a"
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                size="sm"
              >
                Book a Consultation
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-muted hover:text-white transition-colors ml-auto"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl pt-20 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  className="py-3 text-base font-medium text-white border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8">
              <Button
                as="a"
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                size="lg"
                className="w-full"
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
