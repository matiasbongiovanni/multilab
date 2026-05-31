import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ClientsSlider from "@/components/home/ClientsSlider";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://multilab.com.ar/#organization",
  name: "Multilab Risk Prevention",
  alternateName: "Multilab",
  description:
    "Servicios técnicos en Higiene y Seguridad Laboral, Laboratorio de Análisis Ambiental y Microbiológico, Control Ambiental e I+D en Ciencias y Medicina. Córdoba, Argentina.",
  url: "https://multilab.com.ar",
  logo: "https://multilab.com.ar/images/Logo-Multilab.webp",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Cinthia Degliangioli",
    jobTitle: "Directora Técnica",
    honorificPrefix: "Lic.",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Multilab Risk Prevention",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Higiene y Seguridad Laboral",
          description:
            "Gestión técnica enfocada en la prevención de enfermedades profesionales y accidentes, cumplimiento Ley 19.587.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Microbiología Integral",
          description:
            "Análisis microbiológicos, fisicoquímicos y bromatológicos bajo Código Alimentario Argentino.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laboratorio Ambiental",
          description:
            "Monitoreo de agua, aire y suelo. Informes para organismos regulatorios.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "I+D en Ciencias y Medicina",
          description:
            "Investigación y desarrollo de nuevas fronteras del diagnóstico científico.",
        },
      },
    ],
  },
  knowsAbout: [
    "Higiene y Seguridad Laboral",
    "Microbiología",
    "Análisis Ambiental",
    "Ley 19.587",
    "Código Alimentario Argentino",
    "Control de calidad de agua",
  ],
  sameAs: [
    "https://www.instagram.com/multilab.ar",
    "https://www.facebook.com/multilab.ar",
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="flex flex-col w-full">
        <Hero />
        <ClientsSlider />
        <Services />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
