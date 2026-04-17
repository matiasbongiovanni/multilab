"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Presentación de Multilab"
    >
      {/* Background image fullbleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1920&q=80"
          alt="Laboratorio de análisis — Multilab"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay oscuro semitransparente de izquierda a derecha */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.25) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-16 items-center w-full">

          {/* Left: texto display */}
          <motion.div
            variants={shouldReduceMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Texto display MULTI LAB */}
            <motion.div
              variants={shouldReduceMotion ? {} : textVariants}
              className="leading-none"
            >
              <h1
                aria-label="Multilab — Laboratorio de análisis"
                style={{
                  fontSize: "clamp(80px, 12vw, 140px)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                MULTI
                <br />
                <span style={{ color: "#4CAF50" }}>LAB</span>
              </h1>
            </motion.div>

            {/* Descripcion */}
            <motion.p
              variants={shouldReduceMotion ? {} : textVariants}
              className="text-white/85 text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              Laboratorio de análisis clínicos, veterinarios, calidad de agua e higiene,
              bajo la dirección de la{" "}
              <strong className="text-white font-semibold">
                Lic. Cinthia Degliangioli
              </strong>
              . Precisión técnica y resultados confiables en cada análisis.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldReduceMotion ? {} : textVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#4CAF50] text-white font-bold rounded-xl hover:bg-[#2E7D32] transition-all duration-200 shadow-lg hover:shadow-xl min-h-[52px] text-base"
              >
                Solicitar turno
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/70 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 min-h-[52px] text-base backdrop-blur-sm"
              >
                Ver mis estudios
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={shouldReduceMotion ? {} : textVariants}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-2"
              aria-label="Indicadores de confianza"
            >
              {[
                "Análisis certificados",
                "Resultados en 24–48 hs",
                "Portal digital seguro",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Bento card flotante */}
          <motion.div
            variants={shouldReduceMotion ? {} : cardVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
            aria-label="Portal de pacientes — vista previa"
          >
            <div
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-7 overflow-hidden"
              style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.3)" }}
            >
              {/* Header de la card */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-[#616161] font-semibold uppercase tracking-wide">
                    Portal de pacientes
                  </p>
                  <p className="text-lg font-bold text-[#1A1A1A] mt-0.5">
                    Tus estudios disponibles
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              {/* Mock study items */}
              <div className="space-y-3">
                {[
                  { tipo: "Hemograma completo", fecha: "10/04/2026", disponible: true },
                  { tipo: "Perfil lipídico", fecha: "08/04/2026", disponible: true },
                  { tipo: "Glucemia en ayunas", fecha: "01/04/2026", disponible: false },
                ].map((study, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-[#F5F5F5] rounded-xl border border-[#E0E0E0]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4CAF50"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A1A]">
                          {study.tipo}
                        </p>
                        <p className="text-xs text-[#616161]">{study.fecha}</p>
                      </div>
                    </div>
                    <span
                      className={[
                        "flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full",
                        study.disponible
                          ? "text-[#2E7D32] bg-[#dcfce7]"
                          : "text-[#ca8a04] bg-[#fef9c3]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "w-1.5 h-1.5 rounded-full",
                          study.disponible ? "bg-[#2E7D32]" : "bg-[#ca8a04]",
                        ].join(" ")}
                        aria-hidden="true"
                      />
                      {study.disponible ? "Listo" : "En proceso"}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA de la card */}
              <Link
                href="/login"
                className="mt-5 flex items-center justify-center gap-2 w-full py-3 bg-[#4CAF50] text-white text-sm font-bold rounded-xl hover:bg-[#2E7D32] transition-colors duration-150"
              >
                Acceder a mis estudios
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl border border-[#E0E0E0] px-4 py-3 flex items-center gap-3"
              aria-hidden="true"
            >
              <div className="w-9 h-9 bg-[#dcfce7] rounded-xl flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]">Resultados seguros</p>
                <p className="text-xs text-[#616161]">Portal privado cifrado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Explorar
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
