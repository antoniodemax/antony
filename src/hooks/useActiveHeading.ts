import { useEffect, useState } from 'react'

export default function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    if (!ids.length) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const headings = ids
          .map(id => document.getElementById(id))
          .filter(Boolean)
        const threshold = window.innerHeight * 0.3
        const current = headings
          .map(node => ({ id: node!.id, top: node!.getBoundingClientRect().top }))
          .filter(item => item.top <= threshold)
          .pop()
        setActiveId(current?.id || ids[0])
        frame = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids])

  return activeId
}
