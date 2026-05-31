"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PortalCTA() {
  return (
    <section className="bg-[#f0faf0] py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[#c8e6c9] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left shadow-sm"
        >
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e1a] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Accedé a tus informes en cualquier momento
            </h2>
            <p className="text-[#3d5c3d] mb-6 leading-relaxed">
              Todos tus análisis e informes técnicos, organizados y disponibles online desde tu portal de clientes.
            </p>
            <Link
              href="/informes"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold rounded-xl transition-colors text-sm"
            >
              Ingresar al portal
            </Link>
          </div>
          <div className="shrink-0 opacity-20">
            <ShieldCheck size={80} className="text-[#2E7D32]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
