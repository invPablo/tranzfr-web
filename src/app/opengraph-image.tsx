import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #2e9bf0 0%, #0f2a44 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              border: "10px solid white",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              border: "10px solid rgba(255,255,255,0.55)",
              marginLeft: -28,
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "white",
              letterSpacing: -2,
              marginLeft: 8,
            }}
          >
            tranzfr
          </span>
        </div>

        <div
          style={{
            fontSize: 46,
            fontWeight: 700,
            color: "white",
            marginTop: 48,
          }}
        >
          Travel more. Worry less.
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#cfe8ff",
            marginTop: 16,
          }}
        >
          Split trip expenses with friends, instantly.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
