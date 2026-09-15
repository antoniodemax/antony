import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, GitBranch } from 'lucide-react'
import Button from './Button'
import type { Project } from '../../data/projects'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    if (scrollRef.current) scrollRef.current.scrollTop = 0
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-md flex items-start justify-center p-4 sm:p-8"
          onClick={e => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            key="project-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/8 rounded-2xl shadow-2xl mt-8 overflow-hidden"
          >
            <div className="h-[2px] w-full bg-gradient-to-r from-accent/80 via-accent to-accent/20" />

            <button
              ref={closeRef}
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted hover:text-white transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              aria-label="Close project details"
            >
              <X size={16} />
            </button>

            <div ref={scrollRef} className="overflow-y-auto max-h-[80vh] px-6 sm:px-12 py-10">
              <p className="text-xs uppercase tracking-[0.35em] text-accent/80 font-semibold mb-3">
                {project.industry}
              </p>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 pr-10">
                {project.title}
              </h2>
              <p className="text-white/90 font-medium text-base sm:text-lg leading-relaxed mb-10">
                {project.tagline}
              </p>

              <h3 className="text-xs uppercase tracking-[0.3em] text-muted/70 font-semibold mb-3">The challenge</h3>
              <p className="text-muted leading-relaxed mb-8">{project.problem}</p>

              <h3 className="text-xs uppercase tracking-[0.3em] text-muted/70 font-semibold mb-3">What I delivered</h3>
              <p className="text-muted leading-relaxed mb-8">{project.outcome}</p>

              <h3 className="text-xs uppercase tracking-[0.3em] text-muted/70 font-semibold mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.stack.map((tech, idx) => (
                  <span
                    key={`${tech}-${idx}`}
                    className="inline-flex items-center rounded-full px-3 py-2 text-xs font-medium tracking-[0.02em] bg-accent/10 text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
                  {project.liveUrl && (
                    <Button
                      as="a"
                      size="md"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live site (opens in a new tab)`}
                      className="w-full sm:w-auto"
                    >
                      <ExternalLink size={16} />
                      Visit Live Site
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      as="a"
                      variant="secondary"
                      size="md"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}
                      className="w-full sm:w-auto"
                    >
                      <GitBranch size={16} />
                      View Source
                    </Button>
                  )}
                </div>
              )}
            </div>

            <div className="h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
