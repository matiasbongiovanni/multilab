"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────
   HERO — Fiel al diseño Figma
   Foto full-bleed · gradiente izq→transp · MULTILAB bold
   ───────────────────────────────────────────── */

const HERO_PHOTO =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=85";
// [REEMPLAZAR: foto propia del equipo técnico en campo — 1920×1080px WebP]

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.75,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        };

  return (
    <section
      className="relative min-h-[calc(100dvh-0px)] flex flex-col overflow-hidden"
      aria-label="Inicio — Multilab Risk Prevention"
    >
      {/* ── Background photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_PHOTO}
          alt="Profesional técnico de Multilab en campo realizando análisis"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Left-to-right gradient overlay (makes left text readable) ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.80) 38%, rgba(255,255,255,0.35) 62%, rgba(255,255,255,0.0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Bottom fade for smooth section transition ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-[1]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(250,250,248,0.4))",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-20 lg:pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-[580px]">

            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2E7D32] mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Laboratorio de análisis · Risk Prevention
              </p>
            </motion.div>

            {/* H1 — MULTILAB */}
            <motion.h1 {...fadeUp(0.07)}>
              <span
                className="block text-[clamp(4rem,10vw,7.5rem)] font-black leading-[0.92] tracking-[-0.02em] text-[#1C1917]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                MULTI
                <span className="text-[#2E7D32]">LAB</span>
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeUp(0.14)}
              className="mt-4 text-lg lg:text-xl font-light text-[#1C1917]/70 italic leading-snug"
            >
              Calidad, condición y{" "}
              <span className="font-semibold not-italic text-[#1C1917]">
                diagnóstico avanzado
              </span>
            </motion.p>

            {/* Body */}
            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-[15px] leading-relaxed text-[#1C1917]/65 max-w-[460px]"
            >
              Integramos la consultoría técnica en Higiene y Seguridad Laboral con
              laboratorio especializado en Análisis Ambientales y Microbiología
              Integral. Resultados con trazabilidad absoluta, firmados por nuestra
              Directora Técnica.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.27)}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold text-sm transition-colors duration-200 shadow-[0_4px_20px_rgba(46,125,50,0.3)]"
              >
                Solicitar cotización
              </Link>
              <Link
                href="/mis-estudios"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-[#1C1917]/25 hover:border-[#1C1917]/50 bg-white/60 hover:bg-white/80 backdrop-blur-sm text-[#1C1917] font-semibold text-sm transition-all duration-200"
              >
                Ver mis resultados
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="relative z-10 pb-8 flex justify-start max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span
              className="text-[10px] uppercase tracking-[0.3em] text-[#1C1917]/35 font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[#1C1917]/20 to-transparent" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
