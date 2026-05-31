import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const validUser = process.env.PORTAL_USER;
  const validPass = process.env.PORTAL_PASS;

  if (!validUser || !validPass) {
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const payload = Buffer.from(JSON.stringify({ company: username, ts: Date.now() })).toString("base64");

  const cookieStore = await cookies();
  cookieStore.set("ml_session", payload, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 horas
    path: "/",
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("ml_session");
  return NextResponse.json({ ok: true });
}
