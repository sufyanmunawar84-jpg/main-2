import { ImageResponse } from "next/og";

export const alt = "Northstar Connect — independent UK connectivity guidance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 78,
          color: "white",
          background: "linear-gradient(135deg, #07142f 0%, #0d48be 60%, #6b45d8 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 800 }}>
          <div style={{ width: 52, height: 52, borderRadius: 16, background: "#2870ff", border: "8px solid rgba(255,255,255,.85)" }} />
          Northstar Connect
        </div>
        <div style={{ marginTop: 62, maxWidth: 940, fontSize: 76, fontWeight: 800, lineHeight: 1.03, letterSpacing: "-3px" }}>
          A clearer way to compare connectivity.
        </div>
        <div style={{ marginTop: 32, color: "#c9d9f7", fontSize: 28 }}>
          Independent UK mobile &amp; broadband guidance
        </div>
      </div>
    ),
    size,
  );
}
