"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { IS_APP_PUBLISHED, PLAY_STORE_URL } from "@/constants/links";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-9 sm:top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel py-3 shadow-md shadow-gray-150/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <div className="relative w-36 h-7.5 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/Asset 5.png"
              alt="Tranzfr Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-semibold text-gray-600 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.features")}
          </a>
          <a
            href="#splitter"
            className="text-sm font-semibold text-gray-600 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.simulator")}
          </a>
          <a
            href="#trips"
            className="text-sm font-semibold text-gray-600 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.trips")}
          </a>
          <a
            href="#faq"
            className="text-sm font-semibold text-gray-600 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.faq")}
          </a>
        </nav>

        {/* Action Button & Language Selector */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center border border-gray-200 rounded-full p-0.5 bg-gray-50/50 text-xs">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                language === "es"
                  ? "bg-white text-[#208AEF] shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                language === "en"
                  ? "bg-white text-[#208AEF] shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              EN
            </button>
          </div>

          {/* Download / Beta CTA Button */}
          <a
            href={IS_APP_PUBLISHED ? "#download" : PLAY_STORE_URL}
            target={IS_APP_PUBLISHED ? undefined : "_blank"}
            rel={IS_APP_PUBLISHED ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-bold text-white bg-[#208AEF] hover:bg-[#1c7cd6] rounded-full transition-all duration-300 shadow-md shadow-sky-500/10 cursor-pointer"
          >
            <Download size={13} />
            <span>{IS_APP_PUBLISHED ? t("nav.download") : t("beta.cta")}</span>
          </a>
        </div>

        {/* Mobile Menu Button & Language Selector */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Small Language Selector */}
          <div className="flex items-center border border-gray-200 rounded-full p-0.5 bg-gray-50 text-[10px]">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-0.5 rounded-full font-bold transition-all ${
                language === "es"
                  ? "bg-white text-[#208AEF] shadow-xs"
                  : "text-gray-500"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full font-bold transition-all ${
                language === "en"
                  ? "bg-white text-[#208AEF] shadow-xs"
                  : "text-gray-500"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[96px] sm:top-[100px] z-40 bg-white/98 backdrop-blur-lg border-t border-gray-100 flex flex-col px-6 py-8 gap-6 animate-fade-in">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.features")}
          </a>
          <a
            href="#splitter"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.simulator")}
          </a>
          <a
            href="#trips"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.trips")}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold text-gray-800 hover:text-[#208AEF] transition-colors"
          >
            {t("nav.faq")}
          </a>
          <a
            href={IS_APP_PUBLISHED ? "#download" : PLAY_STORE_URL}
            target={IS_APP_PUBLISHED ? undefined : "_blank"}
            rel={IS_APP_PUBLISHED ? undefined : "noopener noreferrer"}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 bg-[#208AEF] rounded-xl text-white font-semibold shadow-lg shadow-sky-500/10 hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            {IS_APP_PUBLISHED ? t("nav.download") : t("beta.cta")}
          </a>
        </div>
      )}
    </header>
  );
}
