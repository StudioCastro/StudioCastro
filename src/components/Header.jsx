import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { navLinks, clientPortalUrl } from "../data.js";
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

        <nav className="hidden lg:flex items-center gap-6">
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

        <div className="hidden lg:flex items-center gap-3">
          {/* <a
            href={clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-950 hover:text-blue-600 transition-colors"
          >
            <LogIn size={16} />
            Área do Cliente
          </a> */}
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Contato
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-blue-950"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 flex flex-col gap-4">
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
          {/* <a
            href={clientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-950 border border-slate-200 px-5 py-2.5 rounded-lg"
          >
            <LogIn size={16} />
            Área do Cliente
          </a> */}
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
