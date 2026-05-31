"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Hero">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      {/* Green overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, rgba(27,94,32,0.88) 0%, rgba(10,40,10,0.93) 100%)" }}
        aria-hidden="true"
      />
      {/* Ambient lights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] -left-40 w-[500px] h-[500px] bg-[#4CAF50]/8 rounded-full blur-[200px] animate-glow-drift" />
        <div className="absolute top-[60%] -right-32 w-[400px] h-[400px] bg-[#2E7D32]/6 rounded-full blur-[180px] animate-glow-drift-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#81C784]" />
              Desde 2014 — Córdoba, Argentina
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Soluciones técnicas para el{" "}
              <span className="text-[#81C784]">cumplimiento normativo</span>{" "}
              de tu empresa
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
              Análisis de laboratorio, mediciones de higiene y seguridad y monitoreo ambiental con trazabilidad certificada.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2E7D32] hover:bg-[#4CAF50] text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
              >
                Explorar soluciones
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/informes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/50 text-white hover:bg-white hover:text-[#2E7D32] font-semibold rounded-xl transition-all duration-200 text-sm"
                >
                  Acceder a mis informes
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 bg-[#1B5E20]/80 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
            {[
              { icon: "🔬", text: "+20 años de experiencia técnica" },
              { icon: "📋", text: "Informes con validez legal" },
              { icon: "🏭", text: "Cobertura nacional" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-white/85 text-sm font-medium">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
