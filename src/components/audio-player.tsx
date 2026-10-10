"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { formatearTiempo } from "@/lib/format-time";

export function AudioPlayer({ src, titulo }: { src: string; titulo: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [tiempoActual, setTiempoActual] = useState(0);
  const [duracion, setDuracion] = useState(0);
  const [error, setError] = useState<string | null>(null);

  async function alternar() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        setError(null);
        await audio.play();
      } catch {
        setError("No se pudo reproducir el audio.");
      }
    } else {
      audio.pause();
    }
  }

  function buscar(evento: ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(evento.target.value);
    setTiempoActual(audio.currentTime);
  }

  const progreso = duracion > 0 ? Math.min(tiempoActual, duracion) : 0;

  return (
    <section className="rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-800/80">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
        Sonido de fondo
      </h2>
      <div className="mt-3 flex items-center gap-4">
        <button
          type="button"
          onClick={alternar}
          aria-label={reproduciendo ? "Pausar sonido de fondo" : "Reproducir sonido de fondo"}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow transition hover:bg-indigo-700"
        >
          {reproduciendo ? "❚❚" : "▶"}
        </button>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">{titulo}</p>
          <input
            type="range"
            min={0}
            max={duracion || 0}
            step={0.1}
            value={progreso}
            onChange={buscar}
            aria-label="Progreso del audio"
            className="mt-2 w-full accent-indigo-600"
          />
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {formatearTiempo(tiempoActual)} / {formatearTiempo(duracion)}
          </p>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      <audio
        ref={audioRef}
        src={src}
        loop
        preload="none"
        onPlay={() => setReproduciendo(true)}
        onPause={() => setReproduciendo(false)}
        onTimeUpdate={(e) => setTiempoActual(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuracion(e.currentTarget.duration)}
        onDurationChange={(e) => setDuracion(e.currentTarget.duration)}
      />
    </section>
  );
}
