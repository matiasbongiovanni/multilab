"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
      className="py-20 lg:py-28 bg-[#F4F4F1]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12"
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
              Preguntas frecuentes
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl text-[#1C1917] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Todo lo que necesitás saber antes de contratar
          </h2>
        </motion.div>

        {/* Items */}
        <dl className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#FAFAF8] transition-colors duration-150"
                >
                  <span
                    className="font-semibold text-[#1C1917] text-sm leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-8 h-8 rounded-full bg-[#F4F4F1] flex items-center justify-center transition-colors duration-200"
                    aria-hidden="true"
                  >
                    {openIdx === i ? (
                      <Minus size={14} className="text-[#2E7D32]" />
                    ) : (
                      <Plus size={14} className="text-[#6B7280]" />
                    )}
                  </span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.dd
                    id={`faq-answer-${i}`}
                    initial={reduce ? {} : { height: 0, opacity: 0 }}
                    animate={reduce ? {} : { height: "auto", opacity: 1 }}
                    exit={reduce ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-[#F4F4F1] pt-3">
                      {faq.a}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>

        {/* Still have questions */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#9CA3AF]">
            ¿Tenés otra pregunta?{" "}
            <a
              href="#contacto"
              className="font-semibold text-[#2E7D32] hover:text-[#1B5E20] underline underline-offset-2 transition-colors duration-150"
            >
              Escribinos directamente
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
