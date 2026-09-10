import { techs } from "../data.js";

export default function Technologies() {
  return (
    <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        Tecnologias
      </span>
      <h2 className="text-2xl font-extrabold text-white mb-6">Tecnologias que utilizo</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3.5">
        {techs.map((t) => (
          <div
            key={t.name}
            className="bg-white/5 border border-white/10 rounded-xl px-2 py-4 flex flex-col items-center gap-2 text-[11px] font-semibold text-slate-200 hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <t.icon size={20} style={{ color: t.color }} />
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
}

