"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    const { error } = await supabase.from("testers_waitlist").insert({ email: trimmed });
    if (error && error.code !== "23505") {
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className="text-sm font-semibold text-[#00966F]">{t("waitlist.success")}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("waitlist.placeholder")}
        className="px-4 py-4 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#208AEF] w-full sm:w-64"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#208AEF] hover:bg-[#1c7cd6] text-white font-bold text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 whitespace-nowrap"
      >
        {status === "loading" ? t("waitlist.submitting") : t("beta.cta")}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 sm:absolute sm:mt-16">{t("waitlist.error")}</p>
      )}
    </form>
  );
}
