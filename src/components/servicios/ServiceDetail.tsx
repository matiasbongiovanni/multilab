"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  analyses: string[];
  additionalInfo?: string[];
  ctaText?: string;
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  longDescription,
  icon,
  analyses,
  additionalInfo,
  ctaText = "Solicitar análisis",
}: ServiceDetailProps) {
  const reduce = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
        aria-label={`Área: ${title}`}
        style={{ backgroundColor: "oklch(98.5% 0.006 143)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 max-w-2xl"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "oklch(96% 0.022 143)", color: "oklch(42% 0.13 144)" }}
            >
              {icon}
            </div>

            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "oklch(42% 0.13 144)" }}
            >
              {subtitle}
            </span>

            <h1
              className="leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "oklch(13% 0.015 143)",
              }}
            >
              {title}
            </h1>

            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}
            >
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl transition-colors duration-200 shadow-sm min-h-[52px]"
                style={{ backgroundColor: "oklch(42% 0.13 144)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(33% 0.11 144)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(42% 0.13 144)"; }}
              >
                {ctaText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl border transition-colors duration-200 min-h-[52px]"
                style={{
                  color: "oklch(42% 0.13 144)",
                  borderColor: "oklch(91% 0.013 143)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(96% 0.022 143)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              >
                Consultar disponibilidad
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "oklch(99.5% 0.003 143)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Analyses list */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, x: -20 }}
              whileInView={reduce ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="mb-7 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "oklch(13% 0.015 143)",
                }}
              >
                Análisis disponibles
              </h2>

              <ul className="space-y-2.5" role="list">
                {analyses.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={reduce ? {} : { opacity: 0, x: -12 }}
                    whileInView={reduce ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{
                      backgroundColor: "oklch(98.5% 0.006 143)",
                      border: "1px solid oklch(91% 0.013 143)",
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(96% 0.022 143)" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "oklch(42% 0.13 144)" }}>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: "oklch(13% 0.015 143)", fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Description + additional info + CTA */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, x: 20 }}
              whileInView={reduce ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {longDescription && (
                <div>
                  <h2
                    className="mb-4 leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "oklch(13% 0.015 143)",
                    }}
                  >
                    Descripción del servicio
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}>
                    {longDescription}
                  </p>
                </div>
              )}

              {additionalInfo && additionalInfo.length > 0 && (
                <div
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: "oklch(96% 0.022 143)",
                    border: "1px solid oklch(91% 0.013 143)",
                  }}
                >
                  <h3 className="font-semibold text-sm mb-3 flex items-center gap-2" style={{ color: "oklch(42% 0.13 144)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                    Información importante
                  </h3>
                  <ul className="space-y-2">
                    {additionalInfo.map((info, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}>
                        <span className="shrink-0 mt-0.5" style={{ color: "oklch(42% 0.13 144)" }}>·</span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card */}
              <div
                className="rounded-xl p-6 text-white"
                style={{ backgroundColor: "oklch(42% 0.13 144)" }}
              >
                <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  ¿Necesitás más información?
                </h3>
                <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}>
                  Consultanos sobre requisitos, tiempos de entrega y precios de cada análisis.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: "white", color: "oklch(42% 0.13 144)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "oklch(96% 0.022 143)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "white"; }}
                >
                  Ir al formulario
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
