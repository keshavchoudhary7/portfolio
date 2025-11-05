import { motion } from 'framer-motion'

type Role = {
  title: string
  company: string
  period: string
  points: string[]
}

const roles: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Csharptek',
    period: 'Aug 2025 – Present',
    points: [
      'Architected and owned React.js frontend for Amalgamate — a social voting platform with 5k+ users',
      'Engineered LetsPartii admin panel with advanced data tables',
      'Developed Invest Luxury Node.js backend with 15+ REST APIs',
      'Deployed 3 applications to Azure with 40% bug reduction',
    ],
  },
  {
    title: 'Software Trainee',
    company: 'Csharptek',
    period: 'Feb 2025 – July 2025',
    points: [
      'Built admin panel features with Redux and Power BI integration for Amalgamate - social voting platform',
      'Created dynamic data tables reducing lookup time by 45% for Amalgamate - social voting platform',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'HashedBit Innovations',
    period: 'Apr 2024 – Oct 2024',
    points: [
      'Engineered 20+ reusable React components',
      'Optimized performance improving load time by 25%',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-10">
          Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 to-white/0" />
          <div className="space-y-10">
            {roles.map((r, i) => (
              <motion.article key={r.title + r.period} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className={`relative glass rounded-xl p-6 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <div className={`hidden md:block absolute top-6 ${i % 2 === 0 ? '-left-4' : '-right-4'} w-2 h-2 rounded-full bg-[var(--accent-blue)]`} />
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/30 to-[var(--accent-purple)]/30 border border-white/10 grid place-items-center text-xs">
                    {r.company[0]}
                  </div>
                  <h3 className="font-semibold">{r.title} | {r.company}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{r.period}</p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-[var(--text-secondary)]">
                  {r.points.map(pt => (<li key={pt}>{pt}</li>))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


