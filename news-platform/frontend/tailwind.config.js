/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1a56db', dark: '#1e429f' },
        secondary: { DEFAULT: '#6b7280', dark: '#374151' },
      },
    },
  },
  plugins: [],
};
