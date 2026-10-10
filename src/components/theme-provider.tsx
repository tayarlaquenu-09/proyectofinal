"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Tema = "light" | "dark";

type ContextoTema = {
  tema: Tema;
  alternarTema: () => void;
};

const ContextoTema = createContext<ContextoTema | null>(null);

const INTERVALO_REVISION_MS = 60_000;

function temaPorHora(fecha: Date): Tema {
  const hora = fecha.getHours();
  return hora >= 6 && hora < 19 ? "light" : "dark";
}

function suscribirReloj(notificar: () => void) {
  const id = setInterval(notificar, INTERVALO_REVISION_MS);
  return () => clearInterval(id);
}

function temaActual(): Tema {
  return temaPorHora(new Date());
}

function temaInicial(): Tema {
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const temaAutomatico = useSyncExternalStore(suscribirReloj, temaActual, temaInicial);
  const [manual, setManual] = useState<Tema | null>(null);
  const tema = manual ?? temaAutomatico;

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    document.documentElement.style.colorScheme = tema === "dark" ? "dark" : "light";
  }, [tema]);

  function alternarTema() {
    setManual(tema === "light" ? "dark" : "light");
  }

  return (
    <ContextoTema.Provider value={{ tema, alternarTema }}>{children}</ContextoTema.Provider>
  );
}

export function useTema(): ContextoTema {
  const contexto = useContext(ContextoTema);
  if (!contexto) {
    throw new Error("useTema debe usarse dentro de ThemeProvider");
  }
  return contexto;
}
