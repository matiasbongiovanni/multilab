import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import BrandSlider from "@/components/home/BrandSlider";
import ServicesGrid from "@/components/home/ServicesGrid";
import StatsBand from "@/components/home/StatsBand";
import AboutPreview from "@/components/home/AboutPreview";
import ProcessSteps from "@/components/home/ProcessSteps";
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
    <div className="min-h-screen text-white font-sans selection:bg-[#2d6bb5]/40 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ BACKGROUND IMAGE (fixed, covers full page) ═══ */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden="true"
      />

      {/* ═══ BLUE OVERLAY (navy, 82% opacity) ═══ */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{ background: "rgba(13, 31, 60, 0.82)" }}
        aria-hidden="true"
      />

      {/* ═══ AMBIENT LIGHTS ═══ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] -left-40 w-[500px] h-[500px] bg-[#2d6bb5]/8 rounded-full blur-[200px] animate-glow-drift" />
        <div className="absolute top-[50%] -right-32 w-[400px] h-[400px] bg-[#1a9cdc]/5 rounded-full blur-[180px] animate-glow-drift-slow" />
        <div className="absolute top-[75%] left-1/3 w-[350px] h-[350px] bg-[#2d6bb5]/6 rounded-full blur-[200px] animate-glow-pulse" />
      </div>

      <Navbar />
      <main id="main-content" className="relative z-[1] flex flex-col w-full">
        <Hero />
        {/* White section divider */}
        <div className="max-w-6xl mx-auto w-full px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <BrandSlider />
        <div className="max-w-6xl mx-auto w-full px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>
        <ServicesGrid />
        <StatsBand />
        <div className="max-w-6xl mx-auto w-full px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>
        <AboutPreview />
        <ProcessSteps />
        <div className="max-w-6xl mx-auto w-full px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>
        <FAQBot />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}