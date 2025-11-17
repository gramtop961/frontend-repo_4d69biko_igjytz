import { Camera, Video, Sparkles } from 'lucide-react'

export default function Services() {
  const items = [
    {
      icon: Camera,
      title: 'Photography',
      desc: 'Portraits, weddings, events, products, lifestyle — captured with a cinematic eye.',
    },
    {
      icon: Video,
      title: 'Videography',
      desc: 'Music videos, documentaries, commercials, and event highlights with clean storytelling.',
    },
    {
      icon: Sparkles,
      title: 'Editing & Color',
      desc: 'Professional editing, color grading, and delivery optimized for social and web.',
    },
  ]

  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white/90">Services</h2>
        <p className="mt-2 text-sm text-slate-300/80">Flexible packages for students, brands, weddings, and creatives.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 text-slate-200 shadow-lg">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white/90">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-300/80">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
