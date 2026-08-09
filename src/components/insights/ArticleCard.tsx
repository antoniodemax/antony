import { motion } from 'framer-motion'
import type { Article } from '../../types/article'
import { navigateTo } from '../../utils/navigation'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ translateY: -4 }}
      className="group bg-card border border-white/5 rounded-2xl overflow-hidden shadow-card"
    >
      <div className="w-full h-36 sm:h-44 bg-cover bg-center" style={{ backgroundImage: `url(${article.featuredImage})` }} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-accent">{article.category}</span>
          <span className="text-xs text-muted">{article.readingTime}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white mb-2">{article.title}</h3>
        <p className="text-sm text-muted mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <button onClick={() => navigateTo(`/insights/${article.slug}`)} className="inline-flex items-center px-5 py-3 rounded-full bg-accent text-black text-sm font-medium hover:bg-accent/90">Read Article</button>
          <span className="text-sm text-muted">{article.publishDate}</span>
        </div>
      </div>
    </motion.article>
  )
}
