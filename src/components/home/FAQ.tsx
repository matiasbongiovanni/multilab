"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Qué empresas pueden contratar sus servicios?",
    a: "Trabajamos con cualquier empresa que tenga empleados bajo relación de dependencia, industrias alimentarias que deban cumplir el Código Alimentario Argentino, clínicas, veterinarias, municipios y organismos públicos que requieran análisis certificados. Si no estás seguro si tu empresa necesita nuestros servicios, el diagnóstico inicial es sin costo.",
  },
  {
    q: "¿Qué normativas cubren sus servicios de Higiene y Seguridad?",
    a: "Cubrimos la Ley 19.587 de Higiene y Seguridad en el Trabajo, Resolución SRT 295/03 (factores de riesgo), normativa de ART y todos los requisitos documentales que auditores de riesgos del trabajo verifican en visitas a empresas.",
  },
  {
    q: "¿Cuánto tarda en llegar un informe de laboratorio?",
    a: "El plazo estándar es de 5 a 10 días hábiles desde la toma de muestra, dependiendo de la complejidad del análisis. Para situaciones urgentes contamos con servicio prioritario. Todos los informes son firmados por la Directora Técnica, Lic. Cinthia Degliangioli.",
  },
  {
    q: "¿Sus informes son válidos para presentar ante organismos regulatorios?",
    a: "Sí. Nuestros informes son documentos técnicos firmados y con trazabilidad completa, aptos para presentación ante Ministerios de Trabajo, SENASA, organismos ambientales provinciales, municipios y auditorías internas o externas de calidad.",
  },
  {
    q: "¿Realizan análisis de agua para consumo humano?",
    a: "Sí. Analizamos agua superficial, subterránea y de red para parámetros microbiológicos y fisicoquímicos exigidos por el Código Alimentario Argentino y normativas de agua potable. Los informes incluyen comparación con valores límite y recomendaciones técnicas.",
  },
  {
    q: "¿Cómo se realiza la toma de muestras? ¿Tienen que ir a la empresa?",
    a: "En la mayoría de los servicios sí: nuestro equipo va hasta el establecimiento para realizar mediciones in situ y toma de muestras con cadena de custodia documentada. Esto garantiza la trazabilidad y validez del análisis. Para algunos análisis, el cliente puede traer las muestras al laboratorio.",
  },
  {
    q: "¿Qué es la cadena de custodia y por qué importa?",
    a: "Es el registro documentado de quién tomó la muestra, cuándo, en qué condiciones y cómo fue transportada hasta el laboratorio. Garantiza que el análisis es representativo de lo que se quiere medir y que el informe puede defenderse ante cualquier cuestionamiento legal o regulatorio.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-[#fcfdfc] overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#44A148]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A2E1A]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/3" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="mb-14 text-center max-w-2xl mx-auto"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
            <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-[#44A148]">
              Preguntas frecuentes
            </span>
          </div>

          <h2
            id="faq-heading"
            className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E1A] leading-tight"
          >
            Todo lo que necesitás saber antes de contratar
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <dl className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;

            return (
              <motion.div
                key={i}
                initial={reduce ? {} : { opacity: 0, y: 16 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#44A148]/30 shadow-[0_8px_30px_rgb(26,46,26,0.04)] ring-1 ring-[#44A148]/5"
                    : "border-[#1A2E1A]/10 hover:border-[#44A148]/30 hover:shadow-sm"
                }`}
              >
                <dt>
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 lg:px-8 lg:py-6 text-left outline-none group rounded-2xl focus-visible:ring-2 focus-visible:ring-[#44A148]/50"
                  >
                    <span className="font-inter font-bold text-[#1A2E1A] text-base lg:text-lg pr-4">
                      {faq.q}
                    </span>
                    
                    {/* Botón dinámico Plus -> Cruz */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen 
                          ? "bg-[#44A148] text-white shadow-md" 
                          : "bg-[#44A148]/10 text-[#44A148] group-hover:bg-[#44A148]/20"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={20} strokeWidth={2.5} />
                    </motion.div>
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`faq-answer-${i}`}
                      initial={reduce ? {} : { height: 0, opacity: 0 }}
                      animate={reduce ? {} : { height: "auto", opacity: 1 }}
                      exit={reduce ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0">
                        <div className="pt-4 border-t border-[#1A2E1A]/5">
                          <p className="text-base text-[#1A2E1A]/70 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>

        {/* CTA "Still have questions" Premium */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-4 bg-white rounded-2xl border border-[#1A2E1A]/10 shadow-sm">
            <span className="text-sm font-medium text-[#1A2E1A]/60">
              ¿Tenés otra pregunta o un caso particular?
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#1A2E1A]/20" aria-hidden="true" />
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 font-bold text-[#44A148] hover:text-[#1A2E1A] transition-colors duration-200 text-sm"
            >
              Escribinos directamente
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}