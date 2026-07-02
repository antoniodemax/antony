import { useEffect, useState } from 'react'

export default function usePath() {
  const [path, setPath] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'))

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return path
}
