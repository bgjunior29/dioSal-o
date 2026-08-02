import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendAppointmentEmail(payload: {
  to: string;
  customerName: string;
  professional: string;
  service: string;
  date: string;
  time: string;
  ticket: string;
}) {
  const hasCredentials = Boolean(
    process.env.SMTP_USER && process.env.SMTP_PASS,
  );

  if (!hasCredentials) {
    console.log("SMTP não configurado. E-mail de confirmação não enviado.");
    return false;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: payload.to,
      subject: `Confirmação de agendamento - ${payload.ticket}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Seu agendamento foi confirmado.</h2>
          <p>Olá, ${payload.customerName}!</p>
          <p>Seu atendimento foi agendado com sucesso.</p>
          <ul>
            <li><strong>Profissional:</strong> ${payload.professional}</li>
            <li><strong>Serviço:</strong> ${payload.service}</li>
            <li><strong>Data:</strong> ${payload.date}</li>
            <li><strong>Horário:</strong> ${payload.time}</li>
            <li><strong>Ticket:</strong> ${payload.ticket}</li>
          </ul>
          <p>Chegue com 10 minutos de antecedência.</p>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return false;
  }
}
