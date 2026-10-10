const ESTILO_ETIQUETA: Record<string, string> = {
  Fatiga: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  Aislamiento: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200",
  Desesperanza: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200",
};

export function TagChip({ etiqueta }: { etiqueta: string }) {
  const estilo = ESTILO_ETIQUETA[etiqueta] ?? "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${estilo}`}>{etiqueta}</span>
  );
}
