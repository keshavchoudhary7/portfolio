import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 800)
    return () => clearTimeout(t)
  }, [])
  if (hidden) return null
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-[var(--bg-primary)]/90 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-[var(--accent-blue)] animate-spin" />
    </div>
  )
}


