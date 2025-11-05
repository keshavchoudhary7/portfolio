import { motion } from 'framer-motion'

type Skill = { name: string; level: number }

const frontend: Skill[] = [
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 85 },
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'Redux', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'HTML5/CSS3', level: 95 },
]

const backend: Skill[] = [
  { name: 'Node.js', level: 90 },
  { name: 'Express.js', level: 90 },
  { name: 'MongoDB', level: 85 },
  { name: 'REST APIs', level: 95 },
  { name: 'JWT Authentication', level: 85 },
]

const tools: Skill[] = [
  { name: 'Git/GitHub', level: 90 },
  { name: 'Microsoft Azure', level: 80 },
  { name: 'Power BI', level: 75 },
  { name: 'Postman', level: 85 },
  { name: 'VS Code', level: 95 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-10">
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard title="Frontend" items={frontend} />
          <SkillCard title="Backend" items={backend} />
          <SkillCard title="Tools & Cloud" items={tools} />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, items }: { title: string, items: Skill[] }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((s, i) => (
          <div key={s.name}>
            <div className="flex justify-between text-sm mb-2"><span>{s.name}</span><span className="text-[var(--text-secondary)]">{s.level}%</span></div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]" initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


