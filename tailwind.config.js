/** @type {import('tailwindcss').Config} */
export default {
  content: [".index/html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tr: {
          purple: '#9b04b4',
          orange: '#b63200',
          lavender: '#c374c2',
          brown: '#615b36',
          darkbrown: '#322314',
          yellow: '#e4d274',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    }
  },
  plugins: [],
}

