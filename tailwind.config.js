/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' }, // Start and end at normal size
          '50%': { transform: 'scale(1.2)' },   // Zoom in at 50%
        },
      },
      animation: {
        'zoom': 'zoomInOut 3s ease-in-out infinite', // 3 seconds animation
      },
    },
  },
  plugins: [],
}

