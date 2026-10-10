import { LIMITE_TEXTO, simularAnalisis } from "@/lib/analysis";

export async function POST(request: Request) {
  let cuerpo: unknown;
  try {
    cuerpo = await request.json();
  } catch {
    return Response.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const texto =
    typeof cuerpo === "object" && cuerpo !== null && "texto" in cuerpo
      ? cuerpo.texto
      : undefined;

  if (typeof texto !== "string" || texto.trim() === "") {
    return Response.json({ error: "Escribe cómo te sientes" }, { status: 400 });
  }

  if (texto.length > LIMITE_TEXTO) {
    return Response.json(
      { error: `El texto no puede superar los ${LIMITE_TEXTO} caracteres` },
      { status: 400 },
    );
  }

  return Response.json(simularAnalisis(texto));
}
