"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/constants/translations";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("tranzfr-lang") as Language;
    if (saved === "es" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("tranzfr-lang", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let current: any = translations[language];
    for (const k of keys) {
      if (!current || current[k] === undefined) {
        // Fallback to Spanish
        let fallback: any = translations["es"];
        for (const fallbackK of keys) {
          if (!fallback || fallback[fallbackK] === undefined) return key;
          fallback = fallback[fallbackK];
        }
        return fallback;
      }
      current = current[k];
    }
    return typeof current === "string" ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
