import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dio-Salaon',
  description: 'Barbearia premium em uma landing page moderna.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
