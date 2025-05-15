/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        DynaPuff: ['DynaPuff', 'cursive'],
        Limelight: ['Limelight', 'cursive'],
        JetBrains: ['JetBrains Mono', 'monospace'],
        PermanentMarker: ['Permanent Marker', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-text-stroke')],
};
