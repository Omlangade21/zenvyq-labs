import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
export const alt = "Zenvyq Labs: Build Better. Automate Smarter.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  const logo = `data:image/png;base64,${(await readFile(path.join(process.cwd(), "public/brand/zenvyq-logo.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: 80, background: "#06141B", color: "#CCD0CF" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 34, color: "#9BA8AB" }}>Zenvyq Labs</div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 600, marginTop: 24, lineHeight: 1.06, maxWidth: 640 }}>Build Better. Automate Smarter.</div>
          <div style={{ display: "flex", fontSize: 30, marginTop: 28, color: "#9BA8AB" }}>Web development, AI solutions and business automation</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={300} height={300} alt="" />
      </div>
    ),
    size,
  );
}
