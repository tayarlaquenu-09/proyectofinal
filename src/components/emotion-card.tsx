import type { ResultadoAnalisis, Semaforo } from "@/lib/analysis";

const LUZ_ENCENDIDA: Record<Semaforo, string> = {
  rojo: "bg-red-500 shadow-[0_0_18px_4px_rgba(239,68,68,0.6)]",
  amarillo: "bg-amber-400 shadow-[0_0_18px_4px_rgba(251,191,36,0.6)]",
  verde: "bg-emerald-500 shadow-[0_0_18px_4px_rgba(16,185,129,0.6)]",
};

const LUZ_APAGADA = "bg-slate-300 dark:bg-slate-600";

const ETIQUETA_SEMAFORO: Record<Semaforo, string> = {
  rojo: "Rojo",
  amarillo: "Amarillo",
  verde: "Verde",
};

export function EmotionCard({ analisis }: { analisis: ResultadoAnalisis }) {
  const { semaforo } = analisis;

  return (
    <section className="rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-800/80">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <div
          role="img"
          aria-label={`Semáforo en ${ETIQUETA_SEMAFORO[semaforo].toLowerCase()}, nivel de atención ${analisis.atencion.toLowerCase()}`}
          className="flex shrink-0 flex-col gap-2 rounded-2xl bg-slate-900 p-3"
        >
          {(["rojo", "amarillo", "verde"] as Semaforo[]).map((luz) => (
            <span
              key={luz}
              className={`h-8 w-8 rounded-full transition ${semaforo === luz ? LUZ_ENCENDIDA[luz] : LUZ_APAGADA}`}
            />
          ))}
        </div>

        <div className="text-center sm:text-left">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Emoción detectada
          </p>
          <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
            {analisis.emocion}
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
            Nivel de atención: <strong>{analisis.atencion}</strong>
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm text-slate-700 dark:text-slate-200">{analisis.orientacion}</p>
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{analisis.resumen}</p>
    </section>
  );
}
