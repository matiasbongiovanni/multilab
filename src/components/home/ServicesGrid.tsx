"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const services = [
  {
    id: "seguridad-higiene",
    title: "Seguridad e Higiene Laboral",
    description:
      "Gestión técnica enfocada en la prevención de enfermedades profesionales y accidentes, asegurando entornos de trabajo saludables y productivos.",
    href: "/servicios/seguridad-higiene",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "microbiologia",
    title: "Microbiología Integral",
    description:
      "Diagnóstico microbiológico transversal que abarca el control de procesos, ambientes y productos, asegurando la ausencia de riesgos biológicos.",
    href: "/servicios/microbiologia",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31" />
        <line x1="6" y1="16" x2="18" y2="16" />
      </svg>
    ),
  },
  {
    id: "ambiente",
    title: "Laboratorio Ambiental",
    description:
      "Monitoreo de precisión de agua, aire y suelo para garantizar que el entorno cumpla con los más altos estándares de calidad y normativas vigentes.",
    href: "/servicios/ambiente",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    id: "id-ciencias",
    title: "I+D en Ciencias y Medicina",
    description:
      "Nuestro motor de innovación que investiga y desarrolla nuevas fronteras del diagnóstico, conectando la ciencia analítica con la salud humana y ambiental.",
    href: "/servicios/investigacion",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="servicios"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="servicios-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4CAF50]/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4CAF50]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
            <span className="text-[#4CAF50] text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
              Nuestros Ejes Estratégicos
            </span>
          </div>

          <h2
            id="servicios-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Ciencias aplicadas a la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#81C784]">
              prevención
            </span>
          </h2>

          {/* White accent */}
          <div className="w-16 h-[2px] bg-white/20 mx-auto mt-6" />

          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Operamos bajo una visión sistémica donde la salud ambiental, la
            inocuidad y el bienestar humano convergen en un diagnóstico único de
            alta precisión.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={shouldReduceMotion ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full"
            >
              <Link
                href={service.href}
                className="group flex flex-col gap-6 p-8 lg:p-10 h-full rounded-3xl bg-white/[0.03] border border-white/8 backdrop-blur-sm hover:bg-white/[0.07] hover:border-[#4CAF50]/30 transition-all duration-500 relative overflow-hidden"
                aria-label={`Ver detalle de: ${service.title}`}
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4CAF50]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-[#4CAF50]/10 border border-[#4CAF50]/20 flex items-center justify-center shrink-0 text-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white group-hover:border-[#4CAF50] transition-all duration-400 group-hover:shadow-[0_0_25px_rgba(76,175,80,0.3)]">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-3 flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-[#4CAF50] transition-colors duration-300 font-sans">
                    {service.title}
                  </h3>
                  <p className="text-white/45 leading-relaxed font-light text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* CTA link */}
                <div className="relative flex items-center gap-2 text-sm font-semibold mt-auto pt-4 text-white/30 group-hover:text-[#4CAF50] transition-colors duration-300">
                  <span>Conocer más</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}