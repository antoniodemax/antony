import { useState } from 'react'
import { SiGithub, SiGmail } from 'react-icons/si'
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import LegalModal, { type LegalDoc } from '../ui/LegalModal'

const socials = [
  { icon: SiGithub,      href: 'https://github.com/antoniodemax',                   label: 'GitHub',    color: '#ffffff' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/antony-peter-96318a338', label: 'LinkedIn',  color: '#0A66C2' },
  { icon: FaWhatsapp,   href: 'https://wa.me/254741052614',                         label: 'WhatsApp',  color: '#25D366' },
  { icon: FaInstagram,  href: 'https://www.instagram.com/',                         label: 'Instagram', color: '#E1306C' },
  { icon: SiGmail,      href: 'mailto:antonypeter.dev@gmail.com',                   label: 'Email',     color: '#EA4335' },
]

const legalLinks: { label: string; doc: LegalDoc }[] = [
  { label: 'Privacy Policy', doc: 'privacy' },
  { label: 'Terms of Use', doc: 'terms' },
  { label: 'Project Engagement Terms', doc: 'project-terms' },
]

export default function Footer() {
  const [activeDoc, setActiveDoc] = useState<LegalDoc>(null)

  return (
    <>
      <footer className="border-t border-accent/20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <a
                  href="#home"
                  onClick={e => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="flex-shrink-0"
                  aria-label="Antony Peter — Home"
                >
                  <img
                    src="/logo.jpg"
                    alt="Antony Peter"
                    className="h-20 lg:h-24 w-auto object-contain brightness-110 transition-opacity duration-200 hover:opacity-90"
                  />
                </a>
              <div>
                <p className="text-sm font-semibold text-white">Antony Peter</p>
                <p className="text-xs text-muted">Senior Full-Stack Software Engineer</p>
              </div>
            </div>

            <p className="text-sm text-muted text-center">
              Building scalable digital products.
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-3xl border border-accent/20 bg-white/5 text-white transition-all duration-200 hover:border-accent/30 hover:text-accent"
                >
                  <Icon size={16} style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-accent/20 pt-8 text-sm text-muted/70 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted">© 2026 Antony Peter. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-3 justify-center">
              {legalLinks.map(({ label, doc }) => (
                <button
                  key={doc}
                  onClick={() => setActiveDoc(doc)}
                  className="text-xs text-muted/70 transition-colors duration-200 hover:text-accent"
                >
                  {label}
                </button>
              ))}
            </div>

            <p className="text-xs text-muted/50">Kenya → Global</p>
          </div>
        </div>
      </footer>

      <LegalModal doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </>
  )
}
