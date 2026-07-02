import type { ArticleHeading } from '../../hooks/useArticleHeadings'

interface Props {
  headings: ArticleHeading[]
  activeId: string
  onSelect: (id: string) => void
}

export default function TableOfContents({ headings, activeId, onSelect }: Props) {
  if (!headings.length) return null

  return (
    <nav className="toc-card p-6 rounded-3xl border border-white/10 bg-surface/80 backdrop-blur-lg" aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted mb-4">On this page</p>
      <ul className="space-y-3">
        {headings.map(heading => (
          <li key={heading.id} className={`toc-item toc-level-${heading.level}`}>
            <button
              type="button"
              onClick={() => onSelect(heading.id)}
              className={`toc-link text-left w-full ${activeId === heading.id ? 'text-white font-semibold' : 'text-muted hover:text-white'}`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
