import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
  <nav className="sticky top-0 bg-[var(--bg)] z-50 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-serif font-bold text-xl text-[var(--primary)]">Janani R</h1>
        </div>

        <div className="hidden sm:flex items-center space-x-6 text-sm">
          <a href="#projects" className="text-[var(--primary)]/80 hover:underline">Projects</a>
          <a href="#skills" className="text-[var(--primary)]/80 hover:underline">Skills</a>
          <a href="#contact" className="text-[var(--primary)]/80 hover:underline">Contact</a>
          <a href="/resume-download.html" className="ml-4 inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-md shadow-sm">Download Resume</a>
        </div>

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md border border-white/6">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 text-sm">
            <a href="#projects" onClick={() => setOpen(false)} className="text-[var(--primary)]/80">Projects</a>
            <a href="#skills" onClick={() => setOpen(false)} className="text-[var(--primary)]/80">Skills</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-[var(--primary)]/80">Contact</a>
            <a href="/resume-download.html" onClick={() => setOpen(false)} className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-md w-max">Download Resume</a>
          </div>
        </div>
      )}
    </nav>
  )
}
