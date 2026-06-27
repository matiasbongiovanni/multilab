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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    color: "bg-[#44A148]/10 text-[#44A148]",
    borderColor: "hover:border-[#44A148]/40",
  },
  {
    title: "Compromiso",
    description:
      "Tratamos cada muestra con la responsabilidad que implica: detrás de cada análisis hay una persona que necesita un resultado confiable para tomar decisiones de salud.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    color: "bg-[#44A148]/10 text-[#44A148]",
    borderColor: "hover:border-[#44A148]/40",
  },
  {
    title: "Innovación",
    description:
      "Incorporamos metodologías actualizadas y tecnología de punta para ofrecer diagnósticos más sensibles, específicos y rápidos.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    color: "bg-[#1A2E1A]/10 text-[#1A2E1A]",
    borderColor: "hover:border-[#1A2E1A]/30",
  },
  {
    title: "Accesibilidad",
    description:
      "Creemos que el acceso a un diagnóstico de calidad no debería ser un privilegio. Trabajamos para hacer nuestros servicios accesibles a toda la comunidad.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "bg-[#44A148]/10 text-[#44A148]",
    borderColor: "hover:border-[#44A148]/40",
  },
];

const stats = [
  { value: "5", label: "Áreas de análisis" },
  { value: "+500", label: "Análisis realizados" },
  { value: "100%", label: "Calidad certificada" },
];

export default function QuienesSomosPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[#fcfdfc]">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white to-[#44A148]/5 overflow-hidden"
          aria-label="Quiénes somos — Multilab"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#44A148]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A2E1A]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#44A148]/10 text-[#44A148] text-sm font-bold uppercase tracking-widest shadow-sm border border-[#44A148]/20">
                Quiénes somos
              </span>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A2E1A] leading-tight tracking-tight">
                Un laboratorio <br className="hidden sm:block" /> con propósito
              </h1>
              <p className="text-lg sm:text-xl text-[#1A2E1A]/75 leading-relaxed max-w-2xl mt-2">
                Multilab nació con una convicción simple: que la calidad analítica y el compromiso humano no son excluyentes. Hacemos ciencia de alto nivel, cerca de las personas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Historia */}
        <section className="py-20 bg-white" aria-labelledby="historia-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -32 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <h2 id="historia-heading" className="font-inter text-3xl sm:text-4xl font-bold text-[#1A2E1A] leading-tight tracking-tight">
                  De la investigación a la práctica diagnóstica
                </h2>
                <div className="space-y-4 text-[#1A2E1A]/75 text-lg leading-relaxed">
                  <p>
                    Multilab fue fundado por la Biol. Cynthia Degliangioli con la idea de integrar el rigor académico con la calidez del servicio. Lo que comenzó como un proyecto orientado a la investigación científica aplicada, creció hasta convertirse en un laboratorio de referencia regional en análisis clínicos, veterinarios y ambientales.
                  </p>
                  <p>
                    Hoy contamos con cinco áreas especializadas, equipamiento de última generación y un portal digital que permite a los pacientes acceder a sus resultados de forma segura y en tiempo real.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-4 border-t border-[#1A2E1A]/10">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-1">
                      <span className="font-inter text-4xl font-extrabold text-[#44A148]">{stat.value}</span>
                      <span className="text-sm font-medium text-[#1A2E1A]/60">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 32 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#1A2E1A]/5 to-[#44A148]/5 rounded-[2rem] p-8 sm:p-10 border border-[#1A2E1A]/10 shadow-sm relative overflow-hidden">
                  <svg className="absolute top-0 right-0 text-[#44A148] opacity-10 translate-x-1/3 -translate-y-1/3 w-64 h-64" fill="currentColor" viewBox="0 0 100 100">
                    <path d="M11 18h2v50h-2zM31 18h2v50h-2zM51 18h2v50h-2zM71 18h2v50h-2z" />
                  </svg>
                  
                  <div className="relative z-10">
                    <svg className="w-10 h-10 text-[#44A148] mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-xl sm:text-2xl text-[#1A2E1A] font-medium leading-relaxed mb-8">
                      "Cada análisis que hacemos tiene un impacto real en la vida de alguien. Esa responsabilidad nos mueve a no conformarnos nunca con el estándar mínimo."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-[#44A148] flex items-center justify-center border-2 border-white shadow-sm">
                        <span className="text-white font-bold text-lg">CD</span>
                      </div>
                      <div>
                        <p className="font-inter font-bold text-[#1A2E1A]">Biol. Cynthia Degliangioli</p>
                        <p className="text-sm font-medium text-[#44A148]">Fundadora y Directora Técnica</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-gradient-to-b from-[#1A2E1A]/[0.02] to-transparent" aria-labelledby="valores-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="valores-heading" className="font-inter text-3xl sm:text-4xl font-bold text-[#1A2E1A] tracking-tight">
                Lo que nos define
              </h2>
              <p className="mt-4 text-lg text-[#1A2E1A]/70 max-w-2xl mx-auto">
                Nuestros valores no son solo palabras; son el estándar bajo el cual operamos cada día en nuestro laboratorio.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-white rounded-2xl p-8 border border-[#1A2E1A]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${value.borderColor}`}
                >
                  <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="font-inter text-xl font-bold text-[#1A2E1A] mb-3">{value.title}</h3>
                  <p className="text-[#1A2E1A]/70 leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo / Bio Destacada */}
        <section className="py-24 bg-white" aria-labelledby="equipo-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 id="equipo-heading" className="font-inter text-3xl sm:text-4xl font-bold text-[#1A2E1A] tracking-tight">
                Dirección Técnica
              </h2>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.98 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A2E1A] rounded-[2rem] p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#44A148]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#44A148]/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
              
              <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/10 flex items-center justify-center border-4 border-white/20 shadow-xl relative z-10 backdrop-blur-sm">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="1.5" className="opacity-80">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-12 h-12 bg-[#44A148] rounded-full flex items-center justify-center shadow-lg border-2 border-[#1A2E1A]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left relative z-10">
                <h3 className="font-inter text-2xl md:text-3xl font-bold text-white mb-2">Biol. Cynthia Degliangioli</h3>
                <p className="text-lg text-[#44A148] font-medium mb-6">Fundadora & Directora Técnica</p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Licenciada en Bioquímica con especialización en diagnóstico clínico. Con más de una década de experiencia liderando análisis clínicos, ambientales y veterinarios, mantiene además un perfil activo como docente e investigadora.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {["Bioquímica Clínica", "Investigación", "Docencia Universitaria"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/20 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}