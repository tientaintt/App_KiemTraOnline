/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom': [import('./asset/fonts/PortLligatSlab-Regular.ttf'), 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}

