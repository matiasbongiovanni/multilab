"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../public/Logo-Multilab.webp";

const verticales = [
  { label: "Higiene y Seguridad", href: "/higiene-seguridad" },
  { label: "Laboratorio",         href: "/laboratorio" },
  { label: "Medioambiente",       href: "/medioambiente" },
];

const mainLinks = [
  { label: "Inicio",         href: "/" },
  { label: "Quiénes somos",  href: "/quienes-somos" },
  { label: "Contacto",       href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-[oklch(99.5%_0.003_143)/90] backdrop-blur-xl border-b border-[oklch(91%_0.013_143)]"
          : "bg-transparent border-b border-transparent"
      }`}
      style={isScrolled ? { backgroundColor: "rgba(255,255,255,0.95)" } : {}}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className={`flex items-center justify-between transition-all duration-400 ${isScrolled ? "py-2" : "py-3"}`}>

          {/* Logo */}
          <Link href="/" aria-label="Ir al inicio" className="shrink-0">
            <img
              src={Logo.src}
              alt="Logo Multilab"
              className={`w-auto object-contain transition-all duration-400 ${isScrolled ? "h-36" : "h-40"}`}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg ${
                  isActive(link.href)
                    ? "text-[oklch(42%_0.13_144)]"
                    : "text-[oklch(13%_0.015_143)]/60 hover:text-[oklch(42%_0.13_144)] hover:bg-[oklch(96%_0.022_143)]"
                }`}
                style={{
                  color: isActive(link.href) ? "oklch(42% 0.13 144)" : undefined,
                }}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Verticales */}
            <div className="flex items-center gap-px ml-1 bg-[oklch(95%_0.009_143)] rounded-xl px-1 py-1 border border-[oklch(91%_0.013_143)]">
              {verticales.map((v, i) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className={`px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive(v.href)
                      ? "bg-white text-[oklch(42%_0.13_144)] shadow-sm"
                      : "text-[oklch(13%_0.015_143)]/50 hover:text-[oklch(42%_0.13_144)] hover:bg-white/60"
                  }`}
                  style={{
                    color: isActive(v.href) ? "oklch(42% 0.13 144)" : undefined,
                  }}
                  aria-current={isActive(v.href) ? "page" : undefined}
                >
                  {v.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/mis-estudios"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(42%_0.13_144)] text-white text-sm font-semibold rounded-xl hover:bg-[oklch(33%_0.11_144)] transition-colors duration-200 shadow-sm"
              style={{ backgroundColor: "oklch(42% 0.13 144)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
              </svg>
              Ver mis informes
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[oklch(13%_0.015_143)]/60 hover:bg-[oklch(96%_0.022_143)] transition-colors"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {isOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
              role="navigation"
              aria-label="Menú móvil"
            >
              <div className="pt-4 pb-8 border-t border-[oklch(91%_0.013_143)]" style={{ borderColor: "oklch(91% 0.013 143)" }}>
                <div className="flex flex-col gap-1">
                  {mainLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors"
                        style={{ color: isActive(link.href) ? "oklch(42% 0.13 144)" : "oklch(13% 0.015 143)" }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 px-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "oklch(44% 0.012 143)" }}>
                    Áreas
                  </p>
                  <div className="flex flex-col gap-1">
                    {verticales.map((v, i) => (
                      <motion.div
                        key={v.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.04, duration: 0.25 }}
                      >
                        <Link
                          href={v.href}
                          className="flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                          style={{ color: isActive(v.href) ? "oklch(42% 0.13 144)" : "oklch(44% 0.012 143)" }}
                        >
                          {v.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.25 }}
                  className="mt-6 px-4"
                >
                  <Link
                    href="/mis-estudios"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-white text-base font-semibold rounded-xl transition-colors"
                    style={{ backgroundColor: "oklch(42% 0.13 144)" }}
                  >
                    Ver mis informes
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
