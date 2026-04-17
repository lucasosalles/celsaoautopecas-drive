import { Helmet } from "react-helmet-async";
import SectionReveal from "@/components/SectionReveal";

const unidades = [
  {
    cidade: "Atibaia",
    endereco: "Praça 24 de Junho, 40 — Atibaia, SP",
    link: "https://www.google.com/search?q=Cels%C3%A3o+Auto+Pe%C3%A7as&stick=H4sIAAAAAAAA_-NgU1I1qLA0SU5NNjQxNEs2Tk0xNjS0MqgwNLE0MjO1SDExNzc2tDQ3XsQq7JyaU3x4cb6CY2lJvkJA6uHlicUAgHXpST8AAAA&hl=pt-BR&mat=CUdm8FhcaugVElcBTVDHnrSvFOMVurYTsMw-LdWVX2U9LIAU2FlTsSwLvvpg1ot0nclR-2BaDGjKUCP4U6DaA3MwwWpfRABCdd1szc6vxRXcttSYrV4vKpw70WHAIq1N_TY&authuser=0",
  },
  {
    cidade: "Bom Jesus dos Perdões",
    endereco: "Av. Santos Dumont, 425 — Bom Jesus dos Perdões, SP",
    link: "https://www.google.com/search?q=Cels%C3%A3o+Auto+Pe%C3%A7as&stick=H4sIAAAAAAAA_-NgU1I1qLA0SU5NSjW2MEhLSklLNjW3MqgwT7W0NDYzTk42sDRKTrZIW8Qq7JyaU3x4cb6CY2lJvkJA6uHlicUATBd-uz8AAAA&hl=pt-BR&mat=CdPCH90QHfofElcBTVDHniRDLRE4KOwj9w1UJID7T6gqVXRDe5xeW9_eeGVptix2reQDT18TS5mclkiR8VgllqyuMsZ4FCBI3EOYOK2Sw_s9DKwIs1i3BadB39w0hTpokfE&authuser=0",
  },
  {
    cidade: "Nazaré Paulista",
    endereco: "Rua José Gonçalves, 332 — Nazaré Paulista, SP",
    link: "https://www.google.com/search?q=Cels%C3%A3o+Auto+Pe%C3%A7as&stick=H4sIAAAAAAAA_-NgU1I1qLA0SU61NDcwS0kxSEszMrC0MqhINU-0SDZPTkk0SzYxT00yWMQq7JyaU3x4cb6CY2lJvkJA6uHlicUASTzJgz8AAAA&hl=pt-BR&mat=CdQXj1oGnOsnElcBTVDHnpTHO2j-vs_5RuVH3xC3cyJM20Tym1Zt4hhr3milFgNcRo3Mfk_KoIkGqEtMHoMpBNQY4bjKnT0l9rXkfKjbhEwxlCL0kuWz-suQNT42zKngeic&authuser=0",
  },
];

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#e7c30b">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Avaliacao = () => (
  <>
    <Helmet>
      <title>Avalie-nos no Google | Celsão Auto Peças</title>
      <meta name="description" content="Deixe sua avaliação no Google para a Celsão Auto Peças. Sua opinião é muito importante para nós. Avalie a unidade de Atibaia, Bom Jesus dos Perdões ou Nazaré Paulista." />
      <link rel="canonical" href="https://celsaoautopecas.com/avaliacao" />
    </Helmet>

    {/* Hero */}
    <section className="py-20 text-white" style={{ background: "linear-gradient(135deg, #1a2840 0%, #0f1520 100%)" }}>
      <div className="container text-center">
        <SectionReveal>
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map((i) => <StarIcon key={i} />)}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sua opinião vale muito!
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Se você foi bem atendido, conta pra gente no Google. Isso nos ajuda a crescer e a atender cada vez mais pessoas na região.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Cards das unidades */}
    <section className="py-20" style={{ background: "#0f1520" }}>
      <div className="container">
        <SectionReveal>
          <h2 className="text-2xl font-extrabold text-white text-center mb-12">
            Escolha a unidade que você visitou
          </h2>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {unidades.map((u, i) => (
            <SectionReveal key={u.cidade} delay={i * 0.1}>
              <div
                className="flex flex-col justify-between p-8 rounded-xl h-full"
                style={{ background: "#1a2840", border: "1px solid rgba(231,195,11,0.2)" }}
              >
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map((s) => <StarIcon key={s} />)}
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{u.cidade}</h3>
                  <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>{u.endereco}</p>
                </div>
                <a
                  href={u.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-3 px-6 font-bold text-sm transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                  style={{ backgroundColor: "#e7c30b", color: "#0f1520", borderRadius: "8px" }}
                >
                  <GoogleIcon />
                  Avaliar no Google
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <p className="text-center text-sm mt-12" style={{ color: "rgba(255,255,255,0.35)" }}>
            Ao clicar você será redirecionado para o Google. Basta selecionar as estrelas e escrever um comentário.
          </p>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Avaliacao;
