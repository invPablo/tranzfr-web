"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden border-t border-gray-150">
      {/* Decorative light glows */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-sky-50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-emerald-50/50 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight flex items-center justify-center gap-3">
            <HelpCircle className="text-[#208AEF]" size={32} />
            <span>{t("faq.title")}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-sky-300 bg-sky-50/20 shadow-md shadow-sky-500/5"
                    : "border-gray-150 hover:border-sky-300"
                }`}
              >
                {/* Accordion Trigger button */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className={`text-base font-bold transition-colors ${isOpen ? "text-[#208AEF]" : "text-gray-805 group-hover:text-[#208AEF]"}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-all ${isOpen ? "rotate-180 bg-[#208AEF]/15 text-[#208AEF]" : "bg-gray-55 text-gray-400"}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Accordion Content wrapper */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 text-sm text-gray-600 leading-relaxed bg-gray-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
