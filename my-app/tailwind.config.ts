import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          950: "#030305",
          900: "#0a0a0f",
          800: "#12121a",
          700: "#1a1a2e",
          600: "#252538",
        },
        // OpenClaw Cyberpunk Palette
        cyan: {
          DEFAULT: "#00D4FF",
          50: "#E6FBFF",
          100: "#CCF7FF",
          200: "#99EFFF",
          300: "#66E7FF",
          400: "#33DFFF",
          500: "#00D4FF",
          600: "#00AACC",
          700: "#007F99",
          800: "#005566",
          900: "#002A33",
        },
        purple: {
          DEFAULT: "#8B5CF6",
          50: "#F3EEFD",
          100: "#E7DDFB",
          200: "#CFBBF7",
          300: "#B799F3",
          400: "#9F77EF",
          500: "#8B5CF6",
          600: "#6D3AE9",
          700: "#5229B0",
          800: "#371B77",
          900: "#1C0D3D",
        },
        acid: {
          DEFAULT: "#39FF14",
          50: "#E8FFE5",
          100: "#D1FFCC",
          200: "#A3FF99",
          300: "#75FF66",
          400: "#47FF33",
          500: "#39FF14",
          600: "#2ECC10",
          700: "#22990C",
          800: "#176608",
          900: "#0B3304",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          medium: "rgba(255, 255, 255, 0.08)",
          heavy: "rgba(255, 255, 255, 0.12)",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(0, 212, 255, 0.3)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "typing": "typing 3s steps(30) forwards",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 10px rgba(57, 255, 20, 0.5)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 20px rgba(57, 255, 20, 0.8)" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-openclaw": "radial-gradient(at 20% 30%, rgba(0, 212, 255, 0.08) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(139, 92, 246, 0.08) 0px, transparent 50%), radial-gradient(at 40% 80%, rgba(57, 255, 20, 0.05) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
