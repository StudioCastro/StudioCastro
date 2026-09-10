import { services } from "../data.js";

export default function Services() {
  return (
    <section id="servicos" className="bg-white/[0.02] border-y border-white/5 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Serviços
        </span>
        <h2 className="text-3xl font-extrabold text-white mb-2">
          Soluções web completas, do planejamento à entrega
        </h2>
        <p className="text-slate-400 mb-11">
          Desde um site institucional até sistemas web personalizados.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <s.icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
