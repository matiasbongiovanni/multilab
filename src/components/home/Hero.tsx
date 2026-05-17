"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_BG =
  "https://fcm.uncuyo.edu.ar/ingreso/cache/0a0f0e0e26fae10cdf26739eb29fb11e_732_1296.jpg";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f0faf0]" aria-label="Multilab Hero">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BG}
          alt="Profesional de laboratorio realizando análisis"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />

        {/* Light green overlay — 35% so photo is more visible */}
        <div className="absolute inset-0 bg-[#f0faf0]/35" />

        {/* Gradient from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0faf0]/90 via-[#f0faf0]/60 to-transparent" />

        {/* Soft vignette bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f0faf0]/60" />
      </div>

      {/* Ambient glows — green */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#2E7D32]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-[#4CAF50]/6 blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] right-[15%] w-[250px] h-[250px] rounded-full bg-emerald-300/10 blur-[100px] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1a2e1a 1px, transparent 1px), linear-gradient(to bottom, #1a2e1a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#2E7D32]/15 bg-white/70 backdrop-blur-xl mb-8 shadow-[0_8px_30px_rgba(46,125,50,0.08)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2E7D32]" />
                </span>

                <span className="text-[#2E7D32] text-[11px] font-bold uppercase tracking-[0.24em]">
                  Laboratorio de análisis
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div {...fadeUp(0.2)}>
              <h1 className="leading-[0.9] tracking-[-0.06em]">
                <span className="block text-[#1a2e1a] font-black text-[clamp(4rem,9vw,8rem)]">
                  MULTI
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]">LAB</span>
                </span>

                <span className="block mt-5 text-[#1a2e1a]/70 font-light text-[clamp(1.2rem,2vw,2rem)] leading-tight tracking-[-0.03em]">
                  Ciencia, precisión y{" "}
                  <span className="text-[#1a2e1a] font-semibold">
                    diagnóstico avanzado
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Accent line */}
            <motion.div {...fadeUp(0.3)}>
              <div className="mt-10 mb-10 w-28 h-[4px] rounded-full bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] shadow-[0_0_20px_rgba(46,125,50,0.3)]" />
            </motion.div>

            {/* Paragraph */}
            <motion.p
              {...fadeUp(0.4)}
              className="max-w-2xl text-[#1a2e1a]/60 text-lg lg:text-xl leading-relaxed font-light"
            >
              Tecnología de vanguardia para análisis clínicos, veterinarios y
              ambientales con trazabilidad absoluta y resultados de máxima
              precisión.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.5)}
              className="mt-14 flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/contacto"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#2E7D32] px-8 py-4 font-bold text-white shadow-[0_20px_60px_rgba(46,125,50,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B5E20]"
              >
                <span className="relative z-10">
                  Solicitar cotización
                </span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>

                <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-2xl border border-[#2E7D32]/15 bg-white/60 backdrop-blur-xl px-8 py-4 text-[#2E7D32] font-semibold transition-all duration-300 hover:bg-white/90 hover:border-[#2E7D32]/30 hover:-translate-y-1 shadow-[0_4px_20px_rgba(46,125,50,0.06)]"
              >
                Ver mis resultados
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.65)}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {[
                { title: "+10 años", desc: "de experiencia" },
                { title: "100%", desc: "trazabilidad" },
                { title: "24/7", desc: "soporte técnico" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#2E7D32]/10 bg-white/50 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(46,125,50,0.06)] hover:bg-white/70 hover:border-[#2E7D32]/20 transition-all duration-300"
                >
                  <div className="text-3xl font-black text-[#1a2e1a]">
                    {item.title}
                  </div>

                  <div className="mt-2 text-sm text-[#1a2e1a]/50 tracking-wide">
                    {item.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={shouldReduceMotion ? {} : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#clientes"
          className="flex flex-col items-center gap-3 text-[#1a2e1a]/30 hover:text-[#2E7D32] transition-colors duration-300"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold">
            Explorar
          </span>

          <div className="animate-bounce">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}