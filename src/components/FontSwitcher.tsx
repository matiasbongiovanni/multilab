"use client";

import { useState } from "react";

const FONTS = [
  { key: "montserrat", label: "Montserrat", desc: "Geométrica, confiable" },
  { key: "jakarta", label: "Plus Jakarta Sans", desc: "Moderna, premium" },
  { key: "dmsans", label: "DM Sans", desc: "Limpia, científica" },
];

export default function FontSwitcher() {
  const [active, setActive] = useState("montserrat");
  const [isOpen, setIsOpen] = useState(true);

  const switchFont = (key: string) => {
    setActive(key);
    // Apply font to the entire document
    document.documentElement.style.fontFamily = `var(--font-${key}), system-ui, sans-serif`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-[#2E7D32] text-white shadow-lg hover:bg-[#1B5E20] transition-all flex items-center justify-center"
          title="Abrir selector de tipografía"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 7 4 4 20 4 20 7" />
            <line x1="9" y1="20" x2="15" y2="20" />
            <line x1="12" y1="4" x2="12" y2="20" />
          </svg>
        </button>
      )}

      {/* Panel */}
      {isOpen && (
        <div className="w-72 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-[#2E7D32] text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">Tipografías</p>
              <p className="text-[10px] text-white/60">Probá en toda la página</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-3 space-y-1.5">
            {FONTS.map((font) => (
              <button
                key={font.key}
                onClick={() => switchFont(font.key)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  active === font.key
                    ? "bg-[#2E7D32]/10 border-[#2E7D32]/20 border"
                    : "bg-gray-50 border border-transparent hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`text-sm font-bold ${
                        active === font.key ? "text-[#2E7D32]" : "text-gray-800"
                      }`}
                      style={{ fontFamily: `var(--font-${font.key})` }}
                    >
                      {font.label}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{font.desc}</p>
                  </div>
                  {active === font.key && (
                    <div className="w-5 h-5 rounded-full bg-[#2E7D32] flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 text-center">
              Actual: <span className="font-bold text-gray-600">{FONTS.find(f => f.key === active)?.label}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
