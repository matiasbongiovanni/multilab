"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Misión",
    content:
      "Preservar la salud y la seguridad mediante soluciones técnicas y científicas de jerarquía. Nos dedicamos a la prevención de riesgos y al análisis biológico exhaustivo, aplicando estándares de excelencia que garantizan la protección de las personas, la integridad de los alimentos y el equilibrio de los recursos naturales.",
  },
  {
    icon: Eye,
    title: "Visión",
    content:
      "Ser el referente líder en ciencias del diagnóstico y prevención, reconocidos por nuestra capacidad técnica para anticipar riesgos y nuestra contribución al avance de la salud y el bienestar en el ámbito industrial y humano.",
  },
  {
    icon: Award,
    title: "Cultura de excelencia",
    content:
      "La calidad es el puente entre la ciencia y la seguridad. Gestionamos nuestros procesos bajo una estandarización rigurosa que integra la Ley 19.587 y el Código Alimentario Argentino, asegurando trazabilidad absoluta en cada estudio.",
  },
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="nosotros"
      className="py-20 lg:py-28 bg-[#fcfdfc]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-[#44A148]">
                Quiénes somos
              </span>
            </div>

            <h2
              id="about-heading"
              className="font-inter text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight text-[#1A2E1A]"
            >
              Somos Multilab Risk Prevention
            </h2>

            <div className="mt-6 space-y-5 text-[#1A2E1A]/75 leading-relaxed text-lg">
              <p>
                Una organización de vanguardia dedicada a la protección de la vida y la excelencia en servicios analíticos. Nuestra estructura integra la consultoría técnica en Higiene y Seguridad Laboral con un laboratorio especializado en Análisis Ambientales y Microbiología Integral.
              </p>
              <p>
                Con un ADN basado en la I+D en Ciencias y Medicina, operamos bajo una visión sistémica donde la salud ambiental, la inocuidad y el bienestar humano convergen en un diagnóstico único de alta precisión.
              </p>
            </div>

            {/* Director card */}
            <div className="mt-10 flex items-start gap-5 p-6 bg-white rounded-2xl border border-[#1A2E1A]/10 shadow-sm hover:border-[#44A148]/30 transition-all duration-300">
              <div
                className="w-14 h-14 rounded-full bg-[#44A148]/10 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="font-inter text-lg font-bold text-[#44A148]">
                  CD
                </span>
              </div>
              <div>
                <p className="font-inter font-bold text-[#1A2E1A] text-lg">
                  Lic. Cinthia Degliangioli
                </p>
                <p className="text-sm font-semibold text-[#44A148] mt-0.5">
                  Directora Técnica y Fundadora
                </p>
                <p className="text-sm text-[#1A2E1A]/60 mt-2 leading-relaxed">
                  "Cada informe que emitimos cuenta con un respaldo técnico-científico absoluto."
                </p>
              </div>
            </div>

            {/* Photo placeholder (Styled to look premium while empty) */}
            <div className="mt-8 rounded-[2rem] overflow-hidden bg-[#44A148]/5 border-2 border-dashed border-[#44A148]/20 flex flex-col items-center justify-center py-16 px-6 relative group transition-colors hover:bg-[#44A148]/10 hover:border-[#44A148]/40">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 mb-3">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <p className="text-sm font-medium text-[#1A2E1A]/50 text-center">
                [REEMPLAZAR: foto del equipo / instalaciones]
              </p>
              <span className="text-xs font-semibold text-[#1A2E1A]/40 mt-2 uppercase tracking-wider">
                Resolución sugerida: 1200 × 700px
              </span>
            </div>
          </motion.div>

          {/* Right Column — Mission, Vision, Culture */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={reduce ? {} : { opacity: 0, x: 24 }}
                  whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white rounded-2xl border border-[#1A2E1A]/10 p-6 lg:p-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#44A148]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#44A148]/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-[#44A148]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-inter text-xl font-bold text-[#1A2E1A] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[#1A2E1A]/70 leading-relaxed text-sm sm:text-base">
                        {pillar.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Normativa strip */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="rounded-3xl bg-[#1A2E1A] p-7 lg:p-8 shadow-xl relative overflow-hidden mt-2"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#44A148]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              
              <div className="relative z-10">
                <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#44A148] mb-5">
                  Marcos normativos que dominamos
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Ley 19.587",
                    "Cód. Alimentario Argentino",
                    "SENASA",
                    "Res. SRT 295/03",
                    "ISO-compatible",
                    "Normativa provincial ambiental",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] sm:text-xs font-semibold text-white bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}