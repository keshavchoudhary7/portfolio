import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Years Experience', value: 1 },
  { label: 'Production Apps', value: 3 },
  { label: 'Users Served', value: 100_00 },
  { label: 'Bug Reduction', value: 40 },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-2xl p-6 order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            I'm a Full Stack Developer with 1+ years of experience specializing in React.js and Node.js. I've delivered 3 production applications on Azure serving 100K+ users. Passionate about creating intuitive user experiences and scalable backend solutions. Currently working at Csharptek, where I architect admin panels and integrate Power BI analytics dashboards.
          </p>
          <p className="mt-4 text-sm text-[var(--text-secondary)]">Current focus: <span className="text-white">Building scalable MERN applications and exploring AI integration in web apps</span></p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 md:order-2">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-pink)] opacity-30 blur" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <img src="/profilePhotoF.png" alt="Keshav Kumar Choudhary" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
          {stats.map((s) => (
            <StatCard key={s.label} label={s.label} value={s.value} />
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ label, value }: { label: string, value: number }) {
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2, ease: 'easeOut' })
    const unsub = count.on('change', (v) => setDisplay(Math.floor(v)))
    return () => { controls.stop(); unsub() }
  }, [value])
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <div className="text-3xl font-extrabold">
        {label.includes('Users') ? `${display.toLocaleString()}+` : label.includes('Bug') ? `${display}%` : label.includes('Years') ? `${display}+` : display}
      </div>
      <div className="text-sm text-[var(--text-secondary)] mt-1">{label}</div>
    </div>
  )
}


