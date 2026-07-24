import { services } from "../data.js";

export default function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          Serviços
        </span>
        <h2 className="text-3xl font-extrabold text-blue-950 mb-2">
          Soluções web completas, do planejamento à entrega
        </h2>
        <p className="text-slate-500 mb-11">
          Desde um site institucional até sistemas web personalizados.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <s.icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-blue-950 mb-1.5">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
