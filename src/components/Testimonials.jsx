import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data.js";

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveDot((d) => (d + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="depoimentos" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-11">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Depoimentos
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            O que dizem sobre meu trabalho
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-900/60 border border-white/10 rounded-2xl p-7">
              <div className="flex gap-1 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex-shrink-0" />
                <div>
                  <strong className="block text-sm text-white">{t.name}</strong>
                  <span className="text-xs text-slate-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === activeDot ? "w-5 bg-blue-400" : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
