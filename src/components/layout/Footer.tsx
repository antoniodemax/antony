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
      <footer className="border-t border-white/5 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-2xl bg-white/5 p-2 shadow-[0_8px_30px_-20px_rgba(255,255,255,0.75)]">
                <img
                  src="/logo.jpg"
                  alt="Antony Peter"
                  className="h-16 w-auto object-contain brightness-125"
                />
              </div>
              <p className="text-xs text-muted">Senior Full-Stack Software Engineer</p>
            </div>

            {/* Tagline */}
            <p className="text-sm text-muted text-center">
              Building scalable digital products.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center hover:border-white/20 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={15} style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Sub-footer */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted/60">© 2026 Antony Peter. All rights reserved.</p>

            {/* Legal links */}
            <div className="flex items-center gap-1">
              {legalLinks.map(({ label, doc }, i) => (
                <span key={doc} className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveDoc(doc)}
                    className="text-xs text-muted/60 hover:text-white transition-colors duration-200 px-1"
                  >
                    {label}
                  </button>
                  {i < legalLinks.length - 1 && (
                    <span className="text-white/10 text-xs">·</span>
                  )}
                </span>
              ))}
            </div>

            <p className="text-xs text-muted/40">Kenya → Global</p>
          </div>
        </div>
      </footer>

      <LegalModal doc={activeDoc} onClose={() => setActiveDoc(null)} />
    </>
  )
}
