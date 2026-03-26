import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-gold bg-secondary backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 w-40 px-3 py-1" style={{ backgroundColor: "#e7c30b" }}>
          <img src="/logo.png" alt="Celsão Auto Peças" className="h-16 w-auto object-contain" style={{ transform: 'scale(1.35)', transformOrigin: 'left center' }} />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-1 text-sm transition-colors hover:text-gold ${
                pathname === item.path
                  ? "text-gold font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold"
                  : "text-white/65 font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white/65"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gold/30 bg-secondary pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm transition-colors ${
                pathname === item.path ? "text-gold font-bold bg-gold/5" : "text-white/65 font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
