"use client";

import { useState } from "react";
import { 
  Landmark, Globe, WifiOff, FileSpreadsheet, ArrowRight, CheckCircle2, 
  Users, UserCheck, Shield, Award, HelpCircle, BarChart3, Lock
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Features() {
  const { language, t } = useLanguage();

  // 1. Currency Calculator state
  const [eurAmount, setEurAmount] = useState("50");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const rates: Record<string, { symbol: string; rate: number }> = {
    USD: { symbol: "$", rate: 1.08 },
    GBP: { symbol: "£", rate: 0.84 },
    JPY: { symbol: "¥", rate: 172.5 },
    MXN: { symbol: "$", rate: 19.4 },
  };
  const convertedValue = (parseFloat(eurAmount) || 0) * (rates[selectedCurrency]?.rate || 1);

  // 2. Sync state simulator
  const [isOnline, setIsOnline] = useState(false);

  // 3. Budget Simulator state
  const [personalSpent, setPersonalSpent] = useState(180);
  const personalBudget = 200;
  const isBudgetExceeded = personalSpent > personalBudget;

  return (
    <section id="features" className="py-24 bg-[#FAFAFB] relative overflow-hidden">
      {/* Decorative light gradient blobs */}
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-100/35 blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-100/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Feature Grid: 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Accounts & Access */}
          <div className="bg-white border border-gray-150 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#208AEF] hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6F4FE] border border-sky-100 flex items-center justify-center text-[#208AEF] mb-6 group-hover:scale-110 transition-transform">
                <UserCheck size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("features.items.accounts.title")}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t("features.items.accounts.desc")}
              </p>
            </div>

            {/* Micro visualizer: Login buttons mockup */}
            <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-2 w-full py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-bold text-gray-700 shadow-2xs">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.48 14.98 1 12 1 7.35 1 3.37 3.65 1.48 7.5l3.86 3C6.26 7.54 8.89 5.04 12 5.04z"/><path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.73 2.89c2.18-2 3.7-4.97 3.7-8.62z"/><path fill="#FBBC05" d="M5.34 14.29c-.25-.75-.4-1.55-.4-2.39s.15-1.64.4-2.39L1.48 6.5C.54 8.16 0 10.02 0 12s.54 3.84 1.48 5.5l3.86-3.21z"/><path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.73-2.89c-1.03.69-2.35 1.11-4.23 1.11-3.11 0-5.74-2.5-6.66-5.46l-3.86 3C3.37 20.35 7.35 23 12 23z"/></svg>
                <span>Google</span>
              </div>
              <div className="flex items-center justify-center gap-2 w-full py-1.5 bg-[#208AEF] rounded-lg text-[10px] font-bold text-white shadow-xs">
                <span>{language === "es" ? "Email & Contraseña" : "Email & Password"}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Travel Groups */}
          <div className="bg-white border border-gray-150 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#208AEF] hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6F4FE] border border-sky-100 flex items-center justify-center text-[#208AEF] mb-6 group-hover:scale-110 transition-transform">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("features.items.groups.title")}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t("features.items.groups.desc")}
              </p>
            </div>

            {/* Micro visualizer: Member badges mockup */}
            <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col gap-2 font-sans text-[11px] text-gray-600">
              <div className="flex justify-between items-center text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                <span>{language === "es" ? "Enlace Compartido" : "Shared Link"}</span>
                <span className="text-[#208AEF]">tranzfr.to/i/roadtrip</span>
              </div>
              <div className="flex -space-x-2 mt-1">
                <div className="w-6 h-6 rounded-full bg-[#E1F3EC] text-[#00966F] font-bold border-2 border-white flex items-center justify-center text-[9px]">C</div>
                <div className="w-6 h-6 rounded-full bg-[#E1F3EC] text-[#00966F] font-bold border-2 border-white flex items-center justify-center text-[9px]">A</div>
                <div className="w-6 h-6 rounded-full bg-[#FBEAE8] text-[#D8473F] font-bold border-2 border-white flex items-center justify-center text-[9px]">S</div>
                <div className="w-6 h-6 rounded-full bg-[#FBEAE8] text-[#D8473F] font-bold border-2 border-white flex items-center justify-center text-[9px]">L</div>
                <div className="w-6 h-6 rounded-full bg-sky-100 text-[#208AEF] border-2 border-white flex items-center justify-center text-[8px] font-extrabold">+</div>
              </div>
            </div>
          </div>

          {/* Card 3: Flexible Expenses */}
          <div className="bg-white border border-gray-150 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#208AEF] hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6F4FE] border border-sky-100 flex items-center justify-center text-[#208AEF] mb-6 group-hover:scale-110 transition-transform">
                <Award size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("features.items.expenses.title")}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t("features.items.expenses.desc")}
              </p>
            </div>

            {/* Micro visualizer: Allocation status bar */}
            <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col gap-2 text-[10px]">
              <div className="flex justify-between text-gray-500 font-bold uppercase tracking-wider text-[9px]">
                <span>{language === "es" ? "Asignación de Reparto" : "Expense Allocation"}</span>
                <span className="text-[#00966F] font-extrabold">{language === "es" ? "100% Repartido" : "100% Split"}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
                <div className="h-full bg-sky-400" style={{ width: "33%" }} />
                <div className="h-full bg-emerald-400" style={{ width: "33%" }} />
                <div className="h-full bg-teal-400" style={{ width: "34%" }} />
              </div>
              <div className="flex justify-between text-gray-400 text-[8px]">
                <span>{language === "es" ? "33.3% A partes iguales" : "33.3% Equally"}</span>
                <span>{language === "es" ? "33.3% Porcentaje" : "33.3% Percentage"}</span>
                <span>{language === "es" ? "33.4% Exacto" : "33.4% Exact"}</span>
              </div>
            </div>
          </div>

          {/* Card 4: Payments & Balances */}
          <div className="bg-white border border-gray-150 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#208AEF] hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6F4FE] border border-sky-100 flex items-center justify-center text-[#208AEF] mb-6 group-hover:scale-110 transition-transform">
                <Landmark size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("features.items.payments.title")}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t("features.items.payments.desc")}
              </p>
            </div>

            {/* Micro visualizer: Debt Flow Simplification */}
            <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col gap-3 font-mono text-[11px] text-gray-500">
              <div className="flex justify-between items-center text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                <span>{t("features.visualizer.flow")}</span>
                <span className="text-amber-600">{t("features.visualizer.without")}</span>
              </div>
              <div className="flex flex-col gap-1 opacity-60">
                <div className="flex items-center justify-between">
                  <span>Sofía {t("features.visualizer.owes")} Ana</span>
                  <span>15,00 €</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Ana {t("features.visualizer.owes")} Carlos</span>
                  <span>15,00 €</span>
                </div>
              </div>
              <div className="border-t border-gray-200 my-0.5" />
              <div className="flex justify-between items-center text-[9px] text-[#208AEF] font-bold uppercase tracking-wider">
                <span>{t("features.visualizer.optimization")}</span>
                <span className="text-[#00966F]">{t("features.visualizer.with")}</span>
              </div>
              <div className="flex items-center justify-between text-gray-950 font-semibold">
                <div className="flex items-center gap-1">
                  <span className="text-rose-600 font-bold">Sofía</span>
                  <ArrowRight size={10} className="text-[#208AEF]" />
                  <span className="text-emerald-700 font-bold">Carlos</span>
                </div>
                <span className="text-[#00966F] font-extrabold">15,00 €</span>
              </div>
            </div>
          </div>

          {/* Card 5: Budgets Control */}
          <div className="bg-white border border-gray-150 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#208AEF] hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6F4FE] border border-sky-100 flex items-center justify-center text-[#208AEF] mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("features.items.budgets.title")}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t("features.items.budgets.desc")}
              </p>
            </div>

            {/* Micro visualizer: Budget warnings simulator */}
            <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 flex flex-col gap-2.5 text-xs">
              <div className="flex justify-between items-center text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                <span>{language === "es" ? "Tu Presupuesto Personal" : "Your Personal Budget"}</span>
                <span className={`font-extrabold ${isBudgetExceeded ? "text-[#D8473F]" : "text-[#208AEF]"}`}>
                  {personalSpent} € / {personalBudget} €
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden relative">
                <div 
                  className={`h-full rounded-full transition-all duration-350 ${
                    isBudgetExceeded ? "bg-[#D8473F]" : "bg-[#208AEF]"
                  }`}
                  style={{ width: `${Math.min((personalSpent / personalBudget) * 100, 100)}%` }} 
                />
              </div>
              <div className="flex gap-2 justify-between">
                <button 
                  onClick={() => setPersonalSpent(150)}
                  className="flex-1 py-1 rounded bg-white border border-gray-250 text-[9px] font-bold text-gray-600 active:scale-95 transition-all cursor-pointer"
                >
                  {language === "es" ? "Gastar 150 €" : "Spend €150"}
                </button>
                <button 
                  onClick={() => setPersonalSpent(230)}
                  className="flex-1 py-1 rounded bg-white border border-gray-250 text-[9px] font-bold text-[#D8473F] active:scale-95 transition-all cursor-pointer"
                >
                  {language === "es" ? "Gastar 230 € (Alerta)" : "Spend €230 (Alert)"}
                </button>
              </div>
            </div>
          </div>

          {/* Card 6: 100% Offline-Aware */}
          <div className="bg-white border border-gray-150 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#208AEF] hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6F4FE] border border-sky-100 flex items-center justify-center text-[#208AEF] mb-6 group-hover:scale-110 transition-transform">
                <WifiOff size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("features.items.connectivity.title")}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t("features.items.connectivity.desc")}
              </p>
            </div>

            {/* Micro visualizer: Offline Sync Simulator */}
            <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100 flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{t("features.visualizer.networkState")}</span>
                <span className={`text-[11px] font-bold ${isOnline ? "text-[#00966F]" : "text-amber-600"}`}>
                  {isOnline ? t("features.visualizer.connected") : t("features.visualizer.offline")}
                </span>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`px-3 py-1.5 rounded-lg text-[9px] font-bold transition-all active:scale-95 cursor-pointer ${
                  isOnline
                    ? "bg-[#E1F3EC] border border-emerald-200 text-[#00966F]"
                    : "bg-amber-50 border border-amber-200 text-amber-700"
                }`}
              >
                {isOnline ? t("features.visualizer.btnOffline") : t("features.visualizer.btnOnline")}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
