import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/Icons'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@antonypeter.dev',
    href: 'mailto:hello@antonypeter.dev',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: '/in/antonypeter',
    href: 'https://linkedin.com/in/antonypeter',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: '@antonypeter',
    href: 'https://github.com/antonypeter',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+254 700 000 000',
    href: 'https://wa.me/254700000000',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            {channels.map(({ icon: Icon, label, value, href }, i) => (
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
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
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
                className="flex flex-col items-center justify-center text-center gap-4 h-full py-16 border border-white/5 rounded-2xl bg-card"
              >
                <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center">
                  <Send size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Message sent.</p>
                  <p className="text-sm text-muted mt-1">
                    I'll be in touch within 24 hours.
                  </p>
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

                <Button type="submit" size="md" className="w-full">
                  Start a Project <ArrowRight size={15} />
                </Button>

                <p className="text-[11px] text-center text-muted/50">
                  No spam. Your information is never shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
