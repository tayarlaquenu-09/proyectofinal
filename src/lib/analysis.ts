export const LIMITE_TEXTO = 2000;

export type Semaforo = "rojo" | "amarillo" | "verde";
export type Atencion = "Alta" | "Moderada" | "Baja";

export type Ejercicio = {
  nombre: string;
  pasos: string[];
};

export type PerfilVoz = {
  velocidad: number;
  tono: number;
  volumen: number;
};

export type ResultadoAnalisis = {
  emocion: string;
  nivel: 1 | 2 | 3 | 4 | 5;
  semaforo: Semaforo;
  atencion: Atencion;
  alertaCrisis: boolean;
  etiquetas: string[];
  resumen: string;
  orientacion: string;
  mensajePrincipal: string;
  ejercicio: Ejercicio;
  mensajesAnimo: string[];
  perfilVoz: PerfilVoz;
};

type Regla = {
  emocion: string;
  nivel: 1 | 2 | 3 | 4 | 5;
  palabras: string[];
  etiquetas: string[];
  ejercicio: "5-4-3-2-1" | "Respiración";
  perfilVoz: PerfilVoz;
  orientacion: string;
  mensajePrincipal: string;
  mensajesAnimo: string[];
};

const EJERCICIO_RESPIRACION: Ejercicio = {
  nombre: "Respiración cuadrada",
  pasos: [
    "Inhala lentamente contando hasta 4.",
    "Retén el aire contando hasta 4.",
    "Exhala lentamente contando hasta 4.",
    "Retén sin aire contando hasta 4.",
    "Repite este ciclo 4 veces.",
  ],
};

const EJERCICIO_54321: Ejercicio = {
  nombre: "Conexión 5-4-3-2-1",
  pasos: [
    "Nombra 5 cosas que puedes ver a tu alrededor.",
    "Nombra 4 cosas que puedes tocar.",
    "Nombra 3 sonidos que puedes escuchar.",
    "Nombra 2 olores que puedes percibir.",
    "Nombra 1 cosa que puedas saborear o por la que sientas gratitud.",
  ],
};

const EJERCICIOS: Record<Regla["ejercicio"], Ejercicio> = {
  "5-4-3-2-1": EJERCICIO_54321,
  Respiración: EJERCICIO_RESPIRACION,
};

const LINEA_AYUDA =
  "Si estás en peligro, comunícate ahora con la línea 113, opción 5 (MINSA) o con los servicios de emergencia de tu localidad.";

