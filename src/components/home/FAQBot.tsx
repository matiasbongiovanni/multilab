"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { FAQItem } from "@/types";

const faqs: FAQItem[] = [
  {
    question: "¿Cómo obtengo mis informes?",
    answer: "Accedé al portal de informes ingresando con tu DNI y contraseña. Una vez disponibles, podés verlos y descargarlos en PDF en cualquier momento.",
  },
  {
    question: "¿Cuánto tarda cada tipo de análisis?",
    answer: "La mayoría de los análisis clínicos están disponibles en 24 a 48 horas hábiles. Estudios especiales como cultivos o perfiles hormonales pueden demorar hasta 5 días.",
  },
  {
    question: "¿Necesito turno previo?",
    answer: "Sí, recomendamos turno previo para garantizar la atención. Podés pedirlo por el formulario de contacto, por WhatsApp o llamando al laboratorio.",
  },
  {
    question: "¿Qué documentación debo presentar?",
    answer: "Para análisis clínicos traé tu DNI y, si tenés obra social, la orden médica. Para análisis veterinarios traé los datos del animal.",
  },
  {
    question: "¿Los resultados son confidenciales?",
    answer: "Sí. Tus resultados son de acceso exclusivo a través del portal privado con tus credenciales. No compartimos información con terceros.",
  },
  {
    question: "¿Hacen análisis a domicilio?",
    answer: "En algunos casos podemos coordinar la toma de muestras a domicilio para pacientes con dificultades de traslado. Consultanos para evaluar tu caso.",
  },
];

export default function FAQBot() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 lg:py-28"
      aria-labelledby="faq-heading"
      style={{ backgroundColor: "oklch(98.5% 0.006 143)" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <motion.div
          className="mb-12"
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "oklch(42% 0.13 144)" }}
          >
            Preguntas frecuentes
          </span>
          <h2
            id="faq-heading"
            className="mt-3 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "oklch(13% 0.015 143)",
            }}
          >
            Lo que necesitás saber.
          </h2>
          <p className="mt-4 text-sm" style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}>
            ¿No encontrás tu respuesta?{" "}
            <Link
              href="/contacto"
              className="font-medium underline underline-offset-2"
              style={{ color: "oklch(42% 0.13 144)" }}
            >
              Escribinos directamente.
            </Link>
          </p>
        </motion.div>

        <div
          className="divide-y"
          style={{ borderTop: "1px solid oklch(91% 0.013 143)", borderColor: "oklch(91% 0.013 143)" }}
          role="list"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={reduce ? {} : { opacity: 0, y: 12 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                role="listitem"
                style={{ borderBottomColor: "oklch(91% 0.013 143)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span
                    className="font-medium text-base"
                    style={{
                      color: isOpen ? "oklch(13% 0.015 143)" : "oklch(22% 0.013 143)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: isOpen ? "oklch(42% 0.13 144)" : "oklch(96% 0.022 143)",
                      color: isOpen ? "white" : "oklch(42% 0.13 144)",
                    }}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                      role="region"
                    >
                      <p
                        className="pb-5 text-sm leading-relaxed"
                        style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
