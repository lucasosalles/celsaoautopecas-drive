import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const unidades = [
  { label: "Atibaia", path: "/atibaia" },
  { label: "Bom Jesus dos Perdões", path: "/bom-jesus-dos-perdoes" },
  { label: "Nazaré Paulista", path: "/nazare-paulista" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileUnidadesOpen, setMobileUnidadesOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isUnidadePage = unidades.some((u) => u.path === pathname);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-gold-foreground/20 bg-gold">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 w-40 px-3 py-1">
          <img src="/logo.png" alt="Celsão Auto Peças" className="h-16 w-auto object-contain" style={{ transform: 'scale(1.35)', transformOrigin: 'left center' }} />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-1 text-sm transition-colors hover:text-gold-foreground ${
                pathname === item.path
                  ? "text-gold-foreground font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold-foreground"
                  : "text-gold-foreground/60 font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown Nossas Unidades */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`relative py-1 text-sm transition-colors hover:text-gold-foreground flex items-center gap-1 ${
                isUnidadePage
                  ? "text-gold-foreground font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold-foreground"
                  : "text-gold-foreground/60 font-medium"
              }`}
            >
              Nossas Unidades
              <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white shadow-lg rounded border border-gray-100 py-1 z-50">
                {unidades.map((u) => (
                  <Link
                    key={u.path}
                    to={u.path}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${
                      pathname === u.path ? "text-[#dc1b17] font-semibold" : "text-gray-700"
                    }`}
                  >
                    {u.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gold-foreground/70"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gold-foreground/20 bg-gold pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm transition-colors ${
                pathname === item.path ? "text-gold-foreground font-bold bg-gold-foreground/5" : "text-gold-foreground/60 font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Nossas Unidades */}
          <button
            onClick={() => setMobileUnidadesOpen(!mobileUnidadesOpen)}
            className={`w-full text-left px-6 py-3 text-sm transition-colors flex items-center justify-between ${
              isUnidadePage ? "text-gold-foreground font-bold" : "text-gold-foreground/60 font-medium"
            }`}
          >
            Nossas Unidades
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileUnidadesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileUnidadesOpen && (
            <div className="bg-gold-foreground/5 border-t border-gold-foreground/10">
              {unidades.map((u) => (
                <Link
                  key={u.path}
                  to={u.path}
                  onClick={() => { setOpen(false); setMobileUnidadesOpen(false); }}
                  className={`block px-10 py-2.5 text-sm transition-colors ${
                    pathname === u.path ? "text-[#dc1b17] font-semibold" : "text-gold-foreground/60"
                  }`}
                >
                  {u.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
