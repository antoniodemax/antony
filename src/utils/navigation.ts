export function navigateTo(href: string) {
  if (typeof window === 'undefined') return
  if (window.location.pathname === href) return
  window.history.pushState({}, '', href)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
