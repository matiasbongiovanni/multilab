"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { FAQItem } from "@/types";

const faqs: FAQItem[] = [
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

interface Message {
  id: number;
  type: "bot" | "user";
  text: string;
}

const botGreeting: Message = {
  id: 0,
  type: "bot",
  text: "Hola, soy el asistente de Multilab. ¿Qué querés saber sobre nuestros servicios?",
};

export default function FAQBot() {
  const [messages, setMessages] = useState<Message[]>([botGreeting]);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: shouldReduceMotion ? "instant" : "smooth",
      });
    }
  }, [messages, isOpen, shouldReduceMotion]);

  const handleFAQClick = (faq: FAQItem, index: number) => {
    const userMsg: Message = {
      id: Date.now(),
      type: "user",
      text: faq.question,
    };
    const botMsg: Message = {
      id: Date.now() + 1,
      type: "bot",
      text: faq.answer,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setExpandedFAQ(index);
  };

  return (
    <>
      {/* Acordeon FAQ estático */}
      <section
        className="py-20 lg:py-24 bg-[#F5F5F5]"
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
            <span className="inline-block text-[#4CAF50] text-sm font-semibold uppercase tracking-widest mb-3">
              Consultas frecuentes
            </span>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]"
            >
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-[#616161]">
              Si no encontrás lo que buscás,{" "}
              <a
                href="/contacto"
                className="text-[#4CAF50] underline underline-offset-2 hover:text-[#2E7D32]"
              >
                contactanos
              </a>
              .
            </p>
          </motion.div>

          <div className="space-y-2" role="list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                role="listitem"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className={[
                    "w-full flex items-center justify-between gap-4",
                    "px-5 py-4 rounded-xl text-left",
                    "transition-all duration-200",
                    expandedFAQ === index
                      ? "bg-white border-2 border-[#4CAF50] shadow-sm"
                      : "bg-white border-2 border-transparent hover:border-[#E0E0E0]",
                  ].join(" ")}
                  aria-expanded={expandedFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base transition-colors duration-150 ${
                      expandedFAQ === index ? "text-[#4CAF50]" : "text-[#1A1A1A]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 shrink-0 text-[#4CAF50] transition-transform duration-250 ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedFAQ === index && (
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
                      <div className="px-5 py-4 text-sm text-[#616161] leading-relaxed bg-white rounded-b-xl -mt-1 border-x-2 border-b-2 border-[#E0E0E0]">
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

      {/* Chatbot flotante */}
      <div
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        aria-label="Asistente de chat"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92, y: 16 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#E0E0E0] overflow-hidden"
              role="dialog"
              aria-label="Chat de preguntas frecuentes"
              aria-modal="false"
            >
              {/* Chat header */}
              <div className="bg-[#4CAF50] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Asistente Multilab
                    </p>
                    <p className="text-white/70 text-xs">Consultas frecuentes</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Cerrar chat"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div
                className="h-56 overflow-y-auto p-3 space-y-2.5 bg-[#F5F5F5]"
                role="log"
                aria-live="polite"
                aria-label="Mensajes del chat"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={[
                        "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
                        msg.type === "user"
                          ? "bg-[#4CAF50] text-white rounded-tr-sm"
                          : "bg-white text-[#1A1A1A] border border-[#E0E0E0] rounded-tl-sm shadow-sm",
                      ].join(" ")}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick replies */}
              <div className="p-3 border-t border-[#E0E0E0] bg-white">
                <p className="text-xs text-[#616161] mb-2 font-medium">
                  Consultas frecuentes:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {faqs.slice(0, 4).map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleFAQClick(faq, index)}
                      className="text-xs px-2.5 py-1.5 bg-[#F5F5F5] text-[#4CAF50] rounded-full border border-[#E0E0E0] hover:bg-[#dcfce7] transition-colors duration-150 text-left"
                    >
                      {faq.question.length > 30
                        ? faq.question.slice(0, 30) + "…"
                        : faq.question}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          className="w-14 h-14 bg-[#4CAF50] rounded-full shadow-lg hover:bg-[#2E7D32] transition-colors duration-200 flex items-center justify-center"
          aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente de preguntas frecuentes"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </motion.button>
      </div>
    </>
  );
}
