import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glosario · Espacio de bienestar",
  description: "Glosario de términos usados en Espacio de bienestar.",
};

type Seccion = {
  titulo: string;
  terminos: { termino: string; definicion: string }[];
};

const SECCIONES: Seccion[] = [
  {
    titulo: "Semáforo y riesgo",
    terminos: [
      {
        termino: "Semáforo",
        definicion:
          "Indicador visual de tres luces que resume el nivel de atención sugerido por el análisis.",
      },
      {
        termino: "Luz verde",
        definicion: "Nivel de riesgo bajo (1 o 2). Se sugiere un seguimiento habitual.",
      },
      {
        termino: "Luz amarilla",
        definicion: "Nivel de riesgo moderado (3). Conviene un seguimiento regular.",
      },
      {
        termino: "Luz roja",
        definicion: "Nivel de riesgo alto (4 o 5). Requiere atención prioritaria.",
      },
      {
        termino: "Nivel de riesgo",
        definicion:
          "Escala del 1 al 5 que indica la intensidad de las señales detectadas en el texto.",
      },
    ],
  },
  {
    titulo: "Emociones detectadas",
    terminos: [
      {
        termino: "Riesgo inminente",
        definicion:
          "Expresiones que sugieren peligro para la propia seguridad. Activa la alerta de crisis.",
      },
      {
        termino: "Desesperanza",
        definicion: "Sensación de que nada mejorará. Se asocia al nivel 4.",
      },
      {
        termino: "Soledad",
        definicion: "Sensación de aislamiento o de no tener con quién contar.",
      },
      {
        termino: "Agotamiento",
        definicion: "Cansancio físico o mental intenso, con poca energía para continuar.",
      },
      {
        termino: "Ansiedad",
        definicion: "Preocupación, nerviosismo o temor que resultan difíciles de controlar.",
      },
      {
        termino: "Tristeza",
        definicion: "Estado de ánimo bajo, con señales leves de malestar.",
      },
      {
        termino: "Calma",
        definicion: "Expresiones de bienestar, tranquilidad o gratitud.",
      },
      {
        termino: "Neutral",
        definicion: "No se detectan palabras clave ni señales emocionales claras.",
      },
    ],
  },
  {
    titulo: "Etiquetas y casos",
    terminos: [
      {
        termino: "Etiqueta de patrón",
        definicion:
          "Categoría breve que agrupa señales relacionadas, como Fatiga, Aislamiento o Desesperanza.",
      },
      {
        termino: "Resumen ejecutivo",
        definicion: "Texto breve que resume un caso para facilitar su lectura por parte de un profesional.",
      },
      {
        termino: "Caso ficticio",
        definicion:
          "Historia inventada para demostración. Ningún dato de la bandeja corresponde a una persona real.",
      },
    ],
  },
  {
    titulo: "Apoyo y ejercicios",
    terminos: [
      {
        termino: "Respiración cuadrada",
        definicion:
          "Ejercicio de inhalar, retener, exhalar y retener durante 4 segundos cada paso, repetido 4 veces.",
      },
      {
        termino: "Conexión 5-4-3-2-1",
        definicion:
          "Ejercicio de atención al momento presente: 5 cosas que ver, 4 que tocar, 3 sonidos, 2 olores y 1 para saborear o agradecer.",
      },
      {
        termino: "Línea 113, opción 5",
        definicion: "Línea de ayuda en salud mental del MINSA, en Perú.",
      },
      {
        termino: "Servicios de emergencia",
        definicion:
          "Servicios de atención urgente de tu localidad. Acude a ellos si sientes que estás en peligro.",
      },
    ],
  },
  {
    titulo: "Funcionamiento",
    terminos: [
      {
        termino: "Análisis simulado",
        definicion:
          "Resultado generado con reglas de palabras clave para demostración. No es un diagnóstico ni usa un modelo de inteligencia artificial.",
      },
      {
        termino: "Palabras clave",
        definicion:
          "Términos que la herramienta busca en el texto, sin distinguir mayúsculas ni tildes.",
      },
      {
        termino: "Lectura en voz",
        definicion:
          "Función que lee los mensajes en voz alta con la voz del navegador. Depende del soporte de tu dispositivo.",
      },
      {
        termino: "Sonido de fondo",
        definicion: "Audio suave en bucle para ayudarte a relajarte mientras escribes.",
      },
    ],
  },
];

export default function Glosario() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
      <Link
        href="/"
        className="text-sm font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-800 dark:text-indigo-300"
      >
        ← Volver al inicio
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-indigo-700 dark:text-indigo-300">
        Glosario de términos
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Este glosario explica el lenguaje de la herramienta. Los resultados son orientación
        simulada y no reemplazan la atención profesional.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        {SECCIONES.map((seccion) => (
          <section
            key={seccion.titulo}
            className="rounded-3xl bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-800/80"
          >
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              {seccion.titulo}
            </h2>
            <dl className="mt-4 flex flex-col gap-4">
              {seccion.terminos.map((item) => (
                <div key={item.termino}>
                  <dt className="font-semibold text-indigo-700 dark:text-indigo-300">
                    {item.termino}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {item.definicion}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </main>
  );
}
