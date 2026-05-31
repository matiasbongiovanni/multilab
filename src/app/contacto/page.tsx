"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

type SendStatus = "idle" | "sending" | "success" | "error";

const infoItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 15z" />
      </svg>
    ),
    label: "Teléfono",
    value: "Consultar por WhatsApp",
    sub: "Lunes a viernes 8:00 – 17:00",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "contacto@multilab.com.ar",
    sub: "Respondemos en menos de 24 horas",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Horario",
    value: "Lunes a Viernes",
    sub: "8:00 – 17:00 hs",
  },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.nombre.trim()) errors.nombre = "El nombre es requerido.";
  if (!form.email.trim()) {
    errors.email = "El email es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Ingresá un email válido.";
  }
  if (!form.mensaje.trim()) errors.mensaje = "El mensaje es requerido.";
  return errors;
}

export default function ContactoPage() {
  const shouldReduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SendStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-[#fcfdfc]">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-white to-[#44A148]/5 overflow-hidden"
          aria-label="Contacto — Multilab"
        >
          {/* Decorative blurs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#44A148]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1A2E1A]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#44A148]/10 text-[#44A148] text-sm font-bold uppercase tracking-widest shadow-sm border border-[#44A148]/20">
                Contacto
              </span>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A2E1A] leading-tight tracking-tight">
                Hablemos
              </h1>
              <p className="text-lg sm:text-xl text-[#1A2E1A]/75 max-w-2xl leading-relaxed mt-2">
                Completá el formulario y te respondemos en menos de 24 horas hábiles para coordinar tu turno o responder cualquier consulta.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* Info Sidebar */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2 flex flex-col gap-8"
              >
                <div>
                  <h2 className="font-inter text-2xl font-bold text-[#1A2E1A] mb-3">
                    Información de contacto
                  </h2>
                  <p className="text-[#1A2E1A]/70 text-base leading-relaxed">
                    También podés comunicarte directamente con el laboratorio por cualquiera de estos medios.
                  </p>
                </div>

                <div className="space-y-4">
                  {infoItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-5 p-5 bg-white rounded-2xl border border-[#1A2E1A]/10 shadow-sm hover:border-[#44A148]/30 hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#44A148]/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-[#1A2E1A]/50 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-base font-semibold text-[#1A2E1A]">{item.value}</p>
                        <p className="text-sm text-[#1A2E1A]/60 mt-1">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Portal Card Rediseñada */}
                <div className="bg-[#1A2E1A] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl mt-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#44A148]/30 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="relative z-10">
                    <h3 className="font-inter font-bold text-xl mb-3 text-white">Portal de pacientes</h3>
                    <p className="text-white/80 text-base leading-relaxed mb-6">
                      Si ya sos paciente de Multilab, accedé al portal digital para ver y descargar tus estudios de forma segura.
                    </p>
                    <a
                      href="/login"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#44A148] text-white font-bold rounded-xl hover:bg-[#38853b] transition-colors text-sm shadow-sm"
                    >
                      Acceder a mis estudios
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Form Area */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3"
              >
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center gap-6 py-20 px-8 text-center bg-white rounded-3xl border border-[#1A2E1A]/10 shadow-sm h-full">
                    <div className="w-24 h-24 rounded-full bg-[#44A148]/10 flex items-center justify-center border-4 border-white shadow-sm">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#44A148" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-inter text-3xl font-bold text-[#1A2E1A]">
                        Mensaje enviado
                      </h2>
                      <p className="text-[#1A2E1A]/70 mt-3 max-w-md mx-auto text-lg">
                        Gracias por contactarnos. Nuestro equipo te responderá dentro de las próximas 24 horas hábiles.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-[#44A148] font-bold text-base underline underline-offset-4 hover:text-[#1A2E1A] transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="bg-white rounded-3xl border border-[#1A2E1A]/10 p-8 lg:p-10 space-y-6 shadow-sm"
                    aria-label="Formulario de contacto"
                  >
                    <h2 className="font-inter text-2xl font-bold text-[#1A2E1A] mb-2">
                      Envianos un mensaje
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Nombre completo"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Juan García"
                        required
                        error={errors.nombre}
                        autoComplete="name"
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="juan@ejemplo.com"
                        required
                        error={errors.email}
                        autoComplete="email"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="Teléfono"
                        name="telefono"
                        type="tel"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+54 9 11 1234-5678"
                        autoComplete="tel"
                        hint="Opcional"
                      />
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="asunto" className="text-sm font-semibold text-[#1A2E1A]">
                          Asunto
                        </label>
                        <select
                          id="asunto"
                          name="asunto"
                          value={form.asunto}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#1A2E1A]/20 bg-white text-[#1A2E1A] focus:ring-4 focus:ring-[#44A148]/10 focus:border-[#44A148] outline-none transition-all text-sm font-medium"
                        >
                          <option value="">Seleccioná una opción</option>
                          <option value="turno">Solicitar turno</option>
                          <option value="resultado">Consulta sobre resultados</option>
                          <option value="analisis-clinico">Análisis clínico</option>
                          <option value="analisis-veterinario">Análisis veterinario</option>
                          <option value="calidad-agua">Calidad de agua</option>
                          <option value="bromatologia">Higiene y bromatología</option>
                          <option value="investigacion">Investigación</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="mensaje" className="text-sm font-semibold text-[#1A2E1A]">
                        Mensaje{" "}
                        <span className="text-red-500 ml-1" aria-label="campo requerido">*</span>
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describí tu consulta o lo que necesitás..."
                        required
                        aria-invalid={errors.mensaje ? "true" : undefined}
                        aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                        className={[
                          "w-full px-4 py-3 rounded-xl border bg-white text-[#1A2E1A] placeholder:text-[#1A2E1A]/40",
                          "focus:ring-4 outline-none transition-all resize-none text-sm font-medium",
                          errors.mensaje
                            ? "border-red-500 focus:ring-red-500/10 focus:border-red-500"
                            : "border-[#1A2E1A]/20 focus:ring-[#44A148]/10 focus:border-[#44A148]",
                        ].join(" ")}
                      />
                      {errors.mensaje && (
                        <p id="mensaje-error" className="text-xs font-medium text-red-500 flex items-center gap-1.5 mt-1" role="alert">
                          <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                            <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 9a.75.75 0 110-1.5A.75.75 0 016 9zm.75-3.75a.75.75 0 01-1.5 0v-2.5a.75.75 0 011.5 0v2.5z" />
                          </svg>
                          {errors.mensaje}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm font-medium text-red-600" role="alert">
                        Hubo un error al enviar el mensaje. Por favor, intentá nuevamente o comunicate por WhatsApp.
                      </div>
                    )}

                    <div className="pt-2">
                      <Button
                        type="submit"
                        isLoading={status === "sending"}
                        fullWidth
                        size="lg"
                      >
                        {status === "sending" ? "Enviando mensaje..." : "Enviar mensaje"}
                      </Button>
                    </div>

                    <p className="text-xs font-medium text-[#1A2E1A]/50 text-center">
                      Tu información es privada y está protegida por nuestra política de privacidad.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}