"use client";

import { motion } from "framer-motion";
import { MessageSquare, Microscope, FileCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Solicitud y coordinación",
    body: "El cliente describe su necesidad. Coordinamos fecha y forma de toma de muestra o medición.",
  },
  {
    icon: Microscope,
    title: "Trabajo en campo y laboratorio",
    body: "Nuestro equipo realiza las mediciones o toma de muestras siguiendo protocolos normalizados.",
  },
  {
    icon: FileCheck,
    title: "Informe técnico certificado",
    body: "Entregamos el informe con resultados, interpretación técnica y validez legal. Disponible en tu portal.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#f0faf0] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#e8f5e9] text-[#1B5E20] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1a]" style={{ fontFamily: "var(--font-heading)" }}>
            Cómo trabajamos
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="hidden lg:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-[#c8e6c9]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0 }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-[#c8e6c9] flex items-center justify-center shadow-sm">
                      <Icon size={32} className="text-[#2E7D32]" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#2E7D32] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2e1a] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#3d5c3d] leading-relaxed max-w-xs">{step.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
