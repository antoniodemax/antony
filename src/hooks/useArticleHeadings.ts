import { useMemo } from 'react'

export interface ArticleHeading {
  id: string
  text: string
  level: number
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

export function useArticleHeadings(html: string) {
  return useMemo(() => {
    if (!html) return { headings: [], sanitizedHtml: html }

    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const existingIds = new Set<string>()
    const headings: ArticleHeading[] = []

    Array.from(doc.querySelectorAll('h2, h3, h4')).forEach(node => {
      const text = node.textContent?.trim() ?? ''
      let id = node.getAttribute('id') || slugify(text)
      let suffix = 1
      while (existingIds.has(id) || !id) {
        id = `${id}-${suffix}`
        suffix += 1
      }
      existingIds.add(id)
      node.setAttribute('id', id)
      headings.push({
        id,
        text,
        level: Number(node.tagName.substring(1)),
      })
    })

    return { headings, sanitizedHtml: doc.body.innerHTML }
  }, [html])
}
