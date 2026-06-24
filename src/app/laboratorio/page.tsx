import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Microbiología Integral — Multilab",
  description: "Análisis microbiológicos, bromatológicos y de calidad de agua. Resultados con trazabilidad completa bajo estándares certificados.",
  alternates: { canonical: "/laboratorio" },
};

const compromisos = [
  { label: "Portal Digital", desc: "Resultados disponibles en tiempo real." },
  { label: "Aval Profesional", desc: "Firma de la Dirección en cada informe." },
  { label: "Tiempos Precisos", desc: "Entrega garantizada al solicitar el análisis." },
];

const sidebar = (
  <div className="rounded-xl p-6 lg:p-7 bg-[#1A2E1A] text-white shadow-xl">
    <h3 className="font-semibold text-lg mb-5" style={{ fontFamily: "var(--font-display)", color: "#44A148" }}>
      Compromisos Técnicos
    </h3>
    <ul className="space-y-5">
      {compromisos.map((info) => (
        <li key={info.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
          <p className="font-bold text-white text-sm mb-1">{info.label}</p>
          <p className="text-sm text-white/60">{info.desc}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default function LaboratorioPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Microbiología Integral"
          subtitle="Área 02"
          description="Análisis microbiológicos, bromatológicos y de calidad de agua para industrias alimentarias, clínicas y municipios."
          longDescription="Nuestro laboratorio opera bajo estrictos protocolos de calidad, garantizando resultados precisos y trazables. Brindamos soporte analítico fundamental para industrias alimentarias, clínicas veterinarias y organismos públicos que exigen el máximo rigor técnico. Cada análisis, desde una muestra clínica hasta un monitoreo ambiental, es supervisado y firmado directamente por nuestra Directora Técnica, garantizando validez legal y técnica ante auditorías."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31" />
              <line x1="6" y1="16" x2="18" y2="16" />
            </svg>
          }
          color="bg-[oklch(96%_0.022_143)] text-[oklch(42%_0.13_144)]"
          bgGradient="bg-[oklch(98.5%_0.006_143)]"
          analyses={[
            "Microbiología de alimentos",
            "Control bromatológico",
            "Calidad microbiológica de agua",
            "Análisis veterinarios",
            "Antibiogramas y cultivos",
            "Análisis clínicos (sangre/orina)",
            "Estudios hormonales",
            "Parasitología clínica",
          ]}
          additionalInfo={[
            "Informes con firma del director técnico habilitado.",
            "Validez legal ante organismos reguladores y auditorías.",
            "Trazabilidad completa bajo estándares certificados.",
          ]}
          ctaText="Solicitar análisis"
          heroImage="/images/servicios/microbiologia-integral.jpg"
          sidebar={sidebar}
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
