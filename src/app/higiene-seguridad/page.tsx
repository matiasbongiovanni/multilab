import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Higiene y Seguridad Laboral",
  description:
    "Evaluación de riesgos, mediciones ambientales y documentación técnica. Cumplimiento de Ley 19.587 y reglamentaciones vigentes.",
  alternates: { canonical: "/higiene-seguridad" },
};

export default function HigieneSeguridadPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Higiene y Seguridad Laboral"
          subtitle="Área 01"
          description="Evaluación técnica de riesgos laborales, mediciones ambientales y documentación para el cumplimiento normativo."
          longDescription="Realizamos diagnósticos integrales de seguridad e higiene laboral para empresas de todos los sectores. Nuestros informes técnicos tienen validez legal ante el Ministerio de Trabajo, ART y organismos reguladores. Bajo la supervisión de la Lic. Cinthia Degliangioli, cada informe es firmado y avalado por el director técnico responsable."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          }
          color="bg-[oklch(96%_0.022_143)] text-[oklch(42%_0.13_144)]"
          bgGradient="bg-[oklch(98.5%_0.006_143)]"
          analyses={[
            "Mediciones de ruido y vibraciones",
            "Iluminación y ergonomía",
            "Agentes químicos y biológicos en el ambiente de trabajo",
            "Temperatura y humedad",
            "Velocidad del aire",
            "Identificación de puestos de riesgo",
            "Programas de higiene industrial",
            "Elaboración de legajos técnicos",
          ]}
          additionalInfo={[
            "Informes con firma del director técnico habilitado.",
            "Validez legal ante Ministerio de Trabajo y ART.",
            "Adaptados al convenio colectivo de cada actividad.",
          ]}
          ctaText="Solicitar diagnóstico"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
