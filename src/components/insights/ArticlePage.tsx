import { useEffect, useMemo, useState } from 'react'
import { getArticleBySlug, getAllArticles } from '../../articles'
import { navigateTo } from '../../utils/navigation'
import type { Article } from '../../types/article'
import ReadingProgress from './ReadingProgress'
import { useArticleHeadings } from '../../hooks/useArticleHeadings'
import useActiveHeading from '../../hooks/useActiveHeading'
import TableOfContents from './TableOfContents'
import ShareActions from './ShareActions'
import AuthorCard from './AuthorCard'

export default function ArticlePage({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug) as Article | undefined
  const articles = useMemo(() => getAllArticles(), [])
  const related = articles.filter(a => article?.relatedArticles?.includes(a.slug)).slice(0, 3)
  const currentIndex = articles.findIndex(a => a.slug === slug)
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null
  const next = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
  const [contentHtml, setContentHtml] = useState(article?.content ?? '')
  const { headings, sanitizedHtml } = useArticleHeadings(contentHtml)
  const activeId = useActiveHeading(headings.map(h => h.id))

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — Antony Peter`
      setContentHtml(article.content)
    }
  }, [article])

  if (!article) return <div className="p-12">Article not found</div>

  return (
    <main className="relative">
      <ReadingProgress />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="mb-10">
          <button
            type="button"
            onClick={() => navigateTo('/insights')}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white"
          >
            ← Back to Insights
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <section className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                {article.category}
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-white">{article.title}</h1>
                <p className="text-lg text-muted max-w-3xl">{article.subtitle}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                <span>{article.publishDate}</span>
                <span>•</span>
                <span>{article.readingTime} read</span>
                <span>•</span>
                <span>{article.authorRole}</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-card">
              <img src={article.featuredImage} alt={article.title} className="w-full object-cover max-h-[420px]" loading="lazy" />
            </div>

            <div className="lg:hidden">
              <TableOfContents headings={headings} activeId={activeId} onSelect={id => navigateTo(`#${id}`)} />
            </div>

            <article className="prose prose-invert max-w-none text-lg leading-8 prose-a:text-accent prose-blockquote:border-l-accent prose-blockquote:text-muted prose-blockquote:border-l-4 prose-blockquote-pl-6 prose-img:rounded-3xl prose-img:border prose-img:border-white/10" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />

            <div className="grid gap-6">
              <div className="rounded-3xl border border-white/10 bg-card p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Share this article</h2>
                <ShareActions url={window.location.href} title={article.title} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {prev && (
                  <button type="button" onClick={() => navigateTo(`/insights/${prev.slug}`)} className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-left hover:border-accent hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">Previous</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{prev.title}</h3>
                  </button>
                )}
                {next && (
                  <button type="button" onClick={() => navigateTo(`/insights/${next.slug}`)} className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-left hover:border-accent hover:bg-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">Next</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{next.title}</h3>
                  </button>
                )}
              </div>
            </div>

            <AuthorCard />
          </section>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents headings={headings} activeId={activeId} onSelect={id => {
                const target = document.getElementById(id)
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }} />
              <div className="rounded-3xl border border-white/10 bg-card p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted mb-4">Estimated reading time</h2>
                <p className="text-3xl font-semibold text-white">{article.readingTime}</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Related articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map(r => (
              <button key={r.slug} onClick={() => navigateTo(`/insights/${r.slug}`)} className="rounded-3xl border border-white/10 bg-card p-6 text-left hover:border-accent hover:bg-white/5 transition">
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{r.category}</p>
                <h3 className="text-xl font-semibold text-white">{r.title}</h3>
                <p className="text-sm text-muted mt-3">{r.excerpt}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
