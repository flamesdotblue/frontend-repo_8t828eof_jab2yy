import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero with interactive 3D scene */}
      <Hero />

      {/* Main content sections */}
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#top" className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-700 hover:bg-gray-200">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
