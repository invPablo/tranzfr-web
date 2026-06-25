import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Tranzfr | Split Trip Expenses Without the Hassle",
  description: "Tranzfr is the mobile app for splitting trip expenses with friends. Flexible splitting, trip budgets, and automatic debt simplification.",
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
    <html lang="en" className={`${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900 selection:bg-sky-500/20 selection:text-sky-800">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

