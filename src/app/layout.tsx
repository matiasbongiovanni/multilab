import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://multilab.vercel.app"
  ),
  title: {
    default: "Multilab — Risk Prevention | Argentina",
    template: "%s | Multilab Risk Prevention",
  },
  description:
    "Multilab Risk Prevention: análisis para Higiene y Seguridad, Laboratorio y Medioambiente. Dirigido por la Lic. Cinthia Degliangioli.",
  keywords: [
    "risk prevention",
    "higiene y seguridad",
    "análisis laboratorio",
    "calidad de agua",
    "medioambiente",
    "Cinthia Degliangioli",
    "Multilab",
    "laboratorio Argentina",
    "bromatología",
    "microbiología",
  ],
  authors: [{ name: "SIDEAS Consultores" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Multilab Risk Prevention",
    title: "Multilab — Risk Prevention | Argentina",
    description:
      "Análisis técnicos para Higiene y Seguridad, Laboratorio y Medioambiente. Lic. Cinthia Degliangioli.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Multilab Risk Prevention — Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilab — Risk Prevention | Argentina",
    description:
      "Análisis técnicos para Higiene y Seguridad, Laboratorio y Medioambiente.",
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
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
