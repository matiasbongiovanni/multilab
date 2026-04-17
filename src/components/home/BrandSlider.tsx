// Server Component — no "use client" needed, pure CSS animation

const brands = [
  { name: "Hospital Municipal San Martín" },
  { name: "Clínica del Valle" },
  { name: "Veterinaria Pampas" },
  { name: "Municipalidad de La Plata" },
  { name: "UNLP — Fac. de Ciencias Exactas" },
  { name: "Bromatología Regional" },
  { name: "Agua y Saneamiento S.A." },
  { name: "Centro Diagnóstico Integral" },
  { name: "Frigorífico El Ombú" },
  { name: "Granja Orgánica Norte" },
];

// Duplicamos para loop seamless
const allBrands = [...brands, ...brands];

export default function BrandSlider() {
  return (
    <section
      className="py-12 lg:py-14 overflow-hidden"
      style={{ backgroundColor: "#F5F5F5" }}
      aria-label="Instituciones y clientes asociados"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#616161]">
          Trabajamos con instituciones del sector salud, educación e industria
        </p>
      </div>

      {/* Marquee container */}
      <div
        className="relative"
        aria-hidden="true"
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #F5F5F5, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #F5F5F5, transparent)",
          }}
        />

        {/* Track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-6 shrink-0"
            >
              {/* Isotipo placeholder */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#E0E0E0" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#616161"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#1A1A1A] whitespace-nowrap">
                {brand.name}
              </span>
              {/* Separador */}
              <span
                className="ml-6 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#4CAF50" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
