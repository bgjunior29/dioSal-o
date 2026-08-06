import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendAppointmentEmail } from "@/lib/email";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json();

  const required = [
    "professional",
    "service",
    "date",
    "time",
    "name",
    "phone",
    "email",
  ];
  const missing = required.filter((field) => !body[field]);

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Campos obrigatórios", fields: missing },
      { status: 400 },
    );
  }

  const ticket = `DIO-${Math.floor(1000 + Math.random() * 8999)}`;

  const appointment = await prisma.appointment.create({
    data: {
      ticket,
      professional: body.professional,
      service: body.service,
      date: body.date,
      time: body.time,
      name: body.name,
      phone: body.phone,
      email: body.email,
      notes: body.notes || "",
      status: "CONFIRMED",
    },
  });

  const emailSent = await sendAppointmentEmail({
    to: body.email,
    customerName: body.name,
    professional: body.professional,
    service: body.service,
    date: body.date,
    time: body.time,
    ticket,
  });

  return NextResponse.json({
    ok: true,
    ticket,
    appointmentId: appointment.id,
    emailSent,
  });
}

export async function GET() {
  const appointments = await prisma.appointment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ appointments });
}
