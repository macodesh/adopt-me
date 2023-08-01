/** @type {import('tailwindcss').Config} */
import tailwindcssForms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [tailwindcssForms]
}
