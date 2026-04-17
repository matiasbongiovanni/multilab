import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import BrandSlider from "@/components/home/BrandSlider";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutPreview from "@/components/home/AboutPreview";
import FAQBot from "@/components/home/FAQBot";
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
  name: "Multilab",
  description:
    "Laboratorio de análisis clínicos, veterinarios, calidad de agua, higiene y bromatología. Dirigido por la Lic. Cinthia Degliangioli.",
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
  ],
  availableService: [
    { "@type": "MedicalTest", name: "Análisis Clínico" },
    { "@type": "MedicalTest", name: "Análisis Veterinario" },
    { "@type": "MedicalTest", name: "Calidad de Agua" },
    { "@type": "MedicalTest", name: "Higiene y Bromatología" },
    { "@type": "MedicalTest", name: "Investigación" },
    { "@type": "Service", name: "Consulta Online" },
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
        <StatsBand />
        <BrandSlider />
        <ServicesGrid />
        <AboutPreview />
        <FAQBot />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
