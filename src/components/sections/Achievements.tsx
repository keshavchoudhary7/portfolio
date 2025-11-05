import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Trophy, Rocket, BugOff, BarChart2, Code2, Target } from 'lucide-react'

const items = [
  { icon: Trophy, label: 'Production Apps', value: 3, suffix: '' },
  { icon: Rocket, label: 'Users Served', value: 10000, suffix: '+' },
  { icon: BugOff, label: 'Bug Reduction', value: 40, suffix: '%' },
  { icon: BarChart2, label: 'Power BI Dashboards', value: 1, suffix: 'x' },
  { icon: Code2, label: 'Reusable Components', value: 20, suffix: '+' },
  { icon: Target, label: 'Sprint Completion', value: 95, suffix: '%' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-10">
          Achievements
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-purple)]/20 border border-white/10">
                <it.icon className="text-[var(--accent-blue)]" />
              </div>
              <div>
                <Counter end={it.value} suffix={it.suffix} />
                <p className="text-sm text-[var(--text-secondary)]">{it.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ end, suffix = '' }: { end: number, suffix?: string }) {
  const mv = useMotionValue(0)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const controls = animate(mv, end, { duration: 1.2, ease: 'easeOut' })
    const unsub = mv.on('change', v => setVal(Math.floor(v)))
    return () => { controls.stop(); unsub() }
  }, [end])
  const formatted = end >= 1000 ? `${(val / 1000).toFixed(val >= 10000 ? 0 : 1)}k${suffix}` : `${val}${suffix}`
  return <div className="text-2xl font-bold text-white">{formatted}</div>
}


