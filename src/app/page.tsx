import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import BrandSlider from "@/components/home/BrandSlider";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutPreview from "@/components/home/AboutPreview";
import ProcessSteps from "@/components/home/ProcessSteps";
import FAQBot from "@/components/home/FAQBot";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://multilab.com.ar/#organization",
  name: "Multilab",
  description:
    "Laboratorio de prevención de riesgos. Higiene y Seguridad Laboral, Laboratorio de Análisis y Medioambiente. Dirigido por la Lic. Cinthia Degliangioli.",
  url: "https://multilab.com.ar",
  logo: "https://multilab.com.ar/Logo-Multilab.webp",
  founder: {
    "@type": "Person",
    name: "Cinthia Degliangioli",
    jobTitle: "Directora Técnica",
  },
  foundingDate: "2014",
  medicalSpecialty: [
    "OccupationalMedicine",
    "EnvironmentalHealth",
    "ClinicalLaboratory",
  ],
  availableService: [
    { "@type": "Service", name: "Higiene y Seguridad Laboral" },
    { "@type": "MedicalTest", name: "Laboratorio de Análisis" },
    { "@type": "Service", name: "Control Ambiental y Medioambiente" },
  ],
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="flex flex-col w-full">
        <Hero />
        <BrandSlider />
        <ServicesGrid />
        <AboutPreview />
        <ProcessSteps />
        <FAQBot />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
