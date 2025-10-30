import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-950 to-white text-slate-900">
      {/* Hero with interactive 3D scene */}
      <Hero />

      {/* Main content sections */}
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="mt-10 border-t border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Your Name — Building delightful, performant software.</p>
          <a href="#top" className="rounded-full bg-slate-900 px-3 py-1 font-medium text-white transition hover:bg-black">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
