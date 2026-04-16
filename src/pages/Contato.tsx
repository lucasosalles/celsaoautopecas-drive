import { Helmet } from "react-helmet-async";
import { Mail, Phone } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { useOrcamento } from "@/context/OrcamentoContext";

const Contato = () => {
  const { openModal } = useOrcamento();
  return (
    <>
      <Helmet>
        <title>Contato | Celsão Auto Peças</title>
      </Helmet>

      <section className="py-20">
        <div className="container max-w-2xl">
          <SectionReveal>
            <h1 className="text-4xl font-bold mb-4 text-secondary">Entre em contato</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Escolha a forma mais rápida para falar com a gente.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:comercial@celsaoautopecas.com"
                className="flex items-center gap-5 border border-border bg-card p-6 shadow-sm transition-colors hover:bg-gray-50"
                style={{ borderBottom: "3px solid #e7c30b" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: "#1a2840" }}>
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Enviar e-mail</p>
                  <p className="text-sm text-muted-foreground">comercial@celsaoautopecas.com</p>
                </div>
              </a>

              {/* WhatsApp */}
              <button
                onClick={() => openModal()}
                className="flex items-center gap-5 border border-border bg-card p-6 shadow-sm transition-colors hover:bg-gray-50 w-full text-left"
                style={{ borderBottom: "3px solid #25d366" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: "#25d366" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5l5.805-1.524A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.374l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Fazer orçamento pelo WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Resposta rápida — envie o modelo do seu carro e a peça</p>
                </div>
              </button>

              {/* Telefone */}
              <a
                href="tel:+551145972020"
                className="flex items-center gap-5 border border-border bg-card p-6 shadow-sm transition-colors hover:bg-gray-50"
                style={{ borderBottom: "3px solid #dc1b17" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: "#dc1b17" }}>
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-card-foreground">Ligar agora</p>
                  <p className="text-sm text-muted-foreground">(11) 4597-2020</p>
                </div>
              </a>

            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Contato;
