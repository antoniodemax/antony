import { motion } from 'framer-motion'
import { ExternalLink, FileText, ArrowRight } from 'lucide-react'
import { GitHubIcon } from '../ui/Icons'
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
      {/* Project Image */}
      <div className={`relative h-52 sm:h-60 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Abstract mock UI */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="grid grid-cols-3 gap-2 w-3/4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-6 rounded"
                style={{ background: project.color, opacity: 0.3 + (i % 3) * 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Browser chrome overlay */}
        <div className="absolute inset-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-black/20">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <div
              className="ml-2 h-1.5 w-24 rounded-full"
              style={{ background: project.color, opacity: 0.4 }}
            />
          </div>
          <div className="p-3 space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-2">
                <div
                  className="h-1.5 rounded-full"
                  style={{
                    width: `${60 + i * 15}%`,
                    background: project.color,
                    opacity: 0.2 + i * 0.1,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Industry badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wide"
            style={{ background: `${project.color}22`, color: project.color, border: `1px solid ${project.color}33` }}
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
          <a
            href={project.liveUrl}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            aria-label={`View ${project.title} live`}
          >
            <ExternalLink size={13} />
            View Project
          </a>
          <a
            href={project.caseStudyUrl}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            aria-label={`${project.title} case study`}
          >
            <FileText size={13} />
            Case Study
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
            aria-label={`${project.title} GitHub`}
          >
            <GitHubIcon size={13} />
            GitHub
          </a>
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
            description="Selected projects spanning SaaS, e-commerce, analytics, and healthcare — each solving a real business problem with measurable outcomes."
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
