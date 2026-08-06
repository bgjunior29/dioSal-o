import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <div className="min-h-screen bg-[#0b0f0c] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-bold">DioSalaon</h1>
          <p className="mt-4 text-white/70">
            Front-end do landing page já existe em HTML estático; esta rota
            Next.js foi criada para hospedar a API e o ambiente de agendamento
            com Prisma.
          </p>
          <div className="mt-8 rounded border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#c3e0b8]">
              API
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-white/80">
              <li>POST /api/appointments</li>
              <li>GET /api/appointments</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
