"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FlaskConical, Leaf, ChevronDown } from "lucide-react";

const services = [
  {
    id: "riesgos",
    icon: ShieldCheck,
    title: "Prevención de Riesgos",
    accent: "#2E7D32",
    bullets: [
      "Mediciones de ruido, iluminación y vibraciones",
      "Evaluación y cuantificación de contaminantes químicos en aire",
      "Relevamiento de riesgos laborales (Ley 19.587 / Decreto 351)",
      "Elaboración de programas de prevención y legajos técnicos",
    ],
  },
  {
    id: "laboratorio",
    icon: FlaskConical,
    title: "Laboratorio",
    accent: "#1B5E20",
    bullets: [
      "Análisis fisicoquímicos y microbiológicos de agua potable y residual",
      "Análisis de efluentes industriales y cloacales",
      "Análisis de alimentos, materias primas y productos terminados",
      "Análisis de suelos y sedimentos",
    ],
  },
  {
    id: "ambiente",
    icon: Leaf,
    title: "Medio Ambiente",
    accent: "#4CAF50",
    bullets: [
      "Monitoreo de fuentes fijas (chimeneas e instalaciones)",
      "Muestreo y análisis de efluentes líquidos",
      "Informes técnicos para organismos reguladores (OPDS, APN, municipios)",
      "Evaluaciones de impacto ambiental",
    ],
  },
];

export default function ServicesCards() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#e8f5e9] text-[#1B5E20] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1a] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Tres verticales, una sola fuente de consulta
          </h2>
          <p className="text-[#3d5c3d] max-w-2xl mx-auto text-lg">
            Cobertura completa para el cumplimiento normativo industrial, desde la medición en campo hasta el informe con validez legal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-[#f9fdf9] rounded-2xl border border-[#c8e6c9] overflow-hidden transition-all duration-300 hover:shadow-md group ${
                  isOpen ? "border-l-4" : "hover:border-l-4"
                }`}
                style={isOpen ? { borderLeftColor: service.accent } : {}}
              >
                <div className="p-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.accent}18` }}
                  >
                    <Icon size={22} style={{ color: service.accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2e1a] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h3>
                  <ul className="space-y-2 mb-5">
                    {service.bullets.slice(0, 2).map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#3d5c3d]">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: service.accent }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-2 mb-5 overflow-hidden"
                      >
                        {service.bullets.slice(2).map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-[#3d5c3d]">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: service.accent }} />
                            {b}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: service.accent }}
                  >
                    {isOpen ? "Ver menos" : "Ver más"}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
