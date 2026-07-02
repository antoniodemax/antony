import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { navigateTo } from '../../utils/navigation'
import SectionHeader from '../ui/SectionHeader'

const articles = [
  {
    id: '1',
    slug: 'building-products-in-the-ai-era',
    title: 'Building Products in the AI Era',
    excerpt:
      'The rules of product development are shifting. Here\'s how to think about AI integration without falling into the hype trap — and where it genuinely changes the game.',
    readTime: '7 min read',
    date: 'June 2026',
    gradient: 'from-amber-900/40 via-orange-900/20 to-stone-900/30',
    color: '#D4AF37',
    tag: 'Product',
  },
  {
    id: '2',
    slug: 'why-great-software-architecture-still-wins',
    title: 'Why Great Software Architecture Still Wins',
    excerpt:
      'In a world of fast ships and MVP culture, the businesses that build durable products are the ones that took architecture seriously from day one. A deep dive into what "scalable" really means.',
    readTime: '9 min read',
    date: 'May 2026',
    gradient: 'from-indigo-900/40 via-blue-900/20 to-slate-900/30',
    color: '#6366F1',
    tag: 'Engineering',
  },
  {
    id: '3',
    slug: 'lessons-from-building-b2b-saas-in-africa',
    title: 'Lessons from Building B2B SaaS in Africa',
    excerpt:
      'Building Crevia taught me more about product-market fit, compliance complexity, and user behaviour in the African market than any course could. Raw lessons from the ground.',
    readTime: '11 min read',
    date: 'April 2026',
    gradient: 'from-emerald-900/40 via-teal-900/20 to-slate-900/30',
    color: '#10B981',
    tag: 'Startups',
  },
  {
    id: '4',
    slug: 'modern-full-stack-from-idea-to-production',
    title: 'Modern Full-Stack: From Idea to Production',
    excerpt:
      'A practical walkthrough of my go-to stack — Vite, React, TypeScript, Supabase, and Vercel — and how I use it to take a product from concept to production in weeks, not months.',
    readTime: '8 min read',
    date: 'March 2026',
    gradient: 'from-purple-900/40 via-violet-900/20 to-slate-900/30',
    color: '#A855F7',
    tag: 'Tutorial',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <SectionHeader
            label="Insights"
            title="Thinking in public"
            description="Writing on software engineering, product development, AI, and building businesses in Africa."
            align="left"
          />
          <button
            type="button"
            onClick={() => navigateTo('/insights')}
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors whitespace-nowrap flex-shrink-0"
          >
            All articles <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => navigateTo(`/insights/${article.slug}`)}
              className="group flex flex-col bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className={`relative h-36 bg-gradient-to-br ${article.gradient}`}>
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wide"
                    style={{
                      background: `${article.color}22`,
                      color: article.color,
                      border: `1px solid ${article.color}33`,
                    }}
                  >
                    {article.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                  <div
                    className="w-full h-full rounded-full"
                    style={{ background: article.color }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-muted">
                  <Clock size={11} />
                  {article.readTime}
                  <span className="opacity-40">·</span>
                  {article.date}
                </div>

                <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-accent transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-1 text-[11px] font-medium text-accent pt-2">
                  Read article <ArrowUpRight size={11} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
