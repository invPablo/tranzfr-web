"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function BetaBanner() {
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 sm:h-10 bg-gradient-to-r from-[#208AEF] via-sky-500 to-[#10b981] animate-gradient-shift">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-center gap-2 sm:gap-3">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <p className="text-white text-[11px] sm:text-xs font-bold truncate">
          {t("beta.message")}
        </p>
        <a
          href="#waitlist"
          className="shrink-0 text-[11px] sm:text-xs font-extrabold text-white underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          {t("beta.cta")}
        </a>
      </div>
    </div>
  );
}
