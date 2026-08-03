import { CheckCircle2, ArrowRight } from "lucide-react";
import euImg from "../images/eu.jpeg";

const highlights = [
  "Foco em resultados",
  "Código limpo e escalável",
  "Comunicação transparente",
  "Entrega no prazo",
];

export default function About() {
  return (
    <div id="sobre" className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col h-full">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        Sobre mim
      </span>
      <div className="flex flex-col sm:flex-row gap-5 items-center text-center sm:text-left mb-7">
        <img
          src={euImg}
          alt="Leandro Castro"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover flex-shrink-0"
        />
        <div>
          <h3 className="text-xl font-bold text-blue-950 mb-2">Prazer, Leandro Castro</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Desenvolvedor Front-end especializado em criar sites modernos, rápidos e responsivos.
            Transformo ideias em soluções digitais com foco em qualidade, desempenho e resultados
            para o seu negócio.
          </p>
        </div>
      </div>
      <ul className="space-y-3.5">
        {highlights.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
            <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href="#contato"
        className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
      >
        Vamos conversar sobre o seu projeto <ArrowRight size={14} />
      </a>
    </div>
  );
}
