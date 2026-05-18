"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function VerticalsBlock() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-label="Verticales de Risk Prevention">

      {/* Bloque 1 — Higiene y Seguridad: 60/40 texto izq / icono der */}
      <div
        className="py-24 lg:py-28"
        style={{ backgroundColor: "var(--color-rp-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-rp-accent)" }}
              >
                HIGIENE Y SEGURIDAD
              </p>
              <h2
                id="vertical-higiene-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: "var(--color-rp-text-strong)",
                  letterSpacing: "-0.01em",
                }}
              >
                Control y prevención para entornos seguros
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Control de alimentos",
                  "Ambientes laborales",
                  "Microbiología de superficies",
                  "Bromatología",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base font-medium"
                    style={{ color: "var(--color-rp-text-muted)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-rp-accent)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/higiene-seguridad"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group"
                  style={{ color: "var(--color-rp-accent)" }}
                >
                  Ver análisis disponibles
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
              aria-hidden="true"
            >
              <div
                className="w-full aspect-square rounded-2xl flex items-center justify-center max-w-xs"
                style={{
                  backgroundColor: "var(--color-rp-bg-soft)",
                  border: "1px solid var(--color-rp-border)",
                }}
              >
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-rp-accent)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ borderTop: "1px solid var(--color-rp-border-soft)" }}
        aria-hidden="true"
      />

      {/* Bloque 2 — Laboratorio: full-width editorial */}
      <div
        className="py-24 lg:py-28"
        style={{ backgroundColor: "var(--color-rp-bg-soft)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 32 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
              className="flex flex-col gap-6 lg:sticky lg:top-32"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-rp-accent)" }}
              >
                LABORATORIO
              </p>
              <h2
                id="vertical-laboratorio-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: "var(--color-rp-text-strong)",
                  letterSpacing: "-0.01em",
                }}
              >
                Diagnóstico de precisión para profesionales y particulares
              </h2>
              <div className="pt-2">
                <Link
                  href="/laboratorio"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group"
                  style={{ color: "var(--color-rp-accent)" }}
                >
                  Ver servicios de laboratorio
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  title: "Análisis clínico",
                  desc: "Hemograma, bioquímica, orina y perfiles completos para personas.",
                },
                {
                  title: "Veterinario",
                  desc: "Diagnóstico clínico para animales de compañía y producción.",
                },
                {
                  title: "Investigación",
                  desc: "Apoyo a proyectos de investigación científica y universitaria.",
                },
                {
                  title: "Consulta online",
                  desc: "Acceso digital a resultados y teleconsulta con la bioquímica.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "var(--color-rp-bg-elevated)",
                    border: "1px solid var(--color-rp-border)",
                  }}
                >
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: "var(--color-rp-text-strong)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-rp-text-muted)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ borderTop: "1px solid var(--color-rp-border-soft)" }}
        aria-hidden="true"
      />

      {/* Bloque 3 — Medioambiente: 40/60 invertido */}
      <div
        className="py-24 lg:py-28"
        style={{ backgroundColor: "var(--color-rp-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-center">

            {/* Izquierda: dato destacado */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
              aria-hidden="true"
            >
              <div
                className="w-full rounded-2xl p-8 max-w-xs"
                style={{
                  backgroundColor: "var(--color-rp-accent-soft)",
                  border: "1px solid var(--color-rp-border)",
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-rp-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-4"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                </svg>
                <p
                  className="text-sm font-medium leading-relaxed"
                  style={{ color: "var(--color-rp-text-muted)" }}
                >
                  Normas internacionales de calidad en análisis de agua potable
                  e industrial para municipios, industrias y comunidades.
                </p>
              </div>
            </motion.div>

            {/* Derecha: texto */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--color-rp-accent)" }}
              >
                MEDIOAMBIENTE
              </p>
              <h2
                id="vertical-medioambiente-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: "var(--color-rp-text-strong)",
                  letterSpacing: "-0.01em",
                }}
              >
                Monitoreo ambiental con normas internacionales
              </h2>
              <ul className="flex flex-col gap-3">
                {[
                  "Calidad de agua potable e industrial",
                  "Análisis de residuos",
                  "Control ambiental",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base font-medium"
                    style={{ color: "var(--color-rp-text-muted)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-rp-accent)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/medioambiente"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group"
                  style={{ color: "var(--color-rp-accent)" }}
                >
                  Ver análisis ambientales
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
