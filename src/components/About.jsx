import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Foco em resultados",
  "Código limpo e organizado",
  "Comunicação clara",
  "Entrega dentro do prazo",
];

export default function About() {
  return (
    <div id="sobre" className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        Sobre mim
      </span>
      <div className="flex gap-4 items-center mb-5">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-500 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-blue-950">Prazer, Leandro Castro</h3>
          <p className="text-sm text-slate-500">
            Desenvolvedor Front-end apaixonado por experiências digitais modernas, rápidas e
            funcionais.
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-700 mb-5 flex gap-2">
        <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
        Ajudo empresas a terem presença digital profissional e a alcançarem mais clientes através
        dos sites que constroem.
      </p>
      <ul className="space-y-2.5">
        {highlights.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle2 size={15} className="text-blue-600 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
