import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Control Ambiental y Medioambiente",
  description:
    "Monitoreo de efluentes, análisis de agua y muestreo de suelos. Informes técnicos para organismos públicos e industrias.",
  alternates: { canonical: "/medioambiente" },
};

export default function MedioambientePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Medioambiente"
          subtitle="Área 03"
          description="Monitoreo de efluentes, análisis de agua superficial y subterránea, y muestreo de suelos para organismos públicos e industrias."
          longDescription="Realizamos estudios ambientales con validez técnica para presentar ante autoridades provinciales y nacionales. Nuestros informes de calidad de agua, monitoreo de efluentes y análisis de suelos son utilizados por municipios, industrias y desarrolladoras inmobiliarias en cumplimiento de la normativa ambiental vigente."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          }
          color="bg-[oklch(96%_0.022_143)] text-[oklch(42%_0.13_144)]"
          bgGradient="bg-[oklch(98.5%_0.006_143)]"
          analyses={[
            "Calidad físico-química y microbiológica de agua potable",
            "Análisis de agua superficial y subterránea",
            "Monitoreo de efluentes industriales",
            "Muestreo y análisis de suelos contaminados",
            "Control de napas freáticas",
            "Estudios para habilitaciones municipales",
            "Informes técnicos para organismos reguladores",
          ]}
          additionalInfo={[
            "Informes con firma del director técnico habilitado.",
            "Validez ante autoridades provinciales y nacionales.",
            "Coordinamos muestreo en campo según normativa vigente.",
          ]}
          ctaText="Solicitar monitoreo"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
