"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const values = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-rp-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Precisión",
    desc: "Metodologías validadas y control de calidad riguroso en cada análisis.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-rp-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Confidencialidad",
    desc: "Los resultados de cada paciente son privados y de acceso exclusivo.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-rp-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="13 2 13 9 20 9" />
        <path d="M20 14.5V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h7.5" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Resultados rápidos",
    desc: "La mayoría de los análisis están disponibles en 24 a 48 horas hábiles.",
  },
];

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-rp-bg-soft)" }}
      aria-labelledby="about-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: foto placeholder directora */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
            aria-hidden="true"
          >
            {/* Foto placeholder circular */}
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-rp-bg-elevated)",
                border: "2px solid var(--color-rp-border)",
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-rp-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="text-center">
              <p
                className="font-bold text-lg"
                style={{ color: "var(--color-rp-text-strong)" }}
              >
                Lic. Cinthia Degliangioli
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-rp-accent)" }}
              >
                Directora Técnica
              </p>
            </div>
          </motion.div>

          {/* Right: texto */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--color-rp-accent)" }}
            >
              Quiénes somos
            </span>
            <h2
              id="about-preview-heading"
              className="text-3xl sm:text-4xl leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                color: "var(--color-rp-text-strong)",
                letterSpacing: "-0.01em",
              }}
            >
              Más de 10 años liderando Risk Prevention en Argentina
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-rp-text-muted)" }}
            >
              Más de 10 años liderando análisis técnicos de precisión para
              empresas, profesionales de salud y organismos públicos en
              Argentina.
            </p>

            {/* Valores */}
            <div className="space-y-4 pt-2">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--color-rp-accent-soft)" }}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ color: "var(--color-rp-text-strong)" }}
                    >
                      {value.title}
                    </p>
                    <p
                      className="text-xs mt-0.5 leading-relaxed"
                      style={{ color: "var(--color-rp-text-subtle)" }}
                    >
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all duration-200 group"
                style={{ color: "var(--color-rp-accent)" }}
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
    </section>
  );
}
