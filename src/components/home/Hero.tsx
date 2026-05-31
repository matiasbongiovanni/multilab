"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        };

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#fcfdfc]"
      aria-label="Inicio — Multilab Risk Prevention"
    >
      {/* ── Background Photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Multilab-Fondo-3.jpeg" // Imagen modificada
          alt="Equipo profesional de Multilab trabajando en el laboratorio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-left"
        />
      </div>

      {/* ── Responsive Gradient Overlay ── 
          Móvil: Gradiente de abajo hacia arriba (legibilidad del texto apilado).
          Desktop: Gradiente de izquierda a derecha (legibilidad del texto lateral). 
      */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t lg:bg-gradient-to-r from-[#fcfdfc] via-[#fcfdfc]/90 lg:via-[#fcfdfc]/80 to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-12 lg:pt-32 lg:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            
            {/* Badge Premium */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-6 backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#44A148] animate-pulse" />
                <span
                  className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#44A148]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Laboratorio de análisis por Risk Prevention
                </span>
              </div>
            </motion.div>

            {/* H1 — MULTILAB */}
            <motion.h1 {...fadeUp(0.1)}>
              <span
                className="block text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tight text-[#1A2E1A]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                MULTI
                <span className="text-[#44A148]">LAB</span>
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-xl lg:text-2xl font-medium text-[#1A2E1A]/80 leading-snug"
            >
              Calidad, prevención y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44A148] to-[#1A2E1A] font-extrabold">
                diagnóstico avanzado
              </span>
            </motion.p>

            {/* Body */}
            <motion.p
              {...fadeUp(0.3)}
              className="mt-5 text-base sm:text-lg leading-relaxed text-[#1A2E1A]/70 max-w-lg font-medium"
            >
              Integramos la consultoría técnica en Higiene y Seguridad Laboral con un laboratorio especializado en Análisis Ambientales y Microbiología Integral. Resultados con trazabilidad absoluta.
            </motion.p>

            {/* CTAs Interactivas */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="#contacto"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#44A148] text-white font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#38853b] hover:-translate-y-1 shadow-[0_0_20px_rgba(68,161,72,0.25)] hover:shadow-[0_8px_25px_rgba(68,161,72,0.4)]"
              >
                Solicitar cotización
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link
                href="/mis-estudios"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#1A2E1A]/10 bg-white/60 backdrop-blur-md text-[#1A2E1A] font-bold text-sm sm:text-base transition-all duration-300 hover:border-[#44A148]/40 hover:bg-white hover:-translate-y-1 hover:shadow-lg"
              >
                Ver mis informes
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator interactivo ── */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 z-20 flex justify-center sm:justify-start sm:left-auto sm:right-auto sm:ml-8 lg:ml-12 max-w-7xl mx-auto w-full px-4"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-[9px] uppercase tracking-[0.25em] text-[#1A2E1A]/40 font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Scroll
            </span>
            {/* Píldora de scroll animada */}
            <div className="w-[22px] h-[36px] rounded-full border-2 border-[#1A2E1A]/20 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-[#44A148] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}