const REGLAS: Regla[] = [
  {
    emocion: "Riesgo inminente",
    nivel: 5,
    palabras: [
      "no quiero seguir",
      "quitarme la vida",
      "suicid",
      "hacerme dano",
      "no vale la pena vivir",
      "desaparecer para siempre",
    ],
    etiquetas: ["Desesperanza", "Aislamiento"],
    ejercicio: "5-4-3-2-1",
    perfilVoz: { velocidad: 0.8, tono: 0.9, volumen: 0.9 },
    orientacion:
      "Las señales que describes son urgentes. Busca apoyo inmediato. " + LINEA_AYUDA,
    mensajePrincipal:
      "Lo que estás viviendo es importante y no tienes que enfrentarlo solo. Busca hoy mismo a una persona de confianza y pide ayuda profesional.",
    mensajesAnimo: [
      "No tienes que resolverlo todo ahora. Solo necesitas dar un paso seguro.",
      "Pedir ayuda es un acto de valentía, no de debilidad.",
      "Llama a la línea 113, opción 5, o acude al servicio de emergencias más cercano.",
    ],
  },
  {
    emocion: "Desesperanza",
    nivel: 4,
    palabras: [
      "sin esperanza",
      "nada mejora",
      "para que sigo",
      "nunca va a cambiar",
      "no sirve de nada",
    ],
    etiquetas: ["Desesperanza"],
    ejercicio: "5-4-3-2-1",
    perfilVoz: { velocidad: 0.8, tono: 0.95, volumen: 0.85 },
    orientacion:
      "Sentir que nada cambia es muy pesado. Conviene conversar con un profesional de salud pronto. " +
      LINEA_AYUDA,
    mensajePrincipal:
      "Que hoy se sienta como si nada mejorara no significa que siempre será así. Compartir esto con alguien de confianza puede aliviar el peso.",
    mensajesAnimo: [
      "Los sentimientos cambian, aunque ahora no lo parezca.",
      "Dar un pequeño paso hoy también cuenta.",
      "Hablar con alguien de confianza puede ayudarte a ver otras opciones.",
    ],
  },
  {
    emocion: "Soledad",
    nivel: 3,
    palabras: ["solo", "sola", "nadie", "aislad", "excluid", "no tengo amigos"],
    etiquetas: ["Aislamiento"],
    ejercicio: "Respiración",
    perfilVoz: { velocidad: 0.88, tono: 1.05, volumen: 0.9 },
    orientacion:
      "Sentirte solo/a es muy humano. Considera acercarte a un compañero, a un docente o al servicio de bienestar de tu universidad.",
    mensajePrincipal:
      "Sentirte solo/a es una experiencia compartida por muchas personas. Dar un pequeño paso para conectar puede marcar diferencia.",
    mensajesAnimo: [
      "No estás solo/a por escribir esto.",
      "Un mensaje corto a alguien de confianza puede abrir una conversación.",
      "Tu forma de sentir merece ser escuchada.",
    ],
  },
  {
    emocion: "Agotamiento",
    nivel: 3,
    palabras: [
      "cansad",
      "agotad",
      "sin energia",
      "no puedo mas",
      "sin dormir",
      "fatiga",
    ],
    etiquetas: ["Fatiga"],
    ejercicio: "Respiración",
    perfilVoz: { velocidad: 0.78, tono: 0.95, volumen: 0.8 },
    orientacion:
      "El cansancio acumulado merece atención. Revisa tus descansos y, si persiste, consulta con un profesional.",
    mensajePrincipal:
      "Tu cuerpo y tu mente están pidiendo una pausa. Descansar también es parte de avanzar.",
    mensajesAnimo: [
      "Está bien bajar el ritmo por un momento.",
      "Pequeñas pausas durante el día pueden ayudarte a recuperar energía.",
      "Cuidar tu descanso es cuidar tu bienestar.",
    ],
  },
  {
    emocion: "Ansiedad",
    nivel: 3,
    palabras: ["ansied", "nervios", "preocup", "miedo", "panico", "estres", "angustia"],
    etiquetas: [],
    ejercicio: "Respiración",
    perfilVoz: { velocidad: 0.8, tono: 0.95, volumen: 0.85 },
    orientacion:
      "La ansiedad puede sentirse intensa. Un ejercicio de respiración puede ayudarte a calmar el cuerpo en este momento.",
    mensajePrincipal:
      "Respirar despacio puede ayudarte a que el cuerpo se sienta más seguro. Tómate el tiempo que necesites.",
    mensajesAnimo: [
      "Puedes volver a respirar con calma en este momento.",
      "No tienes que controlar todo a la vez.",
      "Lo que sientes es válido, y pasará.",
    ],
  },
  {
    emocion: "Tristeza",
    nivel: 2,
    palabras: ["triste", "llor", "mal", "decaid", "desanimad"],
    etiquetas: [],
    ejercicio: "5-4-3-2-1",
    perfilVoz: { velocidad: 0.85, tono: 1.0, volumen: 0.9 },
    orientacion:
      "La tristeza es una emoción que todos sentimos. Si se prolonga, conviene hablarlo con alguien de confianza.",
    mensajePrincipal:
      "Está bien sentirte triste. Permítete sentirlo y, cuando puedas, busca algo que te haga sentir un poco mejor.",
    mensajesAnimo: [
      "Llorar o sentirte mal también es parte de ser humano.",
      "Pequeños momentos agradables pueden ayudar a que el día se sienta más liviano.",
      "No tienes que estar bien todo el tiempo.",
    ],
  },
  {
    emocion: "Calma",
    nivel: 1,
    palabras: ["bien", "tranquil", "feliz", "contento", "agradec"],
    etiquetas: [],
    ejercicio: "Respiración",
    perfilVoz: { velocidad: 1.0, tono: 1.1, volumen: 1.0 },
    orientacion:
      "Te sientes en calma. Mantén los hábitos que te ayudan a estar bien.",
    mensajePrincipal:
      "Qué bueno que te sientas en calma. Reconocer cómo estás hoy es un buen hábito.",
    mensajesAnimo: [
      "Disfruta este momento de calma.",
      "Seguir cuidando de ti también es importante.",
      "Gracias por tomarte un momento para ti.",
    ],
  },
  {
    emocion: "Neutral",
    nivel: 1,
    palabras: [],
    etiquetas: [],
    ejercicio: "Respiración",
    perfilVoz: { velocidad: 0.95, tono: 1.0, volumen: 1.0 },
    orientacion:
      "No detectamos señales intensas. Si cambias de ánimo o necesitas conversar, aquí estaremos.",
    mensajePrincipal:
      "Gracias por compartir cómo te sientes. Tomarte un momento para observarte es un buen primer paso.",
    mensajesAnimo: [
      "Está bien simplemente estar como estás.",
      "Un pequeño descanso puede ayudarte a reconectar contigo.",
      "Puedes volver a escribir cuando lo necesites.",
    ],
  },
];

