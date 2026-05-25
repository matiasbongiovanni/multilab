"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const services = [
  "Higiene y Seguridad Laboral",
  "Laboratorio de Análisis",
  "Laboratorio Ambiental",
  "I+D en Ciencias y Medicina",
  "Otro / no sé todavía",
];

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1.5 text-xs text-[#DC2626] mt-1.5" role="alert">
      <AlertCircle size={12} aria-hidden="true" />
      {msg}
    </p>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [fields, setFields] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const set = (k: string, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fields.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!fields.email.trim()) {
      e.email = "El email es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Ingresá un email válido.";
    }
    if (!fields.mensaje.trim()) e.mensaje = "Contanos brevemente tu consulta.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstField = document.querySelector<HTMLElement>("[data-error='true']");
      firstField?.focus();
      return;
    }

    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: fields.nombre,
          email: fields.email,
          telefono: fields.telefono,
          asunto: fields.servicio ? `Consulta: ${fields.servicio}` : "Consulta general",
          mensaje: `${fields.empresa ? `Empresa: ${fields.empresa}\n\n` : ""}${fields.mensaje}`,
        }),
      });

      if (!res.ok) throw new Error("server error");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-[#1C1917] bg-white placeholder:text-[#9CA3AF] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-[#2E7D32] ${
      errors[field]
        ? "border-[#DC2626] bg-red-50/50"
        : "border-[#E5E7EB] hover:border-[#9CA3AF]"
    }`;

  return (
    <section
      id="contacto"
      className="py-20 lg:py-28 bg-[#FAFAF8]"
      aria-labelledby="contacto-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B5E20]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Contacto
              </span>
            </div>

            <h2
              id="contacto-heading"
              className="text-3xl sm:text-4xl lg:text-[2.8rem] text-[#1C1917] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Hablemos de lo que tu empresa necesita
            </h2>

            <p className="mt-5 text-[#6B7280] text-lg leading-relaxed">
              Completá el formulario y te respondemos en menos de 24 horas hábiles. El diagnóstico inicial es gratuito y sin compromiso.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <Mail size={17} className="text-[#2E7D32]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:contacto@multilab.com.ar"
                    className="text-sm font-medium text-[#1C1917] hover:text-[#2E7D32] transition-colors duration-150"
                  >
                    contacto@multilab.com.ar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <Phone size={17} className="text-[#2E7D32]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Teléfono / WhatsApp
                  </p>
                  <p className="text-sm font-medium text-[#6B7280]">
                    [REEMPLAZAR: número de contacto]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-[#2E7D32]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Ubicación
                  </p>
                  <p className="text-sm font-medium text-[#6B7280]">
                    [REEMPLAZAR: dirección · Córdoba, Argentina]
                  </p>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-10 p-5 bg-[#F4F4F1] rounded-xl border border-[#E5E7EB]">
              <p
                className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Qué pasa después de que enviás
              </p>
              <ol className="space-y-2">
                {[
                  "Te respondemos en menos de 24 hs hábiles",
                  "Coordinamos una llamada de diagnóstico gratuita",
                  "Presentamos propuesta técnica documentada",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full bg-[#DCFCE7] text-[#2E7D32] text-[10px] font-bold flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 24 }}
            whileInView={reduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-2xl border border-[#E5E7EB]">
                <div className="w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-5">
                  <CheckCircle size={30} className="text-[#2E7D32]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#1C1917] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#6B7280] max-w-xs leading-relaxed">
                  Te respondemos en menos de 24 horas hábiles. Revisá también tu carpeta de spam por las dudas.
                </p>
                <p className="mt-4 text-sm font-medium text-[#9CA3AF]">
                  — Lic. Cinthia Degliangioli
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-8 space-y-5"
                aria-label="Formulario de contacto Multilab"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="contact-nombre"
                      className="block text-xs font-semibold text-[#1C1917] mb-1.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Nombre y apellido <span className="text-[#DC2626]" aria-label="requerido">*</span>
                    </label>
                    <input
                      id="contact-nombre"
                      type="text"
                      value={fields.nombre}
                      onChange={(e) => set("nombre", e.target.value)}
                      onBlur={() => {
                        if (!fields.nombre.trim())
                          setErrors((e) => ({ ...e, nombre: "El nombre es requerido." }));
                      }}
                      placeholder="Juan García"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.nombre}
                      aria-describedby={errors.nombre ? "err-nombre" : undefined}
                      data-error={!!errors.nombre || undefined}
                      className={inputClass("nombre")}
                      disabled={formState === "loading"}
                    />
                    <span id="err-nombre">
                      <FieldError msg={errors.nombre} />
                    </span>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label
                      htmlFor="contact-empresa"
                      className="block text-xs font-semibold text-[#1C1917] mb-1.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Empresa
                    </label>
                    <input
                      id="contact-empresa"
                      type="text"
                      value={fields.empresa}
                      onChange={(e) => set("empresa", e.target.value)}
                      placeholder="Nombre de tu empresa"
                      autoComplete="organization"
                      className={inputClass("empresa")}
                      disabled={formState === "loading"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#1C1917] mb-1.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Email <span className="text-[#DC2626]" aria-label="requerido">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={fields.email}
                      onChange={(e) => set("email", e.target.value)}
                      onBlur={() => {
                        if (!fields.email.trim())
                          setErrors((e) => ({ ...e, email: "El email es requerido." }));
                        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                          setErrors((e) => ({ ...e, email: "Ingresá un email válido." }));
                      }}
                      placeholder="juan@empresa.com"
                      autoComplete="email"
                      inputMode="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      data-error={!!errors.email || undefined}
                      className={inputClass("email")}
                      disabled={formState === "loading"}
                    />
                    <span id="err-email">
                      <FieldError msg={errors.email} />
                    </span>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label
                      htmlFor="contact-tel"
                      className="block text-xs font-semibold text-[#1C1917] mb-1.5"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Teléfono
                    </label>
                    <input
                      id="contact-tel"
                      type="tel"
                      value={fields.telefono}
                      onChange={(e) => set("telefono", e.target.value)}
                      placeholder="+54 9 351 000-0000"
                      autoComplete="tel"
                      inputMode="tel"
                      className={inputClass("telefono")}
                      disabled={formState === "loading"}
                    />
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label
                    htmlFor="contact-servicio"
                    className="block text-xs font-semibold text-[#1C1917] mb-1.5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Servicio que te interesa
                  </label>
                  <select
                    id="contact-servicio"
                    value={fields.servicio}
                    onChange={(e) => set("servicio", e.target.value)}
                    className={`${inputClass("servicio")} cursor-pointer`}
                    disabled={formState === "loading"}
                  >
                    <option value="">Seleccioná una opción</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="contact-mensaje"
                    className="block text-xs font-semibold text-[#1C1917] mb-1.5"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Contanos tu consulta <span className="text-[#DC2626]" aria-label="requerido">*</span>
                  </label>
                  <textarea
                    id="contact-mensaje"
                    value={fields.mensaje}
                    onChange={(e) => set("mensaje", e.target.value)}
                    onBlur={() => {
                      if (!fields.mensaje.trim())
                        setErrors((e) => ({ ...e, mensaje: "Contanos brevemente tu consulta." }));
                    }}
                    placeholder="Describí brevemente tu situación o lo que necesitás analizar / evaluar..."
                    rows={4}
                    aria-required="true"
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={errors.mensaje ? "err-mensaje" : undefined}
                    data-error={!!errors.mensaje || undefined}
                    className={`${inputClass("mensaje")} resize-none`}
                    disabled={formState === "loading"}
                  />
                  <span id="err-mensaje">
                    <FieldError msg={errors.mensaje} />
                  </span>
                </div>

                {/* Error global */}
                {formState === "error" && (
                  <div
                    className="flex items-start gap-2.5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-[#DC2626]"
                    role="alert"
                  >
                    <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      Error al enviar. Intentá de nuevo o escribinos a{" "}
                      <a href="mailto:contacto@multilab.com.ar" className="underline font-medium">
                        contacto@multilab.com.ar
                      </a>
                    </span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 text-sm"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar consulta"
                  )}
                </button>

                <p className="text-center text-xs text-[#9CA3AF]">
                  Te respondemos en menos de 24 hs hábiles. Sin spam, sin compromiso.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
