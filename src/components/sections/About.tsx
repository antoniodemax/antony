import { motion } from 'framer-motion'

import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

export default function About() {
  const aboutContent = `I'm **Antony Peter** — a **Software Engineer and Cybersecurity Professional** based in Nairobi, Kenya. I build modern, scalable digital products while applying a security-first mindset to the systems behind them.

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
            <Button
              as="a"
              href="#contact"
              size="md"
              className="mt-2"
              onClick={e => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let's Build Together
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}