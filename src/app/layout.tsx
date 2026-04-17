import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://multilab.vercel.app"
  ),
  title: {
    default:
      "Multilab — Laboratorio de Análisis Clínicos, Veterinarios y Ambientales",
    template: "%s | Multilab",
  },
  description:
    "Multilab, laboratorio dirigido por la Lic. Cinthia Degliangioli. Análisis clínicos, veterinarios, calidad de agua, higiene, bromatología e investigación en Argentina.",
  keywords: [
    "laboratorio análisis clínicos",
    "análisis veterinarios",
    "calidad de agua",
    "higiene bromatología",
    "Cinthia Degliangioli",
    "Multilab",
    "laboratorio Argentina",
  ],
  authors: [{ name: "SIDEAS Consultores" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Multilab",
    title:
      "Multilab — Laboratorio de Análisis Clínicos, Veterinarios y Ambientales",
    description:
      "Resultados precisos y confiables. Análisis clínicos, veterinarios, calidad de agua e investigación. Lic. Cinthia Degliangioli.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Multilab — Laboratorio de Análisis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilab — Laboratorio de Análisis",
    description:
      "Resultados precisos y confiables. Análisis clínicos, veterinarios y ambientales.",
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
