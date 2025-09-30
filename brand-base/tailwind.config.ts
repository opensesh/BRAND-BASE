import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#191919',
          vanilla: '#FFFAEE',
          aperol: '#FE5102',
        },
      },
      fontFamily: {
        display: ['"Neue Haas Grotesk Display Pro"', 'system-ui', 'sans-serif'],
        text: ['"Neue Haas Grotesk Text Pro"', 'system-ui', 'sans-serif'],
        mono: ['Offbit', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        accent: ['Offbit', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config


