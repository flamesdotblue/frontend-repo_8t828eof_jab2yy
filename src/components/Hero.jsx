import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

const social = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays for contrast and polish (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_70%_10%,rgba(16,185,129,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-10 sm:pt-14">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Interactive · Tech · Futuristic
          </div>
          <div className="hidden gap-2 sm:flex">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </div>

        <div className="pb-24 pt-10 sm:pt-20">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm sm:text-6xl">
            Minimal, futuristic experiences with immersive 3D and precise engineering.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            Building performant, polished products that feel alive. Explore the work or get in touch to create something exceptional.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:translate-y-[-2px] hover:shadow-xl"
            >
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
