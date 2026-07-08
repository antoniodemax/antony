import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export type LegalDoc = 'privacy' | 'terms' | 'project-terms' | null

interface Props {
  doc: LegalDoc
  onClose: () => void
}

const lastUpdated = new Date().toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function PrivacyPolicy() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-muted text-sm mb-10">Last updated: {lastUpdated}</p>

      <p className="text-white/90 font-medium text-lg mb-4">Clear, responsible data handling.</p>
      <p className="text-muted leading-relaxed mb-6">
        Vertex Labs collects and uses personal and project information to respond to enquiries,
        deliver services and improve the website experience.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Information We Collect</h2>
      <ul className="space-y-2 mb-6">
        {[
          'Contact details including name and email address',
          'Company or project information provided through enquiry forms',
          'Website usage data such as pages visited and session behaviour',
          'Cookie and analytics data from traffic and performance tools',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-white mb-3">How We Use Your Information</h2>
      <ul className="space-y-2 mb-6">
        {[
          'To reply to enquiries and manage project requests',
          'To prepare proposals and agree on project scope',
          'To improve website performance and user experience',
          'To comply with legal obligations when required',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-white mb-3">Cookies & Analytics</h2>
      <p className="text-muted leading-relaxed mb-6">
        The website may use cookies and analytics tools to measure traffic, improve performance and
        understand how visitors use the site. Cookies do not contain personally identifiable
        information and are used only to support the website experience.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Third-Party Services</h2>
      <p className="text-muted leading-relaxed mb-6">
        Vertex Labs works with third-party providers for email, hosting, analytics and other services.
        These providers handle data under their own privacy policies. Vertex Labs does not sell
        your information.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Data Security</h2>
      <p className="text-muted leading-relaxed mb-6">
        We protect data using appropriate technical and organisational measures. Access to client
        information is limited to those who need it to deliver services.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Data Retention</h2>
      <p className="text-muted leading-relaxed mb-6">
        Vertex Labs retains data only as long as needed to provide services and comply with legal
        obligations. Personal information is deleted or anonymised when it is no longer required.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Information Sharing</h2>
      <p className="text-muted leading-relaxed mb-6">
        Information is shared only when necessary to deliver services or when required by law.
        Vertex Labs never sells or rents personal data to third parties.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Your Rights</h2>
      <ul className="space-y-2 mb-8">
        {[
          'Request access to the information Vertex Labs holds about you',
          'Ask for corrections to inaccurate or incomplete data',
          'Request that personal information be erased when no longer required',
          'Object to processing in certain circumstances',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-white mb-3">Changes to This Policy</h2>
      <p className="text-muted leading-relaxed mb-6">
        Vertex Labs may update this policy from time to time. The date above reflects the most
        recent revision.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Contact Information</h2>
      <p className="text-muted leading-relaxed">
        For questions about this policy or your data, contact us at{' '}
        <a className="text-accent hover:text-white" href="mailto:antonypeter.dev@gmail.com">
          antonypeter.dev@gmail.com
        </a>
        .
      </p>
    </>
  )
}

function TermsOfUse() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">Terms of Use</h1>
      <p className="text-muted text-sm mb-10">Last updated: {lastUpdated}</p>

      <p className="text-muted leading-relaxed mb-8">
        These terms govern your access to and use of the Vertex Labs website. By using the site,
        you confirm that you agree to these conditions.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Acceptance of Terms</h2>
      <p className="text-muted leading-relaxed mb-6">
        If you do not agree with these terms, please do not use the Vertex Labs website. Continued
        use of the site indicates your acceptance.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Intellectual Property</h2>
      <p className="text-muted leading-relaxed mb-6">
        All website content is owned by Vertex Labs or its licensors. This includes branding,
        logos, case studies, design concepts, source code, written material, images and related
        assets. You may not copy, reproduce, distribute or use this content without written
        permission.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Acceptable Use</h2>
      <ul className="space-y-2 mb-6">
        {[
          'Use the website lawfully and in good faith',
          'Do not copy or redistribute content without permission',
          'Do not claim showcased work as your own',
          'Do not attempt to interfere with site operation',
          'Do not use the site for unauthorised or unlawful activity',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-white mb-3">Website Content</h2>
      <p className="text-muted leading-relaxed mb-6">
        Content on this website is provided for general information only. Vertex Labs may update,
        remove or revise content at any time without notice.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">No Professional Advice</h2>
      <p className="text-muted leading-relaxed mb-6">
        Information on the website is not legal, financial or professional advice. Consult a
        qualified adviser before acting on any information found here.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Third-Party Links</h2>
      <p className="text-muted leading-relaxed mb-6">
        The site may include links to third-party websites. Vertex Labs is not responsible for the
        content or terms of those external sites.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Limitation of Liability</h2>
      <p className="text-muted leading-relaxed mb-6">
        Vertex Labs is not liable for losses or damages arising from your use of the website,
        including direct or indirect losses, business interruption, or data loss.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">Changes to These Terms</h2>
      <p className="text-muted leading-relaxed">
        Vertex Labs may revise these terms at any time. Your continued use of the site after any
        changes indicates acceptance of the updated terms.
      </p>
    </>
  )
}

function ProjectTerms() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">Project Engagement Terms</h1>
      <p className="text-muted text-sm mb-10">Last updated: {lastUpdated}</p>

      <p className="text-white/90 font-medium text-lg mb-4">
        Modern consultancy terms designed for clarity and confidence.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">1. Project Initiation</h2>
      <p className="text-muted leading-relaxed mb-3">
        A project begins only after all of the following are received and confirmed:
      </p>
      <ul className="space-y-2 mb-6">
        {[
          'Approved project scope',
          'Signed Software Development Agreement',
          'Initial payment received',
          'Required assets and access details provided by the client',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted text-sm">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>
      <p className="text-muted leading-relaxed mb-8">
        Timelines begin only after all requirements have been received. If asset delivery or approvals are delayed,
        the project schedule will be adjusted accordingly.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">2. Payment Terms</h2>
      <p className="text-muted leading-relaxed mb-3">
        Billing is structured to secure capacity and align delivery milestones.
      </p>
      <ul className="space-y-2 mb-6">
        {[
          '40% before development begins',
          '30% after milestone or staging approval',
          '30% before final deployment, delivery and ownership transfer',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted text-sm">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>
      <p className="text-muted leading-relaxed mb-8">
        Work may pause if milestone payments are overdue. Any pause may affect the overall delivery schedule.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">3. Project Timelines</h2>
      <div className="grid gap-3 md:grid-cols-2 mb-4">
        {[
          { label: 'Business Website', value: '4–6 Weeks' },
          { label: 'E-Commerce Platform', value: '8–12 Weeks' },
          { label: 'Custom Web Application', value: '12–20 Weeks' },
          { label: 'AI Solutions', value: 'Timeline depends on project scope' },
        ].map(item => (
          <div key={item.label} className="rounded-2xl border border-white/10 p-4 bg-[#090909]">
            <p className="text-sm text-muted mb-1">{item.label}</p>
            <p className="text-white font-medium">{item.value}</p>
          </div>
        ))}
      </div>
      <p className="text-muted leading-relaxed mb-8">
        Timelines are estimates. They may change due to client delays, scope changes, third-party integrations,
        or approval delays.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">4. Scope Changes</h2>
      <p className="text-muted leading-relaxed mb-6">
        Any additional features, revisions or requirements outside the agreed scope require:
      </p>
      <ul className="space-y-2 mb-8">
        {[
          'A revised quotation',
          'A revised timeline',
          'Written approval before work begins',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted text-sm">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-white mb-3">5. Client Responsibilities</h2>
      <p className="text-muted leading-relaxed mb-3">
        Clients must provide the information and approvals needed to keep the project moving.
      </p>
      <ul className="space-y-2 mb-8">
        {[
          'Content and copy',
          'Branding assets and design guidelines',
          'Timely approvals and feedback',
          'Access to required accounts and systems',
        ].map(item => (
          <li key={item} className="flex items-start gap-3 text-muted text-sm">
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>
      <p className="text-muted leading-relaxed mb-8">
        Delays caused by the client extend the project timeline.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">6. Communication</h2>
      <p className="text-muted leading-relaxed mb-6">
        Email is the official communication channel for this engagement.
        Project enquiries receive a response within one business day.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">7. Ownership & Intellectual Property</h2>
      <p className="text-muted leading-relaxed mb-6">
        Ownership of final deliverables transfers only after the final payment has been received.
        Until then, Vertex Labs retains ownership of work-in-progress materials.
      </p>
      <p className="text-muted leading-relaxed mb-8">
        Vertex Labs may showcase completed projects in its portfolio unless a separate confidentiality
        agreement prevents public disclosure.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">8. Support & Maintenance</h2>
      <p className="text-muted leading-relaxed mb-6">
        Every project includes a limited post-launch warranty for defects related to the agreed scope.
      </p>
      <p className="text-muted leading-relaxed mb-8">
        Future maintenance, updates, hosting, enhancements and technical support are separate paid services.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">9. Warranty</h2>
      <p className="text-muted leading-relaxed mb-6">
        Software is delivered according to agreed specifications. Vertex Labs cannot guarantee uninterrupted
        operation due to browser updates, hosting failures, operating system changes, API changes or
        third-party service issues.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">10. Third-Party Services</h2>
      <p className="text-muted leading-relaxed mb-8">
        Payment gateways, hosting providers, cloud services, APIs and external platforms are governed by
        their own terms. Vertex Labs is not liable for outages or changes caused by those providers.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">11. Limitation of Liability</h2>
      <p className="text-muted leading-relaxed mb-6">
        Liability is limited to the total amount paid for the specific project engagement.
      </p>
      <p className="text-muted leading-relaxed mb-8">
        Vertex Labs is not responsible for indirect damages, including lost profits, business
        interruption or data loss.
      </p>

      <h2 className="text-lg font-semibold text-white mb-3">12. Cancellation</h2>
      <p className="text-muted leading-relaxed mb-6">
        The initial 40% payment reserves dedicated development time and is non-refundable once work has commenced.
      </p>
      <p className="text-muted leading-relaxed">
        If the engagement is cancelled during development, payment remains due for work completed up to the cancellation date.
      </p>
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
