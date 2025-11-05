import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const h = document.documentElement
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'backdrop-blur-md bg-black/20 border-b border-white/10' : ''}`} aria-label="Primary">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl">
          <span className="gradient-text">Keshav</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-[var(--text-secondary)]">
          {[
            {to:'hero',label:'Home'},
            {to:'projects',label:'Projects'},
            {to:'contact',label:'Contact'},
          ].map(item => (
            <ScrollLink key={item.to} to={item.to} smooth offset={-80} duration={600} className="hover:text-white cursor-pointer">
              {item.label}
            </ScrollLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/keshavchoudhary7" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-white/5">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/keshavchoudhary/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-white/5">
            <Linkedin size={18} />
          </a>
          <a href="mailto:keshavchoudhary782@gmail.com" aria-label="Email" className="p-2 rounded-full hover:bg-white/5">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="h-0.5 w-full bg-white/10">
        <div className="h-0.5 bg-[var(--accent-blue)]" style={{ width: `${progress}%` }} />
      </div>
    </header>
  )
}


