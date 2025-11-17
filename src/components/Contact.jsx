import { Mail, Phone, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white/90">Book a Shoot</h2>
        <p className="mt-2 text-sm text-slate-300/80">Quick responses, friendly rates for students and creatives. Let’s build something great.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <a href="mailto:championotieno100a@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 transition hover:bg-white/10">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Email</p>
            <p className="text-white">championotieno100a@gmail.com</p>
          </div>
        </a>

        <a href="tel:+254111332" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 transition hover:bg-white/10">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Phone</p>
            <p className="text-white">+254-111-332</p>
          </div>
        </a>

        <a href="https://instagram.com/iamniccographics" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200 transition hover:bg-white/10">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
            <Instagram className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Instagram</p>
            <p className="text-white">@iamniccographics</p>
          </div>
        </a>
      </div>
    </section>
  )
}
