import { NextRequest, NextResponse } from "next/server";
// Aqui você pode integrar com EmailJS, Resend, Nodemailer, etc.

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Implemente o envio real aqui
  console.log("Formulário recebido:", body);

  return NextResponse.json({ success: true });
}
