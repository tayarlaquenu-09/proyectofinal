import type { Ejercicio } from "@/lib/analysis";

export function MessageCards({
  mensajePrincipal,
  ejercicio,
}: {
  mensajePrincipal: string;
  ejercicio: Ejercicio;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <article className="rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-800/80">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
          Un mensaje para ti
        </h2>
        <p className="mt-3 text-slate-700 dark:text-slate-200">{mensajePrincipal}</p>
      </article>

      <article className="rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-800/80">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
          Ejercicio: {ejercicio.nombre}
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
          {ejercicio.pasos.map((paso) => (
            <li key={paso}>{paso}</li>
          ))}
        </ol>
      </article>
    </div>
  );
}
