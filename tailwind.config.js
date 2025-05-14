/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#F0F0F0",
        tertiary: "#F0EEED",
        textGray: "#00000099"
        
      },
      spacing: {
        // Defining custom spacing values for responsiveness
        'xsm': '0.5rem',    
        'sm': '1rem',       
        'md': '2rem',       
        'lg': '4rem',       
        'xl': '6rem',       
      },
    },
  },
  plugins: [],
};
