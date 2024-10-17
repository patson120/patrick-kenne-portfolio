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
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: '#3165ce', // '#ffaf3f', '#3498db',
        secondary: '#2c3e50',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        roboto: ['Roboto'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
