import { useMemo, useState } from 'react'
import ArticleCard from './ArticleCard'
import SearchBar from './SearchBar'
import { getAllArticles } from '../../articles'
import type { Article } from '../../types/article'

export default function InsightsList() {
  const all = useMemo(() => getAllArticles(), []) as Article[]
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)

  const categories = useMemo(() => Array.from(new Set(all.map(a => a.category))), [all])

  const filtered = useMemo(() => {
    return all.filter(a => {
      if (category && a.category !== category) return false
      if (!query) return true
      const q = query.toLowerCase()
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.join(' ').toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      )
    })
  }, [all, query, category])

  const featured = all.find(a => a.featured)

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white">Insights</h1>
        <p className="text-muted mt-2 max-w-2xl">Deep technical writing about software engineering, AI, architecture and product.</p>
      </header>

      {featured && (
        <div className="mb-8 grid md:grid-cols-2 gap-8">
          <div className="bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${featured.featuredImage})`, minHeight: 300 }} />
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold text-accent">{featured.category}</span>
            <h2 className="text-3xl font-bold text-white mt-2">{featured.title}</h2>
            <p className="text-muted mt-4">{featured.excerpt}</p>
            <div className="mt-6">
              <a href={`/insights/${featured.slug}`} className="inline-flex items-center px-6 py-3 rounded-full bg-accent text-black">Read Article</a>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar query={query} onChange={setQuery} />
        <div className="flex items-center gap-2 overflow-x-auto">
          <button onClick={() => setCategory(null)} className={`px-3 py-1 rounded-full ${category === null ? 'bg-accent text-black' : 'bg-white/5 text-muted'}`}>All</button>
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1 rounded-full ${category === c ? 'bg-accent text-black' : 'bg-white/5 text-muted'}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(a => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  )
}
