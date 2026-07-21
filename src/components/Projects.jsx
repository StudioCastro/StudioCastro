import { ArrowRight } from "lucide-react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          Projetos
        </span>
        <div className="flex items-end justify-between mb-11">
          <h2 className="text-3xl font-extrabold text-blue-950">Alguns projetos recentes</h2>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-blue-600"
          >
            Ver todos os projetos <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-slate-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className={`h-36 bg-gradient-to-br ${p.grad} relative flex items-end p-3.5`}>
                <span className="absolute top-3 left-3 bg-white/90 text-blue-950 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-blue-950 mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-xs font-semibold text-blue-950 border-t border-slate-200 pt-3">
                  <a href="#">Ver projeto</a>
                  <a href="#">Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
