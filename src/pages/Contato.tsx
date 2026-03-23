import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const stores = [
  {
    city: "Bom Jesus dos Perdões",
    address: "Av. Santos Dumont, 425",
    tel: "(11) 95258-7563",
    telRaw: "+5511952587563",
    hours: "Seg–Sex 08h–18h | Sáb 08h–13h",
    mapSrc: "https://maps.google.com/maps?q=Av+Santos+Dumont+425+Bom+Jesus+dos+Perdoes+SP&output=embed",
  },
  {
    city: "Nazaré Paulista",
    address: "Rua José Gonçalves, 332",
    tel: "(11) 95259-8021",
    telRaw: "+5511952598021",
    hours: "Seg–Sex 08h–18h | Sáb 08h–13h",
    mapSrc: "https://maps.google.com/maps?q=Rua+Jose+Goncalves+332+Nazare+Paulista+SP&output=embed",
  },
  {
    city: "Atibaia",
    address: "Praça 24 de Junho, 40",
    tel: "(11) 5197-1313",
    telRaw: "+551151971313",
    hours: "Seg–Sex 08h–18h | Sáb 08h–13h",
    mapSrc: "https://maps.google.com/maps?q=Praca+24+de+Junho+40+Atibaia+SP&output=embed",
  },
];

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contato e Lojas | Celsão Auto Peças</title>
      </Helmet>

      <section className="py-20">
        <div className="container">
          <SectionReveal>
            <h1 className="text-4xl font-bold mb-4 text-balance text-secondary">Entre em contato</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl text-pretty">
              Nossa equipe está pronta para atender você. Tire suas dúvidas, solicite orçamentos ou agende uma visita à nossa loja.
            </p>
          </SectionReveal>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <SectionReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Nome completo *</label>
                  <input
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">E-mail *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Telefone</label>
                  <input
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Assunto</label>
                  <input
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                    className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Mensagem *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                >
                  Enviar mensagem
                </button>
                {sent && (
                  <p className="text-sm text-whatsapp font-medium">Mensagem enviada com sucesso!</p>
                )}
              </form>
            </SectionReveal>

            {/* Info */}
            <SectionReveal delay={0.2}>
              <div className="space-y-6">
                {stores.map((s) => (
                  <div key={s.city} className="border border-border bg-card p-6 shadow-sm" style={{ borderBottom: "3px solid #e7c30b" }}>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-card-foreground">{s.city}</h3>
                        <p className="text-sm text-muted-foreground">{s.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${s.telRaw}`} className="text-sm font-medium text-primary hover:underline">{s.tel}</a>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{s.hours}</span>
                    </div>
                    <iframe
                      title={`Mapa - ${s.city}`}
                      src={s.mapSrc}
                      className="w-full border-0"
                      style={{ height: 220, borderRadius: 12 }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
