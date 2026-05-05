"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Diagnóstico de precisión",
    desc: "Estándares rigurosos alineados a la Ley 19.587 y el Código Alimentario Argentino.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Visión Sistémica",
    desc: "Convergencia transversal entre salud ambiental, inocuidad y bienestar humano.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Trazabilidad Absoluta",
    desc: "Respaldo técnico-científico y control de calidad en cada etapa del proceso.",
  },
];

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="about-preview-heading"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#4CAF50]/5 rounded-full blur-[200px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-hidden="true"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80"
                alt="Laboratorio Multilab — equipo técnico trabajando en análisis microbiológico"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04120A]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 lg:-right-8 bg-[#04120A]/90 backdrop-blur-xl rounded-2xl border border-[#4CAF50]/20 p-6 flex flex-col items-center justify-center w-40 text-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p className="font-black text-4xl text-[#4CAF50] leading-none mb-1">+10</p>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.15em]">
                Años de ciencia
              </p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 self-start backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
              <span className="text-[#4CAF50] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                Quiénes somos
              </span>
            </div>

            <h2
              id="about-preview-heading"
              className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              La calidad es el puente entre la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#81C784]">
                ciencia y la seguridad
              </span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed font-light">
              Nuestra estructura integra la consultoría técnica en Higiene y
              Seguridad Laboral con un laboratorio especializado en Análisis
              Ambientales y Microbiología Integral. Todo bajo un estricto control
              de calidad.
            </p>

            {/* Value cards */}
            <div className="space-y-3 pt-2">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#4CAF50]/20 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center shrink-0 group-hover:bg-[#4CAF50]/20 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white text-[15px] mb-1 font-sans">
                      {value.title}
                    </p>
                    <p className="text-sm text-white/45 leading-relaxed font-light">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/quienes-somos"
                className="group inline-flex items-center gap-2 text-[#4CAF50] font-bold hover:text-[#81C784] transition-colors duration-300"
              >
                Conocer más sobre Multilab
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}