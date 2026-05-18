import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Laboratorio de Análisis",
  description:
    "Análisis microbiológicos, bromatológicos y de calidad de agua. Resultados con trazabilidad completa.",
  alternates: { canonical: "/laboratorio" },
};

export default function LaboratorioPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Laboratorio de Análisis"
          subtitle="Área 02"
          description="Análisis microbiológicos, bromatológicos y de calidad de agua para industrias alimentarias, clínicas y municipios."
          longDescription="Nuestro laboratorio realiza análisis de precisión bajo protocolos certificados. Trabajamos con industrias alimentarias, clínicas, veterinarias y organismos públicos que requieren resultados confiables y trazables. Cada análisis es supervisado por la Lic. Cinthia Degliangioli."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31l6.4 9.6A2 2 0 0 1 18.73 22H5.27a2 2 0 0 1-1.66-3.09L10 9.31" />
              <line x1="6" y1="16" x2="18" y2="16" />
            </svg>
          }
          color="bg-[oklch(96%_0.022_143)] text-[oklch(42%_0.13_144)]"
          bgGradient="bg-[oklch(99.5%_0.003_143)]"
          analyses={[
            "Microbiología de alimentos: recuentos, patógenos, hongos",
            "Control bromatológico para industria alimentaria",
            "Calidad microbiológica del agua potable",
            "Análisis veterinarios: hematología y bioquímica",
            "Antibiogramas y cultivos",
            "Análisis clínicos: hemograma, glucemia, perfil lipídico",
            "Estudios hormonales",
            "Parasitología clínica y veterinaria",
          ]}
          additionalInfo={[
            "Resultados disponibles en el portal de informes.",
            "Firma técnica del director responsable en cada informe.",
            "Tiempos de entrega confirmados al solicitar el análisis.",
          ]}
          ctaText="Solicitar análisis"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
