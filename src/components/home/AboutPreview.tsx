"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const values = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4CAF50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Precisión",
    desc: "Metodologías validadas y control de calidad riguroso en cada análisis.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4CAF50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Confidencialidad",
    desc: "Los resultados de cada paciente son privados y de acceso exclusivo.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4CAF50"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="13 2 13 9 20 9" />
        <path d="M20 14.5V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h7.5" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Resultados rápidos",
    desc: "La mayoría de los análisis están disponibles en 24 a 48 horas hábiles.",
  },
];

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="about-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Imagen */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-hidden="true"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80"
                alt="Laboratorio Multilab — equipo técnico trabajando"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Overlay verde sutil en esquina */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-[#E0E0E0] px-5 py-4">
              <p className="font-black text-3xl text-[#4CAF50]">+10</p>
              <p className="text-xs text-[#616161] mt-0.5 font-medium">Años de experiencia</p>
            </div>
          </motion.div>

          {/* Right: Texto */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="inline-block text-[#4CAF50] text-sm font-semibold uppercase tracking-widest">
              Quiénes somos
            </span>
            <h2
              id="about-preview-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight"
            >
              Laboratorio de confianza desde 2014
            </h2>
            <p className="text-[#616161] leading-relaxed">
              Multilab fue fundado por la <strong className="text-[#1A1A1A] font-semibold">Lic. Cinthia Degliangioli</strong> con el objetivo de brindar servicios analíticos de alta calidad al alcance de todos. Contamos con equipamiento de última generación y un equipo comprometido con la excelencia técnica.
            </p>

            {/* Valores */}
            <div className="space-y-4 pt-2">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#dcfce7] flex items-center justify-center shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm">{value.title}</p>
                    <p className="text-xs text-[#616161] mt-0.5 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 text-[#4CAF50] font-bold hover:gap-3 transition-all duration-200"
              >
                Conocer más sobre Multilab
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
