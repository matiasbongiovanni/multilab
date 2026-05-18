"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Solicitá tu turno",
    description:
      "Completá el formulario o consultanos por WhatsApp. Confirmamos turno en menos de 24 horas.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Analizamos tus muestras",
    description:
      "Procesamos con equipamiento de última generación y protocolos certificados bajo la supervisión de la directora técnica.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31" />
        <line x1="6" y1="16" x2="18" y2="16" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Resultados en tu portal",
    description:
      "Accedé de forma segura desde el portal de informes. Disponibles las 24 horas con descarga en PDF.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 lg:py-28"
      aria-labelledby="process-heading"
      style={{ backgroundColor: "oklch(99.5% 0.003 143)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          className="mb-14"
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "oklch(42% 0.13 144)" }}
          >
            Proceso simple
          </span>
          <h2
            id="process-heading"
            className="mt-3 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "oklch(13% 0.015 143)",
            }}
          >
            Cómo trabajamos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-[52px] left-[16.6%] right-[16.6%] h-px z-0"
            style={{ backgroundColor: "oklch(91% 0.013 143)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center px-6 py-8"
            >
              {/* Icon circle */}
              <div className="relative z-10 mb-6">
                <div
                  className="w-[88px] h-[88px] rounded-full flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: "oklch(99.5% 0.003 143)",
                    border: "1px solid oklch(91% 0.013 143)",
                    color: "oklch(42% 0.13 144)",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ backgroundColor: "oklch(42% 0.13 144)", fontFamily: "var(--font-display)" }}
                >
                  {step.number}
                </div>
              </div>

              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "oklch(13% 0.015 143)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
