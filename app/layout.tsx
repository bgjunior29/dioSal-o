import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dio-Salaon",
  description:
    "Sistema de agendamento com Prisma e envio de confirmação por e-mail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
