import { Camera, Video, Menu, Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <Camera className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm leading-4 text-blue-300">IAMNICCOGRAPHICS</p>
                <p className="text-xs text-slate-400">Photography & Videography</p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white/90"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/iamniccographics"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="mailto:championotieno100a@gmail.com"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="tel:+254111332"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
              aria-label="Toggle Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="space-y-2 border-t border-white/10 px-4 py-3 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-slate-200 transition hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://instagram.com/iamniccographics"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="mailto:championotieno100a@gmail.com"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="tel:+254111332"
                  className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
