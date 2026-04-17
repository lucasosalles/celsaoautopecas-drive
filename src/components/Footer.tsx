import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer style={{ backgroundColor: "#0f1e30", borderTop: "2px solid #e7c30b" }} className="text-secondary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src="/logo.png" alt="Celsão Auto Peças" className="h-12 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-sm text-secondary-foreground/70 text-pretty">
            Qualidade e confiança para seu veículo há mais de 30 anos.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/50">Links rápidos</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "Sobre", path: "/sobre" },
              { label: "Contato", path: "/contato" },
              { label: "Avalie-nos", path: "/avaliacao" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-secondary-foreground/70 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/50">Contato</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>
              <a href="tel:+5511932997159" className="hover:text-gold transition-colors">(11) 93299-7159</a>
            </li>
            <li>
              <a href="mailto:comercial@celsaoautopecas.com" className="hover:text-gold transition-colors">comercial@celsaoautopecas.com</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/50">Redes sociais</h4>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/celsaoautopecasoficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 text-gold hover:bg-gold hover:text-gold-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/celsaoautopecas" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 text-gold hover:bg-gold hover:text-gold-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@CelsaoAutoPecas" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 text-gold hover:bg-gold hover:text-gold-foreground transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-secondary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/50">
        <p>© 2026 Celsão Auto Peças. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-secondary-foreground transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-secondary-foreground transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
