import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PageTransition() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const bars = el.querySelectorAll('.bar')
    gsap.set(bars, { yPercent: 100 })
    gsap.to(bars, { yPercent: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' })
    gsap.to(bars, { yPercent: -100, duration: 0.5, stagger: 0.05, ease: 'power2.in', delay: 0.4 })
  }, [])
  return (
    <div ref={ref} aria-hidden className="fixed inset-0 z-[80] pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="bar bg-[linear-gradient(135deg,var(--accent-blue),var(--accent-purple))]" />
        ))}
      </div>
    </div>
  )
}


