import { ArrowRight } from "lucide-react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projetos" className="bg-white/[0.02] border-y border-white/5 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Projetos
        </span>
        <div className="flex items-end justify-between mb-11">
          <h2 className="text-3xl font-extrabold text-white">Alguns projetos recentes</h2>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-blue-400"
          >
            Ver todos os projetos <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col h-full bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg transition-all"
            >
              <div
                className={`h-36 shrink-0 relative flex items-end p-3.5 ${
                  p.img ? "bg-cover bg-center" : `bg-gradient-to-br ${p.grad}`
                }`}
                style={p.img ? { backgroundImage: `url(${p.img})` } : undefined}
              >
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
                  {p.badge}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-sm font-bold text-white mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-xs font-semibold text-slate-300 border-t border-white/10 pt-3 mt-auto">
                  <a href={p.link || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    Ver projeto
                  </a>
                  <a href={p.code || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
