import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  const [nome, setNome] = useState("");

  function handleWhatsApp() {
    const mensagem = encodeURIComponent(
      `Olá!\n\nMeu nome é ${nome}.\n\nGostaria de solicitar um orçamento para um site.`
    );
    window.location.href = `https://wa.me/5531991079220?text=${mensagem}`;
  }

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
          <div className="flex flex-wrap items-center gap-3">
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className="px-4 py-3 rounded-lg text-sm text-blue-950 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle size={16} /> Chamar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
