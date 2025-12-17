export default function Contact() {
  return (
  <section id="contact" className="py-32 text-center">
  <h2 className="text-4xl font-bold mb-6">
    Let’s build something meaningful
  </h2>

  <p className="text-[var(--muted)] max-w-xl mx-auto mb-12">
    Open to frontend roles, freelance work, and collaborations.
    Reach out — I’d love to talk.
  </p>

  <div className="flex justify-center gap-6 flex-wrap">
    <a
      href="mailto:jananirs06@gmail.com?subject=Hello%20Janani"
      aria-label="Send email to Janani"
      className="px-6 py-4 bg-card rounded-xl hover:shadow-glow transition"
    >
      📧 jananirs06@gmail.com
    </a>

    <a
      href="tel"
      aria-label="Call Janani"
      title="Call Janani"
      className="px-6 py-4 bg-card rounded-xl hover:shadow-glow transition"
    >
      📞 XXXXXXXXXX
    </a>

    <a
      href="https://github.com/Jananir98"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Open GitHub profile"
      className="px-6 py-4 bg-card rounded-xl hover:shadow-glow transition"
    >
      💻 GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/janani-r123"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Open LinkedIn profile"
      className="px-6 py-4 bg-card rounded-xl hover:shadow-glow transition"
    >
      🔗 LinkedIn
    </a>

    <a
      href="/resume-download.html"
      aria-label="Download resume"
      className="px-6 py-4 bg-card rounded-xl hover:shadow-glow transition flex items-center gap-3"
    >
      📄 Download Resume
    </a>
  </div>

      
  <p className="mt-6 text-sm text-[var(--muted)]">Thanjavur-613005</p>
</section>
  )
}
