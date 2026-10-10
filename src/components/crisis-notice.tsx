export function CrisisNotice({ alerta }: { alerta: boolean }) {
  const estilo = alerta
    ? "border-red-600 bg-red-600 text-white"
    : "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/60 dark:text-red-100";

  return (
    <section
      role={alerta ? "alert" : undefined}
      className={`rounded-3xl border p-5 shadow-sm ${estilo}`}
    >
      <h2 className="font-semibold">
        {alerta ? "Necesitas apoyo ahora" : "Si estás en peligro o piensas en hacerte daño"}
      </h2>
      <p className="mt-2 text-sm">
        Comunícate con la línea <strong>113, opción 5</strong> (MINSA, Perú) o con los servicios de
        emergencia de tu localidad. Esta herramienta no reemplaza la atención profesional.
      </p>
    </section>
  );
}
