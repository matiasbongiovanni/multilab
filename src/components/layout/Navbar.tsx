"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../public/Logo-Multilab.webp";

const verticalesLinks = [
  { label: "Higiene y Seguridad", href: "/higiene-seguridad" },
  { label: "Laboratorio",         href: "/laboratorio" },
  { label: "Medioambiente",       href: "/medioambiente" },
];

const mainLinks = [
  { label: "Inicio",        href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto",      href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl border-b border-green-200/60 shadow-[0_4px_30px_rgba(46,125,50,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "py-2" : "py-4"
          }`}>
          {/* Logo */}
          <Link href="/" aria-label="Ir al inicio" className="relative z-10 shrink-0">
            <motion.img
              src={Logo.src}
              alt="Logo Multilab"
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? "h-40" : "h-46"
              }`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg ${
                  isActive(link.href)
                    ? "text-[#2E7D32]"
                    : "text-[#1a2e1a]/70 hover:text-[#2E7D32] hover:bg-green-50"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2E7D32] rounded-full"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </Link>
            ))}

            {/* Verticales */}
            <div className="flex items-center gap-px ml-1 bg-green-50 rounded-xl px-1 py-1 border border-green-100">
              {verticalesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-[13px] font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive(link.href)
                      ? "bg-white text-[#2E7D32] shadow-sm"
                      : "text-[#1a2e1a] hover:text-[#2E7D32] hover:bg-white/60"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/mis-estudios"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#2E7D32] text-white text-sm font-bold rounded-xl hover:bg-[#1B5E20] transition-all duration-300 shadow-[0_0_20px_rgba(46,125,50,0.15)] hover:shadow-[0_0_30px_rgba(46,125,50,0.3)] hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
              </svg>
              Ver mis informes
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-[#1a2e1a]/70 hover:text-[#2E7D32] hover:bg-green-50 transition-all"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ═══ MOBILE MENU ═══ */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
              role="navigation"
              aria-label="Menú móvil"
            >
              <div className="pt-4 pb-8 border-t border-green-100">
                <div className="flex flex-col gap-1">
                  {mainLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${isActive(link.href)
                          ? "text-[#2E7D32] bg-green-50"
                          : "text-[#1a2e1a]/70 hover:text-[#2E7D32] hover:bg-green-50"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile verticales */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mt-6 px-4"
                >
                  <p className="text-[10px] font-bold text-[#1a2e1a]/30 uppercase tracking-[0.2em] mb-3">
                    Áreas
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {verticalesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                          isActive(link.href)
                            ? "text-[#2E7D32] bg-green-50 font-semibold"
                            : "text-[#1a2e1a] hover:text-[#2E7D32] hover:bg-green-50"
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${isActive(link.href) ? "bg-[#2E7D32]" : "bg-[#1a2e1a]/20"}`} />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-8 px-4"
                >
                  <Link
                    href="/mis-estudios"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#2E7D32] text-white text-base font-bold rounded-xl hover:bg-[#1B5E20] transition-colors shadow-[0_0_20px_rgba(46,125,50,0.2)]"
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