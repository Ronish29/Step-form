/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        
        "header-logo-375": "120px",
        "header-logo-default": "145px",
        "header-icon-640": "24px",
        
        "homepage-banner-image-375": "280px",
        "homepage-banner-image-640": "350px",
        "homepage-banner-image-default": "450px",
        "homepage-banner-icon-375": "20px",
        "homepage-banner-icon-640": "24px",
        
        "benefits-icon-375": "24px",
        "benefits-icon-640": "40px",
        "benefits-product-375": "60%",
        "benefits-product-640": "60%",
        "benefits-circle-375": "180px",
        "benefits-circle-640": "250px",
        

        "homepage-brands-375": "60px",
        "homepage-brands-640": "80px",
        "homepage-brands-default": "120px",
      },
      height: {
        "benefits-icon-375": "24px",
        "benefits-icon-640": "40px",
        "benefits-circle-375": "180px",
        "benefits-circle-640": "250px",
      },
      inset: {
        "homepage-banner-icon-position-375": "0",
      },
      padding: {
        "homepage-banner-button-padding-375": "0.5rem",
        "homepage-banner-icon-padding-375": "0.5rem",
        "benefits-icon-padding-375": "0.5rem",
        "benefits-icon-padding-640": "2rem",
      },
      fontSize: {
        "homepage-banner-title-375": "20px",
        "homepage-banner-title-640": "26px",
        "homepage-banner-stroke-375": "clamp(2rem, 10vw, 6rem)",
        "homepage-banner-stroke-640": "clamp(3rem, 12vw, 10rem)",
        "homepage-banner-button-375": "12px",
        

        "benefits-title-375": "30px",
        "benefits-title-640": "40px",
        "benefits-heading-375": "18px",
        "benefits-heading-640": "22px",
        "benefits-subtext-375": "12px",
        "benefits-subtext-640": "14px",
      },
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
        helveticaNeue: ['HelveticaNeue', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryBlack: "var(--primary-black)",
        primaryGray: "var(--primary-gray)"
      },
    },
  },
  plugins: [],
};