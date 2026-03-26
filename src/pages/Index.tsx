import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Truck, RefreshCw, CreditCard, ShieldCheck, Award, Clock, Headphones, Mail, Phone, MapPin } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const benefits = [
  { icon: RefreshCw, text: "Troca em 7 dias" },
  { icon: CreditCard, text: "Parcele em até 12x" },
  { icon: ShieldCheck, text: "Site 100% seguro" },
];

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

const heroSlides = [
  {
    imagem: "/loja-atibaia.jpg",
    cidade: "Atibaia",
    endereco: "Praça 24 de Junho, 40",
    maps: "https://maps.google.com/?q=Praça+24+de+Junho,+40,+Atibaia,+SP",
  },
  {
    imagem: "/loja-bom-jesus.jpg",
    cidade: "Bom Jesus dos Perdões",
    endereco: "Av. Santos Dumont, 425",
    maps: "https://maps.google.com/?q=Av.+Santos+Dumont,+425,+Bom+Jesus+dos+Perdões,+SP",
  },
  {
    imagem: "/loja-nazare.jpg",
    cidade: "Nazaré Paulista",
    endereco: "R. José Gonçalves, 332",
    maps: "https://maps.google.com/?q=Rua+José+Gonçalves,+332,+Nazaré+Paulista,+SP",
  },
];

const HeroCarrossel = () => {
  const [atual, setAtual] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAtual((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: "100%", minHeight: "400px" }}>
      {/* Degradê esquerda */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, width: "120px", height: "100%",
          background: "linear-gradient(to right, #0f1520 0%, rgba(15,21,32,0.4) 60%, transparent 100%)",
          zIndex: 3, pointerEvents: "none",
        }}
      />

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${atual * 100}%)` }}
      >
        {heroSlides.map((slide, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full" style={{ minWidth: "100%" }}>
            <img
              src={slide.imagem}
              alt={slide.cidade}
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay escuro de baixo */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
            {/* Legenda clicável */}
            <a
              href={slide.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute flex items-center gap-2 font-bold"
              style={{
                top: "12px", right: "12px",
                background: "rgba(0,0,0,0.65)",
                border: "1px solid rgba(231,195,11,0.7)",
                color: "#e7c30b",
                padding: "6px 12px",
                fontSize: "11px",
                textDecoration: "none",
                zIndex: 4,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#e7c30b">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {slide.cidade} · {slide.endereco}
            </a>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute flex gap-1.5" style={{ bottom: "12px", left: "50%", transform: "translateX(-50%)", zIndex: 4 }}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setAtual(i)}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{ backgroundColor: i === atual ? "#e7c30b" : "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => (
  <>
    <Helmet>
      <title>Celsão Auto Peças</title>
      <meta name="description" content="Há mais de 30 anos oferecendo as melhores autopeças. Faróis, lanternas, retrovisores e acessórios. 3 lojas em SP. Entrega para todo o Brasil." />
    </Helmet>

    {/* Hero */}
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a2840 0%, #0f1520 60%, #1a0c0c 100%)" }}
    >
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Esquerda */}
          <div className="flex flex-col gap-6">
            <SectionReveal>
              <span
                className="inline-block px-4 py-1.5 text-xs font-semibold text-gold"
                style={{ border: "1.5px solid hsl(var(--gold))", borderRadius: 0 }}
              >
                Há mais de 30 anos no mercado
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Confiança e Tradição<br />para o seu Veículo
              </h1>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-white/65 text-base leading-relaxed">
                Oferecemos as melhores peças automotivas do mercado com garantia de procedência. Atendimento especializado e consultoria técnica para manter seu veículo sempre em perfeito estado.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/5511932997159?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 font-extrabold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97] w-fit"
                  style={{ backgroundColor: "#25d366", borderRadius: 0 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5l5.805-1.524A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.374l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Falar com atendente
                </a>
                <StatusAtendente />
              </div>
            </SectionReveal>
          </div>

          {/* Direita: carrossel */}
          <SectionReveal delay={0.2}>
            <HeroCarrossel />
          </SectionReveal>

        </div>
      </div>
    </section>

    {/* Benefits Bar */}
    <section className="bg-gold py-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center justify-items-center">
          {benefits.map((b) => (
            <div key={b.text} className="flex items-center gap-3 justify-center text-center md:text-left">
              <b.icon className="h-5 w-5 shrink-0 text-gold-foreground" />
              <span className="text-sm font-bold text-gold-foreground">{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Differentials */}
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

    {/* Featured Products / Marcas */}
    <section className="py-20 bg-muted overflow-hidden">
      <div className="container mb-12">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-center text-balance text-secondary">Nossos Parceiros</h2>
        </SectionReveal>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradientes laterais para suavizar as bordas da animação */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-scroll-marcas">
          {/* Duplicamos a lista para criar o efeito infinito sem cortes */}
          {[...marcas, ...marcas, ...marcas].map((m, i) => (
            <div 
              key={`${m.name}-${i}`} 
              className="px-8 flex-shrink-0 flex items-center justify-center group"
            >
              <div className="w-40 h-24 rounded-xl border border-border bg-white shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20 group-hover:scale-105 p-3">
                <img 
                  src={`/logos/${m.arquivo}`} 
                  alt={m.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Quick */}
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

export default Index;
