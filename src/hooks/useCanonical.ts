import { useEffect } from 'react'

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://antonypeter.vercel.app').replace(/\/$/, '')
const DEFAULT_TITLE = 'Antony Peter | Full-Stack Software Engineer & Cybersecurity Analyst'

// index.html hardcodes the canonical/og:url to the homepage. Keep them in step with
// the current route so crawlers treat /insights and each article as its own page.
export default function useCanonical(path: string) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', url)
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', url)
    if (path === '/') document.title = DEFAULT_TITLE
    else if (path === '/insights') document.title = 'Insights — Antony Peter'
  }, [path])
}
