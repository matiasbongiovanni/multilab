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
      className="py-20 lg:py-28 bg-[#F4F4F1]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B5E20]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Quiénes somos
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-[2.8rem] leading-tight text-[#1C1917]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Somos Multilab Risk Prevention
            </h2>

            <div className="mt-6 space-y-5 text-[#6B7280] leading-relaxed">
              <p>
                Una organización de vanguardia dedicada a la protección de la vida y la excelencia en servicios analíticos. Nuestra estructura integra la consultoría técnica en Higiene y Seguridad Laboral con un laboratorio especializado en Análisis Ambientales y Microbiología Integral.
              </p>
              <p>
                Con un ADN basado en la I+D en Ciencias y Medicina, operamos bajo una visión sistémica donde la salud ambiental, la inocuidad y el bienestar humano convergen en un diagnóstico único de alta precisión.
              </p>
            </div>

            {/* Director card */}
            <div className="mt-10 flex items-start gap-5 p-5 bg-white rounded-xl border border-[#E5E7EB]">
              <div
                className="w-14 h-14 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span
                  className="text-lg font-bold text-[#2E7D32]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  CD
                </span>
              </div>
              <div>
                <p
                  className="font-bold text-[#1C1917]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Lic. Cinthia Degliangioli
                </p>
                <p className="text-sm text-[#6B7280] mt-0.5">
                  Directora Técnica y Fundadora · Multilab Risk Prevention
                </p>
                <p className="text-xs text-[#9CA3AF] mt-2">
                  Cada informe firmado con respaldo técnico-científico sólido.
                </p>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden bg-[#E5E7EB] border border-[#E5E7EB] flex items-center justify-center py-14">
              <p className="text-sm text-[#9CA3AF] text-center px-6">
                [REEMPLAZAR: foto del equipo / instalaciones del laboratorio]
                <br />
                <span className="text-xs">Resolución sugerida: 1200 × 700px</span>
              </p>
            </div>
          </motion.div>

          {/* Right — Mission, Vision, Culture */}
          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={reduce ? {} : { opacity: 0, x: 24 }}
                  whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#2E7D32]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-[#1C1917] mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
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
              className="rounded-2xl bg-[#1C1917] p-6 lg:p-7"
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Marcos normativos que dominamos
              </p>
              <div className="flex flex-wrap gap-2">
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
                    className="text-[11px] font-medium text-white/70 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
