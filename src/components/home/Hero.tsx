"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Dark overlay gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#04120A] via-[#04120A]/85 to-[#04120A]/50" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#04120A] via-transparent to-[#04120A]/40" />

      {/* Ambient light effects */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#4CAF50]/10 rounded-full blur-[180px] pointer-events-none z-[2] animate-glow-drift" />
      <div className="absolute bottom-40 left-10 w-[300px] h-[300px] bg-white/5 rounded-full blur-[150px] pointer-events-none z-[2] animate-glow-drift-slow" />
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] bg-[#4CAF50]/6 rounded-full blur-[120px] pointer-events-none z-[2] animate-glow-pulse" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <span className="text-[#4CAF50] text-[11px] font-bold uppercase tracking-[0.2em]">
                Laboratorio de Análisis
              </span>
            </div>
          </motion.div>

          {/* H1 — MULTILAB big */}
          <motion.h1
            {...fadeUp(0.2)}
            id="hero-heading"
            className="font-black tracking-tighter text-white leading-[0.95] mb-6"
          >
            <span
              className="block"
              style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
            >
              MULTI
              <span className="text-[#4CAF50]">LAB</span>
            </span>
            <span
              className="block text-white/90 font-light tracking-tight mt-2"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Ciencia, precisión{" "}
              <span className="text-white font-semibold">y confianza</span>
            </span>
          </motion.h1>

          {/* White line accent */}
          <motion.div {...fadeUp(0.3)}>
            <div className="w-20 h-[2px] bg-white/30 mb-8" />
          </motion.div>

          {/* Paragraph */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl font-light mb-10"
          >
            Somos un laboratorio de vanguardia dedicado a la protección de la
            vida. Unimos la consultoría técnica con un diagnóstico de alta
            precisión en análisis clínicos, veterinarios y ambientales.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#4CAF50] text-white font-bold rounded-xl hover:bg-[#3d8c40] transition-all duration-300 shadow-[0_0_30px_rgba(76,175,80,0.2)] hover:shadow-[0_0_40px_rgba(76,175,80,0.4)] hover:-translate-y-0.5 min-h-[52px] text-base"
            >
              Solicitar cotización
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 min-h-[52px] backdrop-blur-sm text-base"
            >
              Ver mis resultados
            </Link>
          </motion.div>

          {/* Trust indicators — white accents */}
          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-x-8 gap-y-3">
            {["Diagnóstico de precisión", "Trazabilidad absoluta", "+10 años de experiencia"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-white/50 font-medium"
                >
                  <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                    <svg
                      width="10" height="10" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="3" strokeLinecap="round"
                      strokeLinejoin="round" aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* ── Explore Arrow ── */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={shouldReduceMotion ? {} : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#clientes"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors duration-300"
          aria-label="Explorar más secciones"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Explorar
          </span>
          <div className="animate-float-bounce">
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}