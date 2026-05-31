"use client";

import { motion } from "framer-motion";
import { Award, Users, LayoutDashboard, Clock } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Trazabilidad certificada",
    body: "Métodos normalizados APHA, EPA, ISO. Cadena de custodia documentada desde la toma de muestra hasta la entrega del informe.",
  },
  {
    icon: Users,
    title: "Profesionales matriculados",
    body: "Ingenieros, químicos y técnicos acreditados. Nuestros informes tienen validez legal ante organismos nacionales y provinciales.",
  },
  {
    icon: LayoutDashboard,
    title: "Portal de clientes",
    body: "Acceso online a todos tus informes históricos, organizados por servicio y fecha desde tu cuenta personal.",
  },
  {
    icon: Clock,
    title: "Tiempos acordados",
    body: "La toma de muestra se coordina y los resultados se entregan dentro de los plazos acordados contractualmente.",
  },
];

export default function WhyMultilab() {
  return (
    <section id="nosotros" className="bg-[#f0faf0] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#e8f5e9] text-[#1B5E20] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1a] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Diferenciadores técnicos
          </h2>
          <p className="text-[#3d5c3d] max-w-xl mx-auto">
            Sin frases genéricas. Estos son los factores concretos que respaldan cada informe que entregamos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[#c8e6c9] p-6 flex gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#2E7D32]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2e1a] mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#3d5c3d] leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
