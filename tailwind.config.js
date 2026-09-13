/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: '#636B2F',
        sage: '#BAC095',
        chartreuse: '#D4DE95',
        darkOlive: '#3D4127',
        nightOlive: '#14170E',
        deepSurface: '#1C2013',
        surfaceCard: '#252B1A',
        cream: '#F4F6EA',
        borderSage: 'rgba(186, 192, 149, 0.25)',
      },
      fontFamily: {
        hn: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"DM Mono"', '"JetBrains Mono"', 'monospace'],
        display: ['"Bebas Neue"', '"Anton"', '"Impact"', 'sans-serif'],
      },
      boxShadow: {
        'brutal-lime': '4px 4px 0 #D4DE95',
        'brutal-dark': '4px 4px 0 #14170E',
        'brutal-olive': '4px 4px 0 #3D4127',
        'glow-lime': '0 0 30px rgba(212, 222, 149, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(4vh) scale(1.03)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out both',
        'rise-in': 'riseIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) 300ms both',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'line': 'lineGrow 1.1s cubic-bezier(0.76, 0, 0.24, 1) 1200ms both',
        'marquee': 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}
