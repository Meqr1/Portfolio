/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,tsx,ts}'
  ],
  theme: {
    colors: {
      black: "#212121",
      beige: "#DFD0A4",
      green: "#478A67",
      blue: "#00315C",
      white: "#D9D9D9",
    }
  },
  plugins: [],
}

