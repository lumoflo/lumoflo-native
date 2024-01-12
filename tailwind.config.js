/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240, 11%, 93%)",
        input: "hsl(234, 16%, 87%)",
        ring: "hsl(238, 45%, 72%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(240, 4%, 5%)",
        primary: {
          DEFAULT: "hsl(239, 84%, 67%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(240, 16%, 93%)",
          foreground: "hsl(240, 4%, 5%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(240, 7%, 97%)",
          foreground: "hsl(230, 3%, 40%)",
        },
        accent: {
          DEFAULT: "hsl(240, 7%, 97%)",
          foreground: "hsl(240, 4%, 5%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(240, 4%, 5%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(240, 4%, 5%)",
        },
      },
    },
  },
  plugins: [],
};
