"use client";

import Link from "next/link";
import Image from "next/image";
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
  heroImage?: string;
  sidebar?: React.ReactNode;
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
  heroImage,
  sidebar,
}: ServiceDetailProps) {
  const reduce = useReducedMotion();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#fcfdfc]"
        aria-label={`Área: ${title}`}
      >
        {/* Glow decorativo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#44A148]/6 rounded-full blur-[180px] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={heroImage ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" : ""}>
            {/* Texto */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={heroImage ? "flex flex-col gap-5" : "flex flex-col gap-5 max-w-2xl"}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#44A148]">
                  {subtitle}
                </span>
              </div>

              {/* Icono */}
              <div className="w-14 h-14 rounded-2xl bg-[#44A148]/10 border border-[#44A148]/20 flex items-center justify-center text-[#44A148]">
                {icon}
              </div>

              <h1
                className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#1A2E1A]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h1>

              <p className="text-lg text-[#1A2E1A]/70 leading-relaxed max-w-lg">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#44A148] text-white font-bold text-sm shadow-sm transition-all duration-300 hover:bg-[#38853b] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#44A148]/25 min-h-[52px]"
                >
                  {ctaText}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#1A2E1A]/10 bg-white text-[#1A2E1A] font-bold text-sm transition-all duration-300 hover:border-[#44A148]/40 hover:-translate-y-0.5 hover:shadow-md min-h-[52px]"
                >
                  Consultar disponibilidad
                </Link>
              </div>
            </motion.div>

            {/* Foto */}
            {heroImage && (
              <motion.div
                initial={reduce ? {} : { opacity: 0, scale: 0.97 }}
                animate={reduce ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-[#1A2E1A]/5"
              >
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className="object-cover object-[50%_75%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Badge flotante de dirección técnica */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-[#1A2E1A]/5">
                  <span className="w-2 h-2 rounded-full bg-[#44A148] shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A2E1A]/40 leading-none mb-1">
                      Dirección técnica
                    </p>
                    <p className="text-sm font-bold text-[#1A2E1A] leading-none">
                      Lic. Cinthia Degliangioli
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Análisis disponibles */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, x: -20 }}
              whileInView={reduce ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2E1A] mb-7 leading-tight">
                Análisis disponibles
              </h2>

              <ul className="grid sm:grid-cols-2 gap-3" role="list">
                {analyses.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={reduce ? {} : { opacity: 0, y: 10 }}
                    whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fcfdfc] border border-[#1A2E1A]/8 hover:border-[#44A148]/30 transition-colors duration-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#44A148]/10 flex items-center justify-center shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm text-[#1A2E1A]/80 leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Descripción + info + CTA + sidebar */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, x: 20 }}
              whileInView={reduce ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {longDescription && (
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1A2E1A] mb-4 leading-tight">
                    Descripción del servicio
                  </h2>
                  <p className="text-[#1A2E1A]/70 leading-relaxed">
                    {longDescription}
                  </p>
                </div>
              )}

              {additionalInfo && additionalInfo.length > 0 && (
                <div className="rounded-2xl p-6 bg-[#44A148]/8 border border-[#44A148]/15">
                  <h3 className="font-bold text-sm text-[#1A2E1A] mb-3 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                    Información importante
                  </h3>
                  <ul className="space-y-2.5">
                    {additionalInfo.map((info, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#1A2E1A]/70 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#44A148] shrink-0" aria-hidden="true" />
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card oscura */}
              <div className="relative overflow-hidden rounded-2xl p-7 bg-[#1A2E1A] text-white shadow-xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#44A148]/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2">¿Necesitás más información?</h3>
                  <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    Consultanos sobre requisitos, tiempos de entrega y precios de cada análisis.
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg bg-white text-[#1A2E1A] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Ir al formulario
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {sidebar}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
