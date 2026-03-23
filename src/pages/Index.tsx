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

const products = [
  { name: "Par Lanterna Dianteira Âmbar Kombi 1976 a 2014", price: "R$ 110,00", badge: "Lançamento" },
  { name: "Par Lente Lanterna Dianteira Cristal Kombi 1967 a 1975", price: "R$ 59,90" },
  { name: "Par Aro Moldura Farol Preto Fusca/Kombi", price: "R$ 28,00" },
  { name: "Par Lente Lanterna Traseira Rubi Pampa/F100 1982-1986", price: "R$ 55,90" },
  { name: "Par Lanterna Pisca Dianteira Âmbar Opala Caravan 1975-1979", price: "R$ 349,00", badge: "Exclusivo" },
];

const stores = [
  { city: "Bom Jesus dos Perdões", address: "Av. Santos Dumont, 425", tel: "(11) 95258-7563", telRaw: "+5511952587563", hours: "Seg–Sex 08h–18h | Sáb 08h–13h" },
  { city: "Nazaré Paulista", address: "Rua José Gonçalves, 332", tel: "(11) 95259-8021", telRaw: "+5511952598021", hours: "Seg–Sex 08h–18h | Sáb 08h–13h" },
  { city: "Atibaia", address: "Praça 24 de Junho, 40", tel: "(11) 5197-1313", telRaw: "+551151971313", hours: "Seg–Sex 08h–18h | Sáb 08h–13h" },
];

const Index = () => (
  <>
    <Helmet>
      <title>Celsão Auto Peças | Autopeças em Atibaia, Nazaré Paulista e Bom Jesus dos Perdões</title>
      <meta name="description" content="Há mais de 30 anos oferecendo as melhores autopeças. Faróis, lanternas, retrovisores e acessórios. 3 lojas em SP. Entrega para todo o Brasil." />
    </Helmet>

    {/* Hero */}
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a2840 0%, #0f1520 60%, #1a0c0c 100%)" }}
    >
      <div className="container relative z-10 py-20">
        <SectionReveal>
          <span
            className="inline-block px-4 py-1.5 text-xs font-semibold text-gold mb-6"
            style={{ border: "1.5px solid hsl(var(--gold))", borderRadius: 0 }}
          >
            Há mais de 30 anos no mercado
          </span>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-[1.1] text-balance mb-6 text-white">
            Confiança e Tradição para o seu Veículo
          </h1>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <p className="text-lg max-w-xl mb-8 text-pretty leading-relaxed text-white/75">
            Oferecemos as melhores peças automotivas do mercado com garantia de procedência. Atendimento especializado e consultoria técnica para manter seu veículo sempre em perfeito estado.
          </p>
        </SectionReveal>
        <SectionReveal delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 font-extrabold transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg"
              style={{ backgroundColor: "#e7c30b", color: "#1a1a1a", borderRadius: 0 }}
            >
              Fale conosco
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Benefits Bar */}
    <section className="bg-gold py-6">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

    {/* Featured Products */}
    <section className="py-20 bg-muted">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-center mb-12 text-balance text-secondary">Produtos em destaque</h2>
        </SectionReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((p, i) => (
            <SectionReveal key={p.name} delay={i * 0.08} className="group relative rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col">
              {p.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                  {p.badge}
                </span>
              )}
              <div className="mb-4 h-32 rounded-lg bg-muted flex items-center justify-center">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2 flex-1 text-pretty">{p.name}</h3>
              <p className="text-lg font-bold text-primary">{p.price}</p>
            </SectionReveal>
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
