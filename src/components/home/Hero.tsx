"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, FlaskConical, Leaf } from "lucide-react";

const trustedBy = [
  { label: "Ledesma SAIC", icon: "🌿" },
  { label: "Cia. Cervecera Argentina", icon: "🍺" },
  { label: "Canteras Diquecito", icon: "🏗️" },
];

const services = [
  {
    icon: ShieldCheck,
    label: "Higiene y Seguridad Laboral",
    color: "#2E7D32",
    bg: "#DCFCE7",
  },
  {
    icon: FlaskConical,
    label: "Laboratorio de Análisis",
    color: "#1B5E20",
    bg: "#BBF7D0",
  },
  {
    icon: Leaf,
    label: "Control Ambiental",
    color: "#166534",
    bg: "#DCFCE7",
  },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        };

  return (
    <section
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-[#FAFAF8] overflow-hidden"
      aria-label="Inicio — Multilab Risk Prevention"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1C1917 1px, transparent 1px), linear-gradient(to bottom, #1C1917 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      {/* Green accent top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#2E7D32] opacity-[0.04] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div {...fade(0)}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B5E20]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Desde 2014 · Córdoba, Argentina
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1 {...fade(0.08)}>
              <span
                className="block text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.0] tracking-[-0.03em] text-[#1C1917]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Protegemos la salud.
              </span>
              <span
                className="block text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.0] tracking-[-0.03em] text-[#2E7D32] mt-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Certificamos la seguridad.
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div {...fade(0.15)}>
              <div className="w-16 h-[3px] bg-[#2E7D32] rounded-full mt-7 mb-7" />
            </motion.div>

            {/* Subhead */}
            <motion.p
              {...fade(0.2)}
              className="text-lg text-[#6B7280] leading-relaxed"
            >
              Higiene y Seguridad Laboral, Laboratorio de Análisis, Control Ambiental e I+D para empresas que no pueden permitirse fallar.
            </motion.p>

            {/* Normativa badges */}
            <motion.div {...fade(0.26)} className="flex flex-wrap gap-2 mt-6">
              {["Ley 19.587", "Cód. Alimentario Arg.", "ISO-compatible"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-[#1B5E20] bg-[#DCFCE7] border border-[#BBF7D0] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fade(0.33)}
              className="flex flex-col sm:flex-row gap-3 mt-10"
            >
              <Link
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 text-base"
              >
                Solicitar cotización
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/mis-estudios"
                className="inline-flex items-center justify-center gap-2 border border-[#E5E7EB] hover:border-[#2E7D32] bg-white hover:bg-[#DCFCE7] text-[#1C1917] font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 text-base"
              >
                Ver mis resultados
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              {...fade(0.4)}
              className="mt-8 text-sm text-[#9CA3AF]"
            >
              Directora Técnica:{" "}
              <span className="text-[#6B7280] font-medium">
                Lic. Cinthia Degliangioli
              </span>
            </motion.p>
          </div>

          {/* Right: visual */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, x: 30 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                })}
            className="relative"
          >
            {/* Main image placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden bg-[#F4F4F1] border border-[#E5E7EB]"
              style={{ aspectRatio: "4/3" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-4">
                  <FlaskConical size={28} className="text-[#2E7D32]" />
                </div>
                <p className="text-sm font-medium text-[#9CA3AF]">
                  [REEMPLAZAR: foto del laboratorio / equipo técnico]
                </p>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Resolución sugerida: 1200 × 900px · formato WebP
                </p>
              </div>
            </div>

            {/* Floating card — Director */}
            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 20, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: { duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
                  })}
              className="absolute -bottom-5 -left-5 lg:-left-8 bg-white border border-[#E5E7EB] rounded-xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[200px]"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-[#2E7D32]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1917] leading-tight">
                    Lic. Cinthia Degliangioli
                  </p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">
                    Directora Técnica
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — Years */}
            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: -20, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    transition: { duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] },
                  })}
              className="absolute -top-5 -right-5 lg:-right-6 bg-[#2E7D32] text-white rounded-xl p-4 shadow-[0_8px_30px_rgba(46,125,50,0.25)]"
            >
              <p
                className="text-3xl font-bold leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +10
              </p>
              <p className="text-[11px] font-medium mt-1 opacity-90">
                años de experiencia
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Service chips */}
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
              })}
          className="mt-16 lg:mt-20 flex flex-wrap gap-3"
          aria-label="Áreas de servicio"
        >
          {services.map(({ icon: Icon, label, color, bg }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[#E5E7EB] bg-white"
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                style={{ background: bg }}
              >
                <Icon size={14} style={{ color }} aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-[#1C1917]">
                {label}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[#E5E7EB] bg-white">
            <div className="w-7 h-7 rounded-md bg-[#DCFCE7] flex items-center justify-center shrink-0">
              <span className="text-[#2E7D32] text-xs font-bold">I+D</span>
            </div>
            <span className="text-sm font-medium text-[#1C1917]">
              I+D en Ciencias y Medicina
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
