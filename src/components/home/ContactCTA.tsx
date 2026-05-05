"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const contactInfo = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 15z" /></svg>, label: "WhatsApp", value: "Consultanos ahora" },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, label: "Email", value: "contacto@multilab.com.ar" },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: "Horarios", value: "Lun–Vie 8:00–17:00 hs" },
];

export default function ContactCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4CAF50]/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true"
        style={{ maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)" }}>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-grid)" /></svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: CTA */}
          <motion.div initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }} whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="w-16 h-16 mb-8 rounded-2xl bg-[#4CAF50]/10 border border-[#4CAF50]/20 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>
            </div>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              ¿Listo para solicitar tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#81C784]">análisis?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-10 font-light">
              Completá el formulario de contacto y te respondemos en menos de 24 horas para coordinar tu turno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4CAF50] text-white font-bold rounded-2xl hover:bg-[#3d8c40] transition-all duration-300 shadow-[0_0_20px_rgba(76,175,80,0.25)] hover:shadow-[0_0_30px_rgba(76,175,80,0.4)] hover:-translate-y-1">
                Contactar ahora
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/login" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                Acceder a mis estudios
              </Link>
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }} whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item, i) => (
              <motion.div key={item.label} initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }} whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#4CAF50]/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] shrink-0 group-hover:bg-[#4CAF50]/20 transition-colors">{item.icon}</div>
                <div>
                  <p className="text-[11px] font-bold text-white/30 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-white/70 text-sm font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}