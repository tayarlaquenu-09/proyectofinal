import Link from "next/link";

export default function Portada() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
      <section className="w-full max-w-xl rounded-3xl bg-white/80 p-8 shadow-sm backdrop-blur dark:bg-slate-800/80">
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
          Espacio de bienestar
        </h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Un lugar para escribir lo que sientes, a tu propio ritmo.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/estudiante"
            className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700"
          >
            Soy estudiante
          </Link>
          <Link
            href="/especialista"
            className="rounded-full border border-indigo-300 bg-white px-6 py-3 font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50 dark:border-indigo-500 dark:bg-slate-800 dark:text-indigo-200 dark:hover:bg-slate-700"
          >
            Soy profesional de salud
          </Link>
        </div>

        <Link
          href="/glosario"
          className="mt-6 inline-block text-sm font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-800 dark:text-indigo-300"
        >
          Ver glosario de términos
        </Link>
      </section>

      <footer className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        Herramienta de apoyo emocional. No reemplaza la atención profesional.
      </footer>
    </main>
  );
}
