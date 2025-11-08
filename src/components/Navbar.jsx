import React from 'react';
import { UtensilsCrossed, Phone, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/30 group-hover:scale-105 transition">
            <UtensilsCrossed className="h-5 w-5 text-amber-300" />
          </span>
          <div className="leading-tight">
            <p className="font-semibold tracking-wide">Istanbul Kebab</p>
            <p className="text-xs text-white/60">Saveurs d'Anatolie</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#carte" className="text-white/80 hover:text-white transition">Carte</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+33123456789" className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:translate-y-[-1px] transition">
            <Phone className="h-4 w-4" />
            Réserver / Commander
          </a>
        </div>
      </div>
    </header>
  );
}
