import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511932997159?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20informações%20sobre%20uma%20peça."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 animate-pulse-whatsapp"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;