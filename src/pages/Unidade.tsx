import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock } from "lucide-react";
import { useOrcamento } from "@/context/OrcamentoContext";

interface UnidadeProps {
  cidade: string;
  cidadesVizinhas: string;
  endereco: string;
  telefone: string;
  telefoneRaw: string;
  whatsapp: string;
  mapsEmbed: string;
  mapsLink: string;
  title: string;
  description: string;
  slug: string;
}

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5l5.805-1.524A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.374l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
  </svg>
);

const UnidadePage = ({
  cidade,
  cidadesVizinhas,
  endereco,
  telefone,
  telefoneRaw,
  mapsEmbed,
  mapsLink,
  title,
  description,
  slug,
}: UnidadeProps) => {
  const { openModal } = useOrcamento();
  const canonicalUrl = `https://celsaoautopecas.com/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": `Celsão Auto Peças — ${cidade}`,
    "url": canonicalUrl,
    "telephone": telefoneRaw,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": endereco,
      "addressLocality": cidade,
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
    "image": "https://celsaoautopecas.com/logo.png",
    "parentOrganization": {
      "@type": "AutoPartsStore",
      "name": "Celsão Auto Peças",
      "url": "https://celsaoautopecas.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="py-16 text-white"
        style={{ background: "linear-gradient(135deg, #1a2840 0%, #0f1520 100%)" }}
      >
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Auto Peças em {cidade}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Peças originais e alternativas para todas as marcas. Atendimento especializado há mais de 30 anos.
          </p>
        </div>
      </section>

      {/* Texto SEO */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              A <strong>Celsão Auto Peças em {cidade}</strong> é referência em peças automotivas na região, atendendo motoristas de {cidade} e cidades vizinhas como {cidadesVizinhas}. Com mais de 30 anos de experiência no mercado, a Celsão oferece um dos maiores estoques de autopeças da região, com peças originais e alternativas para todas as marcas e modelos.
            </p>
            <p>
              Nossa unidade em {cidade} conta com uma equipe de atendentes especializados prontos para ajudar você a encontrar a peça certa para o seu veículo. Trabalhamos com peças para sistema de <strong>freios</strong>, <strong>suspensão</strong>, <strong>motor</strong>, <strong>sistema elétrico</strong>, <strong>filtros</strong>, <strong>correias</strong>, <strong>embreagem</strong> e muito mais.
            </p>
            <p>
              Atendemos veículos de todas as marcas, incluindo <strong>Chevrolet, Volkswagen, Ford, Fiat, Toyota, Honda, Hyundai, Renault, Jeep, Nissan, Mitsubishi</strong> e muitas outras. Seja seu carro popular ou de alto padrão, temos a peça que você precisa.
            </p>
            <p>
              Na Celsão você encontra peças de marcas líderes do mercado como <strong>Bosch, Cofap, Nakata, NGK, Continental, Frasle, Tecfil, Magneti Marelli</strong> e outras marcas de qualidade comprovada. Trabalhamos apenas com fornecedores confiáveis para garantir a segurança e durabilidade das peças.
            </p>
            <p>
              Além de peças, nossa equipe oferece <strong>consultoria técnica gratuita</strong> para ajudar você a identificar o problema do seu veículo e escolher a melhor solução. Nosso objetivo é entregar qualidade, confiança e o melhor custo-benefício para você.
            </p>
            <p>
              Visite nossa loja em {cidade} localizada em <strong>{endereco}</strong> e conheça nosso atendimento diferenciado. Também realizamos <strong>pedidos via WhatsApp</strong> para sua comodidade. Nossa equipe responde rapidamente e pode verificar a disponibilidade de qualquer peça no estoque.
            </p>
            <p>
              Com três unidades estrategicamente localizadas em Bom Jesus dos Perdões, Nazaré Paulista e Atibaia, a Celsão Auto Peças atende toda a região com agilidade e qualidade. Venha nos visitar ou entre em contato agora mesmo!
            </p>
          </div>
        </div>
      </section>

      {/* Informações + Mapa lado a lado */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Card informações */}
            <div
              className="rounded-xl p-8 shadow-sm border border-gray-200 h-full"
              style={{ backgroundColor: "#fff" }}
            >
              <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1a2840" }}>
                Informações da Unidade
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#dc1b17" }} />
                  <div>
                    <p className="font-semibold text-gray-800">Endereço</p>
                    <p className="text-gray-600">{endereco} — {cidade}, SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#dc1b17" }} />
                  <div>
                    <p className="font-semibold text-gray-800">Telefone</p>
                    <a href={`tel:${telefoneRaw}`} className="text-gray-600 hover:underline">{telefone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#dc1b17" }} />
                  <div>
                    <p className="font-semibold text-gray-800">Horário</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h–18h</p>
                    <p className="text-gray-600">Sábado: 8h–13h</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openModal(cidade)}
                className="mt-6 inline-flex items-center gap-3 px-6 py-3 font-extrabold text-white w-fit"
                style={{ backgroundColor: "#25d366", borderRadius: 0 }}
              >
                <WhatsAppIcon size={20} />
                Pedir orçamento pelo WhatsApp
              </button>
            </div>

            {/* Mapa */}
            <div>
              <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1a2840" }}>Como chegar</h2>
              <div className="relative rounded-xl overflow-hidden" style={{ border: "1px solid #e5e7eb" }}>
                <iframe
                  src={mapsEmbed}
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa Celsão Auto Peças ${cidade}`}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 font-bold text-white text-sm shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: "#1a2840", borderRadius: "8px" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                    Ver rota no Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 text-white text-center" style={{ background: "#1a2840" }}>
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-4">Precisa de uma peça?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Entre em contato agora pelo WhatsApp e receba atendimento rápido e especializado da nossa equipe em {cidade}.
          </p>
          <button
            onClick={() => openModal(cidade)}
            className="inline-flex items-center gap-3 px-8 py-4 font-extrabold text-white"
            style={{ backgroundColor: "#25d366", borderRadius: 0 }}
          >
            <WhatsAppIcon size={22} />
            Falar com atendente agora
          </button>
        </div>
      </section>
    </>
  );
};

export default UnidadePage;
