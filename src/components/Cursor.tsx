import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../lib/a11y'

export default function Cursor() {
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
    const tick = () => {
      x += (tx - x) * 0.15
      y += (ty - y) * 0.15
      el.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`
      requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    const id = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(id) }
  }, [reduced])
  if (reduced) return null
  return (
    <div ref={ref} className="pointer-events-none fixed z-[60] top-0 left-0 w-8 h-8 rounded-full border border-[var(--accent-blue)]/60 bg-[var(--accent-blue)]/10" />
  )
}


