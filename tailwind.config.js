/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'none': 'none',
        'sm': '4px',
        'md': '12px',
        'lg': '24px',
        'xl': '40px',
        '2xl': '64px',
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
    },
  },

  plugins: [],
}