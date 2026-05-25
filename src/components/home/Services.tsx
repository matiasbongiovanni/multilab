"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ShieldCheck, FlaskConical, Leaf, Microscope, ArrowRight } from "lucide-react";

const services = [
  {
    id: "higiene-seguridad",
    icon: ShieldCheck,
    title: "Higiene y Seguridad Laboral",
    description:
      "Gestión técnica enfocada en la prevención de enfermedades profesionales y accidentes, asegurando entornos de trabajo saludables y productivos.",
    items: [
      "Evaluación de riesgos laborales",
      "Mediciones de ruido, iluminación y ergonomía",
      "Documentación Ley 19.587",
      "Programas de higiene industrial",
    ],
    href: "/higiene-seguridad",
    color: "#2E7D32",
    bg: "#DCFCE7",
    featured: true,
  },
  {
    id: "laboratorio",
    icon: FlaskConical,
    title: "Laboratorio de Análisis",
    description:
      "Análisis microbiológicos, fisicoquímicos y bromatológicos para industrias alimentarias, clínicas, veterinarias y organismos públicos.",
    items: [
      "Microbiología de alimentos y agua",
      "Control bromatológico",
      "Análisis veterinarios",
      "Código Alimentario Argentino",
    ],
    href: "/laboratorio",
    color: "#1B5E20",
    bg: "#BBF7D0",
    featured: false,
  },
  {
    id: "ambiente",
    icon: Leaf,
    title: "Laboratorio Ambiental",
    description:
      "Monitoreo de precisión de agua, aire y suelo para garantizar que el entorno cumpla con los estándares de calidad y normativas vigentes.",
    items: [
      "Calidad de agua superficial y subterránea",
      "Monitoreo de efluentes industriales",
      "Muestreo y análisis de suelos",
      "Informes para organismos regulatorios",
    ],
    href: "/medioambiente",
    color: "#166534",
    bg: "#DCFCE7",
    featured: false,
  },
  {
    id: "id",
    icon: Microscope,
    title: "I+D en Ciencias y Medicina",
    description:
      "Motor de innovación que investiga y desarrolla nuevas fronteras del diagnóstico, conectando la ciencia analítica con la salud humana y ambiental.",
    items: [
      "Investigación aplicada",
      "Diagnóstico de precisión",
      "Desarrollo de metodologías",
      "Ciencias de la vida",
    ],
    href: "/servicios",
    color: "#2E7D32",
    bg: "#DCFCE7",
    featured: false,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-[#FAFAF8]"
      aria-labelledby="servicios-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-14 lg:mb-16"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B5E20]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ejes estratégicos de servicio
            </span>
          </div>

          <h2
            id="servicios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ciencias aplicadas a la prevención
          </h2>

          <p className="mt-4 text-[#6B7280] text-lg leading-relaxed">
            Operamos bajo una visión sistémica donde la salud ambiental, la inocuidad y el bienestar humano convergen en un diagnóstico de alta precisión.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                custom={i}
                variants={reduce ? {} : cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative rounded-2xl border transition-all duration-300 ${
                  service.featured
                    ? "bg-[#1C1917] border-[#1C1917] text-white"
                    : "bg-white border-[#E5E7EB] hover:border-[#BBF7D0] hover:shadow-[0_4px_24px_rgba(46,125,50,0.08)]"
                }`}
              >
                <Link
                  href={service.href}
                  className="flex flex-col gap-5 p-7 lg:p-8 h-full rounded-2xl"
                  aria-label={`Ver servicio: ${service.title}`}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: service.featured ? "rgba(255,255,255,0.1)" : service.bg,
                    }}
                  >
                    <Icon
                      size={22}
                      style={{
                        color: service.featured ? "#DCFCE7" : service.color,
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3
                      className={`text-xl font-bold leading-snug ${
                        service.featured ? "text-white" : "text-[#1C1917]"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        service.featured ? "text-white/70" : "text-[#6B7280]"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Items list */}
                    <ul className="mt-2 space-y-1.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-2 text-sm ${
                            service.featured ? "text-white/80" : "text-[#6B7280]"
                          }`}
                        >
                          <span
                            className="mt-1 w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              background: service.featured
                                ? "rgba(255,255,255,0.15)"
                                : service.bg,
                            }}
                            aria-hidden="true"
                          >
                            <svg
                              width="7"
                              height="5"
                              viewBox="0 0 7 5"
                              fill="none"
                            >
                              <path
                                d="M1 2.5L2.8 4.3L6 1"
                                stroke={service.featured ? "#DCFCE7" : service.color}
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex items-center gap-1.5 text-sm font-semibold mt-auto pt-3 transition-colors duration-200 ${
                      service.featured
                        ? "text-[#DCFCE7]"
                        : "text-[#9CA3AF] group-hover:text-[#2E7D32]"
                    }`}
                  >
                    Conocer más
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
