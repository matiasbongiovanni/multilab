import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetail from "@/components/servicios/ServiceDetail";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Medio Ambiente — Multilab",
  description:
    "Estudios de impacto ambiental, monitoreo de efluentes, análisis de agua y suelo. Cumplimiento normativo municipal y provincial.",
  alternates: { canonical: "/medioambiente" },
};

export default function MedioambientePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServiceDetail
          title="Medio Ambiente"
          subtitle="Área 03"
          description="Soluciones sostenibles para empresas que miran al futuro. No dejes que la burocracia ambiental detenga tu crecimiento. Te ofrecemos el respaldo técnico necesario para cumplir con todas las normativas municipales y provinciales: desde estudios de impacto ambiental hasta la remediación de suelos, para que operes con la tranquilidad de proteger el entorno y cumplir con la ley."
          longDescription="Realizamos estudios ambientales con validez técnica para presentar ante autoridades provinciales y nacionales. Nuestros informes de calidad de agua, monitoreo de efluentes y análisis de suelos son utilizados por municipios, industrias y desarrolladoras inmobiliarias en cumplimiento de la normativa ambiental vigente."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          }
          color="bg-[oklch(96%_0.022_143)] text-[oklch(42%_0.13_144)]"
          bgGradient="bg-[oklch(98.5%_0.006_143)]"
          analysisGroups={[
            {
              items: [
                "Relevamientos ambientales",
                "Informes y estudios de impacto ambiental (Decreto N° 3290/03)",
                "Matrices de impacto ambiental",
                "Planes de recuperación y remediación de suelos",
                "Certificados ambientales municipales y provinciales",
              ],
            },
            {
              title: "Mediciones ambientales",
              ordered: true,
              items: [
                "Ruido",
                "Material particulado",
                "Caracterización de suelo",
                "Análisis de contaminantes y calidad en todo tipo de matriz",
              ],
            },
          ]}
          directorName="Biol. Cynthia Degliangioli"
          specialistLabel="Especialista"
          specialistName="Ing. Orlando A. Degliangioli"
          ctaText="Solicitar monitoreo"
          heroImage="/images/servicios/laboratorio-ambiental.jpg"
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
