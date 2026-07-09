import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const faqSchema = (faqs: { q: string; a: string }[]) => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.a,
    },
  })),
})

const faqs = [
  {
    q: 'How long does a project typically take?',
    a: 'Every project is different, but here are typical delivery timelines: Business Websites: 4–6 weeks; E-Commerce Platforms: 8–12 weeks; Custom Web Applications: 12–20 weeks; AI Solutions: timeline based on project scope. Before development begins, we agree on a clear scope, milestones, and delivery schedule so you always know what to expect.',
  },
  {
    q: 'How do payments work?',
    a: 'Projects begin with a 40% upfront payment to secure your booking and allow work to commence. The remaining balance is paid in agreed milestones throughout the project, as outlined in the Software Development Agreement. This keeps the process transparent and ensures steady progress from start to finish.',
  },
  {
    q: 'Do you provide maintenance and support after launch?',
    a: 'Yes. Ongoing maintenance is available through optional support plans that include security updates, bug fixes, performance optimisation, technical support, and feature enhancements. This helps keep your website or software secure, reliable, and up to date after launch.',
  },
  {
    q: 'Can you redesign or improve an existing website or application?',
    a: 'Absolutely. Whether your current website feels outdated or your software no longer meets your business needs, I can redesign, rebuild, or improve it while preserving valuable functionality where appropriate. The goal is to improve performance, usability, security, and scalability with minimal disruption.',
  },
  {
    q: 'Do you build AI-powered solutions?',
    a: 'Yes. I develop practical AI solutions that automate workflows, improve customer experiences, streamline business operations, and help organisations work more efficiently. Every AI solution is designed to solve real business challenges and deliver measurable value.',
  },
  {
    q: 'Will I own the website or software after the project is completed?',
    a: 'Yes. Once the project is completed and the final payment has been received, ownership of the completed website or software is transferred to you, excluding any third-party software, licensed assets, or services that are governed by their own licences.',
  },
  {
    q: 'Do you help with domain registration and hosting?',
    a: 'Yes. I can assist with registering your domain name, selecting reliable hosting, configuring your server, and deploying your website or application. Domain registration and hosting costs are billed separately unless otherwise agreed in writing.',
  },
  {
    q: 'What information do you need to prepare a quotation?',
    a: 'To prepare an accurate proposal, I need a brief overview of your business, your project goals, the features you require, your preferred timeline, and any existing designs or systems. We will discuss everything during a discovery session before I prepare a detailed proposal and quotation.',
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
    <section id="faq" className="py-24 md:py-32 bg-surface/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema(faqs) }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              label="FAQ"
              title="Questions worth answering upfront"
              description="If your question isn't here, book a discovery call. I'd rather over-communicate than leave you guessing."
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
