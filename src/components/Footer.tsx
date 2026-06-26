"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { IS_APP_PUBLISHED } from "@/constants/links";
import WaitlistForm from "@/components/WaitlistForm";

export default function Footer() {
  const { language, t } = useLanguage();

  const badgeSrc = language === "es"
    ? "/GetItOnGooglePlay_Badge_Web_color_Spanish.png"
    : "/GetItOnGooglePlay_Badge_Web_color_English.png";

  return (
    <footer id="download" className="relative bg-white border-t border-gray-150 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-50 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. CTA Banner Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="bg-gray-50 border border-gray-150 p-8 sm:p-12 md:p-16 rounded-[40px] text-center shadow-md shadow-gray-200/20 relative overflow-hidden mb-20">
          <div className="absolute right-[-60px] top-[-60px] w-64 h-64 rounded-full bg-sky-100/30 blur-3xl pointer-events-none" />
          <div className="absolute left-[-60px] bottom-[-60px] w-64 h-64 rounded-full bg-emerald-50/50 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto flex flex-col items-center">
            {/* App Icon (White background style) */}
            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-150 shadow-md flex items-center justify-center p-3 mb-6 animate-float">
              <Image
                src="/icon.png"
                alt="Tranzfr App Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {language === "es" ? "¿Listo para tu próximo viaje?" : "Ready for your next trip?"}
            </h3>
            <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
              {IS_APP_PUBLISHED
                ? language === "es"
                  ? "Descarga Tranzfr gratis ahora mismo en Google Play y despídete para siempre de las cuentas incómodas y los excels complejos."
                  : "Download Tranzfr for free right now on Google Play and say goodbye to awkward math and complex spreadsheets forever."
                : language === "es"
                  ? "Estamos en fase beta cerrada. Únete como tester y prueba Tranzfr antes que nadie."
                  : "We're in closed beta. Join as a tester and try Tranzfr before anyone else."}
            </p>

            {/* Google Play badge (once published) / Beta Tester CTA (for now) */}
            <div className="flex justify-center mt-8">
              {IS_APP_PUBLISHED ? (
                <a
                  href="#download"
                  className="relative block w-52 h-[60px] transition-all hover:scale-[1.03] active:scale-[0.98] drop-shadow-sm cursor-pointer"
                >
                  <Image
                    src={badgeSrc}
                    alt="Consíguelo en Google Play / Get it on Google Play"
                    fill
                    className="object-contain"
                    priority
                  />
                </a>
              ) : (
                <WaitlistForm />
              )}
            </div>
          </div>
        </div>

        {/* 2. Link Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-16 border-b border-gray-150">
          {/* Logo and info */}
          <div className="col-span-2 md:col-span-6 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center">
              <div className="relative w-36 h-7.5">
                <Image
                  src="/Asset 5.png"
                  alt="Tranzfr Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs mt-2">
              {t("footer.desc")}
            </p>
          </div>

          {/* Links columns */}
          <div className="col-span-1 md:col-span-3 text-left">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              {language === "es" ? "Producto" : "Product"}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-500">
              <a href="#features" className="hover:text-[#208AEF] transition-colors">{t("nav.features")}</a>
              <a href="#splitter" className="hover:text-[#208AEF] transition-colors">{t("nav.simulator")}</a>
              <a href="#trips" className="hover:text-[#208AEF] transition-colors">{t("nav.trips")}</a>
              <a href="#faq" className="hover:text-[#208AEF] transition-colors">{t("nav.faq")}</a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 text-left">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-500">
              <a href="/privacy.html" className="hover:text-[#208AEF] transition-colors">{t("footer.privacy")}</a>
              <a href="/terms.html" className="hover:text-[#208AEF] transition-colors">{t("footer.terms")}</a>
              <a href="mailto:hello@tranzfr.com" className="hover:text-[#208AEF] transition-colors">{language === "es" ? "Contacto" : "Contact"}</a>
            </div>
          </div>
        </div>

        {/* 3. Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Tranzfr — North Kraken Studio. {t("footer.rights")}</p>
        </div>

      </div>
    </footer>
  );
}
