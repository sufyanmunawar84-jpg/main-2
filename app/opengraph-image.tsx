import { ImageResponse } from "next/og";

export const alt = "Northstar Connect — call for independent UK connectivity guidance";
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
          background: "linear-gradient(135deg, #0b1f1e 0%, #0a5c56 55%, #0d7a72 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 700 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 4,
              background: "#c45c26",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 999, border: "3px solid white" }} />
          </div>
          Northstar Connect
        </div>
        <div style={{ marginTop: 56, maxWidth: 920, fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-2px" }}>
          Call for clearer connectivity choices.
        </div>
        <div style={{ marginTop: 28, color: "#b7e0db", fontSize: 26 }}>
          Independent UK mobile &amp; broadband guidance — freephone
        </div>
      </div>
    ),
    size,
  );
}
