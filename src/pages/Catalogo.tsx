import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionReveal from "@/components/SectionReveal";

type Category = "Todos" | "Motor" | "Suspensão" | "Freios" | "Elétrica" | "Transmissão";

const categories: Category[] = ["Todos", "Motor", "Suspensão", "Freios", "Elétrica", "Transmissão"];

const products = [
  { name: "Filtro de Óleo Mann W719/30", cat: "Motor", price: "R$ 47,90", desc: "Filtro de óleo de alta performance para motores a combustão" },
  { name: "Velas NGK Iridium", cat: "Motor", price: "R$ 189,90", desc: "Velas de ignição de iridium para maior durabilidade" },
  { name: "Pastilhas de Freio Bosch", cat: "Freios", price: "R$ 156,50", desc: "Pastilhas cerâmicas de alto desempenho" },
  { name: "Corrente de Distribuição Dayco", cat: "Motor", price: "R$ 284,00", desc: "Corrente de distribuição com tensionador incluso" },
  { name: "Amortecedor Monroe", cat: "Suspensão", price: "R$ 542,00", desc: "Amortecedor dianteiro a gás pressurizado" },
  { name: "Disco de Freio Ventilado", cat: "Freios", price: "R$ 328,00", desc: "Disco ventilado para melhor dissipação de calor" },
  { name: "Bateria Moura 60Ah", cat: "Elétrica", price: "R$ 487,00", desc: "Bateria automotiva selada de alta capacidade" },
  { name: "Alternador Bosch 90A", cat: "Elétrica", price: "R$ 624,00", desc: "Alternador remanufaturado com garantia de fábrica" },
  { name: "Kit Embreagem Sachs", cat: "Transmissão", price: "R$ 892,00", desc: "Kit completo com platô, disco e rolamento" },
  { name: "Mola Helicoidal Cofap", cat: "Suspensão", price: "R$ 267,00", desc: "Mola helicoidal dianteira original" },
  { name: "Bomba de Combustível Bosch", cat: "Motor", price: "R$ 412,00", desc: "Bomba elétrica de combustível flex" },
  { name: "Sensor ABS Delphi", cat: "Elétrica", price: "R$ 138,00", desc: "Sensor de velocidade da roda dianteira" },
];

const Catalogo = () => {
  const [active, setActive] = useState<Category>("Todos");
  const filtered = active === "Todos" ? products : products.filter((p) => p.cat === active);

  return (
    <>
      <Helmet>
      <title>Catálogo de Peças | Celsão Auto Peças</title>
      <meta name="description" content="Catálogo de autopeças da Celsão: freios, suspensão, motor, elétrica, filtros, correias e mais. Peças originais das melhores marcas para todos os veículos. Atibaia, Bom Jesus dos Perdões e Nazaré Paulista." />
      <link rel="canonical" href="https://celsaoautopecas.com/catalogo" />
        <title>Catálogo de Peças | Celsão Auto Peças</title>
      </Helmet>

      <section className="py-20">
        <div className="container">
          <SectionReveal>
            <h1 className="text-4xl font-bold mb-4 text-balance">Catálogo de peças</h1>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.96] ${
                    active === c
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-border"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, i) => (
              <SectionReveal key={p.name} delay={i * 0.05} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col">
                <div className="mb-3 h-32 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-3xl">🔧</span>
                </div>
                <span className="text-xs font-medium text-primary mb-1">{p.cat}</span>
                <h3 className="text-sm font-bold text-card-foreground mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mb-4 flex-1 text-pretty">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{p.price}</span>
                  <a
                    href={`https://wa.me/5511932997159?text=Olá!%20Gostaria%20de%20comprar:%20${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.96]"
                  >
                    Comprar
                  </a>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalogo;
