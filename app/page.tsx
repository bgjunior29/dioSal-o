const services = [
  { title: 'Corte Tradicional', price: 'R$ 55', time: '≈ 40 min', description: 'Corte na tesoura ou máquina, com acabamento clássico e navalhado nos contornos.' },
  { title: 'Degradê', price: 'R$ 65', time: '≈ 45 min', description: 'Fade progressivo com transição perfeita entre as máquinas e a tesoura.' },
  { title: 'Barba', price: 'R$ 45', time: '≈ 30 min', description: 'Desenho, toalha quente e navalha para uma barba alinhada e macia.' },
  { title: 'Pigmentação', price: 'R$ 70', time: '≈ 35 min', description: 'Correção de falhas e uniformização de tom para barba e cabelo.' },
  { title: 'Sobrancelha', price: 'R$ 25', time: '≈ 15 min', description: 'Design na navalha ou pinça, respeitando o formato natural do olhar.' },
  { title: 'Combo Corte + Barba', price: 'R$ 90', time: '≈ 70 min', description: 'O ritual completo — corte, barba e acabamento em uma única sessão.' },
];

const products = [
  { name: 'Pomada Matte', price: 'R$ 48', category: 'Styling' },
  { name: 'Óleo para Barba', price: 'R$ 39', category: 'Barba' },
  { name: 'Navalha de Aço', price: 'R$ 189', category: 'Ferramentas' },
  { name: 'Shampoo Anticaspa', price: 'R$ 42', category: 'Cuidados' },
];

