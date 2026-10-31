import type { Config } from "tailwindcss";
// Every colour resolves to a CSS variable (see globals.css), so utilities follow the active theme.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)", band: "rgb(var(--band) / <alpha-value>)", card: "rgb(var(--card) / <alpha-value>)", line: "rgb(var(--line) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)", head: "rgb(var(--head) / <alpha-value>)", muted: "rgb(var(--muted) / <alpha-value>)", accent: "rgb(var(--accent) / <alpha-value>)",
        blue: "rgb(var(--blue) / <alpha-value>)", violet: "rgb(var(--violet) / <alpha-value>)", sel: "rgb(var(--sel) / <alpha-value>)", btn: "rgb(var(--btn-bg) / <alpha-value>)", "btn-fg": "rgb(var(--btn-fg) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["'Hanken Grotesk Variable'", "system-ui", "sans-serif"],
        serif: ["'Fraunces Variable'", "Georgia", "serif"],
      },
      maxWidth: { wrap: "80rem", prose: "42rem" },
    },
  },
  plugins: [],
};
export default config;
