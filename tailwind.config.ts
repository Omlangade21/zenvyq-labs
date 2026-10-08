import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: { DEFAULT: "#0a0b0d", soft: "#101216" }, accent: "#8b7bff" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], display: ["var(--font-display)", "var(--font-inter)", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
