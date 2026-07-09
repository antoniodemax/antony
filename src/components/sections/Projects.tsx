import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { projects } from '../../data/projects'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-card rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500"
    >
      {/* Project Screenshot */}
      <div className={`relative h-52 sm:h-60 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : null}
        {/* Subtle overlay so the industry badge stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Industry badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wide backdrop-blur-sm"
            style={{ background: `${project.color}33`, color: project.color, border: `1px solid ${project.color}55` }}
          >
            {project.industry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted">{project.tagline}</p>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted/50 mb-1">
              Problem Solved
            </p>
            <p className="text-sm text-muted leading-relaxed line-clamp-2">{project.problem}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted/50 mb-1">
              Business Outcome
            </p>
            <p className="text-sm text-white/80 leading-relaxed line-clamp-2">{project.outcome}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(tech => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-accent hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5 font-medium"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={13} />
              View Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors whitespace-nowrap flex-shrink-0"
          >
            Start a project <ArrowRight size={14} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
