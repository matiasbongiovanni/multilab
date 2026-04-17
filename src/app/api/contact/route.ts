import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactBody {
  nombre: string;
  email: string;
  telefono?: string;
  asunto?: string;
  mensaje: string;
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = (await request.json()) as ContactBody;

    const { nombre, email, telefono, asunto, mensaje } = body;

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    const toEmail =
      process.env.CONTACT_EMAIL ?? "contacto@multilab.com.ar";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "noreply@multilab.com.ar";

    await resend.emails.send({
      from: `Multilab Web <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Nuevo contacto desde la web${asunto ? ` — ${asunto}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
          <div style="background: linear-gradient(135deg, #0284c7, #0891b2); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Nuevo mensaje de contacto</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Recibido desde multilab.com.ar</p>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e0f2fe; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 130px;">
                  <strong style="color: #64748b; font-size: 13px;">Nombre</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b; font-size: 13px;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #0284c7;">${email}</a>
                </td>
              </tr>
              ${
                telefono
                  ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b; font-size: 13px;">Teléfono</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${telefono}</td>
              </tr>`
                  : ""
              }
              ${
                asunto
                  ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b; font-size: 13px;">Asunto</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 15px;">${asunto}</td>
              </tr>`
                  : ""
              }
            </table>
            <div style="margin-top: 20px;">
              <strong style="color: #64748b; font-size: 13px; display: block; margin-bottom: 8px;">Mensaje</strong>
              <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${mensaje}</div>
            </div>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${email}?subject=Re: Tu consulta a Multilab" style="display: inline-block; background: #0284c7; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Responder a ${nombre}
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">Multilab — Sistema de contacto web</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
