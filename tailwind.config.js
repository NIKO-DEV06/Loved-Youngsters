/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        louize: ["Louize", "sans-serif"],
        "louize-medium": ["Louize-Medium", "sans-serif"],
        "louize-mediumitalic": ["Louize-Medium-Italic", "sans-serif"],
        "louize-Bold": ["Louize-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
