export default function Pricing() {
  const tiers = [
    {
      name: 'Photo — Starter',
      price: 'KES 8,000',
      features: [
        '1-hour session (Nairobi)',
        '20 edited photos',
        'Online gallery delivery',
      ],
    },
    {
      name: 'Photo — Pro',
      price: 'KES 18,000',
      featured: true,
      features: [
        '3-hour session',
        '50+ edited photos',
        'Outfit changes + location scouting',
        'Next-day previews',
      ],
    },
    {
      name: 'Video — Starter',
      price: 'KES 15,000',
      features: [
        'Up to 1-minute highlight',
        'Basic color + music',
        'Delivery in 3–5 days',
      ],
    },
    {
      name: 'Video — Pro',
      price: 'KES 35,000',
      features: [
        'Up to 3-minute film',
        'Advanced color + sound design',
        'Behind-the-scenes snippets',
      ],
    },
  ]

  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white/90">Pricing (Kenya)</h2>
        <p className="mt-2 text-sm text-slate-300/80">Transparent rates. Travel outside Nairobi quoted separately.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 shadow-lg ${
              t.featured
                ? 'border-blue-400/30 bg-blue-500/[0.08]'
                : 'border-white/10 bg-white/[0.04]'
            }`}
          >
            <h3 className="text-base font-semibold text-white/90">{t.name}</h3>
            <p className="mt-3 text-3xl font-bold text-white">{t.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-300/80" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
