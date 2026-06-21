import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const faqs = [
  {
    q: 'How long does a project typically take?',
    a: 'Timelines depend on scope, but here\'s a realistic guide: a business website takes 3–5 weeks, an e-commerce platform 6–10 weeks, and a custom web application 8–16 weeks. I don\'t rush — I build right. We define a clear scope and timeline before work begins, and I keep you updated throughout.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes, absolutely. While I\'m based in Nairobi, Kenya, I work with clients across Africa, Europe, and North America. I\'m comfortable with asynchronous communication and adapt to different time zones. Payments are accepted in both KES and USD via bank transfer, M-Pesa, or Stripe.',
  },
  {
    q: 'Do you offer maintenance and support after launch?',
    a: 'Yes. I offer flexible post-launch support packages covering bug fixes, feature additions, security updates, and performance monitoring. I believe in being a long-term technology partner, not just a vendor who disappears after delivery.',
  },
  {
    q: 'Can you modernise or rebuild existing software?',
    a: 'This is a significant part of what I do. Many businesses are sitting on legacy systems — outdated tech stacks, poor architecture, or software that can\'t scale. I can audit your existing codebase, propose a modernisation strategy, and execute it incrementally to minimise disruption.',
  },
  {
    q: 'Do you build AI-powered systems and integrations?',
    a: 'Yes. I have hands-on production experience with OpenAI APIs, Claude (Anthropic), LangChain, RAG architectures, and AI agent frameworks. I help businesses identify where AI creates genuine value — not just where it\'s trendy — and build those systems responsibly.',
  },
  {
    q: 'What information do you need to provide a quote?',
    a: 'The clearer your brief, the more accurate my estimate. Ideally: what the product does, who uses it, key features needed, any existing designs or systems, your timeline, and budget range. A 30-minute discovery call is usually the fastest way to arrive at a clear scope and quote.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-white group-hover:text-accent transition-colors duration-200">
          {q}
        </span>
        <span className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-muted group-hover:border-accent/40 group-hover:text-accent transition-all duration-200">
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed pb-5 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              label="FAQ"
              title="Questions worth answering upfront"
              description="If your question isn't here, book a call — I'd rather over-communicate than leave you guessing."
              align="left"
            />
          </div>

          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
