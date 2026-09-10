import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { navLinks, clientPortalUrl } from "../data.js";
import LogoMark from "./LogoMark.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 font-extrabold text-lg text-white">
          <LogoMark className="w-9 h-9" />
          CastroStudio
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* <a
            href={clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
          >
            <LogIn size={16} />
            Área do Cliente
          </a> */}
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Contato
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-300"
            >
              {l.label}
            </a>
          ))}
          {/* <a
            href={clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white border border-white/15 px-5 py-2.5 rounded-lg"
          >
            <LogIn size={16} />
            Área do Cliente
          </a> */}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}
