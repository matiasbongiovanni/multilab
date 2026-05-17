"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { FAQItem } from "@/types";

const faqs: FAQItem[] = [
  { question: "¿Cómo obtengo mis resultados?", answer: "Podés acceder a tus resultados desde el portal de pacientes ingresando con tu DNI y contraseña. Una vez publicados, los encontrás disponibles para ver y descargar en cualquier momento." },
  { question: "¿Cuánto tarda cada tipo de análisis?", answer: "La mayoría de los análisis clínicos están disponibles en 24 a 48 horas hábiles. Estudios especiales como cultivos o perfiles hormonales pueden demorar hasta 5 días." },
  { question: "¿Necesito turno previo?", answer: "Sí, recomendamos solicitar turno previo para garantizar la atención. Podés pedirlo por el formulario de contacto, por WhatsApp o llamando al laboratorio." },
  { question: "¿Qué documentación debo presentar?", answer: "Para análisis clínicos debés traer tu DNI y, si contás con obra social, la orden médica correspondiente. Para análisis veterinarios es necesario traer los datos del animal." },
  { question: "¿Los resultados son confidenciales?", answer: "Sí, absolutamente. Tus resultados son de acceso exclusivo a través del portal privado con tus credenciales. No compartimos información con terceros." },
  { question: "¿Hacen análisis a domicilio?", answer: "En algunos casos podemos coordinar la toma de muestras a domicilio para pacientes con dificultades de traslado. Consultanos para evaluar tu caso." },
];

interface Message { id: number; type: "bot" | "user"; text: string; }

const botGreeting: Message = { id: 0, type: "bot", text: "Hola 👋 Soy el asistente virtual de Multilab. ¿En qué te puedo ayudar hoy?" };

export default function FAQBot() {
  const [messages, setMessages] = useState<Message[]>([botGreeting]);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen && messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: shouldReduceMotion ? "instant" : "smooth" });
  }, [messages, isOpen, shouldReduceMotion]);

  const handleFAQClick = (faq: FAQItem, index: number) => {
    setMessages((prev) => [...prev, { id: Date.now(), type: "user", text: faq.question }, { id: Date.now() + 1, type: "bot", text: faq.answer }]);
    setExpandedFAQ(index);
  };

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="faq-heading">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100/60 via-transparent to-transparent pointer-events-none blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
              <span className="text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">Centro de Ayuda</span>
            </div>
            <h2 id="faq-heading" className="text-4xl sm:text-5xl font-bold text-[#1a2e1a] tracking-tight">
              Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]">frecuentes</span>
            </h2>
            <p className="mt-6 text-lg text-[#1a2e1a]/55 font-light max-w-xl mx-auto">
              Todo lo que necesitás saber. Si no encontrás tu respuesta, <a href="/contacto" className="text-[#2E7D32] font-medium hover:text-[#1B5E20] transition-colors border-b border-[#2E7D32]/30">escribinos</a>.
            </p>
          </motion.div>

          <div className="space-y-3" role="list">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFAQ === index;
              return (
                <motion.div key={index} initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }} whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} role="listitem"
                  className={`rounded-2xl transition-all duration-300 border ${isExpanded ? "bg-green-50 border-[#2E7D32]/30 shadow-[0_0_30px_rgba(46,125,50,0.08)]" : "bg-white border-green-100 hover:border-green-200 hover:bg-green-50/30"} shadow-sm`}>
                  <button onClick={() => setExpandedFAQ(isExpanded ? null : index)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isExpanded} aria-controls={`faq-answer-${index}`}>
                    <span className={`font-medium sm:text-lg transition-colors font-sans ${isExpanded ? "text-[#1a2e1a]" : "text-[#1a2e1a]/75"}`}>{faq.question}</span>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-all duration-300 ${isExpanded ? "bg-[#2E7D32] text-white" : "bg-green-100 text-[#2E7D32]"}`}>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div id={`faq-answer-${index}`} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden" role="region">
                        <div className="px-6 pb-6 text-[#1a2e1a]/60 leading-relaxed font-light">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-[340px] sm:w-[380px] flex flex-col bg-white backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(46,125,50,0.2)] border border-green-200 overflow-hidden" role="dialog" aria-label="Asistente Virtual Multilab">
              <div className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" /></svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-white border-2 border-[#2E7D32] rounded-full" />
                  </div>
                  <div><h3 className="text-white font-semibold text-sm">Asistente Multilab</h3><p className="text-white/80 text-[11px] font-medium uppercase tracking-wider">En línea</p></div>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="h-[320px] overflow-y-auto p-4 space-y-4 bg-[#f8fdf8]">
                {messages.map((msg) => (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${msg.type === "user" ? "bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-white rounded-2xl rounded-tr-sm" : "bg-white text-[#1a2e1a]/80 border border-green-100 rounded-2xl rounded-tl-sm shadow-sm"}`}>{msg.text}</div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-4 bg-white border-t border-green-100">
                <p className="text-[11px] font-bold text-[#1a2e1a]/30 uppercase tracking-widest mb-3">Sugerencias:</p>
                <div className="flex flex-wrap gap-2">
                  {faqs.slice(0, 3).map((faq, i) => (
                    <button key={i} onClick={() => handleFAQClick(faq, i)} className="text-xs px-3 py-2 bg-green-50 text-[#2E7D32]/70 rounded-lg border border-green-100 hover:border-[#2E7D32]/30 hover:text-[#2E7D32] hover:bg-green-100 transition-all duration-200 text-left line-clamp-1">{faq.question}</button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative">
          {!isOpen && <div className="absolute inset-0 bg-[#2E7D32] rounded-full animate-ping opacity-20" />}
          <motion.button onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_30px_-5px_rgba(46,125,50,0.3)] transition-all duration-300 ${isOpen ? "bg-[#f0faf0] border border-green-200 hover:bg-green-50" : "bg-[#2E7D32] hover:bg-[#1B5E20]"}`}
            aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}>
            {isOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round"><path d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>}
          </motion.button>
        </div>
      </div>
    </>
  );
}