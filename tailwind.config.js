/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD700',
        'brand-orange': '#FFA500',
        'brand-black': '#000000',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'brand-gradient-start': '#FFD700',
        'brand-gradient-end': '#FFA500',
      },
    },
  },
  plugins: [],
} 