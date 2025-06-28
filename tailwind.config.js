/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slideLeft 1s linear infinite',
        'slide-down': 'slideDown 1s linear infinite',
        'slide-right': 'slideRight 1s linear infinite',
        'slide-up': 'slideUp 1s linear infinite',
      },
      keyframes: {
        slideLeft: {
          '0%': { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
        slideDown: {
          '0%': { top: '-100%' },
          '50%, 100%': { top: '100%' },
        },
        slideRight: {
          '0%': { right: '-100%' },
          '50%, 100%': { right: '100%' },
        },
        slideUp: {
          '0%': { bottom: '-100%' },
          '50%, 100%': { bottom: '100%' },
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

