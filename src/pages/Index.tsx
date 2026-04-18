import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, Clock, Headphones, Mail, Phone, MapPin, Star, Package, Wrench, Zap, Filter, Settings, Disc } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import InstagramFeed from "@/components/InstagramFeed";
import { useOrcamento } from "@/context/OrcamentoContext";

// ─── Dados ───────────────────────────────────────────────────────────────────

const differentials = [
  { icon: Award, title: "Peças originais", desc: "Garantia de qualidade e procedência" },
  { icon: Clock, title: "Desde 1994 no mercado", desc: "Mais de 30 anos de experiência automotiva" },
  { icon: Headphones, title: "Atendimento especializado", desc: "Equipe técnica e consultoria personalizada" },
];

const marcas = [
  { name: "3RHO", arquivo: "3rho.png" },
  { name: "Axios", arquivo: "axios.png" },
  { name: "Bosch", arquivo: "bosch.png" },
  { name: "Cobreq", arquivo: "cobreq.png" },
  { name: "Cofap", arquivo: "cofap.png" },
  { name: "Continental", arquivo: "continental.png" },
  { name: "DS", arquivo: "ds.png" },
  { name: "Fania", arquivo: "fania.png" },
  { name: "Fras-le", arquivo: "frasle.png" },
  { name: "Hipper Freios", arquivo: "hipper freios.png" },
  { name: "IKS", arquivo: "iks.png" },
  { name: "Indisa", arquivo: "indisa.png" },
  { name: "IRB", arquivo: "irb.png" },
  { name: "Magneti Marelli", arquivo: "magneti marelli.png" },
  { name: "MTE", arquivo: "mte.png" },
  { name: "Nakata", arquivo: "nakata.png" },
  { name: "NGK", arquivo: "ngk.png" },
  { name: "Perfect", arquivo: "perfect.png" },
  { name: "Roltens", arquivo: "roltens.png" },
  { name: "Sabó", arquivo: "sabo.png" },
  { name: "Sampel", arquivo: "sampel.png" },
  { name: "Taranto", arquivo: "taranto.png" },
  { name: "Tecfil", arquivo: "tecfil.png" },
  { name: "TSA", arquivo: "tsa.png" },
  { name: "Valclei", arquivo: "valclei.png" },
  { name: "Viemar", arquivo: "viemar.png" },
];

const stores = [
  { city: "Bom Jesus dos Perdões", address: "Av. Santos Dumont, 425", tel: "(11) 93299-7159", telRaw: "+5511932997159", hours: "Seg–Sex 08h–18h | Sáb 08h–13h" },
  { city: "Nazaré Paulista", address: "Rua José Gonçalves, 332", tel: "(11) 93299-7159", telRaw: "+5511932997159", hours: "Seg–Sex 08h–18h | Sáb 08h–13h" },
  { city: "Atibaia", address: "Praça 24 de Junho, 40", tel: "(11) 93299-7159", telRaw: "+5511932997159", hours: "Seg–Sex 08h–18h | Sáb 08h–13h" },
];

const avaliacoes = [
  { nome: "Marcos Oliveira", estrelas: 5, texto: "Atendimento excelente! Encontrei a peça que precisava na hora, equipe muito bem treinada. Recomendo para todos que precisam de autopeças na região." },
  { nome: "Ana Paula Ferreira", estrelas: 5, texto: "Ótima loja, preços justos e atendimento rápido. Comprei filtros e pastilhas e tudo chegou certinho. Com certeza vou voltar!" },
  { nome: "Roberto Santos", estrelas: 5, texto: "Fui na unidade de Atibaia e fui muito bem atendido. Tinham a peça em estoque, o atendente me ajudou a confirmar se era a certa para o meu carro." },
  { nome: "Carla Mendes", estrelas: 4, texto: "Bom estoque e atendimento ágil. Precisei de uma bomba d'água para o meu Fiat e eles tinham. Muito bom!" },
  { nome: "João Carlos Lima", estrelas: 5, texto: "Melhor autopeças da região! Já compro aqui há anos e nunca me decepcionei. Qualidade garantida e equipe sempre prestativa." },
  { nome: "Fernanda Costa", estrelas: 5, texto: "Fiz meu pedido pelo WhatsApp e foi super prático. Me mandaram fotos da peça, confirmaram o código e entregaram no prazo. Nota 10!" },
];

