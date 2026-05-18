"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const verticales = [
  "Higiene y Seguridad",
  "Laboratorio",
  "Medioambiente",
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce ? {} : {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label="Multilab — Laboratorio de Prevención de Riesgos"
      style={{ backgroundColor: "oklch(98.5% 0.006 143)" }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(oklch(42% 0.13 144) 1px, transparent 1px), linear-gradient(90deg, oklch(42% 0.13 144) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 w-full py-28 lg:py-0">

          {/* Left — content */}
          <div className="lg:col-span-7 lg:pr-16 flex flex-col justify-center gap-8">

            {/* Label */}
            <motion.div {...fadeUp(0.1)}>
              <span
                className="text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "oklch(42% 0.13 144)" }}
              >
                Risk Prevention
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div {...fadeUp(0.2)}>
              <h1
                className="font-display font-700 leading-[0.92] tracking-[-0.02em]"
                style={{ fontSize: "clamp(3.2rem, 7vw, 6.5rem)", fontFamily: "var(--font-display)" }}
              >
                <span style={{ color: "oklch(13% 0.015 143)" }}>
                  Análisis que
                </span>
                <br />
                <span style={{ color: "oklch(42% 0.13 144)" }}>
                  previenen.
                </span>
              </h1>
            </motion.div>

            {/* Verticales strip */}
            <motion.div {...fadeUp(0.32)} className="flex flex-wrap items-center gap-2">
              {verticales.map((v, i) => (
                <span key={v} className="flex items-center gap-2">
                  <span
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "oklch(13% 0.015 143)" }}
                  >
                    {v}
                  </span>
                  {i < verticales.length - 1 && (
                    <span style={{ color: "oklch(80% 0.04 143)" }}>·</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.42)}
              className="text-lg leading-relaxed max-w-[52ch]"
              style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}
            >
              Laboratorio de prevención de riesgos dirigido por la Lic. Cinthia
              Degliangioli. Tres áreas de especialización con control de calidad
              riguroso en cada análisis.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.52)} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-semibold rounded-xl transition-colors duration-200 shadow-sm"
                style={{ backgroundColor: "oklch(42% 0.13 144)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(33% 0.11 144)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "oklch(42% 0.13 144)")}
              >
                Solicitar análisis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/mis-estudios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-xl border transition-colors duration-200"
                style={{
                  color: "oklch(42% 0.13 144)",
                  borderColor: "oklch(91% 0.013 143)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(96% 0.022 143)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              >
                Ver mis informes
              </Link>
            </motion.div>

            {/* Director proof */}
            <motion.div
              {...fadeUp(0.62)}
              className="flex items-center gap-4 pt-4 border-t"
              style={{ borderColor: "oklch(91% 0.013 143)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "oklch(96% 0.022 143)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "oklch(42% 0.13 144)" }}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "oklch(13% 0.015 143)" }}>
                  Lic. Cinthia Degliangioli
                </p>
                <p className="text-xs" style={{ color: "oklch(44% 0.012 143)" }}>
                  Directora Técnica y Fundadora
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={reduce ? {} : { opacity: 0, x: 30 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                aspectRatio: "3/4",
                maxHeight: "75vh",
                border: "1px solid oklch(91% 0.013 143)",
              }}
            >
              <Image
                src="/hero-lab-bg.png"
                alt="Laboratorio Multilab — trabajo de análisis"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />

              {/* Accent line at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: "oklch(42% 0.13 144)" }}
              />
            </div>

            {/* Proof badge */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, scale: 0.9 }}
              animate={reduce ? {} : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-lg"
              style={{
                backgroundColor: "oklch(99.5% 0.003 143)",
                border: "1px solid oklch(91% 0.013 143)",
              }}
            >
              <p
                className="font-display font-800 leading-none"
                style={{ fontSize: "2rem", fontFamily: "var(--font-display)", color: "oklch(42% 0.13 144)" }}
              >
                +10
              </p>
              <p className="text-xs font-medium mt-1" style={{ color: "oklch(44% 0.012 143)" }}>
                años de trayectoria
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
