import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F2E9',
        'cream-light': '#FFFDF8',
        'cream-dark': '#E9DFD1',
        charcoal: '#181612',
        'charcoal-light': '#2B2924',
        navy: '#385B6D',
        'navy-muted': '#DCE9ED',
        orange: '#D4691A',
        'orange-muted': '#C4762E',
        warm: '#665F55',
        'warm-light': '#9A9388',
        border: 'rgba(24, 22, 18, 0.08)',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
