import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useOrcamento } from "@/context/OrcamentoContext";

const UNIDADES = [
  { label: "Atibaia", phone: "5511932997159" },
  { label: "Bom Jesus dos Perdões", phone: "5511932997159" },
  { label: "Nazaré Paulista", phone: "5511932997159" },
];

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.5l5.805-1.524A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.374l-.36-.214-3.724.977.994-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
  </svg>
);

const OrcamentoModal = () => {
  const { isOpen, closeModal, unidadeDefault } = useOrcamento();
  const [form, setForm] = useState({ carro: "", anoModelo: "", pecas: "", unidade: "" });

  useEffect(() => {
    if (isOpen) {
      setForm({ carro: "", anoModelo: "", pecas: "", unidade: unidadeDefault || UNIDADES[0].label });
    }
  }, [isOpen, unidadeDefault]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const unidadeInfo = UNIDADES.find((u) => u.label === form.unidade) ?? UNIDADES[0];
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de fazer um orçamento.\n\n🚗 Carro: ${form.carro}\n📅 Ano/Modelo: ${form.anoModelo}\n🔧 Peças: ${form.pecas}\n📍 Unidade: ${form.unidade}`
    );
    window.open(`https://api.whatsapp.com/send/?phone=${unidadeInfo.phone}&text=${mensagem}`, "_blank");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-extrabold" style={{ color: "#1a2840" }}>Solicitar orçamento</h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Carro *</label>
            <input
              required
              placeholder="Ex: Chevrolet Onix"
              value={form.carro}
              onChange={(e) => setForm({ ...form, carro: e.target.value })}
              maxLength={100}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Ano / Modelo *</label>
            <input
              required
              placeholder="Ex: 2020 / LT"
              value={form.anoModelo}
              onChange={(e) => setForm({ ...form, anoModelo: e.target.value })}
              maxLength={20}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Peças que precisa *</label>
            <textarea
              required
              rows={3}
              placeholder="Ex: Pastilha de freio dianteira, filtro de óleo"
              value={form.pecas}
              onChange={(e) => setForm({ ...form, pecas: e.target.value })}
              maxLength={500}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Unidade para orçamento *</label>
            <select
              required
              value={form.unidade}
              onChange={(e) => setForm({ ...form, unidade: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
            >
              {UNIDADES.map((u) => (
                <option key={u.label} value={u.label}>{u.label}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 font-extrabold text-white mt-2"
            style={{ backgroundColor: "#25d366", borderRadius: "8px" }}
          >
            <WhatsAppIcon />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrcamentoModal;
