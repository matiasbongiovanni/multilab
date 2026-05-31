"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, FileText, Beaker, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico inicial",
    description: "Relevamos riesgos específicos y determinamos los análisis necesarios.",
    duration: "1–2 días",
  },
  {
    num: "02",
    icon: FileText,
    title: "Plan de acción",
    description: "Diseño de cronograma y metodología documentada y firmada.",
    duration: "Mismo día",
  },
  {
    num: "03",
    icon: Beaker,
    title: "Ejecución técnica",
    description: "Mediciones y muestreos bajo estricta cadena de custodia.",
    duration: "A medida",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Informe certificado",
    description: "Entrega de resultados con aval técnico para organismos y ART.",
    duration: "5–10 días",
  },
];

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proceso"
      className="py-16 lg:py-24 bg-white border-y border-[#1A2E1A]/5"
      aria-labelledby="proceso-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Compacto (Título a la izq, texto a la der en desktop) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -20 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
              <span className="font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-[#44A148]">
                Transparencia operativa
              </span>
            </div>
            <h2
              id="proceso-heading"
              className="font-inter text-3xl md:text-4xl font-extrabold text-[#1A2E1A] leading-tight"
            >
              Nuestro método <br className="hidden lg:block" /> de trabajo
            </h2>
          </motion.div>

          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 20 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md lg:text-right"
          >
            <p className="text-[#1A2E1A]/70 text-base leading-relaxed">
              Ninguna caja negra. Sabés exactamente qué pasa en cada etapa, quién lo ejecuta y en qué plazos.
            </p>
          </motion.div>
        </div>

        {/* Timeline Horizontal (Desktop) / Vertical Compacta (Mobile) */}
        <div className="relative">
          {/* Línea conectora Desktop */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#44A148]/20 to-transparent" />
          
          {/* Línea conectora Mobile */}
          <div className="md:hidden absolute left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-[#44A148]/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={reduce ? {} : { opacity: 0, y: 20 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group flex md:flex-col items-start gap-4 md:gap-6 z-10"
                >
                  {/* Icono (Funciona como nodo en la línea) */}
                  <div className="relative bg-white w-12 h-12 md:mx-auto rounded-xl border border-[#1A2E1A]/10 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:border-[#44A148] group-hover:shadow-[0_0_15px_rgba(68,161,72,0.2)] group-hover:-translate-y-1">
                    <Icon size={20} className="text-[#44A148]" />
                    {/* Número de fondo sutil (Desktop) */}
                    <span className="hidden md:block absolute -top-8 text-3xl font-black text-[#1A2E1A]/5 transition-colors group-hover:text-[#44A148]/10 select-none">
                      {step.num}
                    </span>
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="flex flex-col flex-1 md:text-center pt-1 md:pt-0">
                    <h3 className="font-inter font-bold text-[#1A2E1A] text-lg mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#1A2E1A]/60 leading-relaxed mb-3 md:min-h-[60px]">
                      {step.description}
                    </p>
                    <span className="inline-flex items-center md:justify-center gap-1.5 text-xs font-bold text-[#44A148] uppercase tracking-wide">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Ultra Compacto */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 15 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-[#1A2E1A] rounded-2xl p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#44A148]/20 items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-inter font-bold text-white text-lg">¿Listo para empezar?</p>
              <p className="text-sm text-white/70 mt-0.5">Diagnóstico inicial sin cargo. Armamos un plan a tu medida.</p>
            </div>
          </div>
          <a
            href="#contacto"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#44A148] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:bg-[#38853b] hover:shadow-lg"
          >
            Solicitar ahora
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}