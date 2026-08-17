import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ClipboardList,
  Cog,
  KeyRound,
  PenTool,
  Layers,
  FileCheck2,
  HardHat,
  Hammer,
  Home,
  Check,
  ShieldCheck,
  TrendingUp,
  Timer,
  Users,
  Banknote,
  Paintbrush,
  Box,
  Search,
  Instagram,
  Facebook,
  AtSign,
  MessageCircle,
  Mail,
} from "lucide-react";
import heroCasa from "@/assets/hero-casa.jpg";

const WA_ANGELICA = "https://wa.me/5545998176765";
const WA_TIAGO = "https://wa.me/5545999213004";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TV Engenharia — Projetos e Construção em Cafelândia/PR" },
      {
        name: "description",
        content:
          "Projeto chave na mão, projetos arquitetônicos, desmembramento e unificação de lotes, financiamento e reformas em Cafelândia e região, Paraná.",
      },
      { property: "og:title", content: "TV Engenharia — Projetos e Soluções" },
      {
        property: "og:description",
        content:
          "Do projeto à entrega das chaves: engenharia completa em Cafelândia e região, PR. CREA-PR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "TV Engenharia — Tiago Visnieski Engenharia",
          description:
            "Projetos arquitetônicos, construção chave na mão, desmembramento e unificação de lotes.",
          areaServed: "Cafelândia e região, Paraná",
          telephone: "+5545998176765",
          address: { "@type": "PostalAddress", addressRegion: "PR", addressCountry: "BR" },
        }),
      },
    ],
  }),
});

function GoldIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-14 items-center justify-center rounded-full border border-gold/50 text-gold">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-12">
      {kicker ? (
        <p className="mb-3 font-display text-xs uppercase tracking-[0.35em] text-gold">{kicker}</p>
      ) : null}
      <h2 className="max-w-3xl text-3xl uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-24 bg-gold" />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="leading-none">
          <span className="font-serif text-2xl font-bold text-gold">TV</span>
          <span className="ml-2 font-display text-sm uppercase tracking-[0.3em]">Engenharia</span>
        </a>
        <nav className="hidden items-center gap-8 font-display text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#sobre" className="transition-colors hover:text-gold">
            Sobre
          </a>
          <a href="#servicos" className="transition-colors hover:text-gold">
            Serviços
          </a>
          <a href="#portfolio" className="transition-colors hover:text-gold">
            Portfólio
          </a>
          <a href="#contato" className="transition-colors hover:text-gold">
            Contato
          </a>
        </nav>
        <a
          href={WA_ANGELICA}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-5 py-2.5 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
        >
          Fale no WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="diagonal-gold relative flex min-h-screen items-center">
      <img
        src={heroCasa}
        alt="Fachada contemporânea de casa executada pela TV Engenharia ao entardecer"
        width={1600}
        height={1104}
        className="absolute inset-0 size-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-36 pb-24">
        <p className="mb-6 font-display text-xs uppercase tracking-[0.4em] text-gold">
          Projetos e Soluções · Cafelândia / PR
        </p>
        <h1 className="max-w-4xl text-4xl uppercase leading-[1.05] tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
          Do projeto à entrega das chaves, nós cuidamos de tudo para você.
        </h1>
        <p className="mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Projeto Chave na Mão — a TV Engenharia cuida de tudo, do projeto à execução da obra.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={WA_ANGELICA}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-7 py-4 text-center font-display text-sm uppercase tracking-[0.15em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-opacity hover:opacity-90"
          >
            Fale conosco e solicite um orçamento
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-gold/60 px-7 py-4 text-center font-display text-sm uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold/10"
          >
            Conheça os serviços
          </a>
        </div>
      </div>
    </section>
  );
}

const diferenciais = [
  { icon: ClipboardList, text: "Seu projeto, nossa responsabilidade." },
  { icon: Cog, text: "Sua obra, sem preocupações." },
  { icon: KeyRound, text: "Sua casa pronta para viver." },
];

