import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Nous contacter
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Une envie de kebab ? Commandez par téléphone ou passez nous voir.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 ring-1 ring-amber-400/30">
                  <Phone className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Téléphone</p>
                  <a href="tel:+33123456789" className="text-lg font-semibold hover:underline">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 ring-1 ring-amber-400/30">
                  <MapPin className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Adresse</p>
                  <p className="text-lg font-semibold">
                    12 Rue de la République, 75000 Paris
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 ring-1 ring-amber-400/30">
                  <Clock className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Horaires</p>
                  <p className="font-semibold">Lun-Dim: 11:30 - 23:30</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Paris&output=embed"
              className="w-full h-[320px] md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
