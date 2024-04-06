/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#d946ef",
          secondary: "#4ade80",
          accent: "#0066ff",
          neutral: "#d1d5db",
          "base-100": "#f5f5f4",
          info: "#0fd6ff",
          success: "#34d399",
          warning: "#fcd34d",
          error: "#f3576e",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
          "--rounded-btn": "0",
        },
        dark: {
          primary: "#d946ef",
          secondary: "#4ade80",
          accent: "#0066ff",
          neutral: "#191625",
          "base-100": "#1f212b",
          info: "#0fd6ff",
          success: "#34d399",
          warning: "#fcd34d",
          error: "#f3576e",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
          "--rounded-btn": "0",
        },
      },
      "cupcake",
    ],
    darkTheme: "dark",
    darkMode: "class",
  },
  theme: {
    extend: {
      backgroundColor: ["selection"],
      textColor: ["selection"],
      width: {
        120: "30rem",
        144: "36rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
