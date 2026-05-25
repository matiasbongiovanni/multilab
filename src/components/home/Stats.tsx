"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: "+10",
    label: "años de experiencia",
    sub: "desde 2014",
  },
  {
    value: "4",
    label: "ejes de servicio",
    sub: "integrados y complementarios",
  },
  {
    value: "100%",
    label: "trazabilidad",
    sub: "en cada análisis",
  },
  {
    value: "9+",
    label: "empresas cliente",
    sub: "entre industria y salud",
  },
];

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-14 lg:py-16 bg-[#1C1917]"
      aria-label="Datos de Multilab Risk Prevention"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#1C1917] px-6 lg:px-10 py-10 lg:py-12 flex flex-col gap-1"
            >
              <span
                className="text-[2.5rem] lg:text-[3.5rem] font-bold text-[#DCFCE7] leading-none tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white mt-2">
                {stat.label}
              </span>
              <span className="text-xs text-white/40">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
