import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Send, CalendarCheck, AlertCircle } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, InstagramIcon } from '../ui/Icons'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import BookingModal from '../ui/BookingModal'

const EJS_SERVICE  = 'service_rui097h'
const EJS_TEMPLATE = 'template_ibahavl'
const EJS_KEY      = '-zTzuJ4lAOrxF-uzn'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'antonypeter.dev@gmail.com',
    href: 'mailto:antonypeter.dev@gmail.com',
    color: '#EA4335',
    bg: 'rgba(234,67,53,0.12)',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'antony-peter-96318a338',
    href: 'https://www.linkedin.com/in/antony-peter-96318a338',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.12)',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: '@antoniodemax',
    href: 'https://github.com/antoniodemax',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.08)',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+254 741 052 614',
    href: 'https://wa.me/254741052614',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.12)',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@antony.peter',
    href: 'https://www.instagram.com/',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.12)',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        { name: form.name, email: form.email, company: form.company, message: form.message },
        EJS_KEY
      )
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Gradient — heavier on the right this time (bookend to hero) */}
        <div className="absolute inset-0 bg-gradient-to-l from-bg via-bg/60 to-transparent" />
        {/* Top fade from site background */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-bg to-transparent" />
        {/* Subtle gold tint */}
        <div className="absolute inset-0 bg-accent/[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeader
            label="Contact"
            title="Let's build something exceptional."
            description="Have a project in mind? I'd love to hear about it. Book a consultation or drop me a message and I'll get back to you within 24 hours."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold text-white mb-6">Reach me directly</p>
            {channels.map(({ icon: Icon, label, value, href, color, bg }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-card hover:border-white/12 hover:bg-white/3 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted">{label}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-muted group-hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                />
              </motion.a>
            ))}

            <div className="pt-4 p-5 rounded-xl border border-accent/15 bg-accent/5">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                Response Time
              </p>
              <p className="text-sm text-muted">
                I respond to all enquiries within 24 hours. For urgent projects,
                WhatsApp is the fastest channel.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center gap-6 h-full py-14 px-8 border border-white/5 rounded-2xl bg-card"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center">
                  <Send size={20} className="text-green-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-white font-semibold text-lg">Message received.</p>
                  <p className="text-sm text-muted">I'll be in touch within 24 hours.</p>
                </div>

                {/* Calendly upsell */}
                <div className="w-full border-t border-white/5 pt-6 space-y-3">
                  <p className="text-sm text-white/80 font-medium">Want to fast-track your project?</p>
                  <p className="text-xs text-muted">Skip the back-and-forth — book a free 30-minute call and let's scope it together.</p>
                  <Button
                    as="button"
                    size="md"
                    className="w-full"
                    onClick={() => setBookingOpen(true)}
                  >
                    <CalendarCheck size={15} />
                    Book a Call Now
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-card border border-white/5 rounded-2xl p-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-muted">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Amina Osei"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-surface border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-muted/40 focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-muted">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="amina@company.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-surface border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-muted/40 focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-medium text-muted">
                    Company / Organisation
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Elevate Digital"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full bg-surface border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-muted/40 focus:outline-none focus:border-accent/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-muted">
                    Project Description <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project — what you're building, who it's for, and what you'd like to achieve."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-surface border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-muted/40 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    <AlertCircle size={13} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <Button type="submit" size="md" className="w-full" disabled={sending}>
                  {sending ? 'Sending…' : <> Start a Project <ArrowRight size={15} /> </>}
                </Button>

                <p className="text-[11px] text-center text-muted/50">
                  No spam. Your information is never shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  )
}
