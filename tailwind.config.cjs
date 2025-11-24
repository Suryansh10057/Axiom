/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pulse: {
          bg: 'var(--pulse-card-bg)',
          positive: 'var(--pulse-positive)',
          negative: 'var(--pulse-negative)',
          info: 'var(--pulse-info)',
          accent: 'var(--pulse-accent)'
        }
      },
      borderRadius: {
        pulse: 'var(--pulse-card-radius)'
      },
      boxShadow: {
        'pulse-sm': '0 4px 14px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
}
