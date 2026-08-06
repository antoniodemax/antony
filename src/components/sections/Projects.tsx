import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, GitBranch } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { projects } from '../../data/projects'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative rounded-[2rem] border border-white/10 bg-white/5 shadow-card backdrop-blur-xl overflow-hidden"
    >
      <div className={`grid gap-6 lg:grid-cols-2 ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
        <div className={`relative overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-surface/60 via-transparent to-transparent" />
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="h-full min-h-[340px] bg-surface" />
          )}
          <div className="absolute inset-x-0 top-4 flex justify-between px-5">
            <span
              className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent"
              style={{ backdropFilter: 'blur(18px)' }}
            >
              {project.industry}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 xl:p-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-accent/90">
              <span className="h-px w-8 bg-accent/60" />
              {project.tagline}
            </div>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
            <p className="text-sm text-white/80 leading-relaxed">{project.outcome}</p>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <Badge key={tech} variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live`}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:border-accent/40 hover:bg-accent/15"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/30 hover:text-accent"
                >
                  <GitBranch size={14} />
                  GitHub
                </a>
              )}
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

        <div className="space-y-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
