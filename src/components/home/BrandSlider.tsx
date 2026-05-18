"use client";

import { motion, useReducedMotion } from "framer-motion";

const clients = [
  { name: "Adolfo Cassaro e Hijos SRL", logo: "https://www.cassaro.com.ar/assets/images/cassaro-754x98.png" },
  { name: "Clínica de ojos Reyes Giobellina", logo: "https://reyes-giobellina.com.ar/wp-content/uploads/2020/09/web-logo-rg.png" },
  { name: "Cantesur SA" },
  { name: "La Casa de las Chopperas SRL" },
  { name: "Ledesma SAIC" },
  { name: "Dicca ICSA" },
  { name: "Cía. Cervecera Argentina SRL" },
  { name: "Alimentación del Centro SA" },
  { name: "Canteras Diquecito SA" },
];

export default function BrandSlider() {
  const reduce = useReducedMotion();

  return (
    <section
      id="clientes"
      className="relative py-14 overflow-hidden"
      aria-label="Empresas e instituciones que confían en nosotros"
      style={{
        backgroundColor: "oklch(98.5% 0.006 143)",
        borderTop: "1px solid oklch(91% 0.013 143)",
        borderBottom: "1px solid oklch(91% 0.013 143)",
      }}
    >
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 12 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 mb-10"
      >
        <p
          className="text-xs font-semibold uppercase tracking-[0.22em] text-center"
          style={{ color: "oklch(44% 0.012 143)" }}
        >
          Confían en nosotros
        </p>
      </motion.div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 shrink-0 min-w-[160px]"
              style={{ opacity: 0.35 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.35"; }}
            >
              {"logo" in client && client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="h-10 object-contain max-w-[200px]"
                />
              ) : (
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "oklch(13% 0.015 143)", fontFamily: "var(--font-display)" }}
                >
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
