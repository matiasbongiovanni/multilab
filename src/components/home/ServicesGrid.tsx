"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const verticales = [
  {
    num: "01",
    title: "Higiene y Seguridad",
    subtitle: "Laboral",
    href: "/higiene-seguridad",
    description:
      "Evaluación de riesgos, mediciones ambientales y documentación técnica para empresas que necesitan cumplir con la Ley 19.587 y sus reglamentaciones. Diagnóstico, plan de acción e informes certificados.",
    items: ["Mediciones de ruido y vibraciones", "Iluminación y ergonomía", "Agentes químicos y biológicos", "Programas de higiene industrial"],
  },
  {
    num: "02",
    title: "Laboratorio",
    subtitle: "de Análisis",
    href: "/laboratorio",
    description:
      "Análisis microbiológicos, bromatológicos y de calidad de agua para industrias alimentarias, clínicas, veterinarias y municipios. Resultados con trazabilidad completa y firma del director técnico.",
    items: ["Microbiología de alimentos y agua", "Control bromatológico", "Análisis veterinarios", "Hematología y bioquímica clínica"],
  },
  {
    num: "03",
    title: "Medioambiente",
    subtitle: "y Control Ambiental",
    href: "/medioambiente",
    description:
      "Monitoreo de efluentes, muestreo de suelos y análisis de agua para organismos públicos, industrias y desarrollos inmobiliarios. Informes técnicos avalados para presentación ante autoridades.",
    items: ["Calidad de agua superficial y subterránea", "Monitoreo de efluentes industriales", "Muestreo y análisis de suelos", "Informes ambientales para organismos"],
  },
];

export default function ServicesGrid() {
  const reduce = useReducedMotion();

  return (
    <section
      id="servicios"
      className="relative py-20 lg:py-28"
      aria-labelledby="servicios-heading"
      style={{ backgroundColor: "oklch(99.5% 0.003 143)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "oklch(42% 0.13 144)" }}
          >
            Tres áreas de especialización
          </span>
          <h2
            id="servicios-heading"
            className="mt-3 leading-[0.95] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "oklch(13% 0.015 143)",
            }}
          >
            Prevención técnica
            <br />
            de riesgos.
          </h2>
        </motion.div>

        {/* Verticales — numbered editorial strips */}
        <div style={{ borderTop: "1px solid oklch(91% 0.013 143)" }}>
          {verticales.map((v, i) => (
            <motion.div
              key={v.num}
              initial={reduce ? {} : { opacity: 0, y: 24 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderBottom: "1px solid oklch(91% 0.013 143)" }}
            >
              <div
                className={`grid gap-8 py-10 lg:py-14 ${
                  i === 1
                    ? "lg:grid-cols-[1fr_2fr_auto]"
                    : i === 2
                    ? "lg:grid-cols-[auto_1fr_2fr]"
                    : "lg:grid-cols-[auto_2fr_1fr]"
                }`}
              >
                {/* Row 0 & 2: number first */}
                {i !== 1 && (
                  <div className={`flex items-start ${i === 2 ? "lg:order-1" : ""}`}>
                    <span
                      className="font-semibold tabular-nums"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        color: "oklch(42% 0.13 144)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {v.num}
                    </span>
                  </div>
                )}

                {/* Title block */}
                <div className={`flex flex-col gap-2 ${i === 1 ? "lg:order-1" : i === 2 ? "lg:order-2" : ""}`}>
                  <Link href={v.href} className="group inline-block">
                    <h3
                      className="leading-[0.95] tracking-[-0.02em] group-hover:opacity-80 transition-opacity duration-200"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                        color: "oklch(13% 0.015 143)",
                      }}
                    >
                      {v.title}
                      <br />
                      <span style={{ color: "oklch(42% 0.13 144)" }}>{v.subtitle}</span>
                    </h3>
                  </Link>
                </div>

                {/* Row 1: number between title and description */}
                {i === 1 && (
                  <div className="hidden lg:flex items-start justify-center">
                    <span
                      className="font-semibold tabular-nums"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        color: "oklch(42% 0.13 144)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {v.num}
                    </span>
                  </div>
                )}

                {/* Description + items + CTA */}
                <div className={`flex flex-col gap-5 ${i === 2 ? "lg:order-3" : ""}`}>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}
                  >
                    {v.description}
                  </p>

                  <ul className="space-y-1.5">
                    {v.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm"
                        style={{ color: "oklch(13% 0.015 143)", fontFamily: "var(--font-body)" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: "oklch(42% 0.13 144)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={v.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 self-start"
                    style={{ color: "oklch(42% 0.13 144)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(33% 0.11 144)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(42% 0.13 144)"; }}
                  >
                    Ver área completa
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
