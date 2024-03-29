const accent = {
  100: "#f3e8d5",
  300: "#f2d5ae",
  500: "#d6af7b",
  700: "#b38853",
  900: "#8c5e29",
};

const gray = {
  100: "#f3f4f6",
  300: "#e1e4e8",
  500: "#c0c7cf",
  700: "#9fa4ad",
  900: "#151319",
};

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
          "--rounded-box": "0rem",
          "--rounded-btn": "0rem",
          "--rounded-badge": "0rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "1",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0rem",
          "--shadow-btn": "0px 4px 0px 0px rgba(0,0,0,1)",
          "--shadow-default": "0px 4px 0px 0px rgba(0,0,0,1)",
        },
        "neubrutalism-dark": {
          primary: "#4ade80",
          secondary: "#dc7efc",
          accent: "#f2d5ae",
          neutral: "#F7F5F8",
          "base-100": "#151319",
          info: "#44B1E4",
          success: "#19A38C",
          warning: "#AB7D07",
          error: "#E4255E",
          "--rounded-box": "0rem",
          "--rounded-btn": "0rem",
          "--rounded-badge": "0rem",
          "--rounded-progress": "0rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "1",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0rem",
          "--shadow-btn": "0px 4px 0px 0px rgba(255,255,255,1)",
          "--shadow-default": "0px 4px 0px 0px rgba(255,255,255,1)",
        },
      },
      "dark",
      "cupcake",
    ],
    darkTheme: "neubrutalism-dark",
    darkMode: "class",
  },
  theme: {
    extend: {
      backgroundColor: ["selection"],
      textColor: ["selection"],
      dropShadow: {
        neu: "0px 4px 0px 0px black;",
        "neu-light": "0px 4px 0 #3d3a44",
        "neu-pressed": "0px 2px 0 black",
        "neu-pressed-dark": "0px 2px 0 #3D3A44",
        "neu-card": "0px 4px 0 black",
      },
      boxShadow: {
        neu: "0px 4px 0px 0px rgba(0, 0, 0, 1);",
        "neu-light": "0px 4px 0 #3d3a44",
        "neu-pressed": "0px 2px 0 rgba(0, 0, 0, 1)",
        "neu-card": "0px 4px 0 black",
      },
      borderColor: {
        dark: "#3D3A44",
      },
      width: {
        120: "30rem",
        144: "36rem",
      },
      colors: {
        accent: accent,
        gray: gray,
      },
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
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
