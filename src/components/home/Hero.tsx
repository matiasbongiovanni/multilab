"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

<<<<<<< HEAD
=======
/* ─────────────────────────────────────────────
   HERO — Profesional con colores de marca
   Foto dark + overlay verde oscuro · MULTILAB white
   ───────────────────────────────────────────── */

// Foto: profesional de laboratorio / inspección ambiental
// [REEMPLAZAR con foto propia del equipo — 1920×1080px WebP]
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1581093458791-9d9e15ee4b2d?auto=format&fit=crop&w=1920&q=85";

>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        };

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#fcfdfc]"
      aria-label="Inicio — Multilab Risk Prevention"
    >
<<<<<<< HEAD
      {/* ── Background Photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Multilab-Fondo-3.jpeg" // Imagen modificada
          alt="Equipo profesional de Multilab trabajando en el laboratorio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-left"
        />
      </div>

      {/* ── Responsive Gradient Overlay ── 
          Móvil: Gradiente de abajo hacia arriba (legibilidad del texto apilado).
          Desktop: Gradiente de izquierda a derecha (legibilidad del texto lateral). 
      */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t lg:bg-gradient-to-r from-[#fcfdfc] via-[#fcfdfc]/90 lg:via-[#fcfdfc]/80 to-transparent"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-12 lg:pt-32 lg:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            
            {/* Badge Premium */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-6 backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#44A148] animate-pulse" />
                <span
                  className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#44A148]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Laboratorio de análisis por Risk Prevention
=======
      {/* ── Foto de fondo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_PHOTO}
          alt="Profesional técnico de Multilab Risk Prevention realizando análisis"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.03]"
        />
      </div>

      {/* ── Overlay oscuro con tinte de marca verde ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(27,94,32,0.88) 0%, rgba(30,60,30,0.82) 45%, rgba(15,35,15,0.72) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Ruido sutil para textura ── */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      {/* ── Línea de acento verde marca ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[10] bg-[#2E7D32]" aria-hidden="true" />

      {/* ── Contenido ── */}
      <div className="relative z-10 flex-1 flex items-center pt-20 lg:pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-[640px]">

            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" aria-hidden="true" />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Laboratorio de análisis · Risk Prevention
>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
                </span>
              </div>
            </motion.div>

            {/* H1 — MULTILAB */}
<<<<<<< HEAD
            <motion.h1 {...fadeUp(0.1)}>
              <span
                className="block text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tight text-[#1A2E1A]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                MULTI
                <span className="text-[#44A148]">LAB</span>
=======
            <motion.h1 {...fadeUp(0.08)}>
              <span
                className="block text-[clamp(4.5rem,11vw,8.5rem)] font-black leading-[0.88] tracking-[-0.025em] text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                MULTI
                <span
                  className="text-[#4CAF50]"
                  style={{ WebkitTextStroke: "0px" }}
                >
                  LAB
                </span>
>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
              </span>
            </motion.h1>

            {/* Línea divisora */}
            <motion.div {...fadeUp(0.14)}>
              <div className="w-14 h-[3px] bg-[#2E7D32] rounded-full mt-6 mb-6" />
            </motion.div>

            {/* Subtítulo */}
            <motion.p
<<<<<<< HEAD
              {...fadeUp(0.2)}
              className="mt-6 text-xl lg:text-2xl font-medium text-[#1A2E1A]/80 leading-snug"
            >
              Calidad, prevención y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44A148] to-[#1A2E1A] font-extrabold">
=======
              {...fadeUp(0.18)}
              className="text-lg lg:text-xl text-white/75 font-light leading-snug"
            >
              Calidad, condición y{" "}
              <span className="text-white font-semibold">
>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
                diagnóstico avanzado
              </span>
            </motion.p>

            {/* Body */}
            <motion.p
<<<<<<< HEAD
              {...fadeUp(0.3)}
              className="mt-5 text-base sm:text-lg leading-relaxed text-[#1A2E1A]/70 max-w-lg font-medium"
=======
              {...fadeUp(0.24)}
              className="mt-5 text-[15px] leading-relaxed text-white/55 max-w-[500px]"
>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
            >
              Integramos la consultoría técnica en Higiene y Seguridad Laboral con un laboratorio especializado en Análisis Ambientales y Microbiología Integral. Resultados con trazabilidad absoluta.
            </motion.p>

<<<<<<< HEAD
            {/* CTAs Interactivas */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="#contacto"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#44A148] text-white font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#38853b] hover:-translate-y-1 shadow-[0_0_20px_rgba(68,161,72,0.25)] hover:shadow-[0_8px_25px_rgba(68,161,72,0.4)]"
              >
                Solicitar cotización
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
=======
            {/* Normativa chips */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2 mt-7">
              {["Ley 19.587", "Cód. Alimentario Arg.", "ISO-compatible"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 border border-white/15 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.36)}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#2E7D32] hover:bg-[#388E3C] text-white font-semibold text-sm transition-all duration-200 shadow-[0_4px_24px_rgba(46,125,50,0.4)]"
              >
                Solicitar cotización
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
              </Link>
              
              <Link
                href="/mis-estudios"
<<<<<<< HEAD
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-[#1A2E1A]/10 bg-white/60 backdrop-blur-md text-[#1A2E1A] font-bold text-sm sm:text-base transition-all duration-300 hover:border-[#44A148]/40 hover:bg-white hover:-translate-y-1 hover:shadow-lg"
=======
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200 backdrop-blur-sm"
>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
              >
                Ver mis informes
              </Link>
            </motion.div>

            {/* Directora técnica trust signal */}
            <motion.div
              {...fadeUp(0.44)}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#2E7D32]/60 border border-white/20 flex items-center justify-center shrink-0">
                <ShieldCheck size={14} className="text-white" aria-hidden="true" />
              </div>
              <p className="text-[13px] text-white/45">
                Dirigido por{" "}
                <span className="text-white/70 font-medium">
                  Lic. Cinthia Degliangioli
                </span>
                {" "}— Directora Técnica desde 2014
              </p>
            </motion.div>

          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* ── Scroll indicator interactivo ── */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 z-20 flex justify-center sm:justify-start sm:left-auto sm:right-auto sm:ml-8 lg:ml-12 max-w-7xl mx-auto w-full px-4"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-[9px] uppercase tracking-[0.25em] text-[#1A2E1A]/40 font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Scroll
            </span>
            {/* Píldora de scroll animada */}
            <div className="w-[22px] h-[36px] rounded-full border-2 border-[#1A2E1A]/20 flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-[#44A148] rounded-full"
              />
            </div>
=======
      {/* ── Stats strip bottom ── */}
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 20 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { v: "+10 años", l: "de experiencia" },
              { v: "4 ejes", l: "de servicio integrado" },
              { v: "100%", l: "trazabilidad certificada" },
            ].map((s) => (
              <div key={s.v} className="px-6 py-5 flex flex-col gap-0.5">
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.v}
                </span>
                <span className="text-[11px] text-white/45 font-medium">{s.l}</span>
              </div>
            ))}
>>>>>>> 010214f43ab27ae8001ba2391b543ab0feeb46f1
          </div>
        </div>
      </motion.div>
    </section>
  );
}