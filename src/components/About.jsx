import React from 'react'
import { Code2, Cpu, Sparkles } from 'lucide-react'

const skills = [
  { Icon: Code2, label: 'Full‑stack JavaScript' },
  { Icon: Cpu, label: 'APIs & Cloud' },
  { Icon: Sparkles, label: 'Animations & 3D' },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-0 -z-[0] bg-gradient-to-b from-cyan-100/20 to-emerald-100/0" />
      <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About</h2>
          <p className="mt-4 text-gray-600">
            I design and build distinctive digital products. My approach blends
            thoughtful UX, reliable architecture, and tiny flourishes that make
            interfaces feel alive.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map(({ Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
                <Icon className="h-4 w-4 text-emerald-600" /> {label}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-sm backdrop-blur">
          <div className="grid grid-cols-3 gap-4 text-center">
            <Stat kpi="5+" label="Years coding" />
            <Stat kpi="30+" label="Projects shipped" />
            <Stat kpi="100%" label="Craft & care" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-xl bg-gradient-to-b from-gray-50 to-white p-5 shadow-inner">
      <div className="text-3xl font-extrabold tracking-tight text-gray-900">{kpi}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  )
}
