import React from 'react'
import { ExternalLink, Rocket } from 'lucide-react'

const items = [
  {
    title: 'Neon Commerce',
    tag: 'E‑commerce · Full‑stack',
    desc: 'Headless shop with blazing-fast product browsing and checkout.',
    href: '#',
    color: 'from-fuchsia-500 to-rose-500',
  },
  {
    title: 'Orbit UI',
    tag: 'Design System',
    desc: 'Composable components and motion guidelines for web apps.',
    href: '#',
    color: 'from-cyan-500 to-emerald-500',
  },
  {
    title: 'Pulse Analytics',
    tag: 'Data Viz',
    desc: 'Real-time dashboards with streaming insights and alerts.',
    href: '#',
    color: 'from-amber-500 to-orange-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A few builds that capture my style and focus.</p>
        </div>
        <a href="#contact" className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black sm:inline-flex items-center gap-2">
          <Rocket className="h-4 w-4" /> Start a project
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.color}`} />
            <div className="p-6">
              <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{p.tag}</div>
              <h3 className="mt-1 text-2xl font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <a href={p.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                Explore <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
