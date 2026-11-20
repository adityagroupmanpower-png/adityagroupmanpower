import { ImageResponse } from "next/og";

export const alt = "Aditya Group Manpower & Placement Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 48%, #ecfdf5 100%)",
          color: "#09090b",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "70px 80px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 670 }}>
          <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: "-2px" }}>
            Aditya Group
          </div>
          <div style={{ color: "#ea580c", fontSize: 34, fontWeight: 700, marginTop: 12 }}>
            Manpower &amp; Placement Services
          </div>
          <div style={{ color: "#52525b", fontSize: 25, lineHeight: 1.45, marginTop: 34 }}>
            Connecting candidates and employers with trusted recruitment support.
          </div>
          <div style={{ color: "#047857", fontSize: 22, fontWeight: 600, marginTop: 42 }}>
            adityagroupmanpower.co.in
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "white",
            border: "2px solid #e4e4e7",
            borderRadius: 36,
            display: "flex",
            height: 300,
            justifyContent: "center",
            padding: 28,
            width: 380,
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "linear-gradient(145deg, #f97316, #facc15)",
              borderRadius: 999,
              color: "white",
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              height: 170,
              justifyContent: "center",
              width: 170,
            }}
          >
            A
          </div>
          <div style={{ color: "#1d4ed8", fontSize: 38, fontWeight: 800, marginTop: 20 }}>
            ADITYA GROUP
          </div>
          <div style={{ color: "#ea580c", fontSize: 18, fontWeight: 700, marginTop: 8 }}>
            VALUE OF TRUST
          </div>
        </div>
      </div>
    ),
    size
  );
}
