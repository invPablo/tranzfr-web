import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Tranzfr | Comparte Gastos de Viaje Sin Complicaciones",
  description: "Tranzfr es la aplicación móvil para dividir gastos en viajes con amigos. Reparto flexible, presupuestos de viaje y simplificación automática de deudas.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900 selection:bg-sky-500/20 selection:text-sky-800">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

