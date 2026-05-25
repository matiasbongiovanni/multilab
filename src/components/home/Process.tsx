"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, FileText, Beaker, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico inicial",
    description:
      "Relevamos el contexto de tu empresa, identificamos riesgos específicos y determinamos qué análisis o servicios son necesarios para tu actividad.",
    duration: "1–2 días hábiles",
  },
  {
    num: "02",
    icon: FileText,
    title: "Plan de acción",
    description:
      "Diseñamos un plan técnico personalizado con cronograma, metodología y alcance detallado. Toda la propuesta queda documentada y firmada.",
    duration: "Mismo día",
  },
  {
    num: "03",
    icon: Beaker,
    title: "Ejecución y análisis",
    description:
      "Realizamos las mediciones, muestreos o análisis de laboratorio con trazabilidad absoluta. Cada etapa queda registrada en cadena de custodia.",
    duration: "Según alcance",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Informe certificado",
    description:
      "Entregamos el informe técnico firmado por la Directora Técnica, listo para presentar ante organismos regulatorios, ART o auditorías internas.",
    duration: "5–10 días hábiles",
  },
];

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proceso"
      className="py-20 lg:py-28 bg-[#FAFAF8]"
      aria-labelledby="proceso-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-14 lg:mb-16"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B5E20]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Transparencia operativa
            </span>
          </div>

          <h2
            id="proceso-heading"
            className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cómo trabajamos
          </h2>

          <p className="mt-4 text-[#6B7280] text-lg leading-relaxed">
            Ninguna caja negra. Sabés exactamente qué pasa en cada etapa, quién lo ejecuta y en qué plazos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[#E5E7EB] z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={reduce ? {} : { opacity: 0, y: 24 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col gap-4 bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-7 z-10"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-[#2E7D32]" aria-hidden="true" />
                  </div>
                  <span
                    className="text-3xl font-bold text-[#E5E7EB]"
                    style={{ fontFamily: "var(--font-heading)" }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-bold text-[#1C1917] text-base mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Duration badge */}
                <div className="mt-auto pt-3 border-t border-[#F4F4F1]">
                  <span className="text-[11px] font-semibold text-[#2E7D32] bg-[#DCFCE7] px-2.5 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA callout */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#F4F4F1] border border-[#E5E7EB] rounded-2xl px-7 py-6"
        >
          <div>
            <p
              className="font-bold text-[#1C1917]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ¿Listo para empezar?
            </p>
            <p className="text-sm text-[#6B7280] mt-0.5">
              El diagnóstico inicial no tiene costo. Contactanos y arrancamos.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
          >
            Solicitar diagnóstico gratuito
          </a>
        </motion.div>
      </div>
    </section>
  );
}
