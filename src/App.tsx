import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import GeometricBackground from "./components/GeometricBackground"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"

function App() {
  return (
    <>
      <GeometricBackground />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
