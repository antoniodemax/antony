/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#0D0D0D',
        card: '#111111',
        accent: {
          DEFAULT: '#ffd51e',
          light: '#ffe556',
          dark: '#cca600',
        },
        muted: '#A1A1AA',
        border: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        gold: '0 0 40px rgba(255,213,30,0.16)',
        card: '0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        glow: '0 0 80px rgba(255,213,30,0.16)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


