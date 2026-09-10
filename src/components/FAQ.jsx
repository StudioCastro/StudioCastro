import { faqs } from "../data.js";

export default function FAQ() {
  return (
    <section id="faq" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            FAQ
          </span>
          <h2 className="text-2xl font-extrabold text-white">Perguntas frequentes</h2>
        </div>

        {/* Grid estática (sem accordion): altura fixa por card, nunca muda,
            então não tem como essa seção empurrar ou "quebrar" o que vem depois. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {faqs.map((f) => (
            <div key={f.question} className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5">
              <p className="text-xs font-bold text-white mb-1.5">{f.question}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
