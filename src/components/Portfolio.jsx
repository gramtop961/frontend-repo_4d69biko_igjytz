export default function Portfolio() {
  const items = [
    { title: 'Wedding Moments', tag: 'Photo', img: 'https://images.unsplash.com/photo-1525120334885-38cc03a6ecb0?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Street Portrait', tag: 'Photo', img: 'https://images.unsplash.com/photo-1533139502658-0198f920d8ae?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Event Highlight', tag: 'Video', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Product Motion', tag: 'Video', img: 'https://images.unsplash.com/photo-1523473827533-2a64d0d3689e?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Documentary Frame', tag: 'Video', img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Lifestyle Set', tag: 'Photo', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white/90">Featured Work</h2>
        <p className="mt-2 text-sm text-slate-300/80">A mix of stills and motion that reflect a clean, modern aesthetic.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative h-56 w-full overflow-hidden">
              <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-sm text-slate-300/90">{it.tag}</p>
                <h3 className="text-base font-semibold text-white/90">{it.title}</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">View</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
