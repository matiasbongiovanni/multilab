import { Montserrat, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dmsans",
  display: "swap",
});

export default function TestFontsPage() {
  const fonts = [
    {
      name: "Montserrat",
      description:
        "Geométrica y confiable. Muy usada en salud, corporativo y ciencia. Transmite solidez y profesionalismo.",
      variable: montserrat.variable,
      family: "var(--font-montserrat)",
    },
    {
      name: "Plus Jakarta Sans",
      description:
        "Moderna y premium. Excelente legibilidad, sensación tecnológica y sofisticada. Ideal para empresas innovadoras.",
      variable: plusJakarta.variable,
      family: "var(--font-jakarta)",
    },
    {
      name: "DM Sans",
      description:
        "Limpia y científica. Diseñada para interfaces, con excelente rendimiento en pantalla. Sensación técnica y precisa.",
      variable: dmSans.variable,
      family: "var(--font-dmsans)",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-[#f0faf0] ${montserrat.variable} ${plusJakarta.variable} ${dmSans.variable}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-[#1a2e1a] mb-2 font-sans">
          Comparación de tipografías
        </h1>
        <p className="text-[#1a2e1a]/50 mb-16">
          Elegí la que mejor represente a Multilab
        </p>

        <div className="grid gap-16">
          {fonts.map((font, i) => (
            <div
              key={font.name}
              className="relative rounded-3xl border border-[#2E7D32]/10 bg-white/70 backdrop-blur-xl p-10 shadow-[0_8px_40px_rgba(46,125,50,0.06)] overflow-hidden"
            >
              {/* Option number */}
              <div className="absolute top-6 right-8 text-[100px] font-black text-[#2E7D32]/5 leading-none select-none">
                {i + 1}
              </div>

              {/* Font name & description */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E7D32]/5 border border-[#2E7D32]/10 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                  <span className="text-[#2E7D32] text-xs font-bold uppercase tracking-[0.2em]">
                    Opción {i + 1}
                  </span>
                </div>
                <h2
                  className="text-2xl font-bold text-[#1a2e1a] mb-2"
                  style={{ fontFamily: font.family }}
                >
                  {font.name}
                </h2>
                <p className="text-sm text-[#1a2e1a]/50 max-w-lg">
                  {font.description}
                </p>
              </div>

              {/* Hero heading simulation */}
              <div
                className="relative p-8 rounded-2xl bg-[#f0faf0] border border-[#2E7D32]/5"
                style={{ fontFamily: font.family }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2E7D32]/15 bg-white/70 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                  <span className="text-[#2E7D32] text-[10px] font-bold uppercase tracking-[0.24em]">
                    Laboratorio de análisis
                  </span>
                </div>

                {/* Main heading */}
                <h3 className="leading-[0.9] tracking-[-0.06em] mb-4">
                  <span className="block text-[#1a2e1a] font-black text-[clamp(3rem,7vw,6rem)]">
                    MULTI
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]">
                      LAB
                    </span>
                  </span>
                </h3>

                {/* Subtitle */}
                <p className="text-[#1a2e1a]/70 font-light text-xl leading-tight tracking-[-0.03em] mb-6">
                  Ciencia, precisión y{" "}
                  <span className="text-[#1a2e1a] font-semibold">
                    diagnóstico avanzado
                  </span>
                </p>

                {/* Accent line */}
                <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] mb-6" />

                {/* Paragraph */}
                <p className="text-[#1a2e1a]/50 text-base leading-relaxed max-w-xl font-light mb-8">
                  Tecnología de vanguardia para análisis clínicos, veterinarios
                  y ambientales con trazabilidad absoluta y resultados de máxima
                  precisión.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-[#2E7D32] px-6 py-3 font-bold text-white text-sm">
                    Solicitar cotización →
                  </div>
                  <div className="inline-flex items-center rounded-xl border border-[#2E7D32]/15 bg-white/60 px-6 py-3 text-[#2E7D32] font-semibold text-sm">
                    Ver mis resultados
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { title: "+10 años", desc: "de experiencia" },
                    { title: "100%", desc: "trazabilidad" },
                    { title: "24/7", desc: "soporte técnico" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#2E7D32]/10 bg-white/50 p-4"
                    >
                      <div className="text-2xl font-black text-[#1a2e1a]">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs text-[#1a2e1a]/40 tracking-wide">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional text samples */}
              <div
                className="mt-6 grid grid-cols-2 gap-6 text-sm"
                style={{ fontFamily: font.family }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30 font-bold mb-2">
                    Navegación
                  </p>
                  <div className="flex gap-4 text-[#1a2e1a]/70 font-medium">
                    <span>Inicio</span>
                    <span>Quiénes somos</span>
                    <span>Servicios</span>
                    <span>Contacto</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a2e1a]/30 font-bold mb-2">
                    Cuerpo de texto
                  </p>
                  <p className="text-[#1a2e1a]/50 leading-relaxed">
                    Nuestro laboratorio integra la consultoría técnica con
                    análisis ambientales y microbiología integral.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