function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionTitle kicker="Sobre a TV Engenharia" title="Seu sonho, nossa missão!" />
      <p className="max-w-2xl text-lg text-muted-foreground">
        Nosso compromisso é entregar qualidade, segurança e tranquilidade em cada etapa da sua obra.
      </p>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {diferenciais.map(({ icon: Icon, text }) => (
          <div key={text} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <GoldIcon>
              <Icon className="size-6" strokeWidth={1.4} />
            </GoldIcon>
            <p className="mt-6 font-display text-lg uppercase tracking-wide">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-6 rounded-3xl border border-gold/30 bg-card p-8 shadow-[var(--shadow-soft)] md:grid-cols-2 md:p-10">
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Tiago Visnieski</h3>
          <p className="mt-1 text-sm text-gold">Engenheiro · CREA-PR 125668/D</p>
        </div>
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Angélica Bloinski</h3>
          <p className="mt-1 text-sm text-gold">Engenheira Civil · CREA-PR 207026/D</p>
        </div>
        <p className="text-muted-foreground md:col-span-2">
          Todos os projetos são acompanhados pessoalmente pela dupla técnica responsável, do
          primeiro traço à entrega das chaves.
        </p>
      </div>
    </section>
  );
}

const etapas = [
  { icon: PenTool, title: "Projeto Arquitetônico" },
  { icon: Layers, title: "Projetos Complementares" },
  { icon: FileCheck2, title: "Aprovações e Documentação" },
  { icon: HardHat, title: "Gerenciamento da Obra" },
  { icon: Hammer, title: "Execução Completa" },
  { icon: Home, title: "Entrega Pronta para Morar" },
];

function ChaveNaMao() {
  return (
    <section id="servicos" className="border-y border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="Serviço principal" title="Projeto Chave na Mão" />
        <div className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="absolute inset-x-0 top-7 hidden h-px bg-gold/30 lg:block" />
          {etapas.map(({ icon: Icon, title }, i) => (
            <div key={title} className="relative text-center">
              <div className="flex justify-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full border border-gold/50 bg-background text-gold">
                  <Icon className="size-6" strokeWidth={1.4} />
                </span>
              </div>
              <p className="mt-4 font-display text-xs uppercase tracking-[0.25em] text-gold">
                Etapa {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-base uppercase leading-snug tracking-wide">
                {title}
              </p>
            </div>
          ))}
        </div>
        <div className="ribbon-gold mx-auto mt-16 max-w-4xl px-12 py-6 text-center">
          <p className="font-display text-sm uppercase tracking-[0.15em] sm:text-lg">
            Do projeto à entrega das chaves, nós cuidamos de tudo para você!
          </p>
        </div>
      </div>
    </section>
  );
}

const itensLote = [
  "Projeto técnico completo",
  "Aprovação junto à prefeitura",
  "Regularização e registro em cartório",
];

const vantagens = [
  { icon: ShieldCheck, text: "Segurança Jurídica" },
  { icon: TrendingUp, text: "Valorização do Imóvel" },
  { icon: Timer, text: "Agilidade no Processo" },
  { icon: Users, text: "Equipe Especializada e Experiência" },
];

function Lotes() {
  const blocos = [
    {
      title: "Desmembramento de Lotes",
      desc: "Transformamos um terreno maior em dois ou mais lotes menores, de forma legal e segura.",
      highlight: "Mais valor para o seu patrimônio!",
    },
    {
      title: "Unificação de Lotes",
      desc: "Unimos dois ou mais lotes em um único terreno, garantindo mais espaço e possibilidades para o seu projeto.",
      highlight: "Mais espaço. Mais liberdade. Mais valor!",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionTitle kicker="Regularização" title="Soluções para o seu terreno" />
      <div className="grid gap-8 md:grid-cols-2">
        {blocos.map((b) => (
          <div key={b.title} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">
            <h3 className="font-display text-2xl uppercase tracking-wide">{b.title}</h3>
            <p className="mt-4 text-muted-foreground">{b.desc}</p>
            <ul className="mt-7 space-y-3">
              {itensLote.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={2} />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-lg uppercase tracking-wide text-gold">
              {b.highlight}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-8 border-t border-gold/30 pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {vantagens.map(({ icon: Icon, text }) => (
          <div key={text} className="flex flex-col items-center gap-4 text-center">
            <GoldIcon>
              <Icon className="size-6" strokeWidth={1.4} />
            </GoldIcon>
            <p className="font-display text-sm uppercase tracking-[0.15em]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const outros = [
  { icon: Banknote, text: "Processo para Financiamento" },
  { icon: Paintbrush, text: "Reforma" },
  { icon: Box, text: "Visualização 3D do Projeto" },
  { icon: Search, text: "Vistoria de Obra" },
];

const projetos = [
  "Residência Alto Padrão",
  "Casa Térrea Contemporânea",
  "Sobrado Urbano",
  "Reforma de Fachada",
  "Desmembramento Residencial",
  "Projeto Comercial",
];

function OutrosEPortfolio() {
  return (
    <section
      id="portfolio"
      className="border-y border-border bg-secondary/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="Complementares" title="Outros serviços" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outros.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <Icon className="size-6 shrink-0 text-gold" strokeWidth={1.4} />
              <p className="font-display text-sm uppercase tracking-[0.12em]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <SectionTitle kicker="Projetos executados" title="Portfólio" />
          <div className="grid gap-4 md:grid-cols-3">
            {projetos.map((p) => (
              <div
                key={p}
                className="group relative flex aspect-4/3 items-end overflow-hidden rounded-xl bg-card p-6 shadow-[var(--shadow-soft)] transition-colors hover:bg-muted"
              >
                <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/60" />
                <p className="relative font-display text-sm uppercase tracking-[0.15em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${form.nome}. Telefone: ${form.telefone}. ${form.mensagem}`;
    window.open(`${WA_ANGELICA}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  };

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <SectionTitle kicker="Contato" title="Vamos tirar seu projeto do papel?" />
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-lg text-muted-foreground">
            Chame a nossa equipe no WhatsApp e conte sobre o seu terreno ou a sua obra. Atendemos
            Cafelândia e região, no Paraná.
          </p>
          <a
            href={WA_ANGELICA}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-5 text-center font-display text-sm uppercase tracking-[0.15em] text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-5" strokeWidth={1.6} />
            Fale conosco e solicite um orçamento
          </a>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <a
              href={WA_TIAGO}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gold/40 p-5 transition-colors hover:bg-gold/10"
            >
              <p className="font-display text-sm uppercase tracking-wide">Tiago Visnieski</p>
              <p className="mt-1 text-sm text-gold">(45) 99921-3004</p>
            </a>
            <a
              href={WA_ANGELICA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gold/40 p-5 transition-colors hover:bg-gold/10"
            >
              <p className="font-display text-sm uppercase tracking-wide">Angélica Bloinski</p>
              <p className="mt-1 text-sm text-gold">(45) 99817-6765</p>
            </a>
            <a
              href="mailto:angelicabloinski@hotmail.com"
              className="rounded-2xl border border-gold/40 p-5 transition-colors hover:bg-gold/10"
            >
              <p className="font-display text-sm uppercase tracking-wide">E-mail</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-gold">
                <Mail className="size-4" strokeWidth={1.6} />
                angelicabloinski@hotmail.com
              </p>
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <div>
            <label htmlFor="nome" className="font-display text-xs uppercase tracking-[0.2em] text-gold">
              Nome
            </label>
            <input
              id="nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold"
            />
          </div>
          <div>
            <label
              htmlFor="telefone"
              className="font-display text-xs uppercase tracking-[0.2em] text-gold"
            >
              Telefone
            </label>
            <input
              id="telefone"
              required
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold"
            />
          </div>
          <div>
            <label
              htmlFor="mensagem"
              className="font-display text-xs uppercase tracking-[0.2em] text-gold"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows={4}
              required
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gold px-6 py-4 font-display text-sm uppercase tracking-[0.15em] text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <p className="leading-none">
          <span className="font-serif text-2xl font-bold text-gold">TV</span>
          <span className="ml-2 font-display text-sm uppercase tracking-[0.3em]">Engenharia</span>
        </p>
        <div className="flex items-center gap-6 text-gold">
          <a
            href="https://instagram.com/t.v_engenharia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @t.v_engenharia"
          >
            <Instagram className="size-5" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.threads.net/@t.v_engenharia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads @t.v_engenharia"
          >
            <AtSign className="size-5" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.facebook.com/share/1DijWGi1sU/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook TV Engenharia"
          >
            <Facebook className="size-5" strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Tiago Visnieski — CREA-PR 125668/D · Angélica Bloinski — CREA-PR 207026/D · Cafelândia e
          região, Paraná
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TV Engenharia — Projetos e Soluções
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <ChaveNaMao />
        <Lotes />
        <OutrosEPortfolio />
        <Contato />
      </main>
      <Footer />
      <a
        href={WA_ANGELICA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" strokeWidth={1.6} />
      </a>
    </div>
  );
}
