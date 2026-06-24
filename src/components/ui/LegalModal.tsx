import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export type LegalDoc = 'privacy' | 'terms' | 'project-terms' | null

interface Props {
  doc: LegalDoc
  onClose: () => void
}

function PrivacyPolicy() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-muted text-sm mb-10">Last updated: June 2026</p>

      <p className="text-white/90 font-medium text-lg mb-4">Your privacy matters.</p>
      <p className="text-muted leading-relaxed mb-6">
        Any information submitted through this website, including contact forms, project inquiries, or
        consultation requests, will be used solely for communication and service delivery purposes.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Information collected may include:</h2>
      <ul className="space-y-2 mb-8">
        {['Name', 'Email Address', 'Phone Number', 'Company Name', 'Project Details'].map(item => (
          <li key={item} className="flex items-center gap-3 text-muted">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <p className="text-muted leading-relaxed mb-6">
        Your information will never be sold, rented, or shared with third parties unless required by
        law or necessary to deliver requested services. This website may use analytics tools to
        improve performance and user experience.
      </p>
      <p className="text-muted leading-relaxed">
        If you have any questions regarding your data, please get in touch through the{' '}
        <span className="text-accent">contact page</span>.
      </p>
    </>
  )
}

function TermsOfUse() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">Terms of Use</h1>
      <p className="text-muted text-sm mb-10">Last updated: June 2026</p>

      <p className="text-muted leading-relaxed mb-8">
        By using this website, you agree to use it responsibly and lawfully. All content on this
        website, including designs, case studies, code samples, branding, and written content, is the
        intellectual property of Antony Peter unless otherwise stated.
      </p>

      <h2 className="text-lg font-semibold text-white mb-4">You may not:</h2>
      <ul className="space-y-3 mb-8">
        {[
          'Copy or redistribute content without permission',
          'Misrepresent showcased work as your own',
          'Use this website for unlawful purposes',
          'Attempt to interfere with website functionality',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>

      <p className="text-muted leading-relaxed">
        The information provided on this website is for informational purposes only and may be
        updated at any time without notice.
      </p>
    </>
  )
}

function ProjectTerms() {
  const sections = [
    {
      title: '1. Project Initiation',
      body: 'All projects commence only after the following criteria are met:',
      bullets: ['Scope approval', 'Agreement confirmation', 'Initial deposit payment received'],
    },
    {
      title: '2. Payment Terms',
      body: 'To ensure dedicated resource allocation, projects are billed on the following milestone structures:',
      bullets: [
        'Projects below KES 100,000: 50% upfront deposit | 50% prior to final delivery and deployment.',
        'Projects above KES 100,000: 40% upfront deposit | 30% at staging/milestone approval | 30% prior to final delivery and deployment.',
      ],
    },
    {
      title: '3. Scope Changes',
      body: 'Any additional features, revisions, or requirements outside the originally agreed technical scope will require a revised quote and potential timeline adjustments.',
      bullets: [],
    },
    {
      title: '4. Client Responsibilities',
      body: 'Clients are responsible for providing required content, brand assets, feedback, and approvals within agreed timelines. Delays in client communication or asset delivery will directly impact and extend final project delivery dates.',
      bullets: [],
    },
    {
      title: '5. Ownership & Intellectual Property',
      body: 'Full ownership of the final deliverables (including source code, database structures, and design assets) transfers to the client strictly upon receipt of the final payment. Antony Peter reserves the right to showcase completed projects, non-sensitive architectural diagrams, and performance metrics in public portfolios and case studies.',
      bullets: [],
    },
    {
      title: '6. Support & Maintenance',
      body: 'All custom projects include a standard post-launch warranty period for bug fixes related to the original scope. Ongoing maintenance, hosting management, and future feature enhancements are subject to separate retainer agreements.',
      bullets: [],
    },
    {
      title: '7. Warranties & Third-Party Services',
      body: 'All software is delivered according to the agreed technical specifications. While we architect robust and secure systems, we do not guarantee that the software will be permanently immune to future web standard changes or browser updates. Furthermore, projects relying on third-party APIs, payment gateways, or hosting services are subject to the terms of those providers. Antony Peter is not responsible for disruptions caused by external vendor outages or API deprecations.',
      bullets: [],
    },
    {
      title: '8. Limitation of Liability',
      body: 'In no event shall Antony Peter be liable for any indirect, incidental, special, or consequential damages, including loss of profits, revenue, data, or business interruptions, arising out of the use or inability to use the delivered software. Total liability shall not exceed the total amount paid by the client for the specific project engagement.',
      bullets: [],
    },
    {
      title: '9. Cancellation',
      body: 'Initial deposits secure your block of development time and are strictly non-refundable once work has commenced.',
      bullets: [],
    },
  ]

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">Project Terms</h1>
      <p className="text-muted text-sm mb-10">Last updated: June 2026</p>

      <div className="space-y-8">
        {sections.map(({ title, body, bullets }) => (
          <div key={title}>
            <h2 className="text-base font-semibold text-white mb-2">{title}</h2>
            <p className="text-muted leading-relaxed">{body}</p>
            {bullets.length > 0 && (
              <ul className="mt-3 space-y-2">
                {bullets.map(b => (
                  <li key={b} className="flex items-start gap-3 text-muted text-sm">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default function LegalModal({ doc, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!doc) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [doc, onClose])

  // Reset scroll on open
  useEffect(() => {
    if (doc && scrollRef.current) scrollRef.current.scrollTop = 0
  }, [doc])

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          key="legal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-8"
          onClick={e => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            key="legal-panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/8 rounded-2xl shadow-2xl mt-8 overflow-hidden"
          >
            {/* Top accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-accent/80 via-accent to-accent/20" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted hover:text-white transition-all duration-200 z-10"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Scrollable content */}
            <div
              ref={scrollRef}
              className="overflow-y-auto max-h-[80vh] px-8 sm:px-12 py-10"
            >
              {doc === 'privacy' && <PrivacyPolicy />}
              {doc === 'terms' && <TermsOfUse />}
              {doc === 'project-terms' && <ProjectTerms />}
            </div>

            {/* Bottom fade */}
            <div className="h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
