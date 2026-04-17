"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";
import { motion, useReducedMotion } from "framer-motion";

const values = [
  {
    title: "Precisión",
    description:
      "Cada resultado que emitimos pasa por procesos de control de calidad rigurosos. La exactitud analítica es nuestra responsabilidad más importante.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    color: "bg-[#e0f2fe] text-[#4CAF50]",
  },
  {
    title: "Compromiso",
    description:
      "Tratamos cada muestra con la responsabilidad que implica: detrás de cada análisis hay una persona que necesita un resultado confiable para tomar decisiones de salud.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    color: "bg-[#dcfce7] text-[#16a34a]",
  },
  {
    title: "Innovación",
    description:
      "Incorporamos metodologías actualizadas y tecnología de punta para ofrecer diagnósticos más sensibles, específicos y rápidos.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    color: "bg-[#ede9fe] text-[#7c3aed]",
  },
  {
    title: "Accesibilidad",
    description:
      "Creemos que el acceso a un diagnóstico de calidad no debería ser un privilegio. Trabajamos para hacer nuestros servicios accesibles a toda la comunidad.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "bg-[#cffafe] text-[#0891b2]",
  },
];

const team = [
  {
    name: "Lic. Cinthia Degliangioli",
    role: "Directora Técnica",
    bio: "Licenciada en Bioquímica con especialización en diagnóstico clínico. Fundadora de Multilab, con más de una década de experiencia en análisis clínicos, ambientales y veterinarios. Docente e investigadora activa.",
  },
];

export default function QuienesSomosPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-[#F5F5F5] via-[#f0f9ff] to-white overflow-hidden"
          aria-label="Quiénes somos — Multilab"
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#4CAF50]/5 rounded-full blur-3xl translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16a34a]/5 rounded-full blur-3xl -translate-x-1/3" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5"
            >
              <span className="inline-block text-[#4CAF50] text-sm font-semibold uppercase tracking-widest">
                Quiénes somos
              </span>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1]">
                Un laboratorio con propósito
              </h1>
              <p className="text-lg text-[#616161] leading-relaxed max-w-2xl">
                Multilab nació con una convicción simple: que la calidad analítica y el compromiso humano no son excluyentes. Que se puede hacer ciencia de alto nivel y al mismo tiempo estar cerca de las personas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-16 lg:py-24 bg-white" aria-labelledby="historia-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <span className="text-[#4CAF50] text-sm font-semibold uppercase tracking-widest">
                  Nuestra historia
                </span>
                <h2 id="historia-heading" className="font-inter text-3xl sm:text-4xl font-bold text-[#1A1A1A] leading-tight">
                  De la investigación a la práctica diagnóstica
                </h2>
                <p className="text-[#616161] leading-relaxed">
                  Multilab fue fundado por la Lic. Cinthia Degliangioli con la idea de integrar el rigor académico con la calidez del servicio. Lo que comenzó como un proyecto orientado a la investigación científica aplicada fue creciendo hacia un laboratorio de análisis clínicos, veterinarios y ambientales de referencia regional.
                </p>
                <p className="text-[#616161] leading-relaxed">
                  Hoy contamos con cinco áreas especializadas, equipamiento de última generación y un portal digital que permite a los pacientes acceder a sus resultados de forma segura y en tiempo real.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  {[
                    { value: "5", label: "Áreas de análisis" },
                    { value: "+500", label: "Análisis realizados" },
                    { value: "100%", label: "Resultados certificados" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-inter text-3xl font-bold text-[#4CAF50]">{stat.value}</p>
                      <p className="text-xs text-[#64748b] mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
                aria-hidden="true"
              >
                <div className="bg-gradient-to-br from-[#F5F5F5] to-[#e0f2fe] rounded-3xl p-8 lg:p-10 border border-[#e0f2fe]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#4CAF50] flex items-center justify-center shadow-md">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-inter font-bold text-xl text-[#1A1A1A]">Lic. Cinthia Degliangioli</p>
                      <p className="text-sm text-[#64748b]">Fundadora y Directora Técnica</p>
                    </div>
                  </div>
                  <blockquote className="text-[#1A1A1A] leading-relaxed italic border-l-4 border-[#4CAF50] pl-5 text-base">
                    "Cada análisis que hacemos tiene impacto en la vida de alguien. Esa responsabilidad nos mueve a mejorar cada día, a no conformarnos con el estándar mínimo y a estar siempre del lado del paciente."
                  </blockquote>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Bioquímica", "Investigación aplicada", "Docencia universitaria"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-[#4CAF50] text-xs font-medium rounded-full border border-[#e0f2fe]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#f8fafc] to-[#f0f9ff]" aria-labelledby="valores-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-14"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[#4CAF50] text-sm font-semibold uppercase tracking-widest mb-3">
                Lo que nos define
              </span>
              <h2 id="valores-heading" className="font-inter text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Nuestros valores
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-[#e2e8f0] hover:border-[#4CAF50] hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="font-inter text-lg font-semibold text-[#1A1A1A] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 lg:py-24 bg-white" aria-labelledby="equipo-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[#4CAF50] text-sm font-semibold uppercase tracking-widest mb-3">
                El equipo
              </span>
              <h2 id="equipo-heading" className="font-inter text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Quién está detrás de cada análisis
              </h2>
            </motion.div>

            <div className="flex justify-center">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="max-w-sm w-full bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#e0f2fe] flex items-center justify-center mx-auto mb-5">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="1.8">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="font-inter text-xl font-bold text-[#1A1A1A]">{member.name}</h3>
                  <p className="text-sm text-[#4CAF50] font-medium mt-1 mb-4">{member.role}</p>
                  <p className="text-sm text-[#64748b] leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
