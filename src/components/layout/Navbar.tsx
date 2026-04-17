"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const serviciosLinks = [
  { label: "Análisis Clínico", href: "/servicios/analisis-clinico" },
  { label: "Análisis Veterinario", href: "/servicios/analisis-veterinario" },
  { label: "Calidad de Agua", href: "/servicios/calidad-de-agua" },
  { label: "Higiene y Bromatología", href: "/servicios/higiene-bromatologia" },
  { label: "Investigación", href: "/servicios/investigacion" },
  { label: "Consulta Online", href: "/servicios/consulta-online" },
];

const mainLinks = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServiciosOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isServiciosActive = pathname.startsWith("/servicios");

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E0E0E0]"
          : "bg-white/90 backdrop-blur-sm",
      ].join(" ")}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Multilab — inicio"
          >
            <div className="flex items-center gap-2">
              {/* Logo isotipo */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <rect width="36" height="36" rx="8" fill="#4CAF50" />
                {/* Tubo de ensayo */}
                <path
                  d="M13 8h4v13a4 4 0 01-8 0V8h4z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M13 19a4 4 0 004 2 4 4 0 004-2"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.5"
                />
                {/* Microscopio simplificado */}
                <circle cx="25" cy="14" r="4" fill="white" opacity="0.9" />
                <path
                  d="M23 18v6M27 18v6M21 24h8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-black text-xl text-[#1A1A1A] tracking-tight">
                MULTI<span className="text-[#4CAF50]">LAB</span>
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                  isActive(link.href)
                    ? "text-[#4CAF50] bg-[#F5F5F5]"
                    : "text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-[#F5F5F5]",
                ].join(" ")}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Servicios dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                onBlur={() => setTimeout(() => setIsServiciosOpen(false), 150)}
                className={[
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                  isServiciosActive
                    ? "text-[#4CAF50] bg-[#F5F5F5]"
                    : "text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-[#F5F5F5]",
                ].join(" ")}
                aria-expanded={isServiciosOpen}
                aria-haspopup="true"
              >
                Ver servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServiciosOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isServiciosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-lg border border-[#E0E0E0] py-1.5 z-50"
                    role="menu"
                  >
                    {serviciosLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        className={[
                          "flex items-center px-4 py-2.5 text-sm transition-colors duration-100",
                          isActive(link.href)
                            ? "text-[#4CAF50] bg-[#F5F5F5] font-medium"
                            : "text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-[#F5F5F5]",
                        ].join(" ")}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA button + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#4CAF50] text-white text-sm font-semibold rounded-lg hover:bg-[#2E7D32] transition-colors duration-150 shadow-sm hover:shadow-md min-h-[40px]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Iniciar Sesión
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-[#E0E0E0]"
              role="navigation"
              aria-label="Menú móvil"
            >
              <div className="py-3 space-y-0.5">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "text-[#4CAF50] bg-[#F5F5F5]"
                        : "text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-[#F5F5F5]",
                    ].join(" ")}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 py-1">
                  <p className="text-xs font-semibold text-[#616161] uppercase tracking-wider mb-1">
                    Servicios
                  </p>
                  {serviciosLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={[
                        "flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors",
                        isActive(link.href)
                          ? "text-[#4CAF50] bg-[#F5F5F5] font-medium"
                          : "text-[#1A1A1A] hover:text-[#4CAF50] hover:bg-[#F5F5F5]",
                      ].join(" ")}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="px-4 pt-2 pb-3">
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#4CAF50] text-white text-sm font-semibold rounded-lg hover:bg-[#2E7D32] transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Iniciar Sesión
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
