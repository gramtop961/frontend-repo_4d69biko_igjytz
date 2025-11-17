import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} IAMNICCOGRAPHICS. All rights reserved.</p>
            <p className="text-sm text-slate-400">Film Student • Photographer • Videographer — Kenya</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
