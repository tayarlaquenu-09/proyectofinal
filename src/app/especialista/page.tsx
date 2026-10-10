import type { Metadata } from "next";
import Link from "next/link";
import { CASOS, ordenarCasos, type Caso } from "@/lib/cases";
import { TagChip } from "@/components/tag-chip";

export const metadata: Metadata = {
  title: "Bandeja de casos · Espacio de bienestar",
  robots: { index: false, follow: false },
};

const FECHA_FORMATO = new Intl.DateTimeFormat("es-PE", {
  timeZone: "America/Lima",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const ESTILO_RIESGO: Record<Caso["nivel"], string> = {
  1: "bg-emerald-500 text-white",
  2: "bg-emerald-500 text-white",
  3: "bg-amber-400 text-slate-900",
  4: "bg-red-500 text-white",
  5: "bg-red-600 text-white",
};

export default function Especialista() {
  const casos = ordenarCasos(CASOS);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
      <Link
        href="/estudiante"
        className="text-sm font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-800 dark:text-indigo-300"
      >
        ← Volver a la vista del estudiante
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
        Bandeja de casos
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Casos ficticios para demostración. Ordenados por nivel de riesgo, del más crítico al menos
        crítico.
      </p>

      <ul className="mt-6 flex flex-col gap-4">
        {casos.map((caso) => (
          <li
            key={caso.id}
            className="flex gap-4 rounded-3xl bg-white/80 p-5 shadow-sm backdrop-blur dark:bg-slate-800/80"
          >
            <div
              className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl text-center ${ESTILO_RIESGO[caso.nivel]}`}
              aria-label={`Nivel de riesgo ${caso.nivel} de 5`}
            >
              <span className="text-xs font-medium uppercase">Nivel</span>
              <span className="text-xl font-bold">{caso.nivel}</span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-semibold">{caso.alias}</h2>
                <time
                  dateTime={caso.fecha}
                  className="text-sm text-slate-500 dark:text-slate-400"
                >
                  {FECHA_FORMATO.format(new Date(caso.fecha))}
                </time>
              </div>

              {caso.etiquetas.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {caso.etiquetas.map((etiqueta) => (
                    <TagChip key={etiqueta} etiqueta={etiqueta} />
                  ))}
                </div>
              )}

              <h3 className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Resumen ejecutivo
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {caso.resumenEjecutivo}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
