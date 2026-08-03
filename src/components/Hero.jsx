import { Send, CheckCircle2 } from "lucide-react";
import telasImg from "../images/telas.png";
import cafeNotebookImg from "../images/cafeNotebook.png";
import cafeCelularImg from "../images/cafeCelular.png";

export default function Hero() {
  return (
    <section id="inicio" className="max-w-6xl mx-auto px-6 pt-16 pb-14 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          Desenvolvedor Web · Sites & Soluções Web
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-950 mb-5">
          Sites profissionais que transformam{" "}
          <span className="text-blue-600">visitantes em clientes</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-md mb-8">
          Projetos web planejados do zero, com código limpo e foco em performance — para sua
          empresa ter presença digital que passa confiança.
        </p>
        <div className="flex flex-wrap gap-3 mb-7">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Send size={16} /> Solicitar orçamento
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-950 text-blue-950 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ver projetos
          </a>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" /> Entrega no prazo
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" /> Suporte pós-entrega
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-500" /> Satisfação garantida
          </span>
        </div>
      </div>

      <div className="relative max-w-lg mx-auto">
        <img
          src={telasImg}
          alt="Site do Café da Vila exibido em notebook e celular, demonstrando responsividade"
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute bg-cover bg-center rounded-sm overflow-hidden"
          style={{
            left: "18.6%",
            top: "12.0%",
            width: "65.6%",
            height: "66.1%",
            backgroundImage: `url(${cafeNotebookImg})`,
            clipPath:
              "polygon(0 0, 100% 0, 100% 27.14%, 92.97% 27.14%, 91.38% 27.73%, 90.68% 28.32%, 90.19% 28.91%, 89.89% 29.50%, 89.59% 30.09%, 89.3% 30.83%, 89.3% 100%, 0 100%)",
          }}
        />
        <div
          className="absolute bg-cover bg-center overflow-hidden"
          style={{
            left: "77.6%",
            top: "30.6%",
            width: "15.8%",
            height: "54.6%",
            borderRadius: "7.8% / 3.3%",
            backgroundImage: `url(${cafeCelularImg})`,
          }}
        />
      </div>
    </section>
  );
}
