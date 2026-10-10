"use client";

import { useState, type FormEvent } from "react";
import { LIMITE_TEXTO } from "@/lib/analysis";

export function TextEntry({
  enviando,
  onAnalizar,
}: {
  enviando: boolean;
  onAnalizar: (texto: string) => void;
}) {
  const [texto, setTexto] = useState("");
  const vacio = texto.trim() === "";

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (vacio || enviando) return;
    onAnalizar(texto);
  }

  return (
    <form
      onSubmit={enviar}
      className="rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-800/80"
    >
      <label htmlFor="texto-emocion" className="block text-lg font-semibold text-slate-800 dark:text-slate-100">
        ¿Cómo te sientes en este momento?
      </label>
      <textarea
        id="texto-emocion"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        maxLength={LIMITE_TEXTO}
        rows={5}
        placeholder="Escribe con tus palabras, a tu propio ritmo."
        className="mt-3 w-full resize-y rounded-2xl border border-slate-300 bg-white p-4 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-indigo-900"
      />
      <div className="mt-2 flex items-center justify-between gap-4">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {texto.length}/{LIMITE_TEXTO}
        </span>
        <button
          type="submit"
          disabled={vacio || enviando}
          className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {enviando ? "Analizando..." : "Analizar lo que siento"}
        </button>
      </div>
    </form>
  );
}
