import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus("Thanks! I'll get back to you shortly.")
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-100/40 to-transparent" />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
            <Mail className="h-5 w-5 text-emerald-700" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Let’s work together</h3>
            <p className="text-sm text-slate-600">Tell me about your project and timeline.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200/50" placeholder="Your name" required />
          <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200/50" placeholder="Email" required />
          <textarea rows="5" className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200/50" placeholder="What are we building?" required />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-black">
            Send message <Send className="h-4 w-4" />
          </button>
          {status && <p className="text-sm text-emerald-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
