import React from 'react'
import { ExternalLink, Rocket } from 'lucide-react'

const items = [
  {
    title: 'Neon Commerce',
    tag: 'E‑commerce · Full‑stack',
    desc: 'Headless storefront with instant product search and smooth checkout.',
    href: '#',
    accent: 'from-fuchsia-500 via-pink-500 to-rose-500',
  },
  {
    title: 'Orbit UI',
    tag: 'Design System',
    desc: 'Composable components with tokens, theming, and motion guidelines.',
    href: '#',
    accent: 'from-cyan-500 via-sky-500 to-emerald-500',
  },
  {
    title: 'Pulse Analytics',
    tag: 'Data Viz',
    desc: 'Streaming dashboards, anomaly detection, and alerting.',
    href: '#',
    accent: 'from-amber-500 via-orange-500 to-red-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-slate-600">A few builds that capture my approach and craft.</p>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black">
          <Rocket className="h-4 w-4" /> Start a project
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
            <div className="p-6">
              <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{p.tag}</div>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <a href={p.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                Explore <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="pointer-events-none absolute -bottom-10 right-0 h-40 w-40 rotate-12 rounded-full bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20 blur-2xl transition duration-500 group-hover:scale-125" />
          </article>
        ))}
      </div>
    </section>
  )
}
