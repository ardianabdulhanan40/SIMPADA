/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EEF2F6",
        paperLine: "#D7E1EA",
        ink: "#16273D",
        ink2: "#2E4A66",
        blue: {
          DEFAULT: "#1E3A5F",
          soft: "#3E6690",
        },
        amber: {
          DEFAULT: "#F2A93B",
          dark: "#C9821F",
        },
        success: "#2E9E6D",
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(30,58,95,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
    },
  },
  plugins: [],
};
