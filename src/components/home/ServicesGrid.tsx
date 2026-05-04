"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const services = [
  {
    id: "calidad-de-agua",
    title: "Calidad de Agua",
    description:
      "Análisis fisicoquímico y bacteriológico de agua potable, industrial y de consumo. Cumplimiento con el Código Alimentario Argentino.",
    href: "/servicios/calidad-de-agua",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
    iconBg: "bg-[#e0f2fe] text-[#0284c7]",
    accent: "#0284c7",
  },
  {
    id: "higiene-bromatologia",
    title: "Higiene y Bromatología",
    description:
      "Control de calidad de alimentos, análisis microbiológicos y fisicoquímicos de superficies y ambientes laborales.",
    href: "/servicios/higiene-bromatologia",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-[#fef9c3] text-[#ca8a04]",
    accent: "#ca8a04",
  },
  {
    id: "analisis-veterinario",
    title: "Análisis Veterinario",
    description:
      "Diagnóstico clínico completo para animales de compañía y producción. Hemograma, bioquímica y análisis parasitológicos.",
    href: "/servicios/analisis-veterinario",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    iconBg: "bg-[#dcfce7] text-[#4CAF50]",
    accent: "#4CAF50",
  },
  {
    id: "analisis-clinico",
    title: "Análisis Clínico",
    description:
      "Hemograma, bioquímica, orina y perfiles completos para personas. Resultados precisos para diagnósticos certeros.",
    href: "/servicios/analisis-clinico",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    iconBg: "bg-[#ede9fe] text-[#7c3aed]",
    accent: "#7c3aed",
  },
  {
    id: "investigacion",
    title: "Investigación",
    description:
      "Apoyo a proyectos de investigación científica y universitaria. Metodologías validadas y actualizadas.",
    href: "/servicios/investigacion",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    iconBg: "bg-[#cffafe] text-[#0891b2]",
    accent: "#0891b2",
  },
  {
    id: "consulta-online",
    title: "Consulta Online",
    description:
      "Acceso a resultados digitales desde el portal de pacientes y teleconsulta con la bioquímica desde cualquier dispositivo.",
    href: "/servicios/consulta-online",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    iconBg: "bg-[#fce7f3] text-[#db2777]",
    accent: "#db2777",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function ServicesGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-[#0A1F0F]"
      aria-labelledby="servicios-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-[#4CAF50] text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestros servicios
          </span>
          <h2
            id="servicios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Análisis para cada necesidad
          </h2>
          <p className="mt-4 text-lg text-white/55 max-w-2xl mx-auto">
            Seis áreas especializadas para ofrecer soluciones integrales a clínicas,
            veterinarias, industrias y particulares.
          </p>
        </motion.div>

        {/* Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={shouldReduceMotion ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href={service.href}
                className={[
                  "group flex flex-col gap-4 p-6 lg:p-7 h-full",
                  "bg-[#112B1A] rounded-2xl border-2 border-[#4CAF50]/10",
                  "hover:bg-[#1a3a27] hover:shadow-lg hover:shadow-black/30 hover:border-[#4CAF50]/60",
                  "transition-all duration-250",
                ].join(" ")}
                aria-label={`Ver servicio: ${service.title}`}
              >
                {/* Icono */}
                <div
                  className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-xl font-bold text-white/90 group-hover:text-[#4CAF50] transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Link */}
                <div className="flex items-center gap-1.5 text-sm font-semibold mt-auto pt-2">
                  <span style={{ color: service.accent }}>Ver más</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={service.accent}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-1"
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
