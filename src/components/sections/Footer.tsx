import { Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)]">Designed & Built by Keshav Kumar Choudhary • © 2025</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/keshavchoudhary7" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/5" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/keshav-kumar-choudhary-6a7a98221/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/5" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <button onClick={toTop} className="p-2 rounded-full hover:bg-white/5" aria-label="Back to top"><ArrowUp size={18} /></button>
        </div>
      </div>
    </footer>
  )
}


