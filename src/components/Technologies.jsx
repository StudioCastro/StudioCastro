import { techs } from "../data.js";

export default function Technologies() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        Tecnologias
      </span>
      <h2 className="text-2xl font-extrabold text-blue-950 mb-6">Tecnologias que utilizo</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3.5">
        {techs.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-slate-200 rounded-xl px-2 py-4 flex flex-col items-center gap-2 text-[11px] font-semibold text-blue-950 hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <t.icon size={20} style={{ color: t.color }} />
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
}

