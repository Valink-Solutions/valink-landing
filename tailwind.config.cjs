/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        neubrutalism: {
          primary: "#4ade80",
          secondary: "#dc7efc",
          accent: "#f2d5ae",
          neutral: "#1B1D2C",
          "base-100": "#f3f4f6",
          info: "#44B1E4",
          success: "#19A38C",
          warning: "#AB7D07",
          error: "#E4255E",
          "--rounded-box": "0.2rem",
          "--rounded-btn": "0.2rem",
          "--rounded-badge": "0rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "1",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0rem",
          "--shadow-btn": "10px 10px 0px 0px rgba(0,0,0,1)",
          "--shadow-default": "5px 5px 0px 0px rgba(0,0,0,1)",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Metropolis", "monospace"],
        metropolis: ["Metropolis", "monospace"],
        "metropolis-italic": ["Metropolis-Italic", "monospace"],
        "metropolis-black": ["Metropolis-Black", "monospace"],
        "metropolis-black-italic": ["Metropolis-Black-Italic", "monospace"],
        "metropolis-bold": ["Metropolis-Bold", "monospace"],
        "metropolis-bold-italic": ["Metropolis-Bold-Italic", "monospace"],
        "metropolis-semibold": ["Metropolis-SemiBold", "monospace"],
        "metropolis-semibold-italic": [
          "Metropolis-SemiBold-Italic",
          "monospace",
        ],
        "metropolis-light": ["Metropolis-Light", "monospace"],
        "metropolis-light-italic": ["Metropolis-Light-Italic", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
