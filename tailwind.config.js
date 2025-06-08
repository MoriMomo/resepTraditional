/** @type {import('tailwindcss').Config} */
export default {
  content: [".index/html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        food: {
          sambal: '#D32F2F',
          turmeric: '#FFB300',
          pandan: '#4CAF50',
          rice: '#F5F5DC',
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