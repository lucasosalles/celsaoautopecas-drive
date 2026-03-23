import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#0f1e30] border-t-2 border-[#e7c30b] text-white">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" className="h-10 w-auto object-contain" style={{filter:'brightness(0) invert(1)'}} />
          </div>
          <p className="text-sm text-white/70 text-pretty">
            Qualidade e confiança para seu veículo há mais de 30 anos.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">Links rápidos</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "Sobre", path: "/sobre" },
              { label: "Contato", path: "/contato" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-white/70 hover:text-[#e7c30b] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">Contato</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="tel:+5511932997159" className="hover:text-[#e7c30b] transition-colors">(11) 93299-7159</a>
            </li>
            <li>
              <a href="mailto:comercial@celsaoautopecas.com" className="hover:text-[#e7c30b] transition-colors">comercial@celsaoautopecas.com</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">Redes sociais</h4>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/celsaoautopecas" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#e7c30b] hover:bg-[#e7c30b] hover:text-[#0f1e30] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/celsaoautopecas" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#e7c30b] hover:bg-[#e7c30b] hover:text-[#0f1e30] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/celsaoautopecas" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#e7c30b] hover:bg-[#e7c30b] hover:text-[#0f1e30] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                <path d="M2.5 7.1c-.2.8-.3 1.7-.3 2.9v4c0 1.2.1 2.1.3 2.9.4 1.5 1.6 2.7 3.1 3.1.8.2 2.3.3 6.4.3s5.6-.1 6.4-.3c1.5-.4 2.7-1.6 3.1-3.1.2-.8.3-1.7.3-2.9v-4c0-1.2-.1-2.1-.3-2.9-.4-1.5-1.6-2.7-3.1-3.1-.8-.2-2.3-.3-6.4-.3s-5.6.1-6.4.3c-1.5.4-2.7 1.6-3.1 3.1z"></path>
                <polygon points="9.5 15.5 16 12 9.5 8.5 9.5 15.5"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>© 2026 Celsão Auto Peças. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
