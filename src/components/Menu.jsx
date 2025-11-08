import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sandwich, Drumstick, CupSoda, Salad } from 'lucide-react';

const items = [
  {
    title: 'Kebab Classique',
    desc: 'Viande de veau marinée, salade, tomates, oignons, sauce au choix, pain artisanal.',
    price: '8,50€',
    icon: Sandwich,
  },
  {
    title: 'Durum Kebab',
    desc: 'Galette fine garnie de kebab, crudités croquantes et sauces maison.',
    price: '9,50€',
    icon: Flame,
  },
  {
    title: 'Iskender',
    desc: 'Tranches de kebab sur pain pita, sauce tomate beurrée et yaourt turc.',
    price: '14,90€',
    icon: Drumstick,
  },
  {
    title: 'Lahmacun',
    desc: 'Fine pâte croustillante garnie de viande hachée, herbes fraîches et citron.',
    price: '7,90€',
    icon: Flame,
  },
  {
    title: 'Assiette Mezze',
    desc: 'Houmous, ezme, cacik, dolma et pain chaud.',
    price: '12,50€',
    icon: Salad,
  },
  {
    title: 'Ayran Maison',
    desc: 'Boisson lactée fraîche et légèrement salée, parfaite pour le kebab.',
    price: '2,50€',
    icon: CupSoda,
  },
];

export default function Menu() {
  return (
    <section id="carte" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-slate-950/0 via-slate-950/60 to-slate-950"></div>
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Notre carte
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Des classiques d'Istanbul revisités avec des produits frais et des épices sélectionnées.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 backdrop-blur hover:border-amber-400/40 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.4),0_20px_40px_-20px_rgba(0,0,0,0.6)] transition"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 ring-1 ring-amber-400/30">
                  <it.icon className="h-5 w-5 text-amber-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <span className="shrink-0 rounded-full bg-amber-500/20 px-3 py-1 text-sm font-semibold text-amber-200 ring-1 ring-amber-400/40">
                      {it.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
