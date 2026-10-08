import { ImageResponse } from "next/og";
export const alt = "Zenvyq Labs — Web. AI. Automation. Built for Business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0a0b0d", color: "#fff" }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#c6ff3d" }}>ZENVYQ LABS</div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 28, lineHeight: 1.05 }}>Build Better. Automate Smarter.</div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 28, color: "#a1a1aa" }}>Web. AI. Automation. Built for Business.</div>
      </div>
    ),
    size,
  );
}
