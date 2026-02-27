import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#E8E2D9',
        'cream-light': '#F0EBE4',
        'cream-dark': '#D6CFBF',
        charcoal: '#1A1A1A',
        'charcoal-light': '#2D2D2D',
        navy: '#0A1E3D',
        'navy-muted': '#1A2E4D',
        orange: '#D4691A',
        'orange-muted': '#C4762E',
        warm: '#6B6560',
        'warm-light': '#9B9590',
        border: 'rgba(26, 26, 26, 0.08)',
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
