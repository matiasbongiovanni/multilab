"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutPreview() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 lg:py-28"
      aria-labelledby="about-preview-heading"
      style={{ backgroundColor: "oklch(98.5% 0.006 143)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            aria-hidden="true"
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                aspectRatio: "4/3",
                border: "1px solid oklch(91% 0.013 143)",
              }}
            >
              <Image
                src="/laboratorio.jpg"
                alt="Laboratorio Multilab — Lic. Cinthia Degliangioli"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Credential badge */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.45 }}
              className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-md"
              style={{
                backgroundColor: "oklch(42% 0.13 144)",
                maxWidth: "200px",
              }}
            >
              <p className="text-sm font-semibold text-white leading-snug">
                Lic. Cinthia Degliangioli
              </p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>
                Directora Técnica
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <span
              className="text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "oklch(42% 0.13 144)" }}
            >
              Quiénes somos
            </span>

            <h2
              id="about-preview-heading"
              className="leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "oklch(13% 0.015 143)",
              }}
            >
              La directora
              <br />
              <span style={{ color: "oklch(42% 0.13 144)" }}>es la garantía.</span>
            </h2>

            <p
              className="text-base leading-relaxed max-w-[55ch]"
              style={{ color: "oklch(44% 0.012 143)", fontFamily: "var(--font-body)" }}
            >
              Multilab nació de la convicción de que el rigor analítico y el
              compromiso humano no son incompatibles. Cada resultado lleva la
              firma de la Lic. Cinthia Degliangioli, licenciada en bioquímica con
              más de 10 años de experiencia en análisis clínicos, ambientales y
              de seguridad laboral.
            </p>

            <blockquote
              className="text-base leading-relaxed italic pl-4"
              style={{
                color: "oklch(13% 0.015 143)",
                borderLeft: "3px solid oklch(42% 0.13 144)",
                fontFamily: "var(--font-body)",
              }}
            >
              "Cada análisis que hacemos tiene impacto en la vida de alguien.
              Esa responsabilidad nos mueve a no conformarnos con el estándar
              mínimo."
            </blockquote>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Bioquímica", "Higiene industrial", "Docencia universitaria"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg"
                  style={{
                    backgroundColor: "oklch(96% 0.022 143)",
                    color: "oklch(42% 0.13 144)",
                    border: "1px solid oklch(91% 0.013 143)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/quienes-somos"
              className="inline-flex items-center gap-2 text-sm font-semibold self-start transition-colors duration-200"
              style={{ color: "oklch(42% 0.13 144)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(33% 0.11 144)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "oklch(42% 0.13 144)"; }}
            >
              Conocer más sobre Multilab
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
