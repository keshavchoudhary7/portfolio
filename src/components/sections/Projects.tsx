import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import {
  Rocket,
  Database,
  Server,
  Shield,
  BarChart3,
  Workflow,
  Cog,
  Cpu,
  Globe2,
  Sparkles
} from 'lucide-react'

type Project = {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  links?: { label: string; href: string }[]
  category: 'All' | 'Frontend' | 'Backend' | 'Full Stack'
  featured?: boolean
}

// const projects: Project[] = [
//   {
//     id: 'amalgamate',
//     title: 'Amalgamate - Social Voting Platform',
//     description: 'Social voting platform with video shorts, likes, comments. Built React.js frontend and admin panel serving 100K+ users.',
//     image: '/AmalgamateLogo.png',
//     tags: ['React', 'Redux', 'REST API', 'Power BI', 'Tailwind'],
//     category: 'Frontend',
//     featured: true,
//     links: [
//       { label: 'Live URL', href: 'https://www.amalgamate.ca' }
//     ]
//   },
//   {
//     id: 'letspartii',
//     title: 'LetsPartii - Event Management Platform',
//     description: 'Event management platform with advanced admin panel handling 5K+ records and real-time analytics.',
//     image: '/LetsPartyLogo.png',
//     tags: ['React', 'Redux', 'Chart.js', 'Tailwind'],
//     category: 'Frontend',
//     links: [
//       { label: 'Live URL', href: 'https://test.letspartii.run.place/' }
//     ]
//   },
//   {
//     id: 'investluxury',
//     title: 'Invest Luxury - API Backend',
//     description: 'RESTful API backend handling 10K+ daily requests with JWT authentication and 99.5% uptime.',
//     image: '/projects/invest-luxury.jpg',
//     tags: ['Node', 'Express', 'MongoDB', 'JWT'],
//     category: 'Backend',
//     links: [
//       { label: 'Deployment Is yet pending!', href: '#' }
//     ]
//   },
//   {
//     id: 'stream',
//     title: 'Video Streaming Platform',
//     description: 'Full-featured MERN stack streaming app supporting 500+ concurrent streams with authentication and social features.',
//     image: '/ytCloneImage.jpg',
//     tags: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
//     category: 'Full Stack',
//     links: [
//       { label: 'Live', href: '#' },
//       { label: 'GitHub', href: 'https://github.com/keshavchoudhary7/ytcloneInternshala' }
//     ]
//   },
//   {
//     id: 'ecommerce',
//     title: 'E-Commerce Shopping Platform',
//     description: 'Complete e-commerce solution processing 100+ secure transactions with Stripe integration.',
//     image: '/projects/ecommerce.jpg',
//     tags: ['MERN', 'Redux', 'Stripe'],
//     category: 'Full Stack',
//     links: [
      
//       { label: 'GitHub', href: 'https://github.com/keshavchoudhary7/shoppyGlobe/tree/main/e-commerce%20-%20webapp' }
//     ]
//   },
//   {
//     id: 'weather',
//     title: 'Live Weather Dashboard',
//     description: 'Responsive weather dashboard with real-time API integration and clean, modern UI.',
//     image: '/projects/weather.jpg',
//     tags: ['React', 'REST API', 'Tailwind'],
//     category: 'Frontend',
//     links: [
//       { label: 'Live', href: '#' },
//       { label: 'GitHub', href: '#' }
//     ]
//   },
// ]

