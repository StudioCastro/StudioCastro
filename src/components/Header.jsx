import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data.js";
import LogoMark from "./LogoMark.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-extrabold text-lg text-blue-950">
          <LogoMark solid="#172554" className="text-xl" />
          CastroStudio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Contato
        </a>

        <button
          className="md:hidden p-2 text-blue-950"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-950 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}
