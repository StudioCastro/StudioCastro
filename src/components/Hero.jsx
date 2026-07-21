import { Send, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="max-w-6xl mx-auto px-6 pt-16 pb-14 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          Desenvolvedor Web Freelancer
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-950 mb-5">
          Sites modernos que impulsionam o{" "}
          <span className="text-blue-600">seu negócio</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-md mb-8">
          Desenvolvimento de sites rápidos, responsivos e otimizados para gerar mais resultados
          para a sua empresa.
        </p>
        <div className="flex flex-wrap gap-3 mb-7">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Send size={16} /> Solicitar orçamento
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-950 text-blue-950 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ver projetos
          </a>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" /> Entrega no prazo
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" /> Suporte pós-entrega
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" /> Satisfação garantida
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="relative max-w-md mx-auto bg-blue-950 rounded-2xl p-4 pb-9 shadow-2xl">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 min-h-[220px]">
            <h4 className="text-xl font-bold text-blue-950 leading-snug mb-4">
              Seu sorriso,
              <br />
              nossa <span className="text-blue-600">missão</span>
            </h4>
            <span className="inline-block bg-blue-600 text-white text-[11px] font-semibold px-3.5 py-2 rounded-md">
              Agendar avaliação
            </span>
            <div className="flex gap-2.5 mt-6">
              {[
                ["+15", "Anos"],
                ["+2.5k", "Pacientes"],
                ["+99%", "Satisfação"],
              ].map(([n, l]) => (
                <div key={l} className="bg-white rounded-lg px-3 py-2 shadow-sm text-xs font-bold text-blue-950">
                  {n}
                  <div className="text-[9px] font-medium text-slate-400">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden sm:block absolute -right-5 -bottom-8 w-32 bg-blue-950 rounded-2xl p-2 shadow-2xl">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-3 min-h-[170px]">
              <h5 className="text-[11px] font-bold text-blue-950 leading-snug mb-2">
                Seu sorriso,
                <br />
                nossa <span className="text-blue-600">missão</span>
              </h5>
              <span className="inline-block bg-blue-600 text-white text-[8px] font-semibold px-2.5 py-1.5 rounded">
                Agendar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
