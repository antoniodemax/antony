import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, GitBranch } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { projects } from '../../data/projects'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative flex h-full flex-col rounded-[2rem] glass-surface overflow-hidden"
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-16 w-2 rounded-tr-full" style={{ backgroundColor: `hsla(${project.color}, 0.8)` }} />
      <div className="relative flex-1 h-full">
        <div className={`grid gap-4 lg:grid-cols-2 ${reversed ? 'lg:grid-flow-col-dense' : ''} h-full`}>
          <div className={`relative overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-surface/60 via-transparent to-transparent" />
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="h-full w-full bg-surface" />
            )}
            <div className="absolute inset-x-0 top-3 flex justify-between px-4">
              <span
                className="rounded-full border border-white/10 bg-black/25 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2] text-accent"
                style={{ backdropFilter: 'blur(18px)' }}
              >
                {project.industry}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-4 sm:p-5">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.4] text-accent/90">
                <span className="h-px w-4 bg-accent/60" />
                {project.tagline}
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed line-clamp-2">{project.problem}</p>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech, idx) => (
                  <span key={`${tech}-${idx}`} className="inline-flex items-center rounded-full px-2 py-1 text-[10px] font-medium tracking-[0.02em] transition-colors duration-200 bg-accent/10 text-accent border border-accent/20">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition-all duration-200 hover:border-accent/30 hover:bg-accent/10"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-bg/70 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-accent/20 hover:text-accent"
                  >
                    <GitBranch size={12} />
                    Github
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
          <SectionHeader
            label="Featured Work"
            title="Products built with intention"
            description="Real products built and shipped — from a luxury fashion storefront to a full-stack B2B SaaS platform."
            align="left"
          />
          <motion.a
            href="#contact"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-[0.35em] transition-colors duration-200 hover:text-white"
          >
            Start a project <ArrowRight size={14} />
          </motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
