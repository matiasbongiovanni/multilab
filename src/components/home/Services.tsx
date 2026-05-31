"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ShieldCheck, FlaskConical, Leaf, Microscope, ArrowRight } from "lucide-react";

const services = [
  {
    id: "higiene-seguridad",
    icon: ShieldCheck,
    title: "Higiene y Seguridad Laboral",
    description:
      "Gestión técnica enfocada en la prevención de enfermedades profesionales y accidentes, asegurando entornos de trabajo saludables y productivos.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fit=crop",
    href: "/higiene-seguridad",
    variant: "green" as const,
  },
  {
    id: "laboratorio",
    icon: FlaskConical,
    title: "Microbiología Integral",
    description:
      "Análisis microbiológicos, fisicoquímicos y bromatológicos para industrias alimentarias, clínicas, veterinarias y organismos públicos.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop",
    href: "/laboratorio",
    variant: "white" as const,
  },
  {
    id: "ambiente",
    icon: Leaf,
    title: "Laboratorio Ambiental",
    description:
      "Monitoreo de precisión de agua, aire y suelo para garantizar que el entorno cumpla con los estándares de calidad y normativas vigentes.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&fit=crop",
    href: "/medioambiente",
    variant: "green" as const,
  },
  {
    id: "id",
    icon: Microscope,
    title: "I+D en Ciencias y Medicina",
    description:
      "Motor de innovación que investiga y desarrolla nuevas fronteras del diagnóstico, conectando la ciencia analítica con la salud humana y ambiental.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop",
    href: "/servicios",
    variant: "white" as const,
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
      className="py-20 lg:py-28 bg-gradient-to-b from-[#fcfdfc] to-white"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#44A148]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ejes estratégicos de servicio
            </span>
          </div>

          <h2
            id="servicios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A2E1A] leading-tight"
            // Eliminamos style={{ fontFamily: "var(--font-display)" }} para que use la fuente tailwind por defecto
          >
            Ciencias aplicadas a la prevención
          </h2>

          <p className="mt-4 text-[#1A2E1A]/70 text-lg leading-relaxed">
            Operamos bajo una visión sistémica donde la salud ambiental, la inocuidad y el bienestar humano convergen en un diagnóstico de alta precisión.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isGreen = service.variant === "green";
            return (
              <motion.article
                key={service.id}
                custom={i}
                variants={reduce ? {} : cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative rounded-[2rem] border overflow-hidden transition-all duration-300 ${
                  isGreen
                    ? "bg-[#1A2E1A] border-[#1A2E1A] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    : "bg-white border-[#1A2E1A]/10 hover:border-[#44A148]/40 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <Link
                  href={service.href}
                  className="flex flex-col h-full outline-none"
                  aria-label={`Ver servicio: ${service.title}`}
                >
                  {/* Photo */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {isGreen && (
                      <div className="absolute inset-0 bg-[#1A2E1A]/50" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 p-8 lg:p-10 flex-1">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isGreen
                          ? "bg-white/10"
                          : "bg-[#44A148]/10 group-hover:bg-[#44A148]/20"
                      }`}
                    >
                      <Icon
                        size={26}
                        color="#44A148"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-3 flex-1">
                      <h3
                        className={`text-2xl font-bold leading-snug ${
                          isGreen ? "text-white" : "text-[#1A2E1A]"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-base leading-relaxed ${
                          isGreen ? "text-white/70" : "text-[#1A2E1A]/70"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div
                      className={`flex items-center gap-2 text-sm font-bold pt-4 mt-auto transition-colors duration-200 border-t ${
                        isGreen
                          ? "text-[#44A148] border-white/10"
                          : "text-[#1A2E1A]/40 group-hover:text-[#44A148] border-[#1A2E1A]/5"
                      }`}
                    >
                      Conocer más
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
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