const projects = [
  {
    title: "Event Management Platform",
    tech: ["React", "FastAPI", "AWS", "Stripe", "AI", "Python"],
    desc:
      "AI-assisted event management platform enabling event creation, subscription-based payments via Stripe, secure media uploads using AWS S3, and automated email notifications through AWS SES. Designed for scalability, reliability, and production-grade cloud deployment.",
  },
  {
    title: "Resilient Plus",
    tech: ["React", "TypeScript", "Redux-Saga"],
    desc:
      "Enterprise-grade multi-role web platform with secure authentication, role-based access control, and real-time analytics dashboards. Optimized rendering and state management improved application performance by ~20%, ensuring scalability and maintainability for large user bases.",
  },
  {
    title: "HR Management System",
    tech: ["React", "Redux Thunks"],
    desc:
      "End-to-end HR management solution supporting employee onboarding, payroll workflows, and email-based invitations. Built with a mobile-first, responsive UI and seamless API integration to streamline internal HR operations.",
  }
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(p => (
          <div
            key={p.title}
            className="bg-card p-6 rounded-xl hover:-translate-y-2 transition-all hover:shadow-xl "
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>

            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-[var(--muted)] mt-4">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
