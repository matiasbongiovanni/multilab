import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Laboratorio de Análisis — Multilab",
  description: "Análisis microbiológicos, bromatológicos y de calidad de agua. Resultados con trazabilidad completa bajo estándares certificados.",
};

export default function LaboratorioPage() {
  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      <Navbar />
      
      <main className="pt-32 lg:pt-40">
        {/* Header de Servicio */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#44A148]/10 border border-[#44A148]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-[#44A148]">
                Área de Servicio 02
              </span>
            </div>
            
            <h1 className="font-inter text-4xl lg:text-6xl font-bold text-[#1A2E1A] mb-8 leading-tight">
              Laboratorio de Análisis
            </h1>
            
            <p className="text-xl text-[#1A2E1A]/70 leading-relaxed font-medium">
              Análisis microbiológicos, bromatológicos y de calidad de agua para industrias alimentarias, clínicas y municipios.
            </p>
          </div>
        </div>

        {/* Cuerpo del Servicio */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Descripción Larga */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg text-[#1A2E1A]/80">
                <p>
                  Nuestro laboratorio opera bajo estrictos protocolos de calidad, garantizando resultados precisos y trazables. Brindamos soporte analítico fundamental para industrias alimentarias, clínicas veterinarias y organismos públicos que exigen el máximo rigor técnico.
                </p>
                <p>
                  Cada análisis, desde una muestra clínica hasta un monitoreo ambiental, es supervisado y firmado directamente por nuestra Directora Técnica, garantizando validez legal y técnica ante auditorías.
                </p>
              </div>

              {/* Lista de Análisis */}
              <div className="bg-white rounded-3xl border border-[#1A2E1A]/10 p-8 lg:p-10 shadow-sm">
                <h3 className="font-inter text-xl font-bold text-[#1A2E1A] mb-6">
                  Nuestros servicios analíticos
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Microbiología de alimentos",
                    "Control bromatológico",
                    "Calidad microbiológica de agua",
                    "Análisis veterinarios",
                    "Antibiogramas y cultivos",
                    "Análisis clínicos (sangre/orina)",
                    "Estudios hormonales",
                    "Parasitología clínica"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#1A2E1A]/80">
                      <div className="w-5 h-5 rounded-full bg-[#44A148]/10 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#44A148]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Columna Lateral (Sidebar de Confianza) */}
            <div className="lg:col-span-1">
              <div className="bg-[#1A2E1A] rounded-[2rem] p-8 text-white shadow-xl sticky top-32">
                <h4 className="font-inter font-bold text-lg mb-6 text-[#44A148]">Compromisos Técnicos</h4>
                <ul className="space-y-6">
                  {[
                    { label: "Portal Digital", desc: "Resultados disponibles en tiempo real." },
                    { label: "Aval Profesional", desc: "Firma de la Dirección en cada informe." },
                    { label: "Tiempos Precisos", desc: "Entrega garantizada al solicitar el análisis." }
                  ].map((info) => (
                    <li key={info.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <p className="font-bold text-white text-sm mb-1">{info.label}</p>
                      <p className="text-sm text-white/60">{info.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}