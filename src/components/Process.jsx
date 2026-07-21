import { steps } from "../data.js";

export default function Process() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          Processo
        </span>
        <h2 className="text-3xl font-extrabold text-blue-950 mb-11">
          Como funciona o meu trabalho
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-9 gap-x-4">
          {steps.map((s) => (
            <div key={s.title} className="text-center px-2">
              <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mx-auto mb-4 text-blue-600">
                <s.icon size={20} />
              </div>
              <h4 className="text-sm font-bold text-blue-950 mb-1.5">{s.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
