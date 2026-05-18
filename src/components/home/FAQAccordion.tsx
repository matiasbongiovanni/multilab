"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "¿Cómo obtengo mis resultados?",
    answer:
      "Podés acceder a tus resultados desde el portal de pacientes ingresando con tu DNI y contraseña. Una vez publicados, los encontrás disponibles para ver y descargar en cualquier momento.",
  },
  {
    question: "¿Cuánto tarda cada tipo de análisis?",
    answer:
      "La mayoría de los análisis clínicos están disponibles en 24 a 48 horas hábiles. Estudios especiales como cultivos o perfiles hormonales pueden demorar hasta 5 días. Al solicitar el turno te informamos el tiempo estimado.",
  },
  {
    question: "¿Necesito turno previo?",
    answer:
      "Sí, recomendamos solicitar turno previo para garantizar la atención. Podés pedirlo por el formulario de contacto, por WhatsApp o llamando al laboratorio. Algunos estudios urgentes se atienden sin turno según disponibilidad.",
  },
  {
    question: "¿Qué documentación debo presentar?",
    answer:
      "Para análisis clínicos debés traer tu DNI y, si contás con obra social, la orden médica correspondiente. Para análisis veterinarios es necesario traer los datos del animal y, si es posible, la indicación del veterinario.",
  },
  {
    question: "¿Los resultados son confidenciales?",
    answer:
      "Sí, absolutamente. Tus resultados son de acceso exclusivo a través del portal privado con tus credenciales. No compartimos información de ningún paciente con terceros bajo ninguna circunstancia.",
  },
  {
    question: "¿Hacen análisis a domicilio?",
    answer:
      "En algunos casos podemos coordinar la toma de muestras a domicilio para pacientes con dificultades de traslado. Consultanos por el formulario o por teléfono para evaluar tu caso específico.",
  },
];

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-rp-bg-soft)" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: "var(--color-rp-accent)" }}
          >
            Consultas frecuentes
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--color-rp-text-strong)" }}
          >
            Preguntas frecuentes
          </h2>
          <p
            className="mt-4 text-sm"
            style={{ color: "var(--color-rp-text-subtle)" }}
          >
            Si no encontrás lo que buscás,{" "}
            <a
              href="/contacto"
              className="underline underline-offset-2 font-medium"
              style={{ color: "var(--color-rp-accent)" }}
            >
              contactanos
            </a>
            .
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 rounded-xl text-left transition-all duration-200"
                style={{
                  backgroundColor:
                    expanded === index
                      ? "var(--color-rp-accent-soft)"
                      : "var(--color-rp-bg-elevated)",
                  border: expanded === index
                    ? "1px solid var(--color-rp-accent)"
                    : "1px solid var(--color-rp-border)",
                }}
                aria-expanded={expanded === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="font-semibold text-sm sm:text-base"
                  style={{
                    color:
                      expanded === index
                        ? "var(--color-rp-accent)"
                        : "var(--color-rp-text-strong)",
                  }}
                >
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 transition-transform duration-250 ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="var(--color-rp-accent)"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
                    animate={shouldReduceMotion ? {} : { opacity: 1, height: "auto" }}
                    exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                    role="region"
                    aria-label={`Respuesta: ${faq.question}`}
                  >
                    <div
                      className="px-5 py-4 text-sm leading-relaxed rounded-b-xl -mt-1"
                      style={{
                        color: "var(--color-rp-text-muted)",
                        backgroundColor: "var(--color-rp-bg-elevated)",
                        borderLeft: "1px solid var(--color-rp-border)",
                        borderRight: "1px solid var(--color-rp-border)",
                        borderBottom: "1px solid var(--color-rp-border)",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
