"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { PerfilVoz } from "@/lib/analysis";

const suscribir = () => () => {};

function haySoporteDeVoz() {
  return "speechSynthesis" in window;
}

export function MotivationalMessages({
  mensajes,
  perfil,
}: {
  mensajes: string[];
  perfil: PerfilVoz;
}) {
  const [activo, setActivo] = useState<number | null>(null);
  const soportaVoz = useSyncExternalStore(suscribir, haySoporteDeVoz, () => true);

  useEffect(() => {
    return () => {
      if (haySoporteDeVoz()) window.speechSynthesis.cancel();
    };
  }, []);

  function alternarLectura(indice: number) {
    const synth = window.speechSynthesis;
    synth.cancel();

    if (activo === indice) {
      setActivo(null);
      return;
    }

    const enunciado = new SpeechSynthesisUtterance(mensajes[indice]);
    enunciado.lang = "es-PE";
    enunciado.rate = perfil.velocidad;
    enunciado.pitch = perfil.tono;
    enunciado.volume = perfil.volumen;

    const terminar = () => setActivo((actual) => (actual === indice ? null : actual));
    enunciado.onend = terminar;
    enunciado.onerror = terminar;

    setActivo(indice);
    synth.speak(enunciado);
  }

  return (
    <section className="rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-800/80">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
        Mensajes de ánimo
      </h2>

      {!soportaVoz && (
        <p role="status" className="mt-3 text-sm text-amber-700 dark:text-amber-300">
          Tu navegador no admite lectura en voz, así que solo podrás leer los mensajes.
        </p>
      )}

      <ul className="mt-4 flex flex-col gap-3">
        {mensajes.map((mensaje, indice) => {
          const reproduciendo = activo === indice;
          return (
            <li
              key={mensaje}
              className="flex items-center justify-between gap-4 rounded-2xl bg-indigo-50/80 p-4 dark:bg-slate-900/60"
            >
              <p className="text-slate-700 dark:text-slate-200">{mensaje}</p>
              {soportaVoz && (
                <button
                  type="button"
                  onClick={() => alternarLectura(indice)}
                  aria-label={`${reproduciendo ? "Detener" : "Escuchar"} mensaje ${indice + 1}`}
                  className="shrink-0 rounded-full border border-indigo-300 bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 dark:border-indigo-500 dark:bg-slate-800 dark:text-indigo-200 dark:hover:bg-slate-700"
                >
                  {reproduciendo ? "Detener" : "Escuchar"}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
