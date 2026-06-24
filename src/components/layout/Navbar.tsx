"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
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
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#1A2E1A]/10 shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Inicio — Multilab">
            <img
              src="/Logo-Multilab.webp"
              alt="Multilab Logo"
              className="w-36 h-36 object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/Logo_Multilab.webp";
              }}
            />
            <span
              className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A2E1A]/60 border-l border-[#1A2E1A]/20 pl-3 py-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Risk <br /> Prevention
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-semibold transition-colors duration-200 group"
                >
                  <span className={isActive ? "text-[#44A148]" : "text-[#1A2E1A]/75 group-hover:text-[#44A148]"}>
                    {link.label}
                  </span>
                  {/* Indicador de estado activo */}
                  <span 
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#44A148] opacity-100" : "bg-[#44A148] opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100"
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

            <Link
              href="/mis-estudios"
              className="inline-flex items-center justify-center bg-[#44A148] hover:bg-[#1A2E1A] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm"
            >
               Ver mis informes
            </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2 rounded-lg text-[#1A2E1A] hover:bg-[#1A2E1A]/5 transition-colors duration-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-[#1A2E1A]/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-b border-[#1A2E1A]/10 shadow-xl z-50 lg:hidden"
            >
              <nav className="px-4 pt-2 pb-6 max-h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-1" aria-label="Navegación móvil">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3.5 px-4 text-base font-semibold rounded-xl transition-colors duration-200 ${
                        isActive 
                          ? "bg-[#44A148]/10 text-[#44A148]" 
                          : "text-[#1A2E1A]/80 hover:bg-[#1A2E1A]/5 hover:text-[#44A148]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                
                <div className="mt-4 pt-4 border-t border-[#1A2E1A]/10 flex flex-col gap-3 px-2">
                  <Link
                    href="/mis-estudios"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 px-4 text-base font-bold text-[#44A148] bg-[#44A148]/10 hover:bg-[#44A148]/20 rounded-xl transition-colors duration-200"
                  >
                    Ver mis informes
                  </Link>
                  <Link
                    href="/contacto"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full py-3.5 px-4 text-base font-bold text-white bg-[#44A148] hover:bg-[#1A2E1A] rounded-xl transition-colors duration-200 shadow-sm"
                  >
                    Solicitar cotización
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}