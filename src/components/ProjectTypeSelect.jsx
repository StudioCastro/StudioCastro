import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function ProjectTypeSelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center justify-between gap-3 w-full sm:w-auto sm:min-w-[210px] bg-white text-blue-950 text-sm font-semibold pl-4 pr-3 py-3 rounded-lg shadow-sm ring-1 ring-black/5 hover:ring-blue-200 transition-all"
      >
        {value}
        <ChevronDown
          size={16}
          className={`text-blue-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 z-10 mt-2 w-full sm:min-w-[210px] bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-1.5 overflow-hidden"
        >
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                role="option"
                aria-selected={opt === value}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-left transition-colors ${
                  opt === value
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {opt}
                {opt === value && <Check size={14} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
