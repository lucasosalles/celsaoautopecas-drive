import { createContext, useContext, useState } from "react";

interface OrcamentoContextType {
  openModal: (unidadeDefault?: string) => void;
  closeModal: () => void;
  isOpen: boolean;
  unidadeDefault: string;
}

const OrcamentoContext = createContext<OrcamentoContextType | null>(null);

export const OrcamentoProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [unidadeDefault, setUnidadeDefault] = useState("");

  const openModal = (unidade = "") => {
    setUnidadeDefault(unidade);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <OrcamentoContext.Provider value={{ openModal, closeModal, isOpen, unidadeDefault }}>
      {children}
    </OrcamentoContext.Provider>
  );
};

export const useOrcamento = () => {
  const ctx = useContext(OrcamentoContext);
  if (!ctx) throw new Error("useOrcamento must be used inside OrcamentoProvider");
  return ctx;
};
