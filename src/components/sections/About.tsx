import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, FileText } from 'lucide-react'

import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

type EducationStatus = 'done' | 'in-progress'

const education: { title: string; institution: string; status: EducationStatus }[] = [
  { title: 'Software Engineering', institution: 'Moringa School', status: 'done' },
  { title: 'Cyber Security', institution: 'Cisco Networking Academy', status: 'done' },
  { title: 'AI Prompt Engineering', institution: 'Cisco Networking Academy', status: 'done' },
  { title: 'AWS Solutions Architect', institution: 'Amazon Web Services', status: 'in-progress' },
  { title: 'CyberOps', institution: 'Cisco Networking Academy', status: 'in-progress' },
]

// Same clipped top-left corner as the site's buttons, scaled down.
const CUT_CORNER = 'polygon(5px 0, 0 5px, 0 100%, 100% 100%, 100% 0)'

/**
 * Cut-corner tick box. Done is a solid green box with a tick; in progress is
 * an amber outline that is half filled, so the state reads without the label.
 */
function StatusBox({ status }: { status: EducationStatus }) {
  if (status === 'done') {
    return (
      <span
        className="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-accent text-bg"
        style={{ clipPath: CUT_CORNER }}
        aria-hidden="true"
      >
        <Check size={13} strokeWidth={3.5} />
      </span>
    )
  }
  return (
    <span
      className="relative block h-5 w-5 flex-shrink-0 bg-[#E2B45C]"
      style={{ clipPath: CUT_CORNER }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-[1.5px]"
        style={{
          clipPath: 'polygon(4.4px 0, 0 4.4px, 0 100%, 100% 100%, 100% 0)',
          background: 'linear-gradient(to top, rgba(226,180,92,0.38) 50%, #0B100E 50%)',
        }}
      />
    </span>
  )
}

export default function About() {
  const [educationOpen, setEducationOpen] = useState(false)
  const doneCount = education.filter(item => item.status === 'done').length
  const inProgressCount = education.length - doneCount

  const aboutContent = `I'm **Antony Peter** — a **Software Engineer and Cybersecurity Professional** with **3 years of experience**, based in Nairobi, Kenya. I build modern, scalable digital products while applying a security-first mindset to the systems behind them.

My journey in technology has focused on **software engineering, web application development, and cybersecurity**. I work across the full development lifecycle, from designing interfaces and architecting applications to building backend systems, managing databases, and deploying production-ready solutions.

On the cybersecurity side, my areas of focus include **threat analysis, system safeguards, network defense, and security resource management**. I’m interested in understanding how systems can be attacked, identifying vulnerabilities and potential threats, and designing stronger safeguards to protect applications, infrastructure, networks, and data.

My education and continuous learning have allowed me to build a strong foundation across both **software development and cybersecurity**. I’m constantly exploring new technologies, security practices, and emerging areas of computing to stay ahead in an industry that never stops evolving.

I believe great technology requires more than writing code. It requires **problem-solving, security awareness, continuous learning, and a deep understanding of how systems work**. My goal is to keep building software that is not only functional and scalable, but also reliable, resilient, and secure.`

  // Split by double newline to get paragraphs
  const paragraphs = aboutContent.split('\n\n')

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gap-12">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="space-y-10"
          >
            <SectionHeader
              label="About Me"
              title=""
              align="left"
            />
            <div className="space-y-5 text-muted leading-8 text-sm sm:text-base">
              {paragraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ))}
            </div>
            <div className="rounded-3xl glass-surface">
              <button
                type="button"
                onClick={() => setEducationOpen(open => !open)}
                aria-expanded={educationOpen}
                aria-controls="education-list"
                className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-accent/80">
                    Education
                  </span>
                  <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-accent" />
                      {doneCount} completed
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#E2B45C]" />
                      {inProgressCount} in progress
                    </span>
                  </span>
                </span>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-accentBorder text-accent">
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${educationOpen ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {educationOpen && (
                  <motion.div
                    id="education-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    {/* Fills column by column on desktop: completed on the left, in progress on the right. */}
                    <ul className="grid px-5 pb-3 sm:px-7 md:grid-flow-col md:grid-cols-2 md:grid-rows-3 md:gap-x-12">
                      {education.map(({ title, institution, status }) => (
                        <li
                          key={title}
                          className="grid grid-cols-[auto_1fr] items-start gap-x-3.5 gap-y-1.5 border-t border-white/[0.07] py-4 sm:grid-cols-[auto_1fr_auto]"
                        >
                          <span className="mt-0.5">
                            <StatusBox status={status} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold leading-snug text-white">{title}</span>
                            <span className="mt-0.5 block text-xs text-muted">{institution}</span>
                          </span>
                          <span
                            className={`col-start-2 text-[10px] sm:col-start-3 sm:mt-1 sm:text-right font-semibold uppercase tracking-[0.18em] ${
                              status === 'done' ? 'text-accent' : 'text-[#E2B45C]'
                            }`}
                          >
                            {status === 'done' ? 'Completed' : 'In progress'}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Button
                as="a"
                href="#contact"
                size="md"
                className="w-full sm:w-auto"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Let's Build Together
              </Button>
              <Button
                as="a"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
                href="/Antony_Peter_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume (opens in a new tab)"
              >
                <FileText size={16} />
                View Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}