const categorias = [
  { icon: Disc, nome: "Freios", itens: "Pastilhas, discos, tambores, lonas, kits" },
  { icon: Settings, nome: "Suspensão", itens: "Amortecedores, buchas, pivôs, barras estabilizadoras" },
  { icon: Wrench, nome: "Motor", itens: "Juntas, pistões, bronzinas, retentores, anéis" },
  { icon: Zap, nome: "Sistema Elétrico", itens: "Velas, bobinas, sensores, alternadores, motor de arranque" },
  { icon: Filter, nome: "Filtros", itens: "Filtros de ar, óleo, combustível e cabine" },
  { icon: Package, nome: "Correias", itens: "Correias dentadas, poly-v, tensores e kits completos" },
  { icon: Settings, nome: "Embreagem", itens: "Disco, plato, rolamento de embreagem" },
  { icon: Wrench, nome: "Arrefecimento", itens: "Termostato, bomba d'água, radiadores, mangueiras" },
];

const heroSlides = [
  { imagem: "/Banner 1.jpg" },
  { imagem: "/Banner 2.jpg" },
  { imagem: "/Banner 3.jpg" },
];

const contadores = [
  { valor: 3, sufixo: "", label: "Unidades" },
  { texto: "25k+", label: "Clientes atendidos" },
  { valor: 30, sufixo: "+ anos", label: "No mercado" },
  { texto: "11,5k+", label: "Itens no estoque" },
  { texto: "2,5m+", label: "Pedidos realizados" },
];

// ─── Componentes auxiliares ───────────────────────────────────────────────────

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className="h-4 w-4"
        fill={i <= count ? "#f59e0b" : "none"}
        stroke={i <= count ? "#f59e0b" : "#d1d5db"}
      />
    ))}
  </div>
);

const CounterItem = ({ valor, sufixo, texto, label }: { valor?: number; sufixo?: string; texto?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (texto || valor === undefined) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 50;
          const increment = valor / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= valor) {
              setCount(valor);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [valor, texto]);

  const formatted = texto ?? (count >= 1000 ? count.toLocaleString("pt-BR") : count) + (sufixo ?? "");

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-white">
        {formatted}
      </p>
      <p className="mt-2 text-sm font-medium text-white/60 uppercase tracking-widest">{label}</p>
    </div>
  );
};

const StatusAtendente = () => {
  const agora = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const diaSemana = agora.getDay();
  const horaDecimal = hora + minuto / 60;

  const online =
    (diaSemana >= 1 && diaSemana <= 5 && horaDecimal >= 8 && horaDecimal < 18) ||
    (diaSemana === 6 && horaDecimal >= 8 && horaDecimal < 13);

  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: online ? "#25d366" : "#dc1b17" }}
      />
      <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
        {online ? "Atendente disponível agora" : "Fora do horário de atendimento"}
      </span>
    </div>
  );
};

