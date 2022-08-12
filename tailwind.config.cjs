/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-desktop-bg': "url('/src/assets/Landing-page-images/bg-hero-desktop.svg')",
        'header-mobile-bg':  "url('/src/assets/Landing-page-images/bg-hero-mobile.svg')",
        'single-desktop-bg':  "url('/src/assets/Single-intro-images/bg-desktop.svg')",
        'single-mobile-bg':  "url('/src/assets/Single-intro-images/bg-mobile.svg')",
      },
      colors: {
        'Very-Pale-Cyan': 'hsl(193, 100%, 96%)',
        'Very-Dark-Cyan': 'hsl(192, 100%, 9%)',
        'Grayish-Blue': 'hsl(208, 11%, 55%)',
        'Pink': 'hsl(322, 100%, 66%)',
      },
    },
  },
  plugins: [],
}
