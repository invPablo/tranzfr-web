"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// /join/<groupId> — bounce straight into the app's custom-scheme deep link.
// Chat apps (WhatsApp, etc.) only linkify http(s) URLs, so this https page is
// what makes the share link tappable; it then hands off to tranzfr:// to do
// the real work of opening the app to the right group.
export default function JoinPage() {
  const params = useParams();
  const groupId = Array.isArray(params.groupId) ? params.groupId[0] : params.groupId;
  const [showFallback, setShowFallback] = useState(false);

  const deepLink = `tranzfr://join/${encodeURIComponent(groupId ?? "")}`;

  useEffect(() => {
    if (!groupId) return;
    window.location.href = deepLink;
    const timer = setTimeout(() => setShowFallback(true), 1500);
    return () => clearTimeout(timer);
  }, [groupId, deepLink]);

  return (
    <div
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        fontFamily: "-apple-system, system-ui, sans-serif",
        background: "linear-gradient(180deg, #1b6fae, #0f2a44)",
        color: "#fff",
        textAlign: "center",
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: 22, margin: 0 }}>Tranzfr</h1>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", margin: 0, maxWidth: 320 }}>
        {showFallback
          ? "¿No se abrió? Si no tienes la app instalada todavía, instálala y vuelve a tocar el enlace."
          : "Abriendo la app…"}
      </p>
      {showFallback && (
        <a
          href={deepLink}
          style={{
            display: "inline-block",
            marginTop: 8,
            padding: "14px 28px",
            borderRadius: 14,
            background: "#fff",
            color: "#16161d",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: 15,
          }}
        >
          Abrir en la app
        </a>
      )}
    </div>
  );
}
