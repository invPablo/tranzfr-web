"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, Calendar, Wallet, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TripData {
  id: string;
  tabLabel: string;
  title: string;
  location: string;
  image: string;
  dates: string;
  travelers: string[];
  currency: string;
  expenses: { label: string; amount: string; paidBy: string }[];
  total: string;
  status: string;
}

export default function TripTabs() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("weekend");

  const trips: TripData[] = [
    {
      id: "weekend",
      tabLabel: t("trips.tabs.weekend.name"),
      title: t("trips.tabs.weekend.title"),
      location: language === "es" ? "París, Francia" : "Paris, France",
      image: "/friends.jpg",
      dates: language === "es" ? "14 Oct - 17 Oct, 2026" : "Oct 14 - Oct 17, 2026",
      travelers: ["Daniel", "Sofía", "Lucas"],
      currency: "EUR (€)",
      expenses: [
        { label: language === "es" ? "Entradas Torre Eiffel" : "Eiffel Tower Tickets", amount: "75.00 €", paidBy: "Daniel" },
        { label: language === "es" ? "Cena Bistro" : "Bistro Dinner", amount: "120.00 €", paidBy: "Sofía" },
        { label: language === "es" ? "Metro y Bus" : "Metro & Bus", amount: "30.00 €", paidBy: "Lucas" },
      ],
      total: "225.00 €",
      status: language === "es" ? "Saldado" : "Settled",
    },
    {
      id: "friends",
      tabLabel: t("trips.tabs.friends.name"),
      title: t("trips.tabs.friends.title"),
      location: language === "es" ? "Bangkok, Tailandia" : "Bangkok, Thailand",
      image: "/trip.jpg",
      dates: language === "es" ? "28 Nov - 12 Dic, 2026" : "Nov 28 - Dec 12, 2026",
      travelers: ["Ana", "Carlos", "Paula", "Miguel"],
      currency: "THB (฿) / EUR (€)",
      expenses: [
        { label: language === "es" ? "Hostal en Khao San" : "Khao San Hostel", amount: "3.200 THB", paidBy: "Carlos" },
        { label: language === "es" ? "Tour Templos" : "Temples Tour", amount: "1.800 THB", paidBy: "Ana" },
        { label: language === "es" ? "Cena Street Food" : "Street Food Dinner", amount: "650 THB", paidBy: "Paula" },
      ],
      total: "5.650 THB",
      status: language === "es" ? "Saldado" : "Settled",
    },
    {
      id: "adventure",
      tabLabel: t("trips.tabs.adventure.name"),
      title: t("trips.tabs.adventure.title"),
      location: language === "es" ? "Reikiavik, Islandia" : "Reykjavik, Iceland",
      image: "/escape.jpg",
      dates: language === "es" ? "01 Jul - 08 Jul, 2026" : "Jul 01 - Jul 08, 2026",
      travelers: ["Elena", "Javier", "Sergio", "Marta"],
      currency: "ISK (kr) / EUR (€)",
      expenses: [
        { label: language === "es" ? "Alquiler SUV 4x4" : "4x4 SUV Rental", amount: "650.00 €", paidBy: "Elena" },
        { label: language === "es" ? "Gasolinera N1" : "N1 Gas Station", amount: "120.00 €", paidBy: "Javier" },
        { label: language === "es" ? "Supermercado Krónan" : "Krónan Supermarket", amount: "85.00 €", paidBy: "Sergio" },
      ],
      total: "855.00 €",
      status: language === "es" ? "Saldado" : "Settled",
    }
  ];

  const activeTrip = trips.find((t) => t.id === activeTab) || trips[0];

  return (
    <section id="trips" className="py-24 bg-[#FAFAFB] relative overflow-hidden border-t border-gray-150">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-sky-50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-50/50 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {t("trips.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t("trips.subtitle")}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200 max-w-full overflow-x-auto scrollbar-none">
            {trips.map((trip) => (
              <button
                key={trip.id}
                onClick={() => setActiveTab(trip.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === trip.id
                    ? "bg-[#208AEF] text-white shadow-md shadow-sky-500/10"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {trip.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Info & Expenses */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[#208AEF] text-xs font-bold uppercase tracking-wider mb-2">
                <Compass size={14} />
                <span>{activeTrip.location}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                {activeTrip.title}
              </h3>
              
              <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2.5">
                  <Calendar size={16} className="text-[#208AEF]" />
                  <span>{activeTrip.dates}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Wallet size={16} className="text-[#208AEF]" />
                  <span>{language === "es" ? "Base en" : "Base in"} {activeTrip.currency}</span>
                </div>
              </div>

              {/* Travelers tags */}
              <div className="mb-8">
                <p className="text-[10px] font-bold text-gray-450 uppercase tracking-wider mb-2">
                  {language === "es" ? "Viajeros" : "Travelers"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeTrip.travelers.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-150 text-xs text-gray-600 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expense list preview */}
              <div className="mb-6">
                <p className="text-[10px] font-bold text-gray-455 uppercase tracking-wider mb-3">
                  {language === "es" ? "Gastos Registrados" : "Logged Expenses"}
                </p>
                <div className="flex flex-col gap-2">
                  {activeTrip.expenses.map((exp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-100"
                    >
                      <div>
                        <p className="text-xs font-bold text-gray-800 leading-tight">{exp.label}</p>
                        <p className="text-[9px] text-gray-450">
                          {language === "es" ? `Pagado por ${exp.paidBy}` : `Paid by ${exp.paidBy}`}
                        </p>
                      </div>
                      <span className="text-xs font-extrabold text-gray-900">{exp.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Footer panel */}
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-6">
              <div>
                <p className="text-xs text-gray-400">{language === "es" ? "Total gastado" : "Total spent"}</p>
                <p className="text-xl font-black text-gray-900 mt-0.5">{activeTrip.total}</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E1F3EC] border border-emerald-150 text-[#00966F]">
                <Check size={12} />
                <span>{activeTrip.status}</span>
              </div>
            </div>

          </div>

          {/* Right panel: Visual Image with overlay */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-auto rounded-3xl overflow-hidden shadow-lg group/img">
            {/* Background image */}
            <Image
              src={activeTrip.image}
              alt={activeTrip.title}
              fill
              className="object-cover transition-transform duration-750 group-hover/img:scale-103"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gray-950/10" />

            {/* Floating app notification mockup (White Style) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-gray-100/60 rounded-2xl shadow-xl max-w-md animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#208AEF] flex items-center justify-center text-white text-sm font-extrabold font-mono shrink-0 shadow-sm">
                  TZ
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs font-extrabold text-gray-905">{language === "es" ? "Simplificación completada" : "Simplification completed"}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5 leading-snug">
                    {language === "es" 
                      ? `Las deudas de ${activeTrip.travelers.join(", ")} se han optimizado en tiempo real. Todos saldados en un clic.`
                      : `The debts of ${activeTrip.travelers.join(", ")} have been optimized in real time. Everyone settled in one click.`}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
