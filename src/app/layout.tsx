import type { Metadata } from "next";
import { Syne, Figtree } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://multilab.com.ar"
  ),
  title: {
    default:
      "Multilab Risk Prevention — Higiene, Seguridad Laboral y Laboratorio en Argentina",
    template: "%s | Multilab Risk Prevention",
  },
  description:
    "Servicios técnicos en Higiene y Seguridad Laboral, Laboratorio de Análisis, Control Ambiental e I+D. Dirigidos por la Biol. Cynthia Degliangioli. Córdoba, Argentina.",
  keywords: [
    "higiene y seguridad laboral",
    "laboratorio análisis",
    "control ambiental",
    "microbiología",
    "Ley 19.587",
    "Código Alimentario Argentino",
    "Cynthia Degliangioli",
    "Multilab Risk Prevention",
    "laboratorio Córdoba Argentina",
    "prevención riesgos laborales",
  ],
  authors: [{ name: "Multilab Risk Prevention" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Multilab Risk Prevention",
    title:
      "Multilab Risk Prevention — Higiene, Seguridad Laboral y Laboratorio",
    description:
      "Soluciones técnicas en Higiene y Seguridad Laboral, Laboratorio de Análisis y Control Ambiental. Biol. Cynthia Degliangioli. Córdoba, Argentina.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Multilab Risk Prevention — Laboratorio y Seguridad Laboral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilab Risk Prevention",
    description:
      "Higiene y Seguridad Laboral, Laboratorio de Análisis, Control Ambiental e I+D. Córdoba, Argentina.",
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
      className={`${syne.variable} ${figtree.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
