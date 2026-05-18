import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import VerticalsBlock from "@/components/home/VerticalsBlock";
import AboutPreview from "@/components/home/AboutPreview";
import InstitutionalVideo from "@/components/home/InstitutionalVideo";
import FAQAccordion from "@/components/home/FAQAccordion";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://multilab.vercel.app/#organization",
  name: "Multilab Risk Prevention",
  description:
    "Empresa de Risk Prevention con análisis técnicos para Higiene y Seguridad, Laboratorio y Medioambiente. Dirigida por la Lic. Cinthia Degliangioli.",
  url: "https://multilab.vercel.app",
  logo: "https://multilab.vercel.app/images/logo.png",
  founder: {
    "@type": "Person",
    name: "Cinthia Degliangioli",
    jobTitle: "Directora Técnica",
  },
  foundingDate: "2014",
  medicalSpecialty: [
    "ClinicalLaboratory",
    "VeterinaryMedicine",
    "EnvironmentalHealth",
    "OccupationalHealth",
  ],
  availableService: [
    { "@type": "MedicalTest", name: "Higiene y Seguridad" },
    { "@type": "MedicalTest", name: "Análisis Clínico" },
    { "@type": "MedicalTest", name: "Análisis Veterinario" },
    { "@type": "Service", name: "Calidad de Agua" },
    { "@type": "Service", name: "Control Ambiental" },
    { "@type": "Service", name: "Bromatología" },
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
      <main id="main-content">
        <Hero />
        <VerticalsBlock />
        <AboutPreview />
        <InstitutionalVideo />
        <FAQAccordion />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
