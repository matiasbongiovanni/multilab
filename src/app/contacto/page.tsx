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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.92 15z" />
      </svg>
    ),
    label: "Teléfono",
    value: "Consultar por WhatsApp",
    sub: "Lunes a viernes 8:00 – 17:00",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <main id="main-content">
        {/* Hero */}
        <section
          className="pt-28 pb-12 lg:pt-36 lg:pb-16"
          style={{ backgroundColor: "var(--color-rp-bg-soft)" }}
          aria-label="Contacto — Multilab"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <span
                className="inline-block text-sm font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-rp-accent)" }}
              >
                Contacto
              </span>
              <h1
                className="text-4xl sm:text-5xl font-bold leading-tight"
                style={{ color: "var(--color-rp-text-strong)" }}
              >
                Hablemos
              </h1>
              <p
                className="text-lg max-w-xl leading-relaxed"
                style={{ color: "var(--color-rp-text-muted)" }}
              >
                Completá el formulario y te respondemos en menos de 24 horas hábiles para coordinar tu turno o responder cualquier consulta.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section
          className="py-12 lg:py-20"
          style={{ backgroundColor: "var(--color-rp-bg-elevated)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Info sidebar */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2 flex flex-col gap-6"
              >
                <div>
                  <h2
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--color-rp-text-strong)" }}
                  >
                    Información de contacto
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-rp-text-muted)" }}
                  >
                    También podés comunicarte directamente con el laboratorio por cualquiera de estos medios.
                  </p>
                </div>

                <div className="space-y-4">
                  {infoItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 rounded-xl"
                      style={{
                        backgroundColor: "var(--color-rp-bg-soft)",
                        border: "1px solid var(--color-rp-border)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "var(--color-rp-accent-soft)",
                          color: "var(--color-rp-accent)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium uppercase tracking-wide"
                          style={{ color: "var(--color-rp-text-subtle)" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-sm font-semibold mt-0.5"
                          style={{ color: "var(--color-rp-text-strong)" }}
                        >
                          {item.value}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--color-rp-text-muted)" }}
                        >
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: "var(--color-rp-accent)",
                    color: "white",
                  }}
                >
                  <h3 className="font-bold text-lg mb-2">Portal de pacientes</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    Si ya sos paciente de Multilab, accedé al portal para ver tus informes.
                  </p>
                  <a
                    href="/login"
                    className="inline-flex items-center gap-2 px-4 py-2 font-semibold rounded-lg text-sm transition-colors"
                    style={{
                      backgroundColor: "white",
                      color: "var(--color-rp-accent)",
                    }}
                  >
                    Acceder a mis informes
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3"
              >
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-rp-accent-soft)" }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--color-rp-accent)" }}>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <div>
                      <h2
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-rp-text-strong)" }}
                      >
                        Mensaje enviado
                      </h2>
                      <p
                        className="mt-2 max-w-sm"
                        style={{ color: "var(--color-rp-text-muted)" }}
                      >
                        Gracias por contactarnos. Te respondemos dentro de las próximas 24 horas hábiles.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="font-semibold text-sm underline underline-offset-2"
                      style={{ color: "var(--color-rp-accent)" }}
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="rounded-2xl p-7 lg:p-8 space-y-5"
                    style={{
                      backgroundColor: "var(--color-rp-bg-soft)",
                      border: "1px solid var(--color-rp-border)",
                    }}
                    aria-label="Formulario de contacto"
                  >
                    <h2
                      className="text-xl font-bold"
                      style={{ color: "var(--color-rp-text-strong)" }}
                    >
                      Envianos un mensaje
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        <label
                          htmlFor="asunto"
                          className="text-sm font-medium"
                          style={{ color: "var(--color-rp-text-muted)" }}
                        >
                          Asunto
                        </label>
                        <select
                          id="asunto"
                          name="asunto"
                          value={form.asunto}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg outline-none transition-colors min-h-[44px] text-sm"
                          style={{
                            border: "1px solid var(--color-rp-border)",
                            backgroundColor: "var(--color-rp-bg-elevated)",
                            color: "var(--color-rp-text)",
                          }}
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
                      <label
                        htmlFor="mensaje"
                        className="text-sm font-medium"
                        style={{ color: "var(--color-rp-text-muted)" }}
                      >
                        Mensaje{" "}
                        <span style={{ color: "var(--color-rp-danger)" }} aria-label="campo requerido">*</span>
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
                        className="w-full px-4 py-3 rounded-lg outline-none transition-colors resize-none text-sm"
                        style={{
                          border: errors.mensaje
                            ? "1px solid var(--color-rp-danger)"
                            : "1px solid var(--color-rp-border)",
                          backgroundColor: "var(--color-rp-bg-elevated)",
                          color: "var(--color-rp-text)",
                        }}
                      />
                      {errors.mensaje && (
                        <p
                          id="mensaje-error"
                          className="text-xs flex items-center gap-1"
                          style={{ color: "var(--color-rp-danger)" }}
                          role="alert"
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                            <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 9a.75.75 0 110-1.5A.75.75 0 016 9zm.75-3.75a.75.75 0 01-1.5 0v-2.5a.75.75 0 011.5 0v2.5z" />
                          </svg>
                          {errors.mensaje}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div
                        className="p-3.5 rounded-lg text-sm"
                        style={{
                          backgroundColor: "var(--color-rp-danger-soft)",
                          border: "1px solid var(--color-rp-danger)",
                          color: "var(--color-rp-danger)",
                        }}
                        role="alert"
                      >
                        Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.
                      </div>
                    )}

                    <Button
                      type="submit"
                      isLoading={status === "sending"}
                      fullWidth
                      size="lg"
                    >
                      {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                    </Button>

                    <p
                      className="text-xs text-center"
                      style={{ color: "var(--color-rp-text-subtle)" }}
                    >
                      Tu información es privada y no será compartida con terceros.
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