export default function Page() {
  return (
    <main className="bg-[#F7F6F1] text-[#0B0F0C]">
      <section className="relative overflow-hidden bg-[#0B0F0C] text-white">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/dio-hero-x9/1800/1100"
            alt="Barbearia"
            className="h-full w-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,15,12,0.95),rgba(11,15,12,0.7),rgba(11,15,12,0.35))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <nav className="mb-20 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl font-bold">Dio-<span className="text-[#C3E0B8]">Salaon</span></span>
            </div>
            <div className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#galeria">Galeria</a>
              <a href="#produtos">Produtos</a>
              <a href="#equipe">Equipe</a>
              <a href="#contato">Contato</a>
            </div>
            <a href="#agendar" className="rounded-sm bg-[#C3E0B8] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black">Agendar</a>
          </nav>

          <div className="grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C3E0B8]">Barbearia Premium · Est. 2015</p>
              <h1 className="max-w-3xl text-5xl leading-none text-white md:text-7xl">
                O Seu Estilo<br />
                <span className="italic text-[#C3E0B8]">Começa</span> Aqui.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Cortes modernos, atendimento premium e experiência única — onde precisão de navalha encontra hospitalidade de verdade.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#agendar" className="rounded-sm bg-[#C3E0B8] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black">Agendar Agora</a>
                <a href="#servicos" className="rounded-sm border border-white/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white">Conheça Nossos Serviços</a>
              </div>
            </div>

            <div className="rounded-sm border border-white/10 bg-[#141915] p-6">
              <div className="mb-5 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#8FA88B]">
                <span>Ticket Nº 014</span>
                <span>Hoje</span>
              </div>
              <h2 className="text-3xl font-semibold text-white">Próximo horário disponível</h2>
              <div className="mt-5 border-t border-dashed border-white/15 pt-4 text-sm text-white/70">
                <div className="mb-3 flex justify-between"><span>Barbeiro</span><strong className="text-white">Diego Martins</strong></div>
                <div className="mb-3 flex justify-between"><span>Serviço</span><strong className="text-white">Corte + Barba</strong></div>
                <div className="flex justify-between"><span>Horário</span><strong className="text-white">Hoje · 17:30</strong></div>
              </div>
              <a href="#agendar" className="mt-6 block rounded-sm bg-[#C3E0B8] px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-black">Reservar Vaga</a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-sm bg-[#141915]">
            <img src="https://picsum.photos/seed/dio-sobre-7/900/1100" alt="Interior da barbearia" className="h-full w-full object-cover grayscale contrast-110" />
          </div>
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E4630]">Sobre a casa</p>
            <h2 className="text-4xl md:text-5xl">Tradição de barbearia,<br />padrão de ateliê.</h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#141915]/70">
              A Dio-Salaon nasceu da vontade de reunir, sob um mesmo teto, a técnica clássica da navalha e uma experiência de atendimento que não existia na cidade.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#141915]/70">
              Cada visita é conduzida como um ritual — da consulta inicial ao acabamento final — para que o cliente saia não apenas com um corte novo, mas com a confiança de quem sabe exatamente como quer se apresentar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-black/10 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#2E4630]">Precisão</span>
              <span className="rounded-full border border-black/10 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#2E4630]">Hospitalidade</span>
              <span className="rounded-full border border-black/10 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#2E4630]">Consistência</span>
              <span className="rounded-full border border-black/10 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#2E4630]">Discrição</span>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-px border border-black/10 bg-black/10">
              <div className="bg-[#F7F6F1] px-4 py-6 text-center"><div className="text-3xl font-semibold text-[#2E4630]">10+</div><div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-black/60">Anos de casa</div></div>
              <div className="bg-[#F7F6F1] px-4 py-6 text-center"><div className="text-3xl font-semibold text-[#2E4630]">6</div><div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-black/60">Barbeiros</div></div>
              <div className="bg-[#F7F6F1] px-4 py-6 text-center"><div className="text-3xl font-semibold text-[#2E4630]">4.9</div><div className="mt-2 text-[10px] uppercase tracking-[0.16em] text-black/60">Nota média</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#0B0F0C] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C3E0B8]">Serviços</p>
              <h2 className="text-4xl text-white md:text-5xl">O cardápio da casa.</h2>
            </div>
            <p className="max-w-md text-[14px] leading-7 text-white/60">Seis serviços centrais, executados com a mesma régua de qualidade — do clássico ao contemporâneo.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-sm border border-white/10 bg-[#141915] p-6">
                <div className="mb-5 flex items-center justify-between text-[#C3E0B8]">
                  <span className="text-3xl">✂</span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/60">Nº {String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl text-white">{service.title}</h3>
                <p className="mt-3 min-h-[72px] text-[13.5px] leading-6 text-white/60">{service.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-dashed border-white/15 pt-4">
                  <span className="text-2xl font-semibold text-[#C3E0B8]">{service.price}</span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-white/60">{service.time}</span>
                </div>
                <a href="#agendar" className="mt-5 inline-block border-b border-[#C3E0B8] pb-1 text-[11px] uppercase tracking-[0.16em] text-white">Agendar →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E4630]">Galeria</p>
            <h2 className="text-4xl md:text-5xl">Cortes que falam por si.</h2>
          </div>
          <p className="max-w-md text-[14px] leading-7 text-black/60">Um recorte do nosso trabalho, tratado em preto e branco com toque sage — nossa assinatura visual.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {['degrade', 'barba', 'social', 'navalhado', 'infantil', 'degrade', 'barba', 'social'].map((tag, index) => (
            <div key={`${tag}-${index}`} className={`overflow-hidden rounded-sm bg-[#141915] ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img src={`https://picsum.photos/seed/dio-g${index + 1}/900/900`} alt={tag} className="h-[180px] w-full object-cover grayscale contrast-110 md:h-[100%]" />
            </div>
          ))}
        </div>
      </section>

      <section id="produtos" className="bg-[#EFEEE7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2E4630]">Loja</p>
              <h2 className="text-4xl md:text-5xl">Produtos para continuar o cuidado em casa.</h2>
            </div>
            <p className="max-w-md text-[14px] leading-7 text-black/60">Linha selecionada de pomadas, óleos e ferramentas usadas aqui dentro.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <article key={product.name} className="overflow-hidden rounded-sm border border-black/10 bg-[#F7F6F1]">
                <div className="bg-[#141915]">
                  <img src={`https://picsum.photos/seed/dio-p${index + 1}/500/500`} alt={product.name} className="h-72 w-full object-cover grayscale contrast-110" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#2E4630]">{product.category}</span>
                  <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
                  <div className="mt-4 flex items-center justify-between border-t border-dashed border-black/10 pt-4">
                    <span className="text-xl font-semibold text-[#2E4630]">{product.price}</span>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">+</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="bg-[#0B0F0C] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C3E0B8]">Equipe</p>
              <h2 className="text-4xl text-white md:text-5xl">Quem segura a navalha.</h2>
            </div>
            <p className="max-w-md text-[14px] leading-7 text-white/60">Barbeiros com especialidades distintas — escolha por afinidade de estilo.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {['Diego Martins', 'Rafael Souza', 'Bruno Alves', 'Kaique Lima'].map((name, index) => (
              <article key={name} className="overflow-hidden rounded-sm border border-white/10 bg-[#141915]">
                <img src={`https://picsum.photos/seed/dio-t${index + 1}/500/650`} alt={name} className="h-72 w-full object-cover grayscale contrast-110" />
                <div className="p-5">
                  <h3 className="text-2xl text-white">{name}</h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-[#C3E0B8]">Degradê & Navalhado</p>
                  <div className="mt-4 flex items-center justify-between border-t border-dashed border-white/15 pt-4">
                    <span className="text-[12px] text-white/60">9 anos</span>
                    <span className="text-[12px] text-white">@diego.barber</span>
                  </div>
                  <a href="#agendar" className="mt-5 block rounded-sm border border-white/15 px-4 py-3 text-center text-[11px] uppercase tracking-[0.18em] text-white">Agendar</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agendar" className="bg-[#2E4630] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C3E0B8]">Reserva Online</p>
              <h2 className="text-4xl text-white md:text-5xl">Marque seu horário em menos de um minuto.</h2>
              <p className="mt-5 max-w-md text-[15px] leading-8 text-white/70">Escolha o barbeiro, o serviço e o horário. Você recebe a confirmação na hora — sem ligação, sem espera.</p>
              <ul className="mt-7 space-y-4 text-[14px] text-white">
                <li className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C3E0B8] text-[11px] text-[#C3E0B8]">1</span> Escolha barbeiro e serviço</li>
                <li className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C3E0B8] text-[11px] text-[#C3E0B8]">2</span> Selecione data e horário disponíveis</li>
                <li className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C3E0B8] text-[11px] text-[#C3E0B8]">3</span> Confirme seus dados e pronto</li>
              </ul>
            </div>

            <div className="rounded-sm border border-white/10 bg-[#141915] p-6 text-white">
              <form className="grid gap-4 md:grid-cols-2">
                <label className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Barbeiro
                  <select className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none">
                    <option className="bg-[#141915]">Diego Martins</option>
                    <option className="bg-[#141915]">Rafael Souza</option>
                    <option className="bg-[#141915]">Bruno Alves</option>
                    <option className="bg-[#141915]">Kaique Lima</option>
                  </select>
                </label>
                <label className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Serviço
                  <select className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none">
                    <option className="bg-[#141915]">Corte Tradicional</option>
                    <option className="bg-[#141915]">Degradê</option>
                    <option className="bg-[#141915]">Barba</option>
                    <option className="bg-[#141915]">Combo Corte + Barba</option>
                  </select>
                </label>
                <label className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Data
                  <input type="date" className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none" />
                </label>
                <label className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Horário
                  <input type="time" className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none" />
                </label>
                <label className="md:col-span-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Nome completo
                  <input type="text" placeholder="Seu nome" className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none" />
                </label>
                <label className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Telefone
                  <input type="tel" placeholder="(11) 99999-0000" className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none" />
                </label>
                <label className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  E-mail
                  <input type="email" placeholder="voce@email.com" className="mt-2 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none" />
                </label>
                <label className="md:col-span-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Observações
                  <textarea placeholder="Alguma preferência?" className="mt-2 min-h-24 w-full border border-white/15 bg-transparent px-3 py-3 text-sm text-white outline-none" />
                </label>
                <button type="button" className="md:col-span-2 rounded-sm bg-[#C3E0B8] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black">Confirmar Agendamento</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#0B0F0C] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-0 border border-white/10 lg:grid-cols-2">
            <div className="p-10">
              <h2 className="text-4xl">Fale com a gente.</h2>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4 border-t border-dashed border-white/15 pt-4"><span className="w-24 text-[10px] uppercase tracking-[0.18em] text-[#C3E0B8]">Endereço</span><span className="text-[14px] text-white/70">Rua das Palmeiras, 482 — Jardim América, São Paulo/SP</span></div>
                <div className="flex gap-4 border-t border-dashed border-white/15 pt-4"><span className="w-24 text-[10px] uppercase tracking-[0.18em] text-[#C3E0B8]">WhatsApp</span><span className="text-[14px] text-white/70">(11) 99887-1234</span></div>
                <div className="flex gap-4 border-t border-dashed border-white/15 pt-4"><span className="w-24 text-[10px] uppercase tracking-[0.18em] text-[#C3E0B8]">Instagram</span><span className="text-[14px] text-white/70">@diosalaon</span></div>
                <div className="flex gap-4 border-t border-dashed border-white/15 pt-4"><span className="w-24 text-[10px] uppercase tracking-[0.18em] text-[#C3E0B8]">Horário</span><span className="text-[14px] text-white/70">Terça a Sábado · 09h às 20h</span></div>
              </div>
              <a href="#" className="mt-8 inline-flex rounded-sm bg-[#C3E0B8] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black">Falar no WhatsApp</a>
            </div>
            <div className="min-h-[340px] bg-[#141915]">
              <iframe src="https://www.google.com/maps?q=São+Paulo&output=embed" className="h-full min-h-[340px] w-full border-0 grayscale" title="Mapa" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
