export type Caso = {
  id: string;
  alias: string;
  fecha: string;
  nivel: 1 | 2 | 3 | 4 | 5;
  etiquetas: string[];
  resumenEjecutivo: string;
};

export const CASOS: Caso[] = [
  {
    id: "C-001",
    alias: "Ficticio Lirio",
    fecha: "2026-10-08T14:20:00-05:00",
    nivel: 5,
    etiquetas: ["Desesperanza", "Aislamiento"],
    resumenEjecutivo:
      "Caso ficticio con expresiones de riesgo inminente. Requiere contacto inmediato y derivación a servicios de emergencia.",
  },
  {
    id: "C-002",
    alias: "Ficticio Cedro",
    fecha: "2026-10-07T09:45:00-05:00",
    nivel: 4,
    etiquetas: ["Desesperanza"],
    resumenEjecutivo:
      "Caso ficticio con sensación persistente de que nada mejora. Requiere seguimiento prioritario por parte de un profesional.",
  },
  {
    id: "C-003",
    alias: "Ficticio Aliso",
    fecha: "2026-10-09T18:10:00-05:00",
    nivel: 3,
    etiquetas: ["Aislamiento"],
    resumenEjecutivo:
      "Caso ficticio con señales de soledad en el contexto universitario. Requiere seguimiento regular y acompañamiento.",
  },
  {
    id: "C-004",
    alias: "Ficticio Molle",
    fecha: "2026-10-06T11:30:00-05:00",
    nivel: 3,
    etiquetas: ["Fatiga"],
    resumenEjecutivo:
      "Caso ficticio con agotamiento asociado a falta de descanso. Requiere revisión de carga académica y seguimiento regular.",
  },
  {
    id: "C-005",
    alias: "Ficticio Huarango",
    fecha: "2026-10-09T08:05:00-05:00",
    nivel: 4,
    etiquetas: ["Fatiga", "Aislamiento"],
    resumenEjecutivo:
      "Caso ficticio con cansancio intenso y retraimiento social. Requiere seguimiento prioritario y evaluación clínica.",
  },
  {
    id: "C-006",
    alias: "Ficticio Tara",
    fecha: "2026-10-05T16:40:00-05:00",
    nivel: 2,
    etiquetas: [],
    resumenEjecutivo:
      "Caso ficticio con tristeza leve y sin señales de riesgo. Requiere seguimiento regular y recursos de autocuidado.",
  },
  {
    id: "C-007",
    alias: "Ficticio Algarrobo",
    fecha: "2026-10-04T10:15:00-05:00",
    nivel: 1,
    etiquetas: [],
    resumenEjecutivo:
      "Caso ficticio sin señales relevantes. Se mantiene el seguimiento habitual de bienestar.",
  },
  {
    id: "C-008",
    alias: "Ficticio Papayo",
    fecha: "2026-10-09T12:00:00-05:00",
    nivel: 3,
    etiquetas: ["Fatiga"],
    resumenEjecutivo:
      "Caso ficticio con ansiedad ante exámenes y sensación de agotamiento. Requiere seguimiento regular.",
  },
];

export function ordenarCasos(casos: Caso[]): Caso[] {
  return [...casos].sort((a, b) => {
    if (b.nivel !== a.nivel) return b.nivel - a.nivel;
    return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
  });
}