const projects: Project[] = [
  {
    id: 'amalgamate',
    title: 'Amalgamate - Social Voting Platform',
    description: 'Social voting platform with video shorts, likes, comments. Built React.js frontend and admin panel serving 10K+ users.',
    image: '/AmalgamateLogo.png',
    tags: ['React', 'Redux', 'REST API', 'Power BI', 'Tailwind'],
    category: 'Frontend',
    featured: true,
    links: [
      { label: 'Live URL', href: 'https://www.amalgamate.ca' }
    ]
  },
  {
    id: 'letspartii',
    title: 'LetsPartii - Event Management Platform',
    description: 'Event management platform with advanced admin panel handling 5K+ records and real-time analytics.',
    image: '/LetsPartyLogo.png',
    tags: ['React', 'Redux', 'Chart.js', 'Tailwind'],
    category: 'Frontend',
    links: [
      { label: 'Live URL', href: 'https://test.letspartii.run.place/' }
    ]
  },
  {
    id: 'investluxury',
    title: 'Invest Luxury - API Backend',
    description: 'RESTful API backend handling 10K+ daily requests with JWT authentication and 99.5% uptime.',
    image: '/projects/invest-luxury.jpg',
    tags: ['Node', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
    links: [
      { label: 'Deployment Is yet pending!', href: '#' }
    ]
  },
  {
    id: 'messbooking',
    title: 'Mess Booking Web App',
    description: 'Full-stack mess management system for food ordering and subscription with secure authentication and responsive UI.',
    image: 'image: `https://api.screenshotapi.net/screenshot?url=https://mess-food-delivery-system-1.onrender.com&output=image&file_type=png`',
    tags: ['MERN', 'Express', 'MongoDB', 'React', 'Node'],
    category: 'Full Stack',
    links: [
      { label: 'Live URL', href: 'https://mess-food-delivery-system-1.onrender.com/auth/login' },
      { label: 'GitHub', href: 'https://github.com/keshavchoudhary7/Mess_food_Delivery_system' }
    ]
  },
  {
    id: 'stream',
    title: 'Video Streaming Platform',
    description: 'Full-featured MERN stack streaming app supporting 500+ concurrent streams with authentication and social features.',
    image: '/ytCloneImage.jpg',
    tags: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
    category: 'Full Stack',
    links: [
      { label: 'Live', href: '#' },
      { label: 'GitHub', href: 'https://github.com/keshavchoudhary7/ytcloneInternshala' }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Shopping Platform',
    description: 'Complete e-commerce solution processing 100+ secure transactions with Stripe integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['MERN', 'Redux', 'Stripe'],
    category: 'Full Stack',
    links: [
      { label: 'GitHub', href: 'https://github.com/keshavchoudhary7/shoppyGlobe/tree/main/e-commerce%20-%20webapp' }
    ]
  },
  {
    id: 'weather',
    title: 'Live Weather Dashboard',
    description: 'Responsive weather dashboard with real-time API integration and clean, modern UI.',
    image: '/projects/weather.jpg',
    tags: ['React', 'REST API', 'Tailwind'],
    category: 'Frontend',
    links: [
      { label: 'Live', href: '#' },
      { label: 'GitHub', href: '#' }
    ]
  },
]


export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Full Stack'>('All')
  const items = useMemo(() => {
    const base = projects
    return filter === 'All' ? base : base.filter(p => p.category === filter)
  }, [filter])
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold">
          Featured Projects
        </motion.h2>
        <div className="h-1 w-32 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-pink)] rounded-full mt-3 mb-8 opacity-70" />

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {(['All','Frontend','Backend','Full Stack'] as const).map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-1.5 rounded-full border transition ${filter===cat? 'border-[var(--accent-blue)] text-[var(--accent-blue)] bg-[var(--accent-blue)]/10':'border-white/10 text-[var(--text-secondary)] hover:bg-white/5'}`}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence>
            {items.map((p, i) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`${p.featured ? 'lg:col-span-2' : ''} col-span-1 h-full`}>
                <TiltCard index={i} image={p.image}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg group-hover:text-white">
                      {p.title}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full border border-white/10 text-[var(--text-secondary)]">{p.category}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 inline-flex items-center gap-1">
                        <TagIcon name={t} /> {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3">
                    {p.links?.map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="relative text-sm px-4 py-2 rounded-lg border border-transparent bg-gradient-to-r from-[var(--accent-blue)]/70 to-[var(--accent-pink)]/70 text-white hover:from-[var(--accent-blue)] hover:to-[var(--accent-pink)] transition-colors">
                        <span className="relative z-10 inline-flex items-center gap-1">
                          <Sparkles size={14} /> {l.label}
                        </span>
                        <span aria-hidden className="absolute inset-0 -z-0 rounded-lg blur opacity-60 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-pink)]" />
                      </a>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function TagIcon({ name }: { name: string }) {
  const key = name.toLowerCase()
  if (key.includes('react')) return <Rocket size={12} className="text-[var(--accent-blue)]" />
  if (key.includes('redux')) return <Workflow size={12} className="text-[var(--accent-purple)]" />
  if (key.includes('api') || key.includes('rest')) return <Globe2 size={12} className="text-[var(--accent-blue)]" />
  if (key.includes('power bi') || key.includes('chart')) return <BarChart3 size={12} className="text-[var(--accent-pink)]" />
  if (key.includes('tailwind')) return <Cog size={12} className="text-[var(--accent-blue)]" />
  if (key.includes('node')) return <Server size={12} className="text-[var(--accent-blue)]" />
  if (key.includes('express')) return <Cpu size={12} className="text-[var(--accent-purple)]" />
  if (key.includes('mongo')) return <Database size={12} className="text-[var(--accent-green,#22c55e)]" />
  if (key.includes('jwt')) return <Shield size={12} className="text-[var(--accent-pink)]" />
  return <Sparkles size={12} className="text-[var(--accent-blue)]" />
}

function TiltCard({ children, index, image }: { children: React.ReactNode, index: number, image?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width) * 100
    const py = (y / rect.height) * 100
    el.style.setProperty('--x', `${px}%`)
    el.style.setProperty('--y', `${py}%`)
    const rotateX = ((py - 50) / 12) * -1
    const rotateY = ((px - 50) / 12)
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl overflow-hidden will-change-transform transition-transform duration-200 h-full flex flex-col"
      style={{ transform: 'perspective(900px)' }}
    >
      <div className="relative mb-4 rounded-xl overflow-hidden border border-white/10">
        <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.4), rgba(167,139,250,0.4), rgba(236,72,153,0.4))' }} />
        <div className="relative rounded-[10px] overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(600px 300px at var(--x,50%) var(--y,50%), rgba(0,212,255,0.12), transparent 60%)' }} />
          {image ? (
            <img src={image} alt="project image" loading="lazy" className="w-full aspect-[16/10] object-contain object-center scale-100 group-hover:scale-[1.05] transition-transform duration-500" />
          ) : (
            <div className="aspect-[16/10] bg-gradient-to-br from-white/5 to-white/0" />
          )}
        </div>
      </div>
      <div className="glass p-5 rounded-2xl border border-white/10 flex flex-col flex-1">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
        background: 'radial-gradient(400px 200px at var(--x,50%) var(--y,50%), rgba(0,212,255,0.08), transparent 60%)'
      }} />
    </motion.article>
  )
}


