"use client";

import { motion, useReducedMotion } from "framer-motion";

const clients = [
  { name: "Adolfo Cassaro e Hijos SRL", logo: "https://www.cassaro.com.ar/assets/images/cassaro-754x98.png" },
  { name: "Clínica de ojos Reyes Giobellina", logo: "https://reyes-giobellina.com.ar/wp-content/uploads/2020/09/web-logo-rg.png" },
  { name: "Cantesur SA", logo: null },
  { name: "La Casa de las Chopperas SRL", logo: null },
  { name: "Ledesma SAIC", logo: null },
  { name: "Dicca ICSA", logo: null },
  { name: "Cia. Cervecera Argentina SRL", logo: null },
  { name: "Alimentación del Centro SA", logo: null },
  { name: "Canteras Diquecito SA", logo: null },
];

export default function BrandSlider() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="clientes"
      className="relative py-20 lg:py-24 overflow-hidden"
      aria-label="Empresas e instituciones que confían en nosotros"
    >
      {/* White subtle divider */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 mb-14"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] font-bold uppercase tracking-[0.2em]">
              Confían en nosotros
            </span>
          </div>
          <p className="text-center text-white/50 text-sm font-medium max-w-md">
            Empresas e instituciones que eligen nuestros servicios de análisis
          </p>
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-12 shrink-0 min-w-[180px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="h-12 object-contain max-w-[220px] invert brightness-200"
                />
              ) : (
                <span className="text-base font-bold text-white tracking-wide">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}