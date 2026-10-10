"use client";

import { useTema } from "@/components/theme-provider";

export function ThemeToggle() {
  const { tema, alternarTema } = useTema();
  const esDia = tema === "light";

  return (
    <button
      type="button"
      onClick={alternarTema}
      aria-label={esDia ? "Cambiar a modo noche" : "Cambiar a modo día"}
      className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {esDia ? "Modo día" : "Modo noche"}
    </button>
  );
}
