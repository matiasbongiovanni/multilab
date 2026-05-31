"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  {
    value: "+12",
    label: "años de experiencia",
    sub: "Evolución continua desde 2014",
  },
  {
    value: "4",
    label: "divisiones integrales",
    sub: "Servicios técnicos y consultivos",
  },
  {
    value: "100%",
    label: "trazabilidad garantizada",
    sub: "Control en cada proceso analítico",
  },
  {
    value: "+500",
    label: "proyectos gestionados",
    sub: "Industria, salud y ambiente",
  },
];

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-16 lg:py-24 relative"
      aria-label="Indicadores clave de Multilab"
    >
      {/* ── Fondo con degradados verdes ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {/* Capa principal: degradado radial verde luminoso */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4f5da] via-[#b2e3ba] to-[#44A148]/20" />
        {/* Glow verde intenso arriba a la izquierda */}
        <div className="absolute -top-24 -left-1/4 w-[580px] h-[480px] rounded-full bg-gradient-to-br from-[#44A148]/70 via-[#99CF8E]/60 to-transparent blur-[160px]" />
        {/* Glow verde suave abajo a la derecha */}
        <div className="absolute bottom-[-40px] right-[-40px] w-[400px] h-[360px] rounded-full bg-gradient-to-tl from-[#C5E5C2]/70 via-[#44A148]/30 to-transparent blur-[120px]" />
        {/* Superposición de luz suave para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 border rounded-2xl border-[#C8ECD6] overflow-hidden bg-white/40 backdrop-blur-[2px] shadow-xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.11,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-start md:items-center px-6 py-10 border-b md:border-b-0 md:border-r last:border-b-0 md:last:border-r-0 border-[#C8ECD6]/60 bg-gradient-to-br from-[#eaf6ea]/80 via-[#caf0d0]/80 to-[#c3ecc2]/90 transition-colors duration-300 min-h-[164px]"
            >
              <span
                className="text-3xl md:text-4xl font-bold leading-tight tracking-tight font-heading"
                style={{
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.04em",
                  background:
                    "linear-gradient(90deg, #44A148 60%, #99CF8E 95%, #7CCC59 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  // textFillColor property removed for compatibility/linting.
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#44A148] mt-2 uppercase tracking-[0.16em] font-sans">
                {stat.label}
              </span>
              <span className="text-xs text-[#39534A]/60 font-normal mt-2 font-sans">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}