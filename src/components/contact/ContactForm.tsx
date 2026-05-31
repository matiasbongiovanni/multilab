"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL;
      if (!webhookUrl) throw new Error("webhook_not_configured");
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("network_error");
      setState("success");
    } catch {
      setState("error");
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#c8e6c9] bg-white text-[#1a2e1a] placeholder-[#81C784] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all";
  const labelClass = "block text-xs font-semibold text-[#3d5c3d] uppercase tracking-wider mb-1.5";

  return (
    <section id="contacto" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-[#e8f5e9] text-[#1B5E20] text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e1a] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Consultanos sin compromiso
          </h2>
          <p className="text-[#3d5c3d] max-w-xl mx-auto">
            Describí tu necesidad y coordinamos una consulta técnica inicial sin costo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-[#2E7D32]" />
                <h3 className="text-xl font-bold text-[#1a2e1a]">¡Consulta enviada!</h3>
                <p className="text-[#3d5c3d]">Te contactaremos a la brevedad para coordinar.</p>
                <button onClick={() => setState("idle")} className="mt-2 text-sm text-[#2E7D32] hover:underline">Enviar otra consulta</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Nombre completo</label>
                    <input name="nombre" type="text" required placeholder="Juan García" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Empresa</label>
                    <input name="empresa" type="text" required placeholder="Empresa S.A." className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email</label>
                    <input name="email" type="email" required placeholder="juan@empresa.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Teléfono</label>
                    <input name="telefono" type="tel" placeholder="+54 9 351..." className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Servicio de interés</label>
                  <select name="servicio" className={inputClass}>
                    <option value="">Seleccioná un servicio</option>
                    <option value="riesgos">Prevención de Riesgos</option>
                    <option value="laboratorio">Laboratorio</option>
                    <option value="ambiente">Medio Ambiente</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Mensaje / consulta</label>
                  <textarea name="mensaje" rows={4} placeholder="Describí brevemente tu necesidad..." className={`${inputClass} resize-none`} />
                </div>

                {state === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3 border border-red-200">
                    <AlertCircle size={16} />
                    Hubo un error al enviar. Intentá de nuevo o escribinos directo.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2E7D32] hover:bg-[#1B5E20] disabled:opacity-60 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  {state === "loading" ? <><Loader2 size={16} className="animate-spin" /> Enviando...</> : "Enviar consulta"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-[#f0faf0] rounded-2xl border border-[#c8e6c9] p-6 space-y-5">
              {[
                { icon: MapPin, text: "Córdoba, Argentina" },  // TODO: dirección completa
                { icon: Phone, text: "Consultar por WhatsApp" },  // TODO: número cliente
                { icon: Mail, text: "contacto@multilab.com.ar", href: "mailto:contacto@multilab.com.ar" },
                { icon: Clock, text: "Lun–Vie 8:00–17:00 hs" },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#e8f5e9] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#2E7D32]" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-[#1a2e1a] hover:text-[#2E7D32] transition-colors mt-1.5">{text}</a>
                  ) : (
                    <span className="text-sm text-[#1a2e1a] mt-1.5">{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-[#e8f5e9] rounded-2xl border border-[#c8e6c9] p-6">
              <p className="text-sm text-[#1B5E20] font-medium">
                Consulta inicial sin costo. Te asesoramos sobre qué análisis o mediciones corresponden según tu actividad y los requisitos legales vigentes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
