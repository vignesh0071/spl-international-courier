/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spl: {
          navy: {
            DEFAULT: '#071A2B',
            deep: '#071A2B',
            secondary: '#0D2638',
            darker: '#040F1A',
            surface: '#0B2236',
          },
          yellow: {
            DEFAULT: '#FFCC00',
            hover: '#FFCC00',
            light: '#FFCC00',
            tint: '#FFCC00',
          },
          offwhite: '#F8F7F2',
          text: {
            DEFAULT: '#071A2B',
            secondary: '#4A5568',
            muted: '#718096',
          },
          border: {
            DEFAULT: '#E5E7EB',
            subtle: '#F1F3F5',
            dark: '#162C3F',
          }
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Manrope', 'sans-serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'nav': '0 4px 20px -2px rgba(7, 26, 43, 0.05)',
        'modal': '0 24px 48px -12px rgba(7, 26, 43, 0.25)',
      },
      maxWidth: {
        'page': '1440px',
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
