import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tranzfr.com"),
  title: "Tranzfr | Split Trip Expenses Without the Hassle",
  description: "Tranzfr is the mobile app for splitting trip expenses with friends. Flexible splitting, trip budgets, and automatic debt simplification.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Tranzfr | Travel more. Worry less.",
    description: "Split trip expenses with friends, instantly. Flexible splitting, trip budgets, and settling up made easy.",
    url: "https://www.tranzfr.com",
    siteName: "Tranzfr",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranzfr | Travel more. Worry less.",
    description: "Split trip expenses with friends, instantly.",
    images: ["/og-image.png"],
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
        <Analytics />
      </body>
    </html>
  );
}

