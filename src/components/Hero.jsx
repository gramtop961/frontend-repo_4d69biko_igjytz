import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-950/90" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            IAMNICCOGRAPHICS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg leading-8 text-blue-100/90"
          >
            Modern film student portfolio and creative studio. Photography and videography services across Kenya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#portfolio" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-blue-50">View Work</a>
            <a href="#contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/5">Get a Quote</a>
          </motion.div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-center text-xs text-blue-200/80">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Weddings</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Portraits</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Events</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Documentary</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Product</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">Music Videos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