const HeroCarrossel = ({ slideAtual, onSlideChange }: { slideAtual: number; onSlideChange: (i: number) => void }) => {
  React.useEffect(() => {
    const interval = setInterval(() => {
      onSlideChange((slideAtual + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideAtual, onSlideChange]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${slideAtual * 100}%)` }}
      >
        {heroSlides.map((slide, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full" style={{ minWidth: "100%" }}>
            <img
              src={slide.imagem}
              alt={`Banner ${i + 1}`}
              className="w-full h-full"
              style={{ objectFit: "cover", objectPosition: "center center", opacity: 0.75, width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Página ───────────────────────────────────────────────────────────────────

const Index = () => {
  const [slideAtual, setSlideAtual] = React.useState(0);
  const { openModal } = useOrcamento();

  return (
    <>
      <Helmet>
        <title>Celsão Auto Peças</title>
        <meta name="description" content="Há mais de 30 anos oferecendo as melhores autopeças. 3 lojas em SP: Atibaia, Bom Jesus dos Perdões e Nazaré Paulista. Entrega gratuita na região." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "500px", overflow: "hidden", background: "#0a0f1a" }}>
        {/* Carousel de fundo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <HeroCarrossel slideAtual={slideAtual} onSlideChange={setSlideAtual} />
        </div>

        {/* Conteúdo de texto */}
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ paddingTop: "200px", paddingBottom: "48px", maxWidth: "580px" }}>
            <SectionReveal>
              <h1
                className="font-extrabold leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", marginBottom: "16px" }}
              >
                Confiança e tradição,<br />
                <span style={{ color: "#e7c30b" }}>vem pro Celsão</span>
              </h1>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: "1.6", marginBottom: "32px" }}>
                Oferecemos as melhores peças automotivas do mercado com garantia<br />de procedência, atendimento especializado e consultoria técnica<br />para manter seu veículo sempre em perfeito estado.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-3 px-6 py-3 font-extrabold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97] w-fit"
                  style={{ backgroundColor: "#25d366", borderRadius: 0 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5l5.805-1.524A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.374l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Falar com atendente
                </button>
                <StatusAtendente />
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Dots — canto inferior direito */}
        <div style={{ position: "absolute", bottom: "20px", right: "24px", zIndex: 10, display: "flex", gap: "6px" }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideAtual(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: i === slideAtual ? "#e7c30b" : "rgba(255,255,255,0.4)" }}
            />
          ))}
        </div>
      </section>

      {/* Contadores */}
      <section className="py-16" style={{ background: "#1a2840" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {contadores.map((c) => (
              <CounterItem key={c.label} valor={c.valor} sufixo={c.sufixo} texto={c.texto} label={c.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="container">
          <SectionReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {differentials.map((d, i) => (
                <SectionReveal
                  key={d.title}
                  delay={i * 0.1}
                  className="group p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  style={{ backgroundColor: "#f8f9fa", borderBottom: "3px solid #e7c30b", borderRadius: 0 }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center text-primary"
                    style={{ backgroundColor: "#fef9e7", borderRadius: "0.5rem" }}
                  >
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{d.desc}</p>
                </SectionReveal>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Linha de produtos — linha leve */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionReveal>
            <h2 className="text-3xl font-extrabold text-center mb-2 text-secondary">Linha de Produtos</h2>
            <p className="text-center text-muted-foreground mb-12">Trabalhamos com as principais categorias da linha leve</p>
          </SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categorias.map((cat, i) => (
              <SectionReveal key={cat.nome} delay={i * 0.07}>
                <div
                  className="flex flex-col items-start gap-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full"
                  style={{ borderLeft: "3px solid #dc1b17" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "#fef2f2" }}>
                    <cat.icon className="h-5 w-5" style={{ color: "#dc1b17" }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{cat.nome}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{cat.itens}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Entrega gratuita */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1a2840 0%, #0f1520 100%)" }}>
        <div className="container">
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
              <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <circle cx="14" cy="50" r="7" stroke="#e7c30b" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="50" r="7" stroke="#e7c30b" strokeWidth="3" fill="none"/>
                <path d="M7 50H4V38l8-6 6-12h18l6 8h8l4 8v12h-3" stroke="#e7c30b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 50h22" stroke="#e7c30b" strokeWidth="3" strokeLinecap="round"/>
                <path d="M18 32h16l4 6H18v-6z" stroke="#e7c30b" strokeWidth="2.5" strokeLinejoin="round"/>
                <circle cx="30" cy="18" r="5" stroke="#e7c30b" strokeWidth="2.5" fill="none"/>
                <path d="M30 23v6l-3 4" stroke="#e7c30b" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <h2 className="text-3xl font-extrabold text-white">Entrega gratuita na região*</h2>
            </div>
            <p className="text-white/70 text-lg max-w-2xl">
              Realizamos entregas sem custo adicional em toda a área de abrangência das nossas 3 unidades<br />
              <strong className="text-white">Atibaia</strong>,{" "}
              <strong className="text-white">Bom Jesus dos Perdões</strong> e{" "}
              <strong className="text-white">Nazaré Paulista</strong> e municípios vizinhos.
            </p>
            <p className="text-white/50 text-sm mt-3">Consulte disponibilidade e valor mínimo por pedido pelo WhatsApp · Seg–Sex 8h–18h · Sáb 8h–13h</p>
          </div>
        </div>
      </section>

      {/* Parceiros / Marcas */}
      <section className="py-20 bg-muted overflow-hidden">
        <div className="container mb-12">
          <SectionReveal>
            <h2 className="text-3xl font-extrabold text-center text-balance text-secondary">Nossos Parceiros</h2>
          </SectionReveal>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />
          <div className="animate-scroll-marcas">
            {[...marcas, ...marcas, ...marcas].map((m, i) => (
              <div key={`${m.name}-${i}`} className="px-8 flex-shrink-0 flex items-center justify-center group">
                <div className="w-40 h-24 rounded-xl border border-border bg-white shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20 group-hover:scale-105 p-3">
                  <img
                    src={`/logos/${m.arquivo}`}
                    alt={m.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20" style={{ background: "#0f1520" }}>
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-extrabold text-white">Confira se você nos segue</h2>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e7c30b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
                <p className="mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Acompanhe novidades, promoções e dicas automotivas</p>
              </div>
              <a
                href="https://www.instagram.com/celsaoautopecas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white shrink-0"
                style={{
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  borderRadius: "8px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @celsaoautopecas
              </a>
            </div>
          </SectionReveal>
          <InstagramFeed />
        </div>
      </section>

      {/* Avaliações Google */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-secondary">O que nossos clientes dizem</h2>
                <div className="flex items-center gap-2 mt-2">
                  <StarRating count={5} />
                  <span className="text-sm text-muted-foreground font-medium">Avaliações Google Meu Negócio</span>
                </div>
              </div>
              <a
                href="https://www.google.com/search?q=Cels%C3%A3o+Auto+Pe%C3%A7as"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 text-sm font-bold transition-colors hover:bg-gray-50 shrink-0"
                style={{ borderColor: "#1a2840", color: "#1a2840", borderRadius: "8px" }}
              >
                Ver todas no Google
              </a>
            </div>
          </SectionReveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {avaliacoes.map((av, i) => (
              <SectionReveal key={av.nome} delay={i * 0.08}>
                <div className="flex flex-col gap-3 p-6 rounded-xl border border-gray-100 shadow-sm bg-white h-full" style={{ borderTop: "3px solid #e7c30b" }}>
                  <StarRating count={av.estrelas} />
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">"{av.texto}"</p>
                  <p className="font-bold text-gray-900 text-sm">{av.nome}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm mb-4">Foi bem atendido? Conta pra gente no Google!</p>
              <a
                href="/avaliacao"
                className="inline-flex items-center gap-2 px-8 py-4 font-extrabold text-white text-sm transition-all hover:brightness-110 active:scale-[0.97]"
                style={{ backgroundColor: "#e7c30b", color: "#0f1520", borderRadius: "8px" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0f1520">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Deixar minha avaliação
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contato rápido */}
      <section className="py-20">
        <div className="container">
          <SectionReveal>
            <h2 className="text-3xl font-extrabold text-center mb-12 text-balance text-secondary">Entre em contato</h2>
          </SectionReveal>
          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <SectionReveal delay={0.1}>
              <a href="mailto:comercial@celsaoautopecas.com" className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">comercial@celsaoautopecas.com</p>
                </div>
              </a>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <a href="tel:+5511932997159" className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone / WhatsApp</p>
                  <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">(11) 93299-7159</p>
                </div>
              </a>
            </SectionReveal>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stores.map((s, i) => (
              <SectionReveal key={s.city} delay={0.1 + i * 0.08} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-card-foreground">{s.city}</h3>
                    <p className="text-sm text-muted-foreground">{s.address}</p>
                  </div>
                </div>
                <a href={`tel:${s.telRaw}`} className="text-sm font-medium text-primary hover:underline block mb-1">{s.tel}</a>
                <p className="text-xs text-muted-foreground">{s.hours}</p>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal className="mt-10 text-center">
            <Link to="/contato" className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]">
              Enviar mensagem →
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