export const MENSAJES_GENERALES = [
  "Dar un paso a la vez también es avanzar.",
  "Tus emociones son válidas, incluso las difíciles.",
  "Pedir apoyo es una muestra de fortaleza.",
  "Recuerda que puedes tomarte pausas cuando las necesites.",
];

export const PERFIL_VOZ_GENERAL: PerfilVoz = {
  velocidad: 0.95,
  tono: 1.0,
  volumen: 1.0,
};

function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function coincide(textoNormalizado: string, palabra: string): boolean {
  return new RegExp(`\\b${palabra}`).test(textoNormalizado);
}

function semaforoPorNivel(nivel: number): Semaforo {
  if (nivel >= 4) return "rojo";
  if (nivel === 3) return "amarillo";
  return "verde";
}

function atencionPorNivel(nivel: number): Atencion {
  if (nivel >= 4) return "Alta";
  if (nivel === 3) return "Moderada";
  return "Baja";
}

function reglaDetectada(textoNormalizado: string): Regla {
  const coincidencias = REGLAS.filter((regla) =>
    regla.palabras.some((palabra) => coincide(textoNormalizado, palabra)),
  );

  if (coincidencias.length === 0) {
    return REGLAS.find((regla) => regla.emocion === "Neutral")!;
  }

  return coincidencias.reduce((mayor, regla) =>
    regla.nivel > mayor.nivel ? regla : mayor,
  );
}

export function simularAnalisis(texto: string): ResultadoAnalisis {
  const regla = reglaDetectada(normalizar(texto));
  const semaforo = semaforoPorNivel(regla.nivel);
  const prioridad = semaforo === "rojo" ? "prioritario" : "regular";

  return {
    emocion: regla.emocion,
    nivel: regla.nivel,
    semaforo,
    atencion: atencionPorNivel(regla.nivel),
    alertaCrisis: regla.nivel === 5,
    etiquetas: regla.etiquetas,
    resumen: `Estudiante con señales de ${regla.emocion.toLowerCase()}. Requiere seguimiento ${prioridad}.`,
    orientacion: regla.orientacion,
    mensajePrincipal: regla.mensajePrincipal,
    ejercicio: EJERCICIOS[regla.ejercicio],
    mensajesAnimo: regla.mensajesAnimo,
    perfilVoz: regla.perfilVoz,
  };
}
