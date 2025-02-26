/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        1: '1px',
        2: '2px',
        3: '3px',
      },
      textStrokeColor: {
        gray: '#d3d3d3',
      },
      fontFamily: {
        bauhaus: ['Bauhaus', 'sans-serif'],
        helveticaNeue : ['HelveticaNeue', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "var(--primary)",
        primaryBlack : "var(--primary-black)",
        primaryGray : "var(----primary-gray)"
      },
    },
  },
  plugins: [],
};
