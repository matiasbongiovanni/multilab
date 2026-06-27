import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Laboratorio — Multilab",
  description: "Análisis de fisicoquímica y microbiología de agua, suelo y aire. Resultados con trazabilidad completa bajo estándares ISO 17025 y Código Alimentario Argentino.",
  alternates: { canonical: "/laboratorio" },
};

const compromisos = [
  { label: "Portal Digital", desc: "Resultados disponibles en tiempo real." },
  { label: "Aval Profesional", desc: "Firma de la Dirección en cada informe." },
  { label: "Tiempos Precisos", desc: "Entrega garantizada al solicitar el análisis." },
];

const sidebar = (
  <div className="rounded-xl p-6 lg:p-7 bg-[#1A2E1A] text-white shadow-xl">
    <h3 className="font-bold text-lg mb-5" style={{ color: "#44A148" }}>
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
          title="Laboratorio"
          subtitle="Área 02"
          description="Datos precisos para decisiones estratégicas. Nuestro laboratorio de fisicoquímica y microbiología combina tecnología de punta con rapidez en los resultados para la caracterización de aguas, suelos y aire."
          longDescription="La calidad de tus procesos comienza con un análisis certero. Te brindamos la información técnica necesaria para optimizar el tratamiento de tus efluentes y garantizar que cada matriz de tu operación cumpla con los estándares de calidad más exigentes según lo establecido en las normas ISO 17025:2017.

Garantía de inocuidad y control biológico total. Analizamos alimentos, cosméticos y recursos hídricos bajo los protocolos del Código Alimentario Argentino (CAA), asegurando que tus productos y procesos estén libres de contaminación. Realizamos análisis de agua, aire y suelo según técnicas del Standard Methods, EPA y normas para la protección de los recursos hídricos; usamos el CAA para alimentos y analizamos efluentes según el Decreto 847/16."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31" />
              <line x1="6" y1="16" x2="18" y2="16" />
            </svg>
          }
          color="bg-[oklch(96%_0.022_143)] text-[oklch(42%_0.13_144)]"
          bgGradient="bg-[oklch(98.5%_0.006_143)]"
          analysisGroups={[
            {
              title: "Laboratorio Fisicoquímica",
              items: [
                "Análisis de agua, aire y suelo",
                "Análisis de efluentes líquidos y sólidos",
                "Muestreos",
              ],
            },
            {
              title: "Laboratorio Microbiología",
              items: [
                "Análisis microbiológico de agua, aire y suelo",
                "Análisis microbiológico de efluentes líquidos y sólidos",
                "Análisis microbiológico de alimentos y cosméticos",
                "Análisis, identificación, clasificación y cuantificación de microorganismos",
                "Análisis de fitoplancton",
                "Análisis de microorganismos filamentosos",
                "Análisis de hongos (mohos, levaduras, etc.)",
              ],
            },
          ]}
          directorName="Biol. Cynthia Degliangioli"
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
