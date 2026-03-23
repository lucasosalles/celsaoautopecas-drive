import { Helmet } from "react-helmet-async";
import { Award, Headphones, Clock, Lightbulb, Check } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const values = [
  { icon: Award, title: "Qualidade garantida", desc: "Trabalhamos apenas com peças originais e de fornecedores certificados" },
  { icon: Headphones, title: "Atendimento especializado", desc: "Nossa equipe técnica orienta na escolha da peça ideal" },
  { icon: Clock, title: "Experiência comprovada", desc: "Mais de 30 anos de atuação no mercado automotivo" },
  { icon: Lightbulb, title: "Inovação constante", desc: "Acompanhamos as novidades do mercado automotivo" },
];

const differentials = [
  "Estoque completo com mais de 5.000 itens",
  "Entrega rápida para toda região",
  "Garantia de fábrica em todos os produtos",
  "Preços competitivos e condições especiais",
  "Atendimento técnico especializado",
  "Parcerias com as melhores marcas do mercado",
];

const Sobre = () => (
  <>
    <Helmet>
      <title>Sobre Nós | Celsão Auto Peças</title>
    </Helmet>

    <section className="py-20">
      <div className="container max-w-4xl">
        <SectionReveal>
          <h1 className="text-4xl font-bold mb-4 text-balance text-secondary">Sobre a Celsão Auto Peças</h1>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            Uma história de dedicação, qualidade e compromisso com nossos clientes
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm mb-16">
            <h2 className="text-2xl font-extrabold mb-4 text-secondary">Nossa história</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Fundada em 1994 por Celso Barbosa em Bom Jesus dos Perdões — SP, a Celsão Auto Peças nasceu do sonho de oferecer peças automotivas de qualidade com atendimento diferenciado. O que começou como uma pequena loja, hoje são 3 unidades referência na região. Ao longo dos anos, construímos parcerias sólidas com os principais fabricantes e distribuidores do mercado, garantindo sempre produtos originais e com procedência certificada.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-center mb-12 text-balance text-secondary">Nossos valores</h2>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.08} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{v.desc}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-8 text-balance">Nossos diferenciais</h2>
        </SectionReveal>
        <ul className="space-y-4">
          {differentials.map((d, i) => (
            <SectionReveal key={d} delay={i * 0.06}>
              <li className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-card-foreground">{d}</span>
              </li>
            </SectionReveal>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Sobre;
