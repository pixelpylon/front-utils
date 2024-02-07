/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      minHeight: {
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
      },
      minWidth: {
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
      }
    },
  },
  plugins: [],
}

