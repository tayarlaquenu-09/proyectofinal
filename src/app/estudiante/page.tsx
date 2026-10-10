"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MENSAJES_GENERALES,
  PERFIL_VOZ_GENERAL,
  type ResultadoAnalisis,
} from "@/lib/analysis";
import { AudioPlayer } from "@/components/audio-player";
import { CrisisNotice } from "@/components/crisis-notice";
import { EmotionCard } from "@/components/emotion-card";
import { MessageCards } from "@/components/message-cards";
import { MotivationalMessages } from "@/components/motivational-messages";
import { TextEntry } from "@/components/text-entry";

export default function Estudiante() {
  const [analisis, setAnalisis] = useState<ResultadoAnalisis | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function analizar(texto: string) {
    setEnviando(true);
    setError(null);
    try {
      const respuesta = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto }),
      });
      if (!respuesta.ok) throw new Error("Respuesta no válida");
      setAnalisis((await respuesta.json()) as ResultadoAnalisis);
    } catch {
      setError("No se pudo analizar tu texto. Inténtalo de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-8">
      <CrisisNotice alerta={analisis?.alertaCrisis ?? false} />

      <TextEntry enviando={enviando} onAnalizar={analizar} />

      {error && (
        <p
          role="alert"
          className="rounded-2xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/60 dark:text-red-200"
        >
          {error}
        </p>
      )}

      {analisis && (
        <>
          <EmotionCard analisis={analisis} />
          <MessageCards
            mensajePrincipal={analisis.mensajePrincipal}
            ejercicio={analisis.ejercicio}
          />
          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            Análisis simulado para demostración.
          </p>
        </>
      )}

      <MotivationalMessages
        key={analisis?.mensajePrincipal ?? "general"}
        mensajes={analisis?.mensajesAnimo ?? MENSAJES_GENERALES}
        perfil={analisis?.perfilVoz ?? PERFIL_VOZ_GENERAL}
      />

      <AudioPlayer src="/audio/ondas-tranquilas.wav" titulo="Ondas tranquilas" />

      <footer className="pb-4 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          La herramienta ofrece orientación simulada y no diagnostica. No reemplaza la atención
          profesional.
        </p>
        <Link
          href="/"
          className="mt-2 inline-block text-indigo-600 underline underline-offset-4 dark:text-indigo-300"
        >
          Volver al inicio
        </Link>
      </footer>
    </main>
  );
}
