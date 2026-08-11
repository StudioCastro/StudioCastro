import { Github, Phone, Mail, MapPin } from "lucide-react";
import { navLinks } from "../data.js";
import LogoMark from "./LogoMark.jsx";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 text-white font-extrabold text-lg mb-3">
              <LogoMark solid="#ffffff" className="text-xl" /> CastroStudio
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Soluções web profissionais, pensadas para gerar resultado e confiança.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/StudioCastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-wider mb-4">NAVEGAÇÃO</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-wider mb-4">CONTATO</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={13} /> (31) 99107-9220
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} /> leandro.dev1999@hotmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} /> Belo Horizonte - MG
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-blue-300">
          © 2026 CastroStudio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
