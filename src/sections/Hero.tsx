import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Glow Background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-3xl -top-40 -left-40"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="md:grid md:grid-cols-3 md:items-center gap-8">
          <div className="md:col-span-1">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-6xl font-serif font-extrabold leading-tight"
            >
              Hi, I’m
              <br />
              <span className="text-[var(--primary)] bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Janani R
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-[var(--primary)]/70 max-w-lg"
            >
Frontend Developer building scalable, high-performance React applications with AI integration, AWS cloud services, and modern UI engineering.            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-[var(--primary)] text-white font-semibold shadow-sm hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/5 transition"
              >
                Hire Me
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-2 flex items-center">
            {/* Hero illustration (bigger, no background/shadow) */}
            <img
              src="/src/assets/computer1.png"
              alt="computer illustration"
              className="w-full h-auto md:h-[420px] object-contain rounded-none shadow-none bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
