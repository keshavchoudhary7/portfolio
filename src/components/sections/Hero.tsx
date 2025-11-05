import { motion, useMotionValue, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import Particles from '../../components/Particles'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const translate1 = {
    x: useTransform(mx, [0, 1], [-10, 10]),
    y: useTransform(my, [0, 1], [-10, 10])
  }
  const translate2 = {
    x: useTransform(mx, [0, 1], [12, -12]),
    y: useTransform(my, [0, 1], [12, -12])
  }
  const onMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window
    mx.set(e.clientX / innerWidth)
    my.set(e.clientY / innerHeight)
  }
  const blobsRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!blobsRef.current) return
    const q = gsap.utils.selector(blobsRef)
    gsap.to(q('.blob'), { y: 12, x: 6, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.2 })
  }, [])
  return (
    <section id="hero" onMouseMove={onMouseMove} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <Particles />
      <AnimatedBackground translate1={translate1} translate2={translate2} />
      <div ref={blobsRef} className="absolute inset-0 -z-0 pointer-events-none">
        <div className="blob absolute left-10 top-24 w-40 h-40 rounded-full bg-[var(--accent-blue)]/10 blur-2xl" />
        <div className="blob absolute right-16 bottom-28 w-48 h-48 rounded-full bg-[var(--accent-pink)]/10 blur-2xl" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.9, y: 0 }} transition={{ duration: 0.6 }} className="text-[var(--accent-blue)] mb-4">
          Hi, I'm
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Keshav Kumar Choudhary
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-2xl md:text-3xl font-semibold gradient-text mb-6">
          <TypeAnimation
            sequence={['Full Stack Developer', 1500, 'React Specialist', 1500, 'MERN Expert', 1500]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 0.9, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="max-w-2xl mx-auto text-[var(--text-secondary)]">
          Building scalable web experiences with modern technologies
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-10 flex items-center justify-center gap-4">
          <a href="#projects" className="glass px-5 py-3 rounded-xl hover:opacity-90">
            View My Work
          </a>
          <a href="/resume.pdf" target="_blank" className="px-5 py-3 rounded-xl bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 hover:bg-[var(--accent-blue)]/30">
            Download Resume
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedBackground({ translate1, translate2 }: { translate1: { x: any, y: any }, translate2: { x: any, y: any } }) {
  return (
    <div aria-hidden className="absolute inset-0">
      <motion.div className="pointer-events-none absolute -inset-[10%] opacity-40" style={{
        background:
          'radial-gradient(1200px 600px at 50% -20%, rgba(0,212,255,0.25), transparent), radial-gradient(800px 400px at 10% 120%, rgba(167,139,250,0.25), transparent), radial-gradient(800px 400px at 90% 120%, rgba(236,72,153,0.25), transparent)',
        x: translate1.x, y: translate1.y
      }} />
      <motion.div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_40%)]" style={{ x: translate2.x, y: translate2.y }} />
    </div>
  )
}


