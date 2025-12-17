import { motion } from 'framer-motion'

const skills: Record<string, string[]> = {
  Frontend: ['HTML','CSS','JavaScript', 'React', 'TypeScript', 'Redux','React Native'],
  Backend: ['Python', 'FastAPI'],
  Cloud: ['AWS S3', 'AWS SES', 'Docker','Amplify','Dynamodb','PostgreSQL'],
  AI: ['Anthropic Claude', 'Cursor AI','Copilot','ChatGPT'],
  Other: ['Stripe Payments', 'GitHub','JIRA'],
}

export default function Skills() {  
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:grid md:grid-cols-3 md:items-start gap-12">
          {/* Left column: big title and intro */}
          <div className="md:col-span-1">
            <h2 className="text-5xl md:text-6xl font-serif font-extrabold mb-6 text-[var(--primary)] leading-tight">Skills</h2>
            <p className="text-lg text-[var(--primary)]/70 max-w-xl">Tools, technologies and specialities I work with. I prefer readable, well-tested solutions and practical architectures — here are the areas I focus on.</p>
          </div>

          {/* Right column: cards */}
          <div className="md:col-span-2">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden group bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl border border-white/10 hover:border-primary shadow-[0_8px_30px_rgba(2,6,23,0.6)] transition-transform duration-200 will-change-transform hover:-translate-y-1"
          >
            {/* subtle hover overlay (behind content) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/6 to-secondary/6 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-0" />

            <h3 className="text-lg font-semibold mb-4 text-primary relative z-10">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 bg-transparent text-[var(--primary)] rounded-full text-sm transition border border-white/6 hover:bg-[var(--surface)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
