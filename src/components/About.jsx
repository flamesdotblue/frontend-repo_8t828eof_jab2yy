import React from 'react'
import { Code2, Cpu, Sparkles } from 'lucide-react'

const skills = [
  { Icon: Code2, label: 'TypeScript / React' },
  { Icon: Cpu, label: 'APIs / Edge / Cloud' },
  { Icon: Sparkles, label: 'Motion / 3D / UX' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* soft background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-transparent" />

      <div className="relative grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About</h2>
          <p className="mt-4 text-slate-600">
            I design and build distinctive digital products. My approach blends thoughtful UX,
            scalable architecture, and micro‑interactions that make interfaces feel alive.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map(({ Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Icon className="h-4 w-4 text-emerald-600" /> {label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Stat kpi="5+" label="Years coding" />
          <Stat kpi="30+" label="Projects shipped" />
          <Stat kpi="100%" label="On‑time delivery" />
          <Card title="Frontend" desc="React, Vite, Next.js, Tailwind, Framer Motion." />
          <Card title="Backend" desc="FastAPI, Node, PostgreSQL, MongoDB, auth." />
          <Card title="DevEx" desc="CI/CD, testing, performance, tooling." />
        </div>
      </div>
    </section>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-white to-slate-50 p-6 shadow-inner">
      <div className="text-3xl font-extrabold tracking-tight text-slate-900">{kpi}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  )
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-emerald-700">{title}</div>
      <div className="mt-1 text-slate-700">{desc}</div>
    </div>
  )
}
