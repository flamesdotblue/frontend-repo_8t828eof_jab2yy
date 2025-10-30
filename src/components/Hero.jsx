import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

const social = [
  { href: 'https://github.com/', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', Icon: Linkedin },
]

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white/0" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-28 pb-16 sm:pt-36">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance projects
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow sm:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">a software developer</span>
          <br /> building playful, modern web experiences.
        </h1>
        <p className="max-w-2xl text-white/90">
          I craft performant frontends, robust backends, and delightful interactions.
          This portfolio blends clean code with immersive 3D moments.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:translate-y-[-2px] hover:shadow-xl"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Icon className="h-4 w-4" /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
