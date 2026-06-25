"use client";

import { ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { IS_APP_PUBLISHED, TESTER_SIGNUP_URL } from "@/constants/links";

export default function Hero() {
  const { language, t } = useLanguage();

  const badgeSrc = language === "es"
    ? "/GetItOnGooglePlay_Badge_Web_color_Spanish.png"
    : "/GetItOnGooglePlay_Badge_Web_color_English.png";

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-white">
      {/* Decorative light blurred background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-50/50 blur-[130px] pointer-events-none" />
      
      {/* Grid Pattern overlay (extremely subtle black lines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F4FE] border border-sky-150 text-[#208AEF] text-xs font-semibold mb-6">
              <Zap size={12} className="text-emerald-600 fill-emerald-600" />
              <span>{t("hero.tagline")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6 font-sans">
              {t("hero.title")}
              <span className="block mt-2 bg-gradient-to-r from-[#208AEF] via-sky-500 to-[#10b981] bg-clip-text text-transparent animate-gradient-shift">
                {t("hero.titleAccent")}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* Google Play Badge (once published) / Beta Tester CTA (for now) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
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
                <a
                  href={TESTER_SIGNUP_URL}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#208AEF] hover:bg-[#1c7cd6] text-white font-bold text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.03] active:scale-[0.98]"
                >
                  {t("beta.cta")}
                </a>
              )}
            </div>

            {/* Trust info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#00966F]" />
                <span>{IS_APP_PUBLISHED ? t("hero.compliance") : t("hero.comingSoon")}</span>
              </div>
            </div>
            
          </div>

          {/* Premium CSS Phone Mockup Visual (White / Light theme) */}
          <div className="lg:col-span-5 flex justify-center relative select-none">

            {/* Soft background blue glow directly behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[480px] rounded-full bg-sky-100/60 blur-[60px] pointer-events-none" />

            {/* Floating CSS Phone Container */}
            <div className="relative w-[320px] h-[640px] rounded-[48px] border-[10px] border-gray-800 bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] overflow-hidden animate-float flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-black rounded-full" />
              </div>

              {/* Status overlay bar / safe area */}
              <div className="absolute top-1.5 left-6 right-6 flex items-center justify-between z-30">
                <span className="text-[9px] font-bold text-gray-800 font-sans">9:41</span>
                <div className="flex items-center gap-1 text-gray-800">
                  <span className="text-[8px]">📶</span>
                  <span className="text-[8px]">🔋</span>
                </div>
              </div>

              {/* 1. Hero Part (Trip Image Header) */}
              <div className="relative h-[120px] w-full shrink-0 overflow-hidden">
                <Image
                  src="/trip.jpg"
                  alt="Trip Header"
                  fill
                  className="object-cover brightness-[0.85]"
                />
                
                {/* Top Row actions */}
                <div className="absolute top-7 left-4 right-4 flex items-center justify-between z-10">
                  <button className="w-7 h-7 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 flex items-center justify-center text-gray-800 active:scale-95 transition-transform">
                    <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button className="w-7 h-7 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 flex items-center justify-center text-gray-800 active:scale-95 transition-transform">
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  </button>
                </div>
              </div>

              {/* 2. Overlap Header Card (Splitto White Style) */}
              <div className="mx-3.5 -mt-7 relative z-20 bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] shrink-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 tracking-tight">{t("hero.mockup.title")}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{t("hero.mockup.members")}</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#00966F] bg-[#E1F3EC] px-2 py-0.5 rounded-full">{t("hero.mockup.owed")}</span>
                </div>

                {/* Budget Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[9px] text-gray-400 mb-1">
                    <span>{t("hero.mockup.budget")}</span>
                    <span className="font-semibold text-gray-700">{t("hero.mockup.budgetVal")}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#208AEF] rounded-full" style={{ width: "71%" }} />
                  </div>
                </div>

                {/* Actions Row */}
                <div className="flex gap-2 mt-3.5">
                  <button className="flex-1 h-8.5 rounded-xl bg-[#208AEF] text-white text-[10px] font-bold flex items-center justify-center gap-1.5 active:opacity-90 transition-opacity">
                    <svg className="w-3 h-3 fill-current rotate-45" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    <span>{t("hero.mockup.liquidar")}</span>
                  </button>
                  <button className="flex-1 h-8.5 rounded-xl bg-[#E6F4FE] text-[#208AEF] text-[10px] font-bold flex items-center justify-center gap-1.5">
                    <svg className="w-3 h-3 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8.59 13.51l6.83 3.98m-.02-10.98l-6.79 3.97M16 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm0 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM8 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>
                    <span>{t("hero.mockup.compartir")}</span>
                  </button>
                  <button className="w-8.5 h-8.5 rounded-xl bg-[#E6F4FE] text-[#208AEF] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm11 1v-6m-3 3h6"/></svg>
                  </button>
                </div>
              </div>

              {/* 3. Scrollable Content Area */}
              <div className="flex-grow overflow-y-auto px-3.5 pt-4 pb-20 space-y-4 no-scrollbar">
                
                {/* Saldos Section */}
                <div>
                  <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">{t("hero.mockup.saldos")}</h5>
                  <div className="bg-white border border-gray-100 rounded-xl p-3 space-y-2.5 shadow-xs">
                    {/* Carlos */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#E1F3EC] text-[#00966F] font-bold flex items-center justify-center text-[9px]">C</div>
                        <span className="text-gray-800 font-semibold">Carlos</span>
                      </div>
                      <span className="font-bold text-[#00966F]">+320,00 €</span>
                    </div>
                    {/* Ana */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#E1F3EC] text-[#00966F] font-bold flex items-center justify-center text-[9px]">A</div>
                        <span className="text-gray-800 font-semibold">Ana</span>
                      </div>
                      <span className="font-bold text-[#00966F]">+180,00 €</span>
                    </div>
                    {/* Sofía */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#FBEAE8] text-[#D8473F] font-bold flex items-center justify-center text-[9px]">S</div>
                        <span className="text-gray-800 font-semibold">Sofía</span>
                      </div>
                      <span className="font-bold text-[#D8473F]">-150,00 €</span>
                    </div>
                    {/* Lucas */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#FBEAE8] text-[#D8473F] font-bold flex items-center justify-center text-[9px]">L</div>
                        <span className="text-gray-800 font-semibold">Lucas</span>
                      </div>
                      <span className="font-bold text-[#D8473F]">-350,00 €</span>
                    </div>
                  </div>
                </div>

                {/* Por Liquidar Section */}
                <div>
                  <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">{t("hero.mockup.porLiquidar")}</h5>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center bg-gray-50/50 border border-gray-100 rounded-lg p-2.5 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-gray-850">Lucas</span>
                        <span className="text-gray-450 text-[10px]">➜</span>
                        <span className="font-semibold text-gray-850">Carlos</span>
                      </div>
                      <span className="font-extrabold text-[#208AEF]">320,00 €</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50/50 border border-gray-100 rounded-lg p-2.5 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-gray-850">Sofía</span>
                        <span className="text-gray-450 text-[10px]">➜</span>
                        <span className="font-semibold text-gray-850">Ana</span>
                      </div>
                      <span className="font-extrabold text-[#208AEF]">150,00 €</span>
                    </div>
                  </div>
                </div>

                {/* Actividad Section */}
                <div>
                  <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">{t("hero.mockup.actividad")}</h5>
                  <div className="bg-white border border-gray-100 rounded-xl p-3 space-y-2.5 shadow-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-amber-50 text-amber-700 font-bold flex items-center justify-center text-[9px]">🚗</div>
                        <div>
                          <p className="font-semibold text-gray-800">{t("hero.mockup.history.rent")}</p>
                          <p className="text-[8px] text-gray-400">Lucas · {language === "es" ? "Hace 2h" : "2h ago"}</p>
                        </div>
                      </div>
                      <span className="font-bold text-gray-800">600,00 €</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-sky-50 text-[#208AEF] font-bold flex items-center justify-center text-[9px]">⛽</div>
                        <div>
                          <p className="font-semibold text-gray-800">{t("hero.mockup.history.fuel")}</p>
                          <p className="text-[8px] text-gray-400">Ana · {language === "es" ? "Hace 3h" : "3h ago"}</p>
                        </div>
                      </div>
                      <span className="font-bold text-gray-800">45,00 €</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-emerald-50 text-emerald-700 font-bold flex items-center justify-center text-[9px]">🛒</div>
                        <div>
                          <p className="font-semibold text-gray-800">{t("hero.mockup.history.super")}</p>
                          <p className="text-[8px] text-gray-400">Sofía · {language === "es" ? "Ayer" : "Yesterday"}</p>
                        </div>
                      </div>
                      <span className="font-bold text-gray-800">75,00 €</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating FAB: Añadir Gasto */}
              <div className="absolute bottom-4 right-4 z-30">
                <button className="h-9 px-4 rounded-full bg-[#208AEF] hover:bg-[#1c7cd6] text-white shadow-lg shadow-sky-500/20 flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer">
                  <span className="text-sm font-bold">+</span>
                  <span className="text-[10px] font-bold tracking-tight">{t("hero.mockup.addExpense")}</span>
                </button>
              </div>

            </div>

            {/* Floating Info Badges (White Style) */}
            <div className="absolute right-[-10px] top-[140px] z-30 w-36 bg-white border border-gray-100 rounded-2xl p-3 shadow-lg shadow-gray-200/50 flex items-center gap-2.5 animate-float">
              <div className="w-7 h-7 rounded-xl bg-emerald-50 text-[#00966F] flex items-center justify-center shrink-0">
                <ShieldCheck size={16} />
              </div>
              <div>
                <p className="text-[10px] font-extrabold text-gray-800 leading-tight">{t("hero.mockup.resolvedTitle")}</p>
                <p className="text-[8px] text-gray-400 leading-tight mt-0.5">{t("hero.mockup.resolvedText")}</p>
              </div>
            </div>

            <div className="absolute left-[-20px] bottom-[100px] z-30 w-36 bg-white border border-gray-100 rounded-2xl p-3 shadow-lg shadow-gray-200/50 flex items-center gap-2.5 animate-float-delayed">
              <div className="w-7 h-7 rounded-xl bg-sky-50 text-[#208AEF] flex items-center justify-center shrink-0 text-xs font-bold">$</div>
              <div>
                <p className="text-[10px] font-extrabold text-gray-800 leading-tight">{t("hero.mockup.multicurrency")}</p>
                <p className="text-[8px] text-gray-400 leading-tight mt-0.5">{t("hero.mockup.multicurrencyVal")}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
