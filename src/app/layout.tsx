import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Espacio de bienestar",
  description:
    "Un lugar para escribir lo que sientes, a tu propio ritmo. Herramienta de apoyo emocional; no reemplaza la atención profesional.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-linear-to-b from-sky-100 via-indigo-50 to-white text-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950 dark:text-slate-100">
        <ThemeProvider>
          <header className="flex justify-end px-4 pt-4 sm:px-8">
            <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
