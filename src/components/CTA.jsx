import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-blue-950 rounded-3xl p-10 md:p-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-blue-200 text-sm">
              Fale comigo e receba um orçamento personalizado sem compromisso.
            </p>
          </div>
          <a
            href="https://wa.me/5511000000000"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <MessageCircle size={16} /> Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
