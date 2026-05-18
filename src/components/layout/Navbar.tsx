"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks = [
  { label: "Inicio", href: "/" },
  { label: "Higiene y Seguridad", href: "/higiene-seguridad" },
  { label: "Laboratorio", href: "/laboratorio" },
  { label: "Medioambiente", href: "/medioambiente" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl",
        isScrolled
          ? "shadow-lg border"
          : "border",
      ].join(" ")}
      style={{
        backgroundColor: isScrolled
          ? "color-mix(in oklch, var(--color-rp-bg) 95%, transparent)"
          : "color-mix(in oklch, var(--color-rp-bg) 92%, transparent)",
        borderColor: "var(--color-rp-border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Multilab Risk Prevention — inicio"
          >
            <div className="flex items-center gap-2">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <rect width="36" height="36" rx="8" fill="var(--color-rp-accent)" />
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
                <circle cx="25" cy="14" r="4" fill="white" opacity="0.9" />
                <path
                  d="M23 18v6M27 18v6M21 24h8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className="font-black text-xl tracking-tight"
                style={{ color: "var(--color-rp-text-strong)" }}
              >
                MULTI
                <span style={{ color: "var(--color-rp-accent)" }}>LAB</span>
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden xl:flex items-center gap-0.5">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                ].join(" ")}
                style={{
                  color: isActive(link.href)
                    ? "var(--color-rp-accent)"
                    : "var(--color-rp-text-muted)",
                  backgroundColor: isActive(link.href)
                    ? "var(--color-rp-accent-soft)"
                    : "transparent",
                }}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/mis-estudios"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition-colors duration-150 shadow-sm hover:shadow-md min-h-[40px]"
              style={{
                backgroundColor: "var(--color-rp-accent)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-rp-accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-rp-accent)")
              }
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
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Ver mis informes
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--color-rp-text-muted)" }}
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
              className="xl:hidden overflow-hidden"
              style={{ borderTop: "1px solid var(--color-rp-border)" }}
              role="navigation"
              aria-label="Menú móvil"
            >
              <div className="py-3 space-y-0.5">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color: isActive(link.href)
                        ? "var(--color-rp-accent)"
                        : "var(--color-rp-text-muted)",
                      backgroundColor: isActive(link.href)
                        ? "var(--color-rp-accent-soft)"
                        : "transparent",
                    }}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 pt-2 pb-3">
                  <Link
                    href="/mis-estudios"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-white text-sm font-semibold rounded-lg transition-colors"
                    style={{ backgroundColor: "var(--color-rp-accent)" }}
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
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Ver mis informes
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
