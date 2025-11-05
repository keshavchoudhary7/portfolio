import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../lib/a11y'

export default function CursorTrail() {
  const reduced = usePrefersReducedMotion()
  const dots = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (reduced) return
    const elements = Array.from({ length: 10 }).map(() => {
      const el = document.createElement('div')
      el.className = 'pointer-events-none fixed z-[59] w-2 h-2 rounded-full bg-[var(--accent-blue)]/70'
      document.body.appendChild(el)
      return el
    })
    dots.current = elements
    let x = Array(10).fill(window.innerWidth / 2)
    let y = Array(10).fill(window.innerHeight / 2)
    let tx = x[0], ty = y[0]
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
    const tick = () => {
      x[0] += (tx - x[0]) * 0.25
      y[0] += (ty - y[0]) * 0.25
      for (let i = 1; i < x.length; i++) {
        x[i] += (x[i - 1] - x[i]) * 0.35
        y[i] += (y[i - 1] - y[i]) * 0.35
      }
      elements.forEach((el, i) => {
        el.style.transform = `translate3d(${x[i]}px, ${y[i]}px, 0)`
        el.style.opacity = String(1 - i / elements.length)
      })
      requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    const id = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(id)
      elements.forEach(el => el.remove())
    }
  }, [reduced])
  return null
}


