import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Figtree } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
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
    default: "Multilab — Laboratorio de Prevención de Riesgos",
    template: "%s | Multilab",
  },
  description:
    "Multilab, laboratorio de prevención de riesgos dirigido por la Lic. Cinthia Degliangioli. Higiene y Seguridad, Laboratorio de Análisis y Medioambiente en Argentina.",
  keywords: [
    "prevención de riesgos",
    "higiene y seguridad laboral",
    "laboratorio de análisis",
    "análisis ambientales",
    "Cinthia Degliangioli",
    "Multilab",
    "laboratorio Argentina",
  ],
  authors: [{ name: "SIDEAS Consultores" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Multilab",
    title: "Multilab — Laboratorio de Prevención de Riesgos",
    description:
      "Higiene y Seguridad, Laboratorio y Medioambiente. Dirigido por la Lic. Cinthia Degliangioli.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Multilab — Laboratorio de Prevención de Riesgos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilab — Laboratorio de Prevención de Riesgos",
    description: "Higiene y Seguridad, Laboratorio y Medioambiente.",
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
      className={`${barlow.variable} ${figtree.variable} h-full`}
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
