import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? (window.scrollY / h) * 100 : 0
      setProgress(Math.min(100, Math.max(0, p)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div aria-hidden className="fixed top-0 left-0 right-0 h-1 z-50">
      <div style={{ width: `${progress}%` }} className="h-1 bg-accent transition-all duration-150" />
    </div>
  )
}
