/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cinema: {
          950: '#07080A',
          900: '#0E1015',
          850: '#141720',
          800: '#1B202B',
          700: '#282F3F',
          gold: '#E5A93C',
          goldLight: '#F3CF7A',
          amber: '#F59E0B',
          crimson: '#D92638',
          silver: '#C5CBD3',
          muted: '#8A94A6'
        }
      },
      fontFamily: {
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'film-grain': "radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0)",
        'gold-gradient': "linear-gradient(135deg, #F3CF7A 0%, #E5A93C 50%, #B87C1E 100%)",
        'dark-gradient': "linear-gradient(180deg, rgba(14, 16, 21, 0.7) 0%, rgba(7, 8, 10, 0.95) 100%)",
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
