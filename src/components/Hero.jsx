import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/0CTcN3yns7e0Vn4g/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Authentique • Fait maison • Halal
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Le meilleur Kebab d'Istanbul, au cœur de votre ville
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            Broches grillées à la flamme, pain croustillant et mezzés parfumés. Une expérience
            culinaire turque moderne, servie avec amour.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#carte" className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:translate-y-[-1px] transition">
              Découvrir la carte
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">
              Nous contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950"
        />
      </div>
    </section>
  );
}
