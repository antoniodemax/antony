export interface Article {
  id: string
  slug: string
  title: string
  subtitle?: string
  excerpt: string
  description?: string
  author: string
  authorRole?: string
  publishDate: string // ISO
  readingTime: string
  category: string
  tags: string[]
  featuredImage?: string
  featured?: boolean
  content: string // HTML string for initial placeholders
  relatedArticles?: string[] // array of slugs
}
