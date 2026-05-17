"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Solicitá",
    subtitle: "tu turno",
    description:
      "Completá el formulario o contactanos por WhatsApp. Te confirmamos turno en menos de 24 horas.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Analizamos",
    subtitle: "tus muestras",
    description:
      "Nuestro equipo procesa tus muestras con equipamiento de última generación y protocolos certificados.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31" />
        <line x1="6" y1="16" x2="18" y2="16" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Resultados",
    subtitle: "en tu portal",
    description:
      "Accedé a tus resultados de forma segura desde el portal de pacientes, disponibles 24/7.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#4CAF50]/6 rounded-full blur-[200px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(46,125,50,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,50,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
            <span className="text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
              Proceso Simple
            </span>
          </div>

          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl font-bold text-[#1a2e1a] leading-tight tracking-tight"
          >
            Cómo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]">
              trabajamos
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#1a2e1a]/55 max-w-xl mx-auto font-light leading-relaxed">
            Tres pasos simples para obtener resultados precisos y confiables.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[72px] left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-[#2E7D32]/20 via-[#4CAF50]/40 to-[#2E7D32]/20 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step circle */}
              <div className="relative z-10 mb-8">
                <div className="w-[88px] h-[88px] rounded-full bg-white border-2 border-green-200 flex items-center justify-center text-[#2E7D32] group-hover:border-[#2E7D32] group-hover:bg-green-50 group-hover:shadow-[0_0_30px_rgba(46,125,50,0.15)] transition-all duration-500 shadow-md shadow-green-100">
                  {step.icon}
                </div>
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2E7D32] text-white text-xs font-bold flex items-center justify-center shadow-[0_0_15px_rgba(46,125,50,0.3)]">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="max-w-[280px] lg:px-6">
                <h3 className="text-2xl font-bold text-[#1a2e1a] mb-1 font-sans">
                  {step.title}
                </h3>
                <p className="text-[#2E7D32] text-sm font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-[#1a2e1a]/50 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
