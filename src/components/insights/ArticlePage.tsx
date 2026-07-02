import { useEffect } from 'react'
import { getArticleBySlug, getAllArticles } from '../../articles'
import type { Article } from '../../types/article'
import ReadingProgress from './ReadingProgress'

export default function ArticlePage({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug) as Article | undefined
  const related = getAllArticles().filter(a => article?.relatedArticles?.includes(a.slug)).slice(0,3)

  useEffect(() => {
    if (article) document.title = `${article.title} — Antony Peter`
  }, [article])

  if (!article) return <div className="p-12">Article not found</div>

  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
      <ReadingProgress />
      <header className="mb-8">
        <img src={article.featuredImage} alt="" className="w-full rounded-2xl mb-6 object-cover" />
        <div className="flex items-center gap-4 mb-2">
          <span className="text-xs font-semibold text-accent">{article.category}</span>
          <span className="text-xs text-muted">{article.publishDate} • {article.readingTime}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white">{article.title}</h1>
        {article.subtitle && <p className="text-muted mt-3">{article.subtitle}</p>}
      </header>

      <article className="prose prose-invert max-w-none text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Related articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {related.map(r => (
            <a key={r.slug} href={`/insights/${r.slug}`} className="p-4 rounded-lg bg-card border border-white/5">
              <h4 className="font-semibold text-white">{r.title}</h4>
              <p className="text-sm text-muted mt-1">{r.excerpt}</p>
            </a>
          ))}
        </div>
      </section>

    </main>
  )
}
