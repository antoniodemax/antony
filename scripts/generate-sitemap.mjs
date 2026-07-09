import fs from 'fs'
import path from 'path'

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {}
  return fs.readFileSync(filePath, 'utf8').split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return acc
    const parts = trimmed.split('=')
    const key = parts.shift()?.trim()
    const value = parts.join('=').trim().replace(/^"|"$/g, '')
    if (key) acc[key] = value
    return acc
  }, {})
}

const envPath = path.resolve(process.cwd(), '.env')
const env = parseEnvFile(envPath)
const siteUrl = env.SITE_URL || 'https://antonypeter.vercel.app'

const pages = [
  '/',
  '/#about',
  '/#services',
  '/#work',
  '/#contact',
]

const articles = [
  '/insights',
  '/insights/building-products-in-the-ai-era',
  '/insights/why-great-software-architecture-still-wins',
  '/insights/lessons-from-building-b2b-saas-in-africa',
  '/insights/modern-full-stack-from-idea-to-production',
]

const allUrls = [...pages, ...articles].map(route => `${siteUrl}${route}`)
const now = new Date().toISOString()

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allUrls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`).join('\n') +
  `\n</urlset>`

const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml')
fs.writeFileSync(outputPath, sitemap)
console.log(`Sitemap generated at ${outputPath}`)
