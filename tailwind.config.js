/** @type {import('tailwindcss').Config} */
import tailwindcssForms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [tailwindcssForms]
